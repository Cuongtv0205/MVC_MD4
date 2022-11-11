"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_router_1 = require("./product-router");
const category_router_1 = require("./category-router");
exports.router = (0, express_1.Router)();
exports.router.use('', product_router_1.routerProduct);
exports.router.use('', category_router_1.categoryRouter);
//# sourceMappingURL=router.js.map