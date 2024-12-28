import { IsInt, IsNotEmpty } from "class-validator";

export class UpdateOrderItemDto {
	@IsInt()
	@IsNotEmpty()
	quantity: number;
}
