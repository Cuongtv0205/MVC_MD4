"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("../service/category-service");
class CategoryController {
    constructor() {
        this.getAllCategory = async (req, res) => {
            let category = await this.categoryService.findAllC(req, res);
            res.render('product/list', {
                listCategory: category
            });
        };
        this.categoryService = new category_service_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=category-controller.js.map