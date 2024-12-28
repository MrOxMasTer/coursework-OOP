import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { WarehouseService } from "./warehouse.service";
import { CreateWarehouseDto } from "./dto/createWarehouseDto";
import { UpdateWarehouseDto } from "./dto/updateWarehouseDto";
import { Warehouse } from "./warehouse.entity";

@Controller("warehouses")
export class WarehouseController {
	constructor(private readonly warehouseService: WarehouseService) {}

	@Post()
	async create(@Body() createWarehouseDto: CreateWarehouseDto) {
		return this.warehouseService.create(createWarehouseDto);
	}

	@Get()
	async findAll() {
		return this.warehouseService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: Warehouse["id"]) {
		return this.warehouseService.findOne(id);
	}

	@Put(":id")
	async update(
		@Param("id") id: Warehouse["id"],
		@Body() updateWarehouseDto: UpdateWarehouseDto,
	) {
		return this.warehouseService.update(id, updateWarehouseDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: Warehouse["id"]) {
		return this.warehouseService.remove(id);
	}
}