import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormEditWarehouse } from "./FormEditWarehouse";
import { warehousesService } from "@/api/warehousesService";
import { notFound } from "next/navigation";

export default async function EditWarehouse({
	params,
}: { params: Promise<{ id: string }> }) {
	const id = (await params).id;
	const warehouse = await warehousesService.findOneById(id);

	if (!warehouse) return notFound();

	return (
		<div className="container mx-auto p-4">
			<Card>
				<CardHeader>
					<CardTitle>Редактирование склада</CardTitle>
				</CardHeader>
				<CardContent>
					<FormEditWarehouse warehouse={warehouse} />
				</CardContent>
			</Card>
		</div>
	);
}
