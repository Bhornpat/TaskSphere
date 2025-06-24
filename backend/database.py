from sqlalchemy import create_engine, event # <-- ADD 'event' import here
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv
import os

from sqlalchemy.orm import Session # Keep if Session is used elsewhere, otherwise remove if only SessionLocal is used

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Load .env file
load_dotenv()

use_docker = os.getenv("DOCKER") == "1"

# This block is likely overridden by the next line, but if you intend to use it,
# ensure these URLs are also correct for local Docker/non-Docker setups.
# For Neon, the DATABASE_URL from .env will be preferred.
# DATABASE_URL_LOCAL_OR_DOCKER = (
#     "postgresql://myuser:mypass@db:5432/TaskSphere"
#     if use_docker
#     else "postgresql://myuser:mypass@localhost:5432/TaskSphere"
# )

# Get the database url from the environment
# This will pick up the DATABASE_URL from your .env or system environment
DATABASE_URL = os.getenv("DATABASE_URL")

# Create SQLAlchemy engine and session
engine = create_engine(DATABASE_URL, echo=False)

# --- ADD THIS EVENT LISTENER BLOCK ---
@event.listens_for(engine, "connect")
def set_default_schema(dbapi_connection, connection_record):
    """
    Set the default search path for new connections to 'public'.
    This is necessary for Neon's pooler, which doesn't support
    'search_path' in the connection URL's options.
    """
    cursor = dbapi_connection.cursor()
    cursor.execute("SET search_path TO public;")
    cursor.close()
# ------------------------------------

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()
