"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { Label } from "@/components/ui/label";

import { useState } from "react";
import Products from "../Products";
import { Promises } from "./page";

type DashboardProps = {
	promises: Promises;
};

export const Dashboard = ({ promises }: DashboardProps) => {
	const isAuthenticated = true;

	const [state, setState] = useState<Awaited<Promises> | null>(null);

	return (
		<>
			<TabsContent value="orders">
				<Card>
					<CardHeader>
						<CardTitle>Управление заказами</CardTitle>
						<CardDescription>Создание и отслеживание заказов</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="order-id">ID заказа</Label>
									<Input id="order-id" placeholder="Введите ID заказа" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="customer">Клиент</Label>
									<Input id="customer" placeholder="Имя клиента" />
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="products">Товары</Label>
								<Input id="products" placeholder="Список товаров" />
							</div>
							<Button>Создать заказ</Button>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="products">
				<Products />
			</TabsContent>
		</>
	);
};