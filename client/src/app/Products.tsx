"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Пример данных о товарах
const productsData = [
	{
		id: "001",
		name: "Смартфон X",
		category: "Электроника",
		price: 29999,
		stock: 50,
	},
	{
		id: "002",
		name: "Ноутбук Y",
		category: "Электроника",
		price: 59999,
		stock: 30,
	},
	{ id: "003", name: "Футболка Z", category: "Одежда", price: 999, stock: 100 },
	{ id: "004", name: "Кроссовки A", category: "Обувь", price: 4999, stock: 80 },
	{ id: "005", name: "Книга B", category: "Книги", price: 599, stock: 200 },
];

export default function Products() {
	const [nameFilter, setNameFilter] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("");

	const filteredProducts = productsData.filter(
		(product) =>
			product.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
			(categoryFilter === "" || product.category === categoryFilter),
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Управление товарами</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="name-filter">Фильтр по названию</Label>
							<Input
								id="name-filter"
								placeholder="Введите название товара"
								value={nameFilter}
								onChange={(e) => setNameFilter(e.target.value)}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="category-filter">Фильтр по категории</Label>
							<Select value={categoryFilter} onValueChange={setCategoryFilter}>
								<SelectTrigger id="category-filter">
									<SelectValue placeholder="Выберите категорию" />
								</SelectTrigger>
								<SelectContent>
									{/* FIXME: null??? */}
									<SelectItem value="null">Все категории</SelectItem>
									<SelectItem value="Электроника">Электроника</SelectItem>
									<SelectItem value="Одежда">Одежда</SelectItem>
									<SelectItem value="Обувь">Обувь</SelectItem>
									<SelectItem value="Книги">Книги</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>
								<TableHead>Название</TableHead>
								<TableHead>Категория</TableHead>
								<TableHead>Цена</TableHead>
								<TableHead>На складе</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredProducts.map((product) => (
								<TableRow key={product.id}>
									<TableCell>{product.id}</TableCell>
									<TableCell>{product.name}</TableCell>
									<TableCell>{product.category}</TableCell>
									<TableCell>{product.price} ₽</TableCell>
									<TableCell>{product.stock}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}
