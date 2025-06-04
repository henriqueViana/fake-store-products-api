import { Product } from "../../../domain/entities/product.entity";

export class GetProductQuery {
  constructor(public readonly sku: string) {}
}