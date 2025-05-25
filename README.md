# 🚀 TaskSphere – Fullstack Task Management App

TaskSphere is a modern full-stack task management application built for real-world deployment. It combines a FastAPI backend, a Next.js frontend, PostgreSQL, CI/CD pipelines, logging, JWT authentication, and full Docker support. Built with performance and developer experience in mind.

---

## Tech Stack                              
                              
Frontend - Next.js, TypeScript, TailwindCSS   
Backend - FastAPI, SQLAlchemy, Uvicorn      
Database - PostgreSQL                         
Auth - JWT (JSON Web Token)               
ORM - SQLAlchemy + Alembic               
DevOps - Docker             
CI/CD	- GitHub Actions	                  
GUI Tool - DBeaver                            
Monitoring  - `/health` endpoint, logging to file  
Hosting - Backend: ngrok • Frontend: Vercel  

---

## 🚧 Setup & Installation

Clone the Repo

```
git clone https://github.com/YOUR_USERNAME/TaskSphere.git
cd TaskSphere
```
---

🔹 Backend Setup

#Create and activate a virtualenv
```
cd backend
python -m venv venv
source venv/bin/activate 
```
#Install dependencies
```
pip install -r requirements.txt
```

#Set environment variables in .env
```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/tasksphere
SECRET_KEY=your-secret-key
```
### 🛠 Alembic Migrations
# Create a new migration
```
alembic revision --autogenerate -m "Add new fields to Task model"
```
#Initialize the DB, Apply all migrations
```
alembic upgrade head
```
#Run the FastAPI server
```
uvicorn main:app --reload
```

🔹 Frontend Setup

#npm Installation, Start development server
```
cd frontend
npm install
npm run dev
```

---

#Docker + Docker Compose
```
docker-compose up --build
Backend: http://localhost:8000
Frontend: http://localhost:3000
DB: running inside container on port 5432
```
---

# Auth Flow

- Register via /register

- Login via /login with application/x-www-form-urlencoded

- Store JWT token in frontend localStorage

- Use Authorization: Bearer <token> to access protected /tasks APIs

---

📌 Features Implemented

- backend
| Step | Description                                       |
| ---- | ------------------------------------------------- |
| 1    | Create GitHub Repo called TaskSphere              |
| 2    | Create Python project folder `backend/`           |
| 3    | Virtualenv + `requirements.txt` (FastAPI, etc.)   |
| 4    | Basic FastAPI "Hello World" app                   |
| 5    | Use `.env` for configs like `DATABASE_URL`        |
| 6    | SQLAlchemy DB connection                          |
| 7    | User model (id, email, hashed\_password, created) |
| 8    | Task model (title, status, due\_date, etc.)       |
| 9    | Alembic migrations for version control            |
| 10   | `/register` API to create users                   |
| 11   | `/login` API with JWT token issuing               |
| 12   | `/tasks` POST: Create tasks                       |
| 13   | `/tasks` GET: List user’s tasks                   |
| 14   | Error handling (400, 404, 500)                    |

- frontend
| Step | Description                                       |
| ---- | ------------------------------------------------- |
| 1    | Next.js app inside `frontend/`                    |
| 2    | TailwindCSS configured for styling                |
| 3    | Page routing: `/login`, `/register`, `/dashboard` |
| 4    | Reusable layout + navbar                          |
| 5    | Login form with email/password                    |
| 6    | Register form with validation                     |
| 7    | JWT token stored in `localStorage`                |
| 8    | Dashboard lists tasks from backend                |
| 9    | Fetch tasks with JWT auth                         |
| 10   | Modal UI for "New Task"                           |
| 11   | Modal UI for "Edit Task"                          |
| 12   | Button to Edit and delete task                    |
| 13   | Status toggler (Pending | Done)                   |
| 14   | API error alerts displayed on UI                  |

- Docker + DevOps
| Step | Description                                      |
| ---- | ------------------------------------------------ |
| 1    | Dockerfile for backend                           |
| 2    | Dockerfile for frontend                          |
| 3    | `docker-compose.yml` for backend + frontend + db |
| 4    | GitHub Action: backend build/test CI             |
| 5    | GitHub Action: frontend build/test CI            |
| 6    | Deployed backend to ngrok                        |
| 7    | Deployed frontend to Vercel                      |
| 8    | `/health` endpoint to monitor uptime             |
| 9    | Logging system with `logs/backend.log`           |


---

🧪 Testing
#To run backend unit tests
```
cd backend
pytest tests/
```

---

📄 License
MIT © 2025 — Open-source and forever free.
