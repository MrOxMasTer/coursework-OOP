import { Min, IsString, IsNumber } from "class-validator";
import type { Product } from "../product.entity";

export class CreateProductDto {
	@IsString()
	@Min(4)
	title: Product["title"];

	@IsString()
	categoryId: Product["categoryId"];

	@IsString()
	shopId: Product["shopId"];

	@IsNumber()
	price: Product["price"];
}
