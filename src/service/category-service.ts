import {AppDataSource} from "../data-source";
import {Category} from "../model/category";
import {Request, Response} from "express";

export class CategoryService {
    private categoryRepository: any;

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('--DB Cate Success--');
            this.categoryRepository = await connection.getRepository(Category);
        })
    }

    findAllC = async (req:Request,res:Response)=>{
        return await this.categoryRepository.find();
    }
}