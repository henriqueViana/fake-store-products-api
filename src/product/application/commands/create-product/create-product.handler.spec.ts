import { Test, TestingModule } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose';

import { Product, ProductDocument } from '../../../domain/entities/product.entity';
import { CreateProductHandler } from './create-product.handler'
import { CreateProductCommand } from "./create-product.command";
import { Model } from 'mongoose';

describe('CreateProductHandler tests', () => {
  let handler: CreateProductHandler
  let productModel: Model<any>

  beforeEach(async () => {
    const mockProductModel = {
      prototype: {
        save: jest.fn()
      }
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateProductHandler,
        {
          provide: getModelToken(Product.name),
          useValue: jest.fn().mockImplementation(data => ({
            ...data,
            save: jest.fn().mockResolvedValue({_id: '123', ...data})
          }))
        }
      ]
    }).compile()

    handler = module.get<CreateProductHandler>(CreateProductHandler)
    productModel = module.get(getModelToken(Product.name))
  })

  it('should create and save a new product', async () => {
    const command = new CreateProductCommand('Test Product', 'SKU123');

    const result = await handler.execute(command);

    expect(result).toEqual({
      _id: '123',
      name: 'Test Product',
      sku: 'SKU123',
    });

    expect(productModel).toHaveBeenCalledWith({
      name: 'Test Product',
      sku: 'SKU123',
    });
  });
})