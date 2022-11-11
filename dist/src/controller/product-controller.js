"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAllProduct = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            let category = await this.categoryService.findAllC(req, res);
            res.render('product/create', {
                listCategory: category
            });
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.formEditProduct = async (req, res) => {
            let id = +req.params.id;
            console.log(id);
            if (!isNaN(id)) {
                let category = await this.categoryService.findAllC(req, res);
                let product = await this.productService.findById(req, res);
                console.log(product);
                res.render('product/edit', {
                    listProduct: product, listCategory: category
                });
            }
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.fromDeleteProduct = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                let category = await this.categoryService.findAllC(req, res);
                res.render('product/delete', {
                    product: product, listProduct: category
                });
            }
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.formSearchP = async (req, res) => {
            let products = await this.productService.findProduct(req.body.name);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.productService = new product_service_1.ProductService();
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map