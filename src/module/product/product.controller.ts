import { Request, Response } from "express"
import { productService } from "./product.service"

  const createProduct = async (req: Request, res: Response) => {
    try {

      const payload = req.body
      const result = await productService.createProduct(payload)
      
      res.status(201).json({
        success : true,
        message: 'Product created successfully',
        data: result,
      })
    } catch (error) {
      console.log(error);
    }


  }
  const getProduct = async (req: Request, res: Response) => {
    try {
      const result = await productService.getProduct()
  
      res.status(201).send({
        status: true,
        message: 'Products retrieved successfully',
        result,
      })
    } catch (error) {
      res.status(404).json({
        status: false,
        message: 'Product Not Found',
        error,
      })
    }
  }

  const getSingleProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId
      const result = await productService.getSingleProduct(productId)
  
      res.status(201).send({
        status: true,
        message: 'Product retrieved successfully',
        result,
      })
    } catch (error) {
      res.status(404).json({
        status: false,
        message: 'Product Not Found',
        error,
      })
    }
  }
  
  const updateProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId
      const body = req.body
      const result = await productService.updateProduct(productId, body)
  
      res.status(201).send({
        status: true,
        message: 'Product updated successfully',
        result,
      })
    } catch (error) {
      res.status(404).json({
        status: false,
        message: 'Failed to update Product',
        error,
      })
    }
  }
  
  const deleteProduct = async (req: Request, res: Response) => {
    try {
      const productId = req.params.productId
      await productService.deleteProduct(productId)
  
      res.status(201).send({
        status: true,
        message: 'Product deleted successfully',
        result: {},
      })
    } catch (error) {
      res.status(404).json({
        status: false,
        message: 'Failed to Delete Product',
        error,
      })
    }
  }


  export const ProductController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
  }