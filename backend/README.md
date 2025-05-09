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

------

### Configure `.env`

```env
DATABASE_URL=postgresql://myuser:mypass@localhost:5432/tasksphere
SECRET_KEY=supersecretkey123
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Apply Alembic Migrations

```bash
alembic upgrade head
```

### Start the FastAPI Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

## 🔐 Auth Flow

### `/register` – Create account

- Method: POST
- Body (JSON):
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### `/login` – Get access token

- Method: POST
- Body (x-www-form-urlencoded or JSON):
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

Returns:
```json
{
  "access_token": "JWT_TOKEN",
  "token_type": "bearer"
}
```

---

## 📋 Task Endpoints (Auth Required)

### `POST /tasks`

- Headers: `Authorization: Bearer <token>`
- Body (JSON):
```json
{
  "title": "New Task",
  "description": "Details",
  "due_date": "2025-05-10T12:00:00"
}
```

### `GET /tasks`

- Returns all tasks owned by the authenticated user.

---

## ⚠️ Error Handling

- `400`: Validation or bad input
- `401`: Unauthorized (wrong login or token)
- `404`: Resource not found (e.g., user)
- `500`: Internal server error

---

## Test Connection (Optional Script)

Run this to check DB connection:
```bash
python test_db_connection.py
```

