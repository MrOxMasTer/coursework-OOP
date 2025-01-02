import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Package, Truck, BarChart3, Warehouse } from "lucide-react";
import { use } from "react";
import { Promises } from "./page";

type DashboardMainProps = {
	promises: Promises;
};

export const DashboardMain = ({ promises, ...props }: DashboardMainProps) => {
	const state = use(promises);

	const countProducts = state?.[0] ? state[0].count : null;
	const countOrders = state?.[1] ? state[1].count : null;
	const countActiveOrders = state?.[2] ? state[2].count : null;
	const countWarehouses = state?.[3] ? state[3].count : null;

	return (
		<TabsContent value="dashboard" {...props}>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 last:*:lg:col-span-full">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Всего товаров</CardTitle>
						<Package className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{countProducts}</div>
						<p className="text-xs text-muted-foreground">
							+0% с прошлого месяца
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							количество заказов
						</CardTitle>
						<Truck className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{countOrders}</div>
						<p className="text-xs text-muted-foreground">
							+0% с прошлой недели
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							активных заказов
						</CardTitle>
						<BarChart3 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{countActiveOrders}</div>
						<p className="text-xs text-muted-foreground">
							+0% с прошлого квартала
						</p>
					</CardContent>
				</Card>
				<Card className="">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							количество складов
						</CardTitle>
						<Warehouse className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{countWarehouses}</div>
						<p className="text-xs text-muted-foreground">
							+0% с прошлого квартала
						</p>
					</CardContent>
				</Card>
			</div>
		</TabsContent>
	);
};
