import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormAddWarehouse } from "./FormAddWarehouse";

export default function AddWarehousePage() {
	return (
		<div className="container mx-auto p-4">
			<Card>
				<CardHeader>
					<CardTitle>Добавление нового склада</CardTitle>
				</CardHeader>
				<CardContent>
					<FormAddWarehouse />
				</CardContent>
			</Card>
		</div>
	);
}
