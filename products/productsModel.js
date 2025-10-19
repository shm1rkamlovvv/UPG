import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    fullPrice: {
      type: Number,
      required: true,
    },
    sellPrice: {
      type: Number,
    },
    available: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    trademark: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
