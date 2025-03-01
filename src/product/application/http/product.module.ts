import { Module } from '@nestjs/common'
import { ProductResolver } from './product.resolver'

@Module({
  imports: [ProductResolver],
  exports: [ProductResolver]
})
export class ProductModule {}