import { Module } from '@nestjs/common'
import { ProductResolver } from './presentation/resolvers/product.resolver'
import { IGetProductBySkuUseCase } from './application/use-cases/get-product-by-sku.interface'
import { GetProductBySkuUseCase } from './application/use-cases/get-product-by-sku.usecase'
import { IProductRepository } from './infrastructure/repositories/product.repository.interface'
import { ProductMongoRepository } from './infrastructure/repositories/product-mongo.repository'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './domain/entities/product.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [
    ProductResolver,
    {
      provide: IGetProductBySkuUseCase,
      useClass: GetProductBySkuUseCase
    },
    {
      provide: IProductRepository,
      useClass: ProductMongoRepository,
    },
  ],
  exports: [ProductResolver]
})
export class ProductModule {}