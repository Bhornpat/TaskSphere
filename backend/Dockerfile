# ----------------------------------------
# 1. Use slim Python base image
# ----------------------------------------
FROM python:3.11-slim

# ----------------------------------------
# 2. Set environment variables
# ----------------------------------------
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ----------------------------------------
# 3. Set working directory
# ----------------------------------------
WORKDIR /app

# ----------------------------------------
# 4. Install system dependencies
# ----------------------------------------
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# ----------------------------------------
# 5. Install Python dependencies
# ----------------------------------------
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ----------------------------------------
# 6. Copy app code
# ----------------------------------------
COPY . .

# ----------------------------------------
# 7. Run Alembic migrations
# ----------------------------------------
# CMD alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000

