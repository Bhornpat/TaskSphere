## 🚀 TaskSphere – Full-Stack Task Management Web App

full-stack task management web app built for real-world deployment. It combines a FastAPI backend, a Next.js frontend, PostgreSQL, CI/CD pipelines, logging, JWT authentication, and full Docker support. Frontend deploy in Vercel, backend deploy in Railway, and Database deploy in Neon

----

### Tech Stack                              
                              
Frontend - Next.js, TypeScript, TailwindCSS   
Backend - FastAPI, SQLAlchemy, Uvicorn      
Database - PostgreSQL                         
Auth - JWT (JSON Web Token)               
ORM - SQLAlchemy + Alembic               
Container - Docker             
CI/CD	- GitHub Actions	                  
GUI Tool - DBeaver                            
Monitoring  - `/health` endpoint, logging to file  
Hosting - Backend: Railway • Frontend: Vercel • DB: Neon

---

## Setup & Installation

Clone the Repo

```
git clone https://github.com/Bhornpat/TaskSphere.git
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

# Auth Flow

- Sign up via /register
- Sign in via /login with application/x-www-form-urlencoded
- Store JWT token in frontend localStorage
- Use Authorization: Bearer <token> to access protected /tasks APIs

---

🧪 Testing
#To run backend unit tests
```
cd backend
pytest tests/
```
---

Logging

![logging](screenshot/Screenshot2.png)

