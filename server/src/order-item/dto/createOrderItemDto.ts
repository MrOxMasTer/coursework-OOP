import { IsUUID, IsNotEmpty, IsInt } from "class-validator";

export class CreateOrderItemDto {
	@IsUUID()
	@IsNotEmpty()
	orderId: string;

	@IsUUID()
	@IsNotEmpty()
	productId: string;

	@IsInt()
	@IsNotEmpty()
	quantity: number;

	@IsUUID()
	@IsNotEmpty()
	warehouseId: string;
}
