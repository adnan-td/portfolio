import { sign, verify } from "jsonwebtoken";

export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function response(success: boolean, message: string) {
  return {
    success: success,
    message: message,
  };
}

export function isValidPassword(password: string): boolean {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return process.env.NODE_ENV === "production" ? regex.test(password) : true;
}

export const createToken = (data: any) => {
  const accessToken = sign(data, process.env.NEO4J_SECRET || "");
  return accessToken;
};

export const verifyToken = (auth: string) => {
  try {
    const user = verify(auth, process.env.NEO4J_SECRET || "");
    return user;
  } catch {
    return null;
  }
};
