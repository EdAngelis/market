import express from "express";
import { getProducts, createProducts } from "../controller/products.controller";

const router = express.Router();

router.get("/", getProducts);
router.get("/create-many", createProducts);

export default router;
