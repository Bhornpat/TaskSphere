from sqlalchemy.orm import Session
from database import engine
from models import Task, User  # adjust import to your model names

print("⚠ Clearing data...")

with Session(engine) as session:
    # Clear tasks first (depends on users via foreign key)
    session.query(Task).delete()
    session.query(User).delete()
    session.commit()

print(" Data wiped successfully!")
