const express = require('express');

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "Server ExpressJS berhasil berjalan!",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server berjalan dengan baik",
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
