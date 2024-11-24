import { orderController } from './order.controller';
import { Router } from "express";


const orderRouter = Router() 

orderRouter.post('/create-order' , orderController.createOrder)
orderRouter.get('/revenue' , orderController.getOrderRevenue)
orderRouter.get('/' , orderController.getOrder)

export default orderRouter ;