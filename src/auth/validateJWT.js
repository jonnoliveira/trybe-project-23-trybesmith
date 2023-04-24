"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secretkey = 'process.env.JWT_SECRET';
var configJWT = {
    expiresIn: '10d',
    algorithm: 'HS256',
};
var generateToken = function (payload) {
    var token = jsonwebtoken_1.default.sign({ payload: payload }, secretkey, configJWT);
    return token;
};
exports.generateToken = generateToken;
var validateToken = function (token) {
    if (!token)
        return { message: 'Token not found' };
    var isValid = jsonwebtoken_1.default.verify(token, secretkey);
    return isValid;
};
exports.validateToken = validateToken;
