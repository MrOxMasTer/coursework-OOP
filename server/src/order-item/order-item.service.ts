import { Injectable } from "@nestjs/common";
import { OrderItem } from "./order-item.entity";
import { InjectModel } from "@nestjs/sequelize";

import { CreateOrderItemDto } from "./dto/createOrderItemDto";
import { UpdateOrderItemDto } from "./dto/updateOrderItemDto";

@Injectable()
export class OrderItemService {
	constructor(
		@InjectModel(OrderItem)
		private orderItemRepository: typeof OrderItem,
	) {}

	async create(createOrderItemDto: CreateOrderItemDto) {
		const orderItem = await this.orderItemRepository.create({
			...createOrderItemDto,
		});
		return orderItem;
	}

	async findAll() {
		return this.orderItemRepository.findAll();
	}

	async findOne(id: OrderItem["id"]) {
		return this.orderItemRepository.findOne({
			where: {
				id: id,
			},
		});
	}

	async update(id: OrderItem["id"], updateOrderItemDto: UpdateOrderItemDto) {
		const [updatedCount, updatedOrderItems] =
			await this.orderItemRepository.update(updateOrderItemDto, {
				where: { id: id },
				returning: true, // чтобы вернуть обновленный объект
			});

		// возвращаем обновленный объект, если он был найден и обновлен
		return updatedOrderItems[0] || null;
	}

	async remove(id: OrderItem["id"]) {
		const orderItem = await this.orderItemRepository.findByPk(id);
		if (orderItem) {
			await orderItem.destroy();
			return { message: "OrderItem deleted successfully" };
		}
		return { message: "OrderItem not found" };
	}
}
