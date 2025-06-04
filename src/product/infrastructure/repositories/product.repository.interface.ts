import { Product } from "../../domain/entities/product.entity";

export abstract class IProductRepository {
  abstract findBySku(sku: string): Promise<Product[]>
  abstract findAll(): Promise<Product[]>
}