import {
	Column,
	Model,
	Table,
	PrimaryKey,
	Default,
	DataType,
} from "sequelize-typescript";
import { v7 } from "uuid";

@Table({ tableName: "categories", timestamps: false })
export class Category extends Model {
	@PrimaryKey
	@Default(() => v7())
	@Column(DataType.UUID)
	id!: string;

	@Column({ allowNull: false, type: DataType.STRING(255) })
	name!: string;
}
