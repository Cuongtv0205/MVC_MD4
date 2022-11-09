import { Request, Response } from "express";
export declare class ProductService {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<any>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
    findProduct: (req: Request, res: Response) => Promise<void>;
}
