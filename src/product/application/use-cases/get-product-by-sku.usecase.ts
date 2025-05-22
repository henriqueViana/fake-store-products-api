import { Injectable } from "@nestjs/common";
import { IGetProductBySkuUseCase } from "./get-product-by-sku.interface";
import { Product } from "../../../product/domain/entities/product.entity";
import { v4 as uuidv4 } from 'uuid';
import { IProductRepository } from "../../infrastructure/repositories/product.repository.interface";

@Injectable()
export class GetProductBySkuUseCase implements IGetProductBySkuUseCase{
  constructor(private readonly productRepo: IProductRepository) {}

  async execute(sku: string): Promise<any> {
    const doc = await this.productRepo.findBySku(sku)
    return doc[0]
  }
}