import { Injectable } from "@nestjs/common";
import { Warehouse } from "./warehouse.entity";
import { InjectModel } from "@nestjs/sequelize";

import { CreateWarehouseDto } from "./dto/createWarehouseDto";
import { UpdateWarehouseDto } from "./dto/updateWarehouseDto";

@Injectable()
export class WarehouseService {
	constructor(
		@InjectModel(Warehouse)
		private warehouseRepository: typeof Warehouse,
	) {}

	async count() {
		const count = await this.warehouseRepository.count();

		return count;
	}

	async create(createWarehouseDto: CreateWarehouseDto) {
		const warehouse = await this.warehouseRepository.create({
			...createWarehouseDto,
		});
		return warehouse;
	}

	async findAll() {
		return this.warehouseRepository.findAll();
	}

	async findOne(id: Warehouse["id"]) {
		return this.warehouseRepository.findByPk(id);
	}

	async update(id: Warehouse["id"], updateWarehouseDto: UpdateWarehouseDto) {
		const [updatedCount, updatedWarehouses] =
			await this.warehouseRepository.update(updateWarehouseDto, {
				where: { id: id },
				returning: true, // чтобы вернуть обновленный объект
			});

		// Возвращаем обновленный объект, если он был найден и обновлен
		return updatedWarehouses[0] || null;
	}

	async remove(id: Warehouse["id"]) {
		const warehouse = await this.warehouseRepository.findByPk(id);

		if (warehouse) {
			await warehouse.destroy();

			return warehouse;
		}

		return null;
	}
}
