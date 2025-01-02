"use server";

import { warehousesService } from "@/api/warehousesService";

export const deleteWarehouseAction = async (
	id: string,
	// formData: FormData,
) => {
	// const id = formData.get("id")?.toString();

	// if (!id) {
	// 	throw new Error("not find id");
	// }

	await warehousesService.deleteById(id);

	// if (warehouse) {
	// 	return { success: true };
	// }
	// return { success: false };
};
