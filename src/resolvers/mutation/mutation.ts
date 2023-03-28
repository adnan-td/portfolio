import { createToken } from "../utils";

export function signInResolver(parent: any, args: any, context: any) {
  if ((args.userName === "admin", args.password === process.env.ADMIN_PASSWORD)) {
    const token =
      `Bearer ` +
      createToken({
        sub: "1234567890",
        name: args.userName,
        iat: Date.now() / 1000,
        exp: Date.now() / 1000 + 604800,
      });
    return token;
  }
  return "Invalid Username and Password";
}
