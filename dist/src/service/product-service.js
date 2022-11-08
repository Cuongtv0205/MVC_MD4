"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            let products = this.productRepository.find();
            return products;
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('--Connect Database Success--');
            this.productRepository = connection.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map