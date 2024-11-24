import express, { Request, Response } from 'express'
import productRouter from './module/product/product.router'
import orderRouter from './module/order/order.router'


const app = express()
// middleware
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Is Live Now ',
  })
})

export default app