
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from "./create-product.command";
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../../domain/entities/product.entity';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
  ) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const { name, sku } = command

    const createdProduct = new this.productModel({ name, sku })

    return createdProduct.save()
  }
}