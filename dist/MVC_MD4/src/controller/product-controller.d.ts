import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    constructor();
    getAllProduct: (req: Request, res: Response) => any;
    showFormCreate: (req: Request, res: Response) => any;
    createProduct: (req: Request, res: Response) => any;
    formEditProduct: (req: Request, res: Response) => any;
    editP: (req: Request, res: Response) => any;
    fromDeleteProduct: (req: Request, res: Response) => any;
    deleteP: (req: Request, res: Response) => any;
    formSearchP: (req: Request, res: Response) => any;
    searchP: (req: Request, res: Response) => any;
}
declare const _default: ProductController;
export default _default;
