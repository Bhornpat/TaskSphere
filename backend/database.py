from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os

from sqlalchemy.orm import Session

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# Load .env file
load_dotenv()

use_docker = os.getenv("DOCKER") == "1"

DATABASE_URL = (
    "postgresql://myuser:mypass@db:5432/TaskSphere"
    if use_docker
    else "postgresql://myuser:mypass@localhost:5432/TaskSphere"
)


# Get the database URL from the environment
DATABASE_URL = os.getenv("DATABASE_URL")

# Create SQLAlchemy engine and session
engine = create_engine(DATABASE_URL, echo=False)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()

