# Tasksphere — Frontend (Next.js + TailwindCSS)

This frontend is built using **Next.js** (App Router), **TailwindCSS**, and **TypeScript**, and connects to a FastAPI backend via REST APIs with JWT authentication.

---

## Features

- User authentication (JWT-based login/register)
- Dashboard showing tasks with status
- Add, edit, and delete tasks
- Toggle status between **Pending ⏳** and **Done 🎉**
- Expand/collapse long task descriptions
- Responsive UI with TailwindCSS
- Modal for task creation and editing
- See real-time UI updates with clean API error handling

---

## Frontend Implementation Summary

### 1. Create `frontend/` with Next.js

```bash
npx create-next-app@latest frontend --typescript --app

### 2. Install TailwindCSS

```bash
cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

---

### Run the App

```bash
npm install
npm run dev

Then visit:
🔗 http://localhost:3000/login


