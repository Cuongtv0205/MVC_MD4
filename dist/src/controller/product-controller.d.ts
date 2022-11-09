import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    constructor();
    getAllProduct: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    formEditProduct: (req: Request, res: Response) => Promise<void>;
    editP: (req: Request, res: Response) => Promise<void>;
    fromDeleteProduct: (req: Request, res: Response) => Promise<void>;
    deleteP: (req: Request, res: Response) => Promise<void>;
    formSearchP: (req: Request, res: Response) => Promise<void>;
    searchP: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
