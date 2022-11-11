import {Router} from "express";
import categoryController from "../controller/category-controller";

export const categoryRouter = Router();

categoryRouter.get ('/products',categoryController.getAllCategory);
