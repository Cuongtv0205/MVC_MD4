import { Request, Response } from "express";
export declare class CategoryController {
    private categoryService;
    constructor();
    getAllCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
