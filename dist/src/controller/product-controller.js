"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
class ProductController {
    constructor() {
        this.getAllProduct = async (req, res) => {
            let products = this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map