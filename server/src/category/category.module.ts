import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { Category } from "./category.entity";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
	imports: [SequelizeModule.forFeature([Category])],
	controllers: [CategoryController],
	providers: [CategoryService],
})
export class CategoryModule {}
