import {
	Table,
	PrimaryKey,
	Default,
	Column,
	DataType,
	CreatedAt,
	UpdatedAt,
	Model,
} from "sequelize-typescript";
import { v7 } from "uuid";

@Table({ tableName: "orders", timestamps: true })
export class Order extends Model {
	@PrimaryKey
	@Default(() => v7())
	@Column(DataType.UUID)
	id!: string;

	@Column({ allowNull: false, field: "order_date", type: DataType.DATE })
	orderDate!: Date;

	@Column({ allowNull: false, type: DataType.STRING(50) })
	status!: string;

	@CreatedAt
	@Column({ field: "create_at", type: DataType.DATE })
	createAt!: Date;

	@UpdatedAt
	@Column({ field: "update_at", type: DataType.DATE })
	updateAt!: Date;
}
