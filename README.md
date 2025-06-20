# 🚀 Task Manager Frontend


A sleek, scalable Task Management application built with **Next.js 14** (App Router) and **React.js**, designed to connect seamlessly with a **Node.js**/**Express**/**PostgreSQL** backend.

## 🌐 Live Demo

    🧪 https://taskmanagery.netlify.app


## ⚙️ Tech Stack


### Frontend (Next.js 14)

- **Next.js (App Router)** – Routing, SSR/SSG

- **React.js** – Component architecture

- **Custom CSS**  – Styling

- **Fetch** – API calls

- **.env** – Environment variables

---

## 🔍 Project Structure

 src/
 ├── app/
 │   ├── add/       
 │   ├── edit/[id]/       
 │   ├── Home/       
 │   └── components/             
 ├── public/
 └── styles/

---

### 🚀 Setup Instructions

1. **Clone the Repository**

  ```bash
  git clone https://github.com/your-username/task-manager-frontend.git


2. **Install dependencies**

    ```bash
    npm install


3. **Configure environment**

    Create .env:

    API_BASE_URL=https://task-manager-backend-e6vm.onrender.com/tasks


4. **Run locally**: 

    npm run dev
    Access: http://localhost:3000


  
## 🧩 Pages Overview

    |   Path     |      Description        |
    |   ----     |   -----------------     |
    | /          |   Dashboard (task list) |
    | /add       |   Add new task          |
    | /edit/[id] |   Edit existing task    |

### Frontend (/frontend/package.json)

    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
    }