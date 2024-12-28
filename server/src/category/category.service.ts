import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CreateCategoryDto } from "./dto/createCategoryDto";
import { UpdateCategoryDto } from "./dto/updateCategoryDto";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class CategoryService {
	constructor(
		@InjectModel(Category)
		private categoryRepository: typeof Category,
	) {}

	async create(createCategoryDto: CreateCategoryDto) {
		const category = await this.categoryRepository.create({
			...createCategoryDto,
		});
		return category;
	}

	async findAll() {
		return this.categoryRepository.findAll();
	}

	async findOne(id: Category["id"]) {
		return this.categoryRepository.findOne({
			where: {
				id: id,
			},
		});
	}
	async update(id: Category["id"], updateCategoryDto: UpdateCategoryDto) {
		const [updatedCount, updatedCategories] =
			await this.categoryRepository.update(updateCategoryDto, {
				where: { id: id },
				returning: true, // это нужно, чтобы вернуть обновленный объект
			});

		// возвращаем обновленную категорию, если она была найдена и обновлена
		return updatedCategories[0] || null;
	}

	async remove(id: string) {
		const category = await this.categoryRepository.findByPk(id);
		if (category) {
			await category.destroy();
			return { message: "Category deleted successfully" };
		}

		return { message: "Category not found" };
	}
}
