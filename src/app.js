"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var products_router_1 = __importDefault(require("./routes/products.router"));
var user_router_1 = __importDefault(require("./routes/user.router"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', products_router_1.default);
app.use('/users', user_router_1.default);
exports.default = app;
