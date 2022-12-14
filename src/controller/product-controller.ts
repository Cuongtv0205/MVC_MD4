import {ProductService} from "../service/product-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";



export class ProductController {

    //Kiểu dữ liệu để tương tác
    private productService: ProductService
    private categoryService: CategoryService

    constructor() {
        this.productService = new ProductService();
        this.categoryService = new CategoryService();
    }

    getAllProduct = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        res.render('product/list', {
            listProduct: products
        })
    }

    showFormCreate = async (req: Request, res: Response) => {
        let category = await this.categoryService.findAllC(req,res);
        res.render('product/create',{
            listCategory : category
        });
    }

    createProduct = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res);
    }

    formEditProduct = async (req: Request, res: Response) => {
        let id = +req.params.id
        console.log(id)
        if (!isNaN(id)){
            let category = await this.categoryService.findAllC(req,res);
            let product = await this.productService.findById(req, res);
            console.log(product);
            res.render('product/edit', {
                listProduct: product ,listCategory: category
            });
        }
    }

    editP = async (req: Request, res: Response) => {
      await this.productService.editProduct(req, res)
    }

    fromDeleteProduct = async (req:Request,res:Response)=>{
        if (!isNaN(+req.params.id)) {
            let product = await this.productService.findById(req, res);
            let category = await this.categoryService.findAllC(req,res);
            res.render('product/delete', {
                product: product, listProduct:category
            })
        }
    }

    deleteP = async (req: Request, res: Response) => {
         await this.productService.deleteProduct(req, res);
    }


    formSearchP = async (req:Request,res:Response)=>{
        let products = await this.productService.findProduct(req.body.name);
        res.render('product/list', {
            listProduct: products
        })
    }
}

//vứt ra đối tượng
export default new ProductController();