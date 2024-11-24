import { IProduct } from "./product.interface"
import StationeryProduct from "./product.model"


const createProduct = async (payload: IProduct): Promise<IProduct> => {
  try {
    const result = await StationeryProduct.create(payload);
    return result;
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "ValidationError") {
      throw new Error("Product validation failed");
    }
    throw error; // Re-throw other errors for the controller to handle
  }
};

const getProduct = async () => {
    const result = await StationeryProduct.find()
    return result
  }

  const getSingleProduct = async (id: string) => {
    const result = await StationeryProduct.findById(id)
    return result
  }
  
  const updateProduct = async (id: string, data: IProduct) => {
    const result = await StationeryProduct.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
  }
  
  const deleteProduct = async (id: string) => {
    const result = await StationeryProduct.findByIdAndDelete(id)
    return result
  }
  

  export const productService = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
  }