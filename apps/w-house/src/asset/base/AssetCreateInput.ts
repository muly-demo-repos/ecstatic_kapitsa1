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
import { IsString, ValidateNested, IsOptional, IsEnum } from "class-validator";
import { BatchCreateNestedManyWithoutAssetsInput } from "./BatchCreateNestedManyWithoutAssetsInput";
import { Type } from "class-transformer";
import { AssetCreateNestedManyWithoutAssetsInput } from "./AssetCreateNestedManyWithoutAssetsInput";
import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { EnumAssetType } from "./EnumAssetType";

@InputType()
class AssetCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  assetDescription!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  assetName!: string;

  @ApiProperty({
    required: false,
    type: () => BatchCreateNestedManyWithoutAssetsInput,
  })
  @ValidateNested()
  @Type(() => BatchCreateNestedManyWithoutAssetsInput)
  @IsOptional()
  @Field(() => BatchCreateNestedManyWithoutAssetsInput, {
    nullable: true,
  })
  batches?: BatchCreateNestedManyWithoutAssetsInput;

  @ApiProperty({
    required: false,
    type: () => AssetCreateNestedManyWithoutAssetsInput,
  })
  @ValidateNested()
  @Type(() => AssetCreateNestedManyWithoutAssetsInput)
  @IsOptional()
  @Field(() => AssetCreateNestedManyWithoutAssetsInput, {
    nullable: true,
  })
  children?: AssetCreateNestedManyWithoutAssetsInput;

  @ApiProperty({
    required: false,
    type: () => AssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetWhereUniqueInput)
  @IsOptional()
  @Field(() => AssetWhereUniqueInput, {
    nullable: true,
  })
  parent?: AssetWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    enum: EnumAssetType,
  })
  @IsEnum(EnumAssetType)
  @Field(() => EnumAssetType)
  type!:
    | "ENT"
    | "SITE"
    | "AREA"
    | "LINE"
    | "CELL"
    | "EQUIPMOD"
    | "EQUIPPHASE"
    | "CONTROLMOD";
}

export { AssetCreateInput as AssetCreateInput };
