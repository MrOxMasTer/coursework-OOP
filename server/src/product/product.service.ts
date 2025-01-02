import { Injectable } from "@nestjs/common";
import { Product } from "./product.entity";
import { InjectModel } from "@nestjs/sequelize";

import { CreateProductDto } from "./dto/createProductDto";
import { UpdateProductDto } from "./dto/updateProductDto";

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product)
		private productRepository: typeof Product,
	) {}

	calculateDiscountPrice(
		price: Product["price"],
		discount: Product["discount"],
	) {
		return price - (price * discount) / 100;
	}

	async findAll() {
		return this.productRepository.findAll();
	}

	async getCount() {
		return this.productRepository.count();
	}

	async findOne(id: Product["id"]) {
		return this.productRepository.findOne({
			where: {
				id: id,
			},
		});
	}

	async create(createProductDto: CreateProductDto) {
		const product = await this.productRepository.create({
			...createProductDto,
		});
		return product;
	}

	async update(id: Product["id"], updateProductDto: UpdateProductDto) {
		const product = await this.findOne(id);
		const { discount, price } = updateProductDto;

		// Обновляем только те поля, которые были изменены
		const updatedProduct = await this.productRepository.update(
			{
				...product,
				...updateProductDto,
				...(discount
					? {
							discountedPrice: this.calculateDiscountPrice(price, discount),
						}
					: null),
			},
			{
				where: { id: id },
				returning: true, // чтобы вернуть обновленный объект
			},
		);

		// Возвращаем обновленный продукт, если он был обновлен
		return updatedProduct[1][0] || null;
	}

	async delete(id: Product["id"]) {
		const product = await this.findOne(id);
		if (product) {
			await product.destroy();
			return { message: "Product deleted successfully" };
		}
		return { message: "Product not found" };
	}
}
