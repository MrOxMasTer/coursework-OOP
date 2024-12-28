import { Module } from "@nestjs/common";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";
import { Warehouse } from "./warehouse.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	controllers: [WarehouseController],
	providers: [WarehouseService],
	imports: [SequelizeModule.forFeature([Warehouse])],
})
export class WarehouseModule {}
