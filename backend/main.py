from fastapi import FastAPI 
from fastapi.security import OAuth2PasswordRequestForm 
from utils.security import pwd_context
import auth
from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import SessionLocal, Base, engine
import models, schemas, utils

from fastapi import Body
from schemas import TaskCreate
from schemas import TaskOut
from models import Task, User
from typing import List
from healthcheck import router as health_router
from utils.logger import logger

from fastapi.responses import JSONResponse
from fastapi.requests import Request
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException


app = FastAPI()

# @app.get("/")
# def read_root():
#     return {"message":"I'm watching YOU!"}


# DB dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Only allow from your frontend, or use "*" during dev
origins = [
    "https://tasksphere-flame.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://vmserver:3000",
    "http://192.168.137.196:3000",
]

Base.metadata.create_all(bind=engine)
print("✅ Done")


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],  # or set to ["http://localhost:3000"] for safety
    allow_methods=["*"],  # or ["POST", "GET"]
    allow_headers=["*"],
)


@app.on_event("startup")
async def on_startup():
    logger.info("🚀 TaskSphere API starting up...")

@app.on_event("shutdown")
async def on_shutdown():
    logger.info("🛑 TaskSphere API shutting down...")

app.include_router(health_router)


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()

    print("username (from form):", form_data.username)
    print("password (from form):", form_data.password)

    if not user:
        print("🚨 User not found!")
        raise HTTPException(status_code=401, detail="Invalid credentials")

    print("✅ Found user:", user.email)
    print("🔐 Hashed password in DB:", user.hashed_password)

    if not pwd_context.verify(form_data.password, user.hashed_password):
        print("*Password mismatch!")
        raise HTTPException(status_code=401, detail="Invalid credentials")

        print("Password verified!")

    access_token = auth.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/register", response_model=schemas.UserOut)
def register(user_data: schemas.UserCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    existing_user = db.query(models.User).filter(models.User.email == user_data.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail=f"Email {user_data.email} already exists.")

    # Hash password
    hashed_pw = utils.hash_password(user_data.password)
    
    # Create user model
    new_user = models.User(
        email=user_data.email,
        hashed_password=hashed_pw
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    print(user_data.dict())
    return new_user

#Used response_model=TaskOut in FastAPI to define task.id
@app.post("/tasks", response_model=schemas.TaskOut)
def create_task(
    task: schemas.TaskCreate,
    db: Session = Depends(get_db),
    email: str = Depends(auth.verify_token)
):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")


    new_task = Task(
        title=task.title,
        description=task.description,
        due_date=task.due_date,
        user_id=user.id
    )

    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

#TaskCreate is for input , TaskOut is for response
@app.get("/tasks", response_model=list[schemas.TaskOut])
def get_tasks(
    db: Session = Depends(get_db),
    email: str = Depends(auth.verify_token)
):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return db.query(Task).filter(Task.user_id == user.id).all()


# backend CI
@app.get("/health")
def healthcheck():
    return {"status": "ok"}




@app.put("/tasks/{task_id}", response_model=TaskOut)
def update_task(
    task_id: int,
    updated_task: TaskCreate,
    db: Session = Depends(get_db),
    email: str = Depends(auth.verify_token)
):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    # Update fields
    task.title = updated_task.title
    task.description = updated_task.description
    task.due_date = updated_task.due_date
    task.status = updated_task.status

    db.commit()
    db.refresh(task)
    return task


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db), email: str = Depends(auth.verify_token)):
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    db.delete(task)
    db.commit()
    return {"detail": "Task deleted"}



@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.detail, "code": exc.status_code},
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return JSONResponse(
        status_code=400,
        content={"error": "Bad Request", "details": exc.errors()},
    )

@app.exception_handler(Exception)
async def internal_server_error_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"error": "Internal Server Error", "details": str(exc)},
    )
