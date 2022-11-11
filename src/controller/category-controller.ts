import {CategoryService} from "../service/category-service";
import e, {Request, Response} from "express";

export class CategoryController {

    private categoryService : CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }
    getAllCategory = async (req:Request,res:Response)=>{
        let category = await this.categoryService.findAllC(req,res);
        res.render('product/list',{
            listCategory: category
            }
        )
    }
}
export default new CategoryController();