import { IsString, MaxLength, IsNumber, IsPositive } from "class-validator";

export class CreateWarehouseDto {
	@IsString()
	@MaxLength(255)
	name: string;

	@IsString()
	@MaxLength(255)
	location: string;

	@IsNumber()
	@IsPositive()
	capacity: number;
}
