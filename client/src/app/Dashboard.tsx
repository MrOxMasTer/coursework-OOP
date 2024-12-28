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
import { useAuth } from "@/hooks/useAuth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

import { use, useState } from "react";
import Products from "./Products";
import { Package, Truck, BarChart3 } from "lucide-react";

type DashboardProps = {
	promises: Promise<[]>;
};

export const Dashboard = ({ promises }: DashboardProps) => {
	const [state, setState] = useState<[] | null>([]);
	const { loading, isAuthenticated } = useAuth();

	if (loading) {
		return <>Загрузка...</>;
	}

	if (isAuthenticated) {
		const result = use(promises);
		setState(result);
	}

	return state ? (
		<Tabs defaultValue="dashboard" className="space-y-4 mt-12">
			<TabsList>
				<TabsTrigger value="dashboard">Панель управления</TabsTrigger>
				<TabsTrigger value="warehouses">Склады</TabsTrigger>
				<TabsTrigger value="orders">Заказы</TabsTrigger>
				<TabsTrigger value="products">Товары</TabsTrigger>
			</TabsList>

			<TabsContent value="dashboard">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Всего товаров
							</CardTitle>
							<Package className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">15,231</div>
							<p className="text-xs text-muted-foreground">
								+2.5% с прошлого месяца
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Активные заказы
							</CardTitle>
							<Truck className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">342</div>
							<p className="text-xs text-muted-foreground">
								+18% с прошлой недели
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Общая стоимость запасов
							</CardTitle>
							<BarChart3 className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">₽12,543,234</div>
							<p className="text-xs text-muted-foreground">
								+7% с прошлого квартала
							</p>
						</CardContent>
					</Card>
				</div>
			</TabsContent>

			<TabsContent value="warehouses">
				<Card>
					<CardHeader>
						<CardTitle>Управление складами</CardTitle>
						<CardDescription>
							Просмотр и редактирование информации о складах
						</CardDescription>
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
									<TableHead>Заполненность</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>001</TableCell>
									<TableCell>Центральный склад</TableCell>
									<TableCell>Москва</TableCell>
									<TableCell>10,000 м²</TableCell>
									<TableCell>75%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>002</TableCell>
									<TableCell>Северный склад</TableCell>
									<TableCell>Санкт-Петербург</TableCell>
									<TableCell>8,000 м²</TableCell>
									<TableCell>60%</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>003</TableCell>
									<TableCell>Южный склад</TableCell>
									<TableCell>Краснодар</TableCell>
									<TableCell>5,000 м²</TableCell>
									<TableCell>80%</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>

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
		</Tabs>
	) : (
		"Привет, у тебя нет доступа"
	);
};
