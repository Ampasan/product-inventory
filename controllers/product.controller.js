import Product from "../models/product.model.js";

// GET /api/products
async function getProducts(req, res) {
  try {
    const { category, search } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    const products = await Product.find(filter);

    res.status(200).json({
      message: "Data produk berhasil diambil",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data produk",
    });
  }
}

// GET /api/products/:id
async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Produk tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Detail produk berhasil diambil",
      data: product,
    });
  } catch (error) {
    const invalidId = error.name === "CastError";

    res.status(invalidId ? 400 : 500).json({
      message: invalidId
        ? "ID produk tidak valid"
        : "Gagal mengambil detail produk",
    });
  }
}

// POST /api/products
async function createProduct(req, res) {
  try {
    const { name, price, category, stock } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof category !== "string" ||
      !category.trim() ||
      price === undefined ||
      typeof price !== "number" ||
      !Number.isFinite(price) ||
      price < 0 ||
      stock === undefined ||
      typeof stock !== "number" ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      return res.status(400).json({
        message: "Nama, kategori, harga, dan stok harus valid",
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      stock,
    });

    res.status(201).json({
      message: "Produk berhasil ditambahkan",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan produk",
    });
  }
}

// PUT /api/products/:id
async function updateProduct(req, res) {
  try {
    const { name, price, category, stock } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof category !== "string" ||
      !category.trim() ||
      typeof price !== "number" ||
      !Number.isFinite(price) ||
      price < 0 ||
      typeof stock !== "number" ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      return res.status(400).json({
        message: "Kirim nama, kategori, harga, dan stok yang valid",
      });
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category, stock },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!product) {
      return res.status(404).json({
        message: "Produk tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Produk berhasil diperbarui",
      data: product,
    });
  } catch (error) {
    const invalidId = error.name === "CastError";

    res.status(invalidId ? 400 : 500).json({
      message: invalidId ? "ID produk tidak valid" : "Gagal memperbarui produk",
    });
  }
}

// DELETE /api/products/:id
async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Produk tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Produk berhasil dihapus",
      data: product,
    });
  } catch (error) {
    const invalidId = error.name === "CastError";

    res.status(invalidId ? 400 : 500).json({
      message: invalidId ? "ID produk tidak valid" : "Gagal menghapus produk",
    });
  }
}

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
