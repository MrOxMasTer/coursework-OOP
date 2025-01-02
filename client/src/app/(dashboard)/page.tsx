import { ordersService } from "@/api/ordersService";
import { productsService } from "@/api/productsService";
import { warehousesService } from "@/api/warehousesService";
import { connection } from "next/server";
import { DashboardMain } from "./DashboardMain";
import { PromisesUse } from "@/lib/typesHelper";

function getPromises() {
	return [
		productsService.count(),
		ordersService.count(),
		ordersService.activeCount(),
		warehousesService.count(),
	];
}

export type Promises = PromisesUse<typeof getPromises>;

export default async function Home() {
	await connection();
	const newPromises = Promise.all(getPromises());

	try {
		return (
			<main className="flex h-full">
				<div className="container flex justify-center mx-auto">
					<DashboardMain promises={newPromises} />
				</div>
			</main>
		);
	} catch (err) {
		return err;
	}
}
