import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Category } from "src/category/category.entity";
import { OrderItem } from "src/order-item/order-item.entity";
import { Order } from "src/order/order.entity";
import { Product } from "src/product/product.entity";
import { Warehouse } from "src/warehouse/warehouse.entity";

export const dataSourceOptions: SequelizeModuleOptions = {
	dialect: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "oop",
	synchronize: false, // FIXME: nest.js documents
	models: [Category, Order, OrderItem, Product, Warehouse],
	autoLoadModels: true,
};

export default dataSourceOptions;
