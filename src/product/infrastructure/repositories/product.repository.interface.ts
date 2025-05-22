export abstract class IProductRepository {
  abstract findBySku(sku: string)
}