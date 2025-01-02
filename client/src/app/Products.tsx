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
		name: "smartphone X",
		category: "Electronics",
		price: 29999,
		stock: 50,
	},
	{
		id: "002",
		name: "Notebook Y",
		category: "Electronics",
		price: 59999,
		stock: 30,
	},
	{
		id: "003",
		name: "T-shirts Z",
		category: "Clothes",
		price: 999,
		stock: 100,
	},
	{ id: "004", name: "Sneakers A", category: "Shoes", price: 4999, stock: 80 },
	{ id: "005", name: "Books B", category: "Books", price: 599, stock: 200 },
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
				<CardTitle>Products management</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="name-filter">Filter by Name</Label>
							<Input
								id="name-filter"
								placeholder="Enter product name"
								value={nameFilter}
								onChange={(e) => setNameFilter(e.target.value)}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="category-filter">Filter by category</Label>
							<Select value={categoryFilter} onValueChange={setCategoryFilter}>
								<SelectTrigger id="category-filter">
									<SelectValue placeholder="Select a category" />
								</SelectTrigger>
								<SelectContent>
									{/* FIXME: null??? */}
									<SelectItem value="null">All Categories</SelectItem>
									<SelectItem value="Electronics">Electronics</SelectItem>
									<SelectItem value="Clothes">Clothes</SelectItem>
									<SelectItem value="Shoes">Shoes</SelectItem>
									<SelectItem value="Books">Books</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Price</TableHead>
								<TableHead>In stock</TableHead>
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
