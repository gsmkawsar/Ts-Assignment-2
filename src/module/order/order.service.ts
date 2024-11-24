import { IOrder } from "./order.interface";
import Order from "./order.model";


const createOrder = async (payload: IOrder): Promise<IOrder> => {
    try {
      const result = await Order.create(payload);
      return result;
    } catch (error: unknown) {
        if (error instanceof Error && error.name === "ValidationError") {
          throw new Error("Product validation failed");
        }
        throw error; 
      }
  };

  const getOrder = async () => {
    const result = await Order.find()
    return result
  }
  
  const getOrderRevenue = async () => {
      const result = await Order.find()
      return result
    }


   export const orderService = {
        createOrder , 
        getOrderRevenue,
        getOrder
    }