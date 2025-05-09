# test_db_connection.py

from sqlalchemy import create_engine
from dotenv import load_dotenv
import os

# Load the .env file
load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL")

# Create engine
engine = create_engine(DATABASE_URL)

try:
    # Try to connect
    with engine.connect() as connection:
        result = connection.execute("SELECT 1")
        print("[✅] Database connected successfully:", result.scalar())
except Exception as e:
    print("[❌] Database connection failed:")
    print(e)

