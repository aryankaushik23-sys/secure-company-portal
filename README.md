# Secure Company Portal

A full-stack enterprise portal with role-based access control (RBAC) using Keycloak, Node.js, and React.

## Features
- SSO Authentication via Keycloak (OAuth2 / OpenID Connect)
- JWT token validation on every API request
- Role-based access: Employee → Manager → Admin
- Department dashboards: HR, Finance, IT, Security
- Unauthorized users get 403 Access Denied
- Dockerized setup with PostgreSQL

## Tech Stack
| Layer | Technology |
|---|---|
| Auth | Keycloak 23, OAuth2, OpenID Connect, JWT |
| Backend | Node.js, Express.js |
| Frontend | React.js, react-keycloak/web |
| Database | PostgreSQL 15 |
| DevOps | Docker, Docker Compose |
| Version Control | Git, GitHub |

## Architecture
User → Keycloak Login → JWT Token
↓
React Frontend (role-based UI)
↓
Node.js API (JWT validation + RBAC)
↓
Department Data (HR / Finance / IT / Security)

## Roles & Permissions
| Role | HR | Finance | IT | Security |
|---|---|---|---|---|
| Employee | ✅ | ❌ | ✅ | ❌ |
| Manager | ✅ | ✅ | ✅ | ❌ |
| Admin | ✅ | ✅ | ✅ | ✅ |

## Setup & Run

### Prerequisites
- Docker Desktop
- Node.js
- Git

### Steps
```bash
# 1. Clone the repo
git clone https://github.com/aryankaushik23-sys/secure-company-portal.git
cd secure-company-portal

# 2. Start Keycloak + PostgreSQL
docker-compose up -d

# 3. Start Backend
cd backend
npm install
node index.js

# 4. Start Frontend
cd ../frontend
npm install
npm start
```

### Default Test Users
| Username | Password | Role |
|---|---|---|
| emp_user | Test@1234 | Employee |
| manager_user | Test@1234 | Manager |
| admin_user | Test@1234 | Admin |


## Project Structure
```
secure-company-portal/
├── frontend/                  # React application
│   └── src/
│       ├── auth/
│       │   └── keycloak.js    # Keycloak configuration
│       ├── components/
│       │   ├── Navbar.jsx     # Navigation with login/logout
│       │   └── ProtectedRoute.jsx  # Role guard component
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── HRDashboard.jsx
│       │   ├── FinanceDashboard.jsx
│       │   ├── ITDashboard.jsx
│       │   ├── SecurityDashboard.jsx
│       │   └── AccessDenied.jsx
│       ├── App.js
│       └── index.js
├── backend/                   # Node.js Express API
│   ├── middleware/
│   │   ├── auth.js            # JWT validation
│   │   └── rbac.js            # Role based access control
│   ├── routes/
│   │   ├── hr.js
│   │   ├── finance.js
│   │   ├── it.js
│   │   └── security.js
│   ├── index.js               # Express server entry point
│   └── .env                   # Environment variables
├── keycloak/
│   └── README.md              # Realm setup instructions
├── docker-compose.yml         # Docker services config
└── README.md
```