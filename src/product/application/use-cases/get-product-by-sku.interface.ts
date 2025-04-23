export abstract class IGetProductBySkuUseCase {
  abstract execute(sku: string): Promise<string>
}