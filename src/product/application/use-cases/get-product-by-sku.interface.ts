import { Product } from "../../../product/domain/entities/product.entity";

export abstract class IGetProductBySkuUseCase {
  abstract execute(sku: string): Promise<Product>
}