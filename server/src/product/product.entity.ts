import {
	Table,
	PrimaryKey,
	Default,
	Column,
	DataType,
	ForeignKey,
	CreatedAt,
	UpdatedAt,
	Model,
	BelongsTo,
} from "sequelize-typescript";
import { Category } from "src/category/category.entity";
import { v7 } from "uuid";

@Table({ tableName: "products", timestamps: true })
export class Product extends Model {
	@PrimaryKey
	@Default(() => v7())
	@Column(DataType.UUID)
	id!: string;

	@Column({ allowNull: false, field: "shop_id", type: DataType.UUID })
	shopId!: string;

	@Column({ allowNull: false, type: DataType.STRING(255) })
	title!: string;

	@ForeignKey(() => Category)
	@Column({ field: "category_id", type: DataType.UUID, allowNull: true })
	categoryId!: string;

	@BelongsTo(() => Category)
	category!: Category;

	@Column({ allowNull: false, defaultValue: 0, type: DataType.DECIMAL(2, 1) })
	rating!: number;

	@Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
	price!: number;

	@Column({ allowNull: true, type: DataType.INTEGER })
	discount!: number;

	@Column({ allowNull: true, type: DataType.TEXT })
	image!: string;

	@Column({
		allowNull: true,
		field: "discounted_price",
		type: DataType.DECIMAL(10, 2),
	})
	discountedPrice!: number;

	@CreatedAt
	@Column({ field: "create_at", type: DataType.DATE })
	createAt!: Date;

	@UpdatedAt
	@Column({ field: "update_at", type: DataType.DATE })
	updateAt!: Date;
}
