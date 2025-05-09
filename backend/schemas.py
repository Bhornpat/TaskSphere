from pydantic import BaseModel, EmailStr
from datetime import datetime


class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime

class TaskCreate(BaseModel):
    title: str
    description: str
    due_date: datetime

    model_config = {
    "from_attributes": True
}


