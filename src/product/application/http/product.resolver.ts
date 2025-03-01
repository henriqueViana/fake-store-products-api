import { Query, Resolver } from "@nestjs/graphql";

@Resolver('Product')
export class ProductResolver {
  constructor() {}

  @Query(() => String)
  getProductBySku(): string {
    return 'graphql config test'
  }
}