import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class Product {
  @Field(type => ID)
  id: string

  @Field(type => String)
  name: string

  @Field(type => String)
  sku: string
}