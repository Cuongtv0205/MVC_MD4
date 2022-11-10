import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => unknown;
    saveProduct: (req: Request, res: Response) => any;
    editProduct: (req: Request, res: Response) => any;
    findById: (req: Request, res: Response) => unknown;
    deleteProduct: (req: Request, res: Response) => any;
    findProduct: (req: Request, res: Response) => any;
}
