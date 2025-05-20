# test_db_connection.py
import os

from sqlalchemy import create_engine, text
from dotenv import load_dotenv


# Load the .env file
load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")

# Create engine
engine = create_engine(DATABASE_URL)

try:
    # Try to connect
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        print("[✅] Database connected successfully:", result.scalar())
except Exception as e:
    print("[❌] Database connection failed:")
    print(e)

