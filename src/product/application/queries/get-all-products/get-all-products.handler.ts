import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetAllProductsQuery } from "./get-all-products.query";
import { IProductRepository } from "../../../infrastructure/repositories/product.repository.interface";
import { Product } from "../../../domain/entities/product.entity";

@QueryHandler(GetAllProductsQuery)
export class GetAllProductsHandler implements IQueryHandler<GetAllProductsQuery>{
  constructor(private readonly productRepo: IProductRepository) {}

  async execute(_: GetAllProductsQuery): Promise<Product[]>  {
    return this.productRepo.findAll()
  }
}