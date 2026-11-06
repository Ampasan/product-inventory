import { Router } from "express";

const router = Router();

import productController from "../controllers/product.controller.js";

// Mengambil semua produk
router.get("/", productController.getProducts);

// Mengambil satu produk berdasarkan ID
router.get("/:id", productController.getProductById);

// Menambahkan produk
router.post("/", productController.createProduct);

// Mengubah produk
router.put("/:id", productController.updateProduct);

// Menghapus produk
router.delete("/:id", productController.deleteProduct);

export default router;
