# ExpressJS CRUD Products

Project backend sederhana menggunakan **Node.js, ExpressJS, dan MongoDB**


## Tech Stack

- Node.js
- ExpressJS
- MongoDB
- Mongoose


## Fitur

- Create: Menambahkan produk.
- Read: Mengambil seluruh produk dan detail produk.
- Update: Memperbarui data produk.
- Delete: Menghapus produk.
- Filter produk berdasarkan kategori.
- Pencarian produk berdasarkan nama.

## Instalasi

```bash
git clone <repository-url>
cd express-crud-products
npm install
```

Buat file `.env`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/express_crud_db
```

Pastikan MongoDB lokal sudah berjalan, kemudian jalankan server:

```bash
npm run dev
```

Server berjalan di:

```text
http://localhost:3000
```

## API Endpoint

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/products` | Mengambil semua produk |
| GET | `/api/products/:id` | Mengambil detail produk |
| POST | `/api/products` | Menambahkan produk |
| PUT | `/api/products/:id` | Memperbarui produk |
| DELETE | `/api/products/:id` | Menghapus produk |

## Database

Database: `express_crud_db`

Collection: `products`

API dapat diuji menggunakan Postman.

---