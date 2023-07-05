"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInResolver = void 0;
const utils_1 = require("../utils");
function signInResolver(parent, args, context) {
    if ((args.userName === "admin", args.password === process.env.ADMIN_PASSWORD)) {
        const token = `Bearer ` +
            (0, utils_1.createToken)({
                sub: "1234567890",
                name: args.userName,
                iat: Date.now() / 1000,
                exp: Date.now() / 1000 + 604800,
            });
        return token;
    }
    return "Invalid Username and Password";
}
exports.signInResolver = signInResolver;
