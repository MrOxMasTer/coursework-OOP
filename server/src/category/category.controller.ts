import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/createCategoryDto";
import { UpdateCategoryDto } from "./dto/updateCategoryDto";
import { Category } from "./category.entity";

@Controller("categories")
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post()
	async create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoryService.create(createCategoryDto);
	}

	@Get()
	async findAll() {
		return this.categoryService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: Category["id"]) {
		return this.categoryService.findOne(id);
	}

	@Put(":id")
	async update(
		@Param("id") id: Category["id"],
		@Body() updateCategoryDto: UpdateCategoryDto,
	) {
		return this.categoryService.update(id, updateCategoryDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: Category["id"]) {
		return this.categoryService.remove(id);
	}
}
