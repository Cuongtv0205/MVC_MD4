import {Router} from "express";
import productController from "../controller/product-controller";
import {ProductService} from "../service/product-service";

export const routerProduct = Router();

routerProduct.get('/products', productController.getAllProduct);
routerProduct.get('/create', productController.showFormCreate);
routerProduct.post('/create',productController.createProduct);
routerProduct.get('/edit/:id',productController.formEditProduct);
routerProduct.post('/edit/:id',productController.editP);
routerProduct.get('/delete/:id',productController.fromDeleteProduct);
routerProduct.post('/delete/:id',productController.deleteP);

routerProduct.post('/products',productController.formSearchP);