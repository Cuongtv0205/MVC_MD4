"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
class ProductController {
    constructor() {
        this.getAllProduct = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            res.render('product/create');
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.formEditProduct = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                res.render('product/edit', {
                    product: product
                });
            }
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.fromDeleteProduct = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                res.render('product/delete', {
                    product: product
                });
            }
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.formSearchP = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                res.render('product/showFindList', {
                    product: product
                });
            }
        };
        this.searchP = async (req, res) => {
            await this.productService.findProduct(req, res);
        };
        this.productService = new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map