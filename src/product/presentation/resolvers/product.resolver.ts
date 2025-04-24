import { Args, Query, Resolver } from "@nestjs/graphql";
import { IGetProductBySkuUseCase } from "../../application/use-cases/get-product-by-sku.interface";
import { Product } from "../../../product/domain/entities/product.entity";

@Resolver('Product')
export class ProductResolver {
  constructor(
    private readonly productUseCase: IGetProductBySkuUseCase
  ) {}

  @Query(() => Product)
  getProductBySku(@Args('sku') sku: string): Promise<Product> {
    return this.productUseCase.execute(sku)
  }
}