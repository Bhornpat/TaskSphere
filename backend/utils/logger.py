import os
import logging

# Ensure 'logs/' directory exists
os.makedirs("logs", exist_ok=True)

# Configure the logger
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    handlers=[
        logging.FileHandler("logs/backend.log"),  # Log to file
        logging.StreamHandler()  # Log to terminal
    ]
)

logger = logging.getLogger("TaskSphere")

