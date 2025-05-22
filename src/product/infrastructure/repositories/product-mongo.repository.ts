import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "../../domain/entities/product.entity";
import { Model } from "mongoose";
import { IProductRepository } from "./product.repository.interface";

@Injectable()
export class ProductMongoRepository implements IProductRepository {
  constructor(@InjectModel(Product.name) private model: Model<ProductDocument>) {}

  async findBySku(sku: string) {
    return await this.model.find({ sku }).exec()
  }
}