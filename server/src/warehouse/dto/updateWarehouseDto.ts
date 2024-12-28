import { IsString, MaxLength, IsOptional } from "class-validator";

export class UpdateWarehouseDto {
	@IsString()
	@MaxLength(255)
	name: string;

	@IsString()
	@MaxLength(255)
	@IsOptional()
	location: string;
}
