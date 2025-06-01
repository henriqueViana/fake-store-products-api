import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommandBus } from "@nestjs/cqrs";
import { IGetProductBySkuUseCase } from "../../application/use-cases/get-product-by-sku.interface";
import { Product } from "../../../product/domain/entities/product.entity";
import { CreateProductInput } from "src/product/domain/dto/create-product.input";
import { CreateProductCommand } from "src/product/application/commands/create-product/create-product.command";

@Resolver('Product')
export class ProductResolver {
  constructor(
    private readonly productUseCase: IGetProductBySkuUseCase,
    private readonly commandBus: CommandBus
  ) {}

  @Query(() => Product)
  getProductBySku(@Args('sku') sku: string): Promise<Product> {
    return this.productUseCase.execute(sku)
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') input: CreateProductInput): Promise<Product> {
    const { name, sku } = input
    return this.commandBus.execute(new CreateProductCommand(name, sku))
  }
}