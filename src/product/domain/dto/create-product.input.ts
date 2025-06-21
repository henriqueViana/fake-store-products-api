import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class CreateProductInput {
  @Field()
  @IsNotEmpty()
  name: string

  @Field()
  @IsNotEmpty()
  sku: string

  @Field(() => [String], { nullable: true })
  @IsOptional()
  images?: string[]
}