import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";
import { PORT, FRONTEND_URL } from "./config/keys";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: "Too many requests, please try again later.",
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(limiter);

app.use("/api", router);

const port = PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
