import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
    name: {
      type: String,
      required: [true, 'Please provide the product name'],
      minlength: 3,
      maxlength: 100,
    },
    brand: {
      type: String,
      required: [true, 'Please provide the brand name'],
      minlength: 2,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: [true, 'Please provide the price'],
      min: 0,
    },
    category: {
      type: String,
      enum: {
        values: ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
        message: '{VALUE} is not a valid category',
      },
      required: [true, 'Please provide the product category'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description for the product'],
      maxlength: 500,
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide the quantity'],
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: true,
      default: true,
    },

  },
  { timestamps: true }
);

      productSchema.pre('save', function (next) {
    if (this.quantity === 0) {
      this.inStock = false;
    }
    next();
  });

  const StationeryProduct = model<IProduct>('StationeryProduct', productSchema);

  export default StationeryProduct;