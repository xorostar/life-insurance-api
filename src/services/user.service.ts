import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import {
  LoginUserInput,
  RegisterUserInput,
} from "../validations/user.validation";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/keys";

const prisma = new PrismaClient();

export const registerUser = async (userData: RegisterUserInput) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: userData.email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const loginUser = async (loginData: LoginUserInput) => {
  const user = await prisma.user.findUnique({
    where: { email: loginData.email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(
    loginData.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "24h",
  });

  const { password, ...userWithoutPassword } = user;
  return { ...userWithoutPassword, token };
};
