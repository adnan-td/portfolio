"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = exports.isValidPassword = exports.response = exports.isValidEmail = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
exports.isValidEmail = isValidEmail;
function response(success, message) {
    return {
        success: success,
        message: message,
    };
}
exports.response = response;
function isValidPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return process.env.NODE_ENV === "production" ? regex.test(password) : true;
}
exports.isValidPassword = isValidPassword;
const createToken = (data) => {
    const accessToken = (0, jsonwebtoken_1.sign)(data, process.env.NEO4J_SECRET || "");
    return accessToken;
};
exports.createToken = createToken;
const verifyToken = (auth) => {
    try {
        const user = (0, jsonwebtoken_1.verify)(auth, process.env.NEO4J_SECRET || "");
        return user;
    }
    catch (_a) {
        return null;
    }
};
exports.verifyToken = verifyToken;
