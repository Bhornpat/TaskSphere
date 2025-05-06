# TaskSphere – Backend API

TaskSphere is a task management system built with FastAPI and PostgreSQL.
This backend provides secure user registration, authentication via JWT, and task CRUD APIs.

---

## 🚀 Tech Stack

- **FastAPI** – Web framework
- **PostgreSQL** – Database
- **SQLAlchemy** – ORM
- **Alembic** – Database migrations
- **JWT** – Auth
- **dotenv** – Environment config

---

## 📦 Setup & Run

```bash
# Clone project
git clone https://github.com/your-username/TaskSphere.git
cd TaskSphere/backend

# Setup virtualenv
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run FastAPI
uvicorn main:app --reload
