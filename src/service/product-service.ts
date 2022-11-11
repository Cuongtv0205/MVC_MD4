import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class ProductService {

    // Trung gian để đem đi tương tác với Database
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('--Connect Database Success--')
            this.productRepository = await connection.getRepository(Product);
        })
    }

    // Request và Response của express
    findAll = async (req: Request, res: Response) => {
        //find lấy ra tất cả
        // return await this.productRepository.find()
        return await this.productRepository.query(`select *
                                                   from products p
                                                            join category c on p.idCategory = c.idCategory`)
    }

    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let product = req.body;
            //ép kiểu files từ js về TS mới sử dụng được
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.save(product);
            res.redirect(301, '/products',)
        }
    }

    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        let id = +req.params.id;
        if (files != null) {
            let product = req.body;
            //ép kiểu files từ js về TS mới sử dụng được
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.update({id: id}, product)
            res.redirect(301, '/products',)
        }
    }

    findById = async (req: Request, res: Response) => {
        let id = +req.params.id;
        console.log(await this.productRepository.findOneBy({id: id}))
        return await this.productRepository.findOneBy({id: id});
    }

    deleteProduct = async (req: Request, res: Response) => {
        let id = +req.params.id;
        let product = await this.productRepository.findOneBy({id: id});
        if (product) {
            // console.log('--K co san pham--');
            await this.productRepository.delete({id: id})
            res.redirect(301, '/products',)
        }
    }
    findProduct = async (name) => {
        return await this.productRepository.query(`select * from products where name like '%${name}%'`)


    }
}
