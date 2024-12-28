import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreateOrderDto {
	@IsNotEmpty()
	@IsDate()
	orderDate: Date;

	@IsString()
	@IsNotEmpty()
	status: string;
}
