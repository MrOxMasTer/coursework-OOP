import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class UpdateCategoryDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	name: string;
}
