import { Request, Response } from "express";
import { orderService } from "./order.service";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
    try {

      const payload = req.body
      const result = await orderService.createOrder(payload)
      
      res.status(201).json({
        success : true,
        message: 'Order created successfully',
        data: result,
      })
    } catch (error) {
      console.log(error);
    }

  }

  const getOrder = async (req: Request, res: Response) => {
    try {
      const result = await orderService.getOrder()
  
      res.status(201).send({
        status: true,
        message: 'Orders retrieved successfully',
        result,
      })
    } catch (error) {
      res.status(404).json({
        status: false,
        message: 'Orders Not Found',
        error,
      })
    }
  }

  const getOrderRevenue = async (req: Request, res: Response) => {
    try {
      // MongoDB aggregation pipeline
      const revenueResult = await Order.aggregate([
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$totalPrice' }, // Sum up all totalPrice fields
          },
        },
      ]);
  
      const totalRevenue = revenueResult[0]?.totalRevenue || 0; // Handle case where no orders exist
  
      // Success response
      res.status(200).send({
        success: true,
        message: 'Revenue calculated successfully',
        data: {
          totalRevenue,
        },
      });
    } catch (error) {
      // Error response
      res.status(500).json({
        success: false,
        message: 'Error calculating revenue',
        error: error
      });
    }
  };
  


  export const orderController = {
    createOrder , 
    getOrderRevenue,
    getOrder 
  }