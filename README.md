# Life Insurance Recommendation MVP – Backend

A backend API for a life insurance recommendation engine.

## What is this codebase?

This is a Node.js/Express/TypeScript backend for a life insurance recommendation MVP. It provides:

- **User Registration & Login** with JWT authentication and password hashing (bcrypt).
- **Protected Recommendation Endpoint** that accepts user profile data (age, income, dependents, risk tolerance) and returns a personalized life insurance recommendation based on rules-based logic.
- **Validation** of all inputs using Zod schemas.
- **Storage** of all user submissions and recommendations in PostgreSQL via Prisma ORM.
- **Extensible** logic: The recommendation engine is rules-based but can be swapped for ML in the future. All user submissions are stored for analytics and ML training.

## API Endpoints

### `POST /api/user/register`

Register a new user.  
**Body:** `{ "name": "example", "email": "example@example.com", "password": "Example1122@" }`

### `POST /api/user/login`

Login and receive a JWT token.  
**Body:** `{ "email": "example@example.com", "password": "Example1122@" }`

### `POST /api/recommendation`

Get a personalized recommendation (protected route).  
**Headers:** `Authorization: Bearer <token>`  
**Body:**

```json
{
  "age": 35,
  "income": 80000,
  "dependents": 2,
  "risk": "high"
}
```

## Database Schema

- **User:** Stores user info and hashed password.
- **Recommendation:** Stores each recommendation submission, linked to the user.
