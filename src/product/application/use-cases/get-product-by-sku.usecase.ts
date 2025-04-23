import { Injectable } from "@nestjs/common";
import { IGetProductBySkuUseCase } from "./get-product-by-sku.interface";

@Injectable()
export class GetProductBySkuUseCase implements IGetProductBySkuUseCase{
  async execute(sku: string): Promise<string> {
    return Promise.resolve('use case resolved')
  }
}