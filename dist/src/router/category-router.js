"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../controller/category-controller"));
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/products', category_controller_1.default.getAllCategory);
//# sourceMappingURL=category-router.js.map