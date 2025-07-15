import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/user.service";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validations/user.validation";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const userData = registerUserSchema.parse(req.body);
    const user = await registerUser(userData);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const loginData = loginUserSchema.parse(req.body);
    const user = await loginUser(loginData);
    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
