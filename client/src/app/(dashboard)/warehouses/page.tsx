import { warehousesService } from "@/api/warehousesService";
import { connection } from "next/server";
import { WarehousesTable } from "./WarehousesTable";

function getPromise() {
	return warehousesService.findAll();
}

export type PromisePage = ReturnType<typeof getPromise>;

export default async function WarehousePage() {
	await connection();
	// const promise = getPromise();

	const warehouses = await warehousesService.findAll();

	try {
		return (
			<main className="flex h-full">
				<div className="container flex justify-center mx-auto">
					<WarehousesTable warehouses={warehouses} />
				</div>
			</main>
		);
	} catch (err) {
		return err;
	}
}
