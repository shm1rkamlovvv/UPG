import express from "express";
import { usersRouter } from "./users/usersRoutes.js";
import { authRoutes } from "./auth/authRoutes.js";
import productsRoutes from "./products/productsRoutes.js"; // ✅ Qo‘shildi
import { connectDB } from "./utils/connectDB.js";
import categoriesRoutes from "./categories/categoriesRoutes.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
connectDB();
app.use(cors()); // CORS middleware qo‘shildi
app.use(express.json()); // JSON requestlarni o‘qish uchun

app.use("/categories", categoriesRoutes); // ✅ Endi ishlaydi
app.use("/products", productsRoutes); // ✅ Endi ishlaydi
app.use("/users", usersRouter);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Salom, bu Express server!");
});

app.listen(4200, () => {
  console.log("Server http://localhost:4200 portda ishlamoqda...");
});
