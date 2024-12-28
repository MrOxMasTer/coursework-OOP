import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	imports: [SequelizeModule.forFeature([Product])],
	controllers: [ProductController],
	providers: [ProductService],
})
export class ProductModule {}
