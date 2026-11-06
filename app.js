import "dotenv/config";
import express, { json } from "express";
import connectDB from "./config/database.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Endpoint utama
app.get("/", (_req, res) => {
  res.json({
    message: "API Produk ExpressJS",
  });
});

// Route produk
app.use("/api/products", productRoutes);

// Menjalankan server setelah database terhubung
async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();
