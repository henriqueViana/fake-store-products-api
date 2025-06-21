import { NotFoundException } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { Product } from "../../../domain/entities/product.entity";
import { IProductRepository } from "../../../infrastructure/repositories/product.repository.interface";
import { GetProductQuery } from "./get-product-by-sku.query";

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery>{
  constructor(private readonly productRepo: IProductRepository) {}

  async execute(query: GetProductQuery): Promise<Product> {
    const { sku } = query
    const product = await this.productRepo.findBySku(query.sku)

    if (!product || product.length === 0) {
      throw new NotFoundException(`Product with sku ${sku} not found`)
    }

    return product[0]
  }
}