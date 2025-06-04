import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs';
import { ProductResolver } from './presentation/resolvers/product.resolver'
import { GetProductHandler } from './application/queries/get-product-by-sku/get-product-by-sku.handler'
import { IProductRepository } from './infrastructure/repositories/product.repository.interface'
import { ProductMongoRepository } from './infrastructure/repositories/product-mongo.repository'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './domain/entities/product.entity'
import { CreateProductHandler } from './application/commands/create-product/create-product.handler';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [
    ProductResolver,
    {
      provide: IProductRepository,
      useClass: ProductMongoRepository,
    },
    CreateProductHandler,
    GetProductHandler
  ],
  exports: [ProductResolver]
})
export class ProductModule {}