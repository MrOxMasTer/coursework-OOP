import { Injectable } from "@nestjs/common";
import { Order } from "./order.entity";
import { InjectModel } from "@nestjs/sequelize";

import { UpdateOrderDto } from "./dto/updateOrderDto";
import { CreateOrderDto } from "./dto/createOrderDto";
import { Op } from "sequelize";

@Injectable()
export class OrderService {
	constructor(
		@InjectModel(Order)
		private orderRepository: typeof Order,
	) {}

	async count() {
		const count = await this.orderRepository.count();
		return count;
	}

	async activeCount() {
		const count = await this.orderRepository.count({
			where: {
				status: {
					[Op.or]: ["pending payment", "paid"],
				},
			},
		});

		return count;
	}

	async create(createOrderDto: CreateOrderDto) {
		const order = await this.orderRepository.create({ ...createOrderDto });
		return order;
	}

	async findAll() {
		return this.orderRepository.findAll();
	}

	async findOne(id: Order["id"]) {
		return this.orderRepository.findOne({
			where: {
				id: id,
			},
		});
	}

	async update(id: Order["id"], updateOrderDto: UpdateOrderDto) {
		const [updatedCount, updatedOrders] = await this.orderRepository.update(
			updateOrderDto,
			{
				where: { id: id },
				returning: true, // чтобы вернуть обновленный объект
			},
		);

		// возвращаем обновленный заказ, если он был найден и обновлен
		return updatedOrders[0] || null;
	}

	async remove(id: Order["id"]) {
		const order = await this.orderRepository.findByPk(id);
		if (order) {
			await order.destroy();
			return { message: "Order deleted successfully" };
		}
		return { message: "Order not found" };
	}
}
