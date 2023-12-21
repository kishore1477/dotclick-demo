import express from "express";
import ProductController from "../controllers/ProductController.js";

const ProductRouter = express.Router()
ProductRouter.post('/createProductRouterItem', ProductController?.createProductItem)
ProductRouter.post('/AddToCart', ProductController?.addToCart)

export default ProductRouter