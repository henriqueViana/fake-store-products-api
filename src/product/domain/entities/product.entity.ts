import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document;
@Schema()
@ObjectType()
export class Product {
  @Field(type => ID)
  _id: string

  @Field(type => String)
  @Prop()
  name: string

  @Field(type => String)
  @Prop()
  sku: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);