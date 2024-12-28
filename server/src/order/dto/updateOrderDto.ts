import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class UpdateOrderDto {
	@IsDate()
	orderDate: Date;

	@IsString()
	@IsNotEmpty()
	status: string;
}
