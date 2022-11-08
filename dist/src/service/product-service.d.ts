import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
