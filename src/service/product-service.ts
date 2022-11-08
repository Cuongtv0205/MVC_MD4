import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";

export class ProductService {

    // Trung gian để đem đi tương tác với Database
    private productRepository : any;

    constructor() {
        AppDataSource.initialize().then(async connection =>{
            console.log('--Connect Database Success--')
            this.productRepository = connection.getRepository(Product);
        })

    }
       // Request và Response của express
    findAll = async (req:Request,res:Response)=>{

        //find lấy ra tất cả
        let products = this.productRepository.find()
        return products;

    }
}