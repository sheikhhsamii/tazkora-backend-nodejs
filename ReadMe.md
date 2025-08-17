# Tazkora - Task Manager

Tazkora is a modern, role-based Task Manager application designed to help users **organize, prioritize, and track tasks efficiently**. It supports **user authentication, role-based access, task CRUD operations, filtering, sorting, pagination, and reporting**.

---

## 🏗️ Features

### User & Authentication
- User registration and login with JWT authentication
- Role-based access (Admin vs User)
- Profile management (update avatar, cover image, and details)
- Password change and token refresh
- Logout functionality

### Task Management
- Create, read, update, delete tasks
- Tasks include: `title`, `description`, `dueDate`, `status` (pending/done), `priority` (low/medium/high)
- Filtering by status, priority, due date, title, and description
- Sorting by creation date or priority
- Pagination for task lists
- Batch mark multiple tasks as done (optional)
- Activity logs (track creation, updates, deletion)

### Reporting
- Count tasks by status
- Upcoming tasks due within a specified period
- Tasks grouped by priority
- Admin-only reports for all tasks

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT
- **Validation:** Zod or Joi
- **Environment:** dotenv for environment variables

---

## 📂 API Endpoints

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /register | Register a new user |
| POST   | /login | Login user |
| PATCH  | /change-password | Change current password |
| PATCH  | /update-avatar | Update profile avatar |
| PATCH  | /update-cover-image | Update profile cover image |
| GET    | /current-user | Get logged-in user details |
| PATCH  | /user-details | Update user details |
| POST   | /refresh-token | Refresh access token |
| POST   | /logout | Logout user |

### Task
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /tasks/create | Create a new task |
| GET    | /tasks/all | Get all tasks (with filters, sorting, pagination) |
| GET    | /tasks/:id | Get a single task by ID |
| PATCH  | /tasks/:id | Update task by ID |
| DELETE | /tasks/:id | Delete task by ID |
| PATCH  | /tasks/mark-done | Batch mark tasks as done |

### Report
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /report/status-count | Count tasks by status |
| GET    | /report/upcoming | Get upcoming tasks (e.g., next 7 days) |
| GET    | /report/by-priority | Tasks grouped by priority |
| GET    | /report/all-tasks | Admin-only: overview of all tasks |

### Activity
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /logs | Activity logs: task creation, updates, deletion |

---

## ⚡ Features in Progress / Optional
- Advanced activity logs
- Soft delete tasks
- Advanced reporting with custom date ranges


