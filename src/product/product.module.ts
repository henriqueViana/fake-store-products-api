import { Module } from '@nestjs/common'
import { ProductResolver } from './presentation/resolvers/product.resolver'
import { IGetProductBySkuUseCase } from './application/use-cases/get-product-by-sku.interface'
import { GetProductBySkuUseCase } from './application/use-cases/get-product-by-sku.usecase'

@Module({
  providers: [
    ProductResolver,
    {
      provide: IGetProductBySkuUseCase,
      useClass: GetProductBySkuUseCase
    }
  ],
  exports: [ProductResolver]
})
export class ProductModule {}