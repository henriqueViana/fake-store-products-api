import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { v4 as uuidv4 } from 'uuid';


export type ProductDocument = Product & Document;
@Schema()
@ObjectType()
export class Product {
  @Field(type => ID)
  @Prop({ required: true, unique: true, default: uuidv4 })
  id: string;

  @Field(type => String)
  @Prop({ required: true })
  name: string

  @Field(type => String)
  @Prop({ required: true, unique: true })
  sku: string

  @Field(type => [String], { nullable: true })
  @Prop({ type: [String], required: false })
  images?: string[]
}

export const ProductSchema = SchemaFactory.createForClass(Product);