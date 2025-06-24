from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from sqlalchemy import text
from utils.logger import logger

router = APIRouter()

@router.get("/health")
def healthcheck(db: Session = Depends(get_db)):
    try:
        logger.info("📡 Healthcheck ping received")
        db.execute(text("SELECT 1"))
        return {"status": "ok", "database": "connected"}
    except Exception as e:
        logger.error(f"❌ Healthcheck DB failure: {str(e)}")
        return {"status": "error", "database": "disconnected", "detail": str(e)}
