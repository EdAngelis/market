import { Router } from "express";
import productsRoutes from "./products.routes";
import buyersRoutes from "./buyers.routes";
import cartRoutes from "./cart.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/buyers", buyersRoutes);
router.use("/cart", cartRoutes);

export default router;
