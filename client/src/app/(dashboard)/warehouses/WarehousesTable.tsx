"use client";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import {
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Table,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useOptimistic, useTransition } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenSquare, Trash2 } from "lucide-react";
import { Warehouse } from "@/api/warehousesService";
import { deleteWarehouseAction } from "./deleteWarehouseAction";

type WarehousesProps = {
	// promise: PromisePage;
	warehouses: Warehouse[];
};

export const WarehousesTable = ({ warehouses, ...props }: WarehousesProps) => {
	// const warehouses: Warehouse[] = [
	// 	{ id: "sadasd", capacity: 25, location: "asdasd", name: "LOOLL" },
	// ];

	// const warehouses = use(promise);

	const [isPending, startTransition] = useTransition();

	const [optimisticWarehouses, deleteOptimistic] =
		useOptimistic<Warehouse[]>(warehouses);

	// useEffect(() => {
	// 	console.log(isPending);
	// }, [isPending]);

	useEffect(() => {
		console.log("OPTIM: ", optimisticWarehouses);
	}, [optimisticWarehouses]);

	return (
		<TabsContent value="warehouses" {...props}>
			<Card>
				<CardHeader className="flex justify-between flex-row gap-8">
					<div>
						<CardTitle>Управление складами</CardTitle>
						<CardDescription>
							Просмотр и редактирование информации о складах
						</CardDescription>
					</div>
					<Button variant={"outline"} asChild>
						<Link href="/warehouses/add">Добавить</Link>
					</Button>
				</CardHeader>
				<CardContent>
					<Table>
						<TableCaption>Список активных складов</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>
								<TableHead>Название</TableHead>
								<TableHead>Местоположение</TableHead>
								<TableHead>Вместимость</TableHead>
								<TableHead>Действия</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{optimisticWarehouses.map(({ id, name, capacity, location }) => {
								// const deleteAction = async (formData: FormData) => {
								// 	const id = formData.get("id") as string;

								// 	deleteOptimistic((prev) => {
								// 		const newState = prev.filter((w) => w.id !== id);

								// 		return newState;
								// 	});

								// 	await deleteWarehouseAction(formData);
								// };

								const deleteWarehouseActionWithId = deleteWarehouseAction.bind(
									null,
									id,
								);

								return (
									<TableRow key={id}>
										<TableCell>{id}</TableCell>
										<TableCell>{name}</TableCell>
										<TableCell>{capacity}</TableCell>
										<TableCell>{location}</TableCell>
										<TableCell>
											<div className="flex space-x-2">
												{/* FIXME: LINK /${id}/edit */}
												<Link href={`/warehouses/edit/${id}`}>
													<Button variant="outline" size="sm">
														<PenSquare className="h-4 w-4" />
													</Button>
												</Link>
												{/* <form
													action={deleteAction}
													// onSubmit={async (e) => {
													// 	e.preventDefault();

													// 	const formData = new FormData(e.currentTarget);

													// 	await deleteAction(formData);
													// }}
												> */}
												{/* <input type="hidden" name="id" defaultValue={id} /> */}
												<Button
													onClick={async (e) => {
														startTransition(() =>
															deleteOptimistic((prev) => {
																const newState = prev.filter(
																	(w) => w.id !== id,
																);

																return [...newState];
															}),
														);

														startTransition(async () =>
															deleteWarehouseActionWithId(),
														);
													}}
													variant="outline"
													size="sm"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
												{/* </form> */}
											</div>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</TabsContent>
	);
};
