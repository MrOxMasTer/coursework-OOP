import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	imports: [SequelizeModule.forFeature([Order])],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule {}
