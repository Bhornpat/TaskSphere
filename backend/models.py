from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Task(Base):
     __tablename__ = "tasks"

     id = Column(Integer, primary_key=True, index=True)
     title = Column(String, nullable=False)
     description = Column(String)
     status = Column(String, default="pending")  # or "done"
     due_date = Column(DateTime)     
     user_id = Column(Integer, ForeignKey("users.id"))

     user = relationship("User", back_populates="tasks")

User.tasks = relationship("Task", back_populates="user", cascade="all, delete-orphan")


