"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_controller_1 = __importDefault(require("../controllers/products.controller"));
var productsRouter = (0, express_1.Router)();
productsRouter.post('/', products_controller_1.default.insert);
productsRouter.get('/', products_controller_1.default.getAll);
exports.default = productsRouter;
