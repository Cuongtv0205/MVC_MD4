import {ProductService} from "../service/product-service";
import {Request, Response} from "express";

export class ProductController {

    //Kiểu dữ liệu để tương tác
    private productService : ProductService

    constructor() {
        this.productService= new ProductService();
    }

    getAllProduct = async (req: Request,res:Response)=>{
        let products = this.productService.findAll(req,res);
        res.render('product/list',{
            listProduct: products
        })
    }
}

//vứt ra đối tượng
export default new ProductController();