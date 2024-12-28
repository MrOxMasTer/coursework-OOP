import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/createProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";

@Controller("products")
export class ProductController {
	constructor(private productsService: ProductService) {}

	@Get()
	async findAll() {
		return this.productsService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: Product["id"]) {
		return this.productsService.findOne(id);
	}

	@Get("/count")
	async count() {
		return this.productsService.count();
	}

	@Post()
	async create(@Body() createProductDto: CreateProductDto) {
		this.productsService.create(createProductDto);
	}

	@Put(":id")
	async update(
		@Param("id") id: Product["id"],
		@Body() updateProductDto: UpdateProductDto,
	) {
		return this.productsService.update(id, updateProductDto);
	}

	@Delete(":id")
	async delete(@Param("id") id: Product["id"]) {
		return this.productsService.delete(id);
	}
}
