import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { OrderItemService } from "./order-item.service";
import { CreateOrderItemDto } from "./dto/createOrderItemDto";
import { UpdateOrderItemDto } from "./dto/updateOrderItemDto";
import { OrderItem } from "./order-item.entity";

@Controller("order-items")
export class OrderItemController {
	constructor(private readonly orderItemService: OrderItemService) {}

	@Post()
	async create(@Body() createOrderItemDto: CreateOrderItemDto) {
		return this.orderItemService.create(createOrderItemDto);
	}

	@Get()
	async findAll() {
		return this.orderItemService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: OrderItem["id"]) {
		return this.orderItemService.findOne(id);
	}

	@Put(":id")
	async update(
		@Param("id") id: OrderItem["id"],
		@Body() updateOrderItemDto: UpdateOrderItemDto,
	) {
		return this.orderItemService.update(id, updateOrderItemDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: OrderItem["id"]) {
		return this.orderItemService.remove(id);
	}
}
