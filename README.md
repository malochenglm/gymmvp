# Gym Management Microservices

A containerized microservices MVP for gym management, inspired by real operational challenges observed while working in a gym and built to explore modern backend architecture with Docker, PostgreSQL and Node.js.

This project originates from operational issues observed while working in a gym. The management software used by the company showed several limitations in terms of flexibility and workflow management.

To explore a more scalable and modern architecture, I started building a containerized microservices MVP designed to handle core gym operations such as user management and future membership management.

## Architecture

Client  
↓  
User Service (Node.js / Express)  
↓  
PostgreSQL (Docker container)

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- bcrypt
- Docker
- Docker Compose

## Running the Project

Start the services:

docker compose up --build

Stop the services:

docker compose down

## API Endpoints

Health Check

GET /health

Create User

POST /api/users

Body:

{
  "email": "test@test.com",
  "name": "Test",
  "password": "123456"
}

Login

POST /api/auth/login

Body:

{
  "email": "test@test.com",
  "password": "123456"
}

Response:

{
  "token": "JWT_TOKEN"
}

Access Protected Route

GET /api/users

Header:

Authorization: Bearer JWT_TOKEN

## Example Requests

Create user:

curl -X POST http://localhost:3001/api/users \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","name":"Test","password":"123456"}'

Login:

curl -X POST http://localhost:3001/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'

Health check:

curl http://localhost:3001/health

## Next Steps

- Add API Gateway
- Add membership-service
- Implement CI/CD with GitHub Actions
- Deploy containers to cloud infrastructure