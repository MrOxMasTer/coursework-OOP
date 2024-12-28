import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoryModule } from "src/category/category.module";
import { OrderItemModule } from "src/order-item/order-item.module";
import { OrderModule } from "src/order/order.module";
import { ProductModule } from "src/product/product.module";
import { WarehouseModule } from "src/warehouse/warehouse.module";
import { dataSourceOptions } from "sequelize.config";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	imports: [
		SequelizeModule.forRoot(dataSourceOptions),
		CategoryModule,
		OrderModule,
		OrderItemModule,
		ProductModule,
		WarehouseModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
