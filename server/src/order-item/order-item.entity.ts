import {
	Table,
	PrimaryKey,
	Default,
	Column,
	DataType,
	ForeignKey,
	Model,
	BelongsTo,
} from "sequelize-typescript";
import { Order } from "src/order/order.entity";
import { Product } from "src/product/product.entity";
import { Warehouse } from "src/warehouse/warehouse.entity";
import { v7 } from "uuid";

@Table({ tableName: "order_items", timestamps: false })
export class OrderItem extends Model {
	@PrimaryKey
	@Default(() => v7())
	@Column(DataType.UUID)
	id!: string;

	@ForeignKey(() => Order)
	@Column({ field: "order_id", type: DataType.UUID, allowNull: false })
	orderId!: string;

	@BelongsTo(() => Order)
	order!: Order;

	@ForeignKey(() => Product)
	@Column({ field: "product_id", type: DataType.UUID, allowNull: false })
	productId!: string;

	@BelongsTo(() => Product)
	product!: Product;

	@Column({ allowNull: false, type: DataType.INTEGER })
	quantity!: number;

	@ForeignKey(() => Warehouse)
	@Column({ field: "warehouse_id", type: DataType.UUID, allowNull: false })
	warehouseId!: string;

	@BelongsTo(() => Warehouse)
	warehouse!: Warehouse;
}
