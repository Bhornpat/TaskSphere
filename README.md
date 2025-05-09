# TaskSphere – Backend API

TaskSphere is a task management system built with FastAPI and PostgreSQL.
This backend provides secure user registration, authentication via JWT, and task CRUD APIs.

------

## 🚀 Tech Stack

- **FastAPI** 
- **PostgreSQL** (via Docker)
- **SQLAlchemy** + **Alembic**
- **Passlip** (password hashing)
- **JWT** (Auth)
- **dotenv** (.env config)

------

## 📦 Setup & Run

```bash
# Clone project
git clone https://github.com/Bhornpat/TaskSphere.git
cd TaskSphere/backend

# Setup virtualenv
python -m venv .venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI
uvicorn main:app --reload
