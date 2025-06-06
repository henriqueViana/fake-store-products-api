import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { Product } from "../../../product/domain/entities/product.entity";
import { CreateProductInput } from "../../domain/dto/create-product.input";
import { CreateProductCommand } from "../../application/commands/create-product/create-product.command";
import { GetProductQuery } from "../../application/queries/get-product-by-sku/get-product-by-sku.query";
import { GetAllProductsQuery } from "../../application/queries/get-all-products/get-all-products.query";

@Resolver('Product')
export class ProductResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Query(() => Product)
  getProductBySku(@Args('sku') sku: string): Promise<Product> {
    return this.queryBus.execute(new GetProductQuery(sku))
  }

  @Query(() => [Product])
  getProducts(): Promise<Product[]> {
    return this.queryBus.execute(new GetAllProductsQuery())
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') input: CreateProductInput): Promise<Product> {
    const { name, sku } = input
    return this.commandBus.execute(new CreateProductCommand(name, sku))
  }
}