import {Router} from "express";
import {routerProduct} from "./product-router";
import categoryController from "../controller/category-controller";
import {categoryRouter} from "./category-router";


export const router = Router();
router.use('', routerProduct);
router.use('',categoryRouter);

