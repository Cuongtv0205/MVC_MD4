import { Request, Response } from "express";
export declare class CategoryService {
    private categoryRepository;
    constructor();
    findAllC: (req: Request, res: Response) => Promise<any>;
}
