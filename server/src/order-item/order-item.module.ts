import { Module } from "@nestjs/common";
import { OrderItemService } from "./order-item.service";
import { OrderItemController } from "./order-item.controller";
import { OrderItem } from "./order-item.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	imports: [SequelizeModule.forFeature([OrderItem])],
	providers: [OrderItemService],
	controllers: [OrderItemController],
})
export class OrderItemModule {}
