"use server";

import { warehousesService } from "@/api/warehousesService";

export const addWarehouseAction = async (
	prevState: unknown,
	formData: FormData,
) => {
	for (const key of formData.keys()) {
		if (key.startsWith("$ACTION")) {
			formData.delete(key);
			break;
		}
	}

	const warehouse = Object.fromEntries(formData.entries());

	// try / catch
	const res = await warehousesService.add(warehouse);

	if (res) {
		return true;
	}

	return false;
};
