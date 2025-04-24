import { Injectable } from "@nestjs/common";
import { IGetProductBySkuUseCase } from "./get-product-by-sku.interface";
import { Product } from "../../../product/domain/entities/product.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GetProductBySkuUseCase implements IGetProductBySkuUseCase{
  async execute(sku: string): Promise<Product> {
    return Promise.resolve({
      id: uuidv4(),
      name: 'ProductTest',
      sku: '123'
    })
  }
}