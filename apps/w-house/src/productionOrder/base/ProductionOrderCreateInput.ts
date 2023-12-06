/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BatchCreateNestedManyWithoutProductionOrdersInput } from "./BatchCreateNestedManyWithoutProductionOrdersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
import { RouteRecipeCreateNestedManyWithoutProductionOrdersInput } from "./RouteRecipeCreateNestedManyWithoutProductionOrdersInput";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";

@InputType()
class ProductionOrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => BatchCreateNestedManyWithoutProductionOrdersInput,
  })
  @ValidateNested()
  @Type(() => BatchCreateNestedManyWithoutProductionOrdersInput)
  @IsOptional()
  @Field(() => BatchCreateNestedManyWithoutProductionOrdersInput, {
    nullable: true,
  })
  batches?: BatchCreateNestedManyWithoutProductionOrdersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  className!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  createdBy!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  editedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  editedBy!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endDate!: Date;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  firmed!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  released!: boolean;

  @ApiProperty({
    required: true,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @Field(() => RouteWhereUniqueInput)
  route!: RouteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RouteRecipeCreateNestedManyWithoutProductionOrdersInput,
  })
  @ValidateNested()
  @Type(() => RouteRecipeCreateNestedManyWithoutProductionOrdersInput)
  @IsOptional()
  @Field(() => RouteRecipeCreateNestedManyWithoutProductionOrdersInput, {
    nullable: true,
  })
  routeRecipes?: RouteRecipeCreateNestedManyWithoutProductionOrdersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  schemaVersion!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  state!: string;

  @ApiProperty({
    required: true,
    type: () => ItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemWhereUniqueInput)
  @Field(() => ItemWhereUniqueInput)
  wipItem!: ItemWhereUniqueInput;
}

export { ProductionOrderCreateInput as ProductionOrderCreateInput };
