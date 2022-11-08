import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    constructor();
    getAllProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
