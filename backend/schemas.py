from pydantic import BaseModel, EmailStr, constr, validator
from datetime import datetime

class LoginRequest(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class UserCreate(BaseModel):
    email: EmailStr
    password: constr(max_length=20)

    @validator('email')
    def normalize_email(cls, v):
        return v.lower()  # normalize before saving

class UserOut(BaseModel):
    id: int
    email: EmailStr
    created_at: datetime
    
    @validator('email')
    def normalize_email(cls, v):
        return v.lower()  # normalize before saving


class TaskCreate(BaseModel):
    title: str
    description: str
    due_date: datetime
    status: str = "pending"

class TaskOut(BaseModel):
    id: int
    title: str
    description: str
    status: str
    due_date: datetime
    user_id: int

    model_config = {
        "from_attributes": True
    }