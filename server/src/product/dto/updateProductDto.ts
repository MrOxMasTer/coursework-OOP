import { IsString, Min, IsNumber, IsOptional } from "class-validator";
import type { Product } from "../product.entity";

export class UpdateProductDto {
	@IsOptional()
	@IsString()
	@Min(4)
	title: Product["title"];

	@IsOptional()
	@IsString()
	categoryId: Product["categoryId"];

	@IsOptional()
	@IsString()
	shopId: Product["shopId"];

	@IsOptional()
	@IsNumber()
	price: Product["price"];

	@IsOptional()
	@IsNumber()
	discount: Product["discount"];

	@IsOptional()
	@IsString()
	image: Product["image"];
}
