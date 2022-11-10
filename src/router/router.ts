import {Router} from "express";
import {routerProduct} from "./product-router";
// import {routerCategory} from "./category-router";

export const router = Router();
router.use('', routerProduct);
// router.use('',routerCategory);

