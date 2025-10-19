import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://mirkamolovsherzod3:ClXfsf0rq8x1cVkj@cluster0.ymhb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0%22;%20//%20Fixed%20"
      )
      .then(() => {
        console.log("MongoDB ga ulanish muvaffaqiyatli amalga oshirildi!");
      });
  } catch (error) {
    console.error(
      "MongoDB ga ulanish muvaffaqiyatsiz amalga oshirildi!",
      error.message
    );
  }
};
