import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/createOrderDto";
import { UpdateOrderDto } from "./dto/updateOrderDto";
import { Order } from "./order.entity";

@Controller("orders")
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Post()
	async create(@Body() createOrderDto: CreateOrderDto) {
		return this.orderService.create(createOrderDto);
	}

	@Get("count")
	async count() {
		const count = await this.orderService.count();
		return { count };
	}

	@Get("activeCount")
	async activeCount() {
		const count = await this.orderService.activeCount();

		return { count };
	}

	@Get()
	async findAll() {
		return this.orderService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: Order["id"]) {
		return this.orderService.findOne(id);
	}

	@Put(":id")
	async update(
		@Param("id") id: Order["id"],
		@Body() updateOrderDto: UpdateOrderDto,
	) {
		return this.orderService.update(id, updateOrderDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: Order["id"]) {
		return this.orderService.remove(id);
	}
}
