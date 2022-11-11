"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async (req, res) => {
            return await this.productRepository.query(`select *
                                                   from products p
                                                            join category c on p.idCategory = c.idCategory`);
        };
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let product = req.body;
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/products');
            }
        };
        this.findById = async (req, res) => {
            let id = +req.params.id;
            console.log(await this.productRepository.findOneBy({ id: id }));
            return await this.productRepository.findOneBy({ id: id });
        };
        this.deleteProduct = async (req, res) => {
            let id = +req.params.id;
            let product = await this.productRepository.findOneBy({ id: id });
            if (product) {
                await this.productRepository.delete({ id: id });
                res.redirect(301, '/products');
            }
        };
        this.findProduct = async (name) => {
            return await this.productRepository.query(`select * from products where name like '%${name}%'`);
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('--Connect Database Success--');
            this.productRepository = await connection.getRepository(product_1.Product);
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product-service.js.map