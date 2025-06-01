import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  sku: string
}