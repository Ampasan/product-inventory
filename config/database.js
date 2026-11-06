import { connect } from "mongoose";

async function connectDB() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB berhasil terhubung");
  } catch (error) {
    console.error("Gagal terhubung ke MongoDB:", error.message);
    process.exit(1);
  }
}

export default connectDB;
