import {
	Table,
	PrimaryKey,
	Default,
	Column,
	DataType,
	Model,
} from "sequelize-typescript";
import { v7 } from "uuid";

@Table({ tableName: "warehouses", timestamps: false })
export class Warehouse extends Model {
	@PrimaryKey
	@Default(() => v7())
	@Column(DataType.UUID)
	id!: string;

	@Column({ allowNull: false, type: DataType.STRING(255) })
	name!: string;

	@Column({ allowNull: false, type: DataType.INTEGER })
	capacity!: number;

	@Column({ allowNull: true, type: DataType.TEXT })
	location!: string;
}
