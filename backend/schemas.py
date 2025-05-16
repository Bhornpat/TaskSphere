from pydantic import BaseModel, EmailStr
from datetime import datetime


class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime


# Input when creating a task
class TaskCreate(BaseModel):
    title: str
    description: str
    due_date: datetime
    status: str = "pending"   #for save task edit

# Output when returning to frontend
class TaskOut(BaseModel):
    id: int
    title: str
    description: str
    status: str
    due_date: datetime

    model_config = {
    "from_attributes": True
}


