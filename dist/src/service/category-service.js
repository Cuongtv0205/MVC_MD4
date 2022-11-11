"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAllC = async (req, res) => {
            return await this.categoryRepository.find();
        };
        data_source_1.AppDataSource.initialize().then(async (connection) => {
            console.log('--DB Cate Success--');
            this.categoryRepository = await connection.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map