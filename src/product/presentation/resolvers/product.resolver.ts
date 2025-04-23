import { Args, Query, Resolver } from "@nestjs/graphql";
import { IGetProductBySkuUseCase } from "../../application/use-cases/get-product-by-sku.interface";

@Resolver('Product')
export class ProductResolver {
  constructor(
    private readonly productUseCase: IGetProductBySkuUseCase
  ) {}

  @Query(() => String)
  getProductBySku(@Args('sku') sku: string): Promise<string> {
    return this.productUseCase.execute(sku)
  }
}