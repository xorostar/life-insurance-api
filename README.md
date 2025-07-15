# Life Insurance Recommendation MVP – Backend

A modern backend API that provides personalized life insurance recommendations based on user profile data. Built with Node.js, Express, TypeScript, Prisma, and PostgreSQL.

---

## Features

- **User Registration & Login**: Secure authentication using JWT and password hashing (bcrypt).
- **Personalized Recommendations**: Returns tailored life insurance suggestions based on age, income, dependents, and risk tolerance.
- **API Security**: Protected endpoints using JWT authentication and rate limiting.
- **Validation**: Robust input validation using Zod.
- **Extensible Logic**: Rules-based recommendation engine, easily swappable for ML in the future.
- **Data Storage**: All user submissions and recommendations are stored in PostgreSQL via Prisma ORM.
- **CORS**: Configured to allow only specific frontend hosts.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-backend-repo-url>
   cd life-insurance-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` and fill in the required values (e.g., `DATABASE_URL`, `JWT_SECRET`, `PORT`, `FRONTEND_URL`).

4. **Set up the database:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

6. **API will be available at:**  
   [http://localhost:3001/api](http://localhost:3001/api) (or your configured port)

---

## Project Structure

```
src/
  controllers/         # Route controllers (user, recommendation)
  routes/              # Express route definitions and aggregator
  services/            # Business logic (user, recommendation)
  validations/         # Zod schemas for input validation
  middleware/          # Express middleware (auth, rate limiting)
  config/              # Configuration (env, keys)
  index.ts             # App entrypoint
prisma/
  schema.prisma        # Prisma schema
```

---

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---

## API Endpoints

### `POST /api/user/register`

Register a new user.  
**Body:**

```json
{
  "name": "example",
  "email": "example@example.com",
  "password": "Example1122@"
}
```

### `POST /api/user/login`

Login and receive a JWT token.  
**Body:**

```json
{
  "email": "example@example.com",
  "password": "Example1122@"
}
```

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

---

## Database Schema

- **User:** Stores user info and hashed password.
- **Recommendation:** Stores each recommendation submission, linked to the user.

---

## Usage

1. **Register** a new user via `/api/user/register`.
2. **Login** via `/api/user/login` to receive a JWT token.
3. **Submit profile data** to `/api/recommendation` (with JWT) to receive a personalized recommendation.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [Express Documentation](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
