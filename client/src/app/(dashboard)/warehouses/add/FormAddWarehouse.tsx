"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { startTransition, useActionState, useEffect, useState } from "react";
import { addWarehouseAction } from "./action";
import { toast } from "@/hooks/use-toast";

export const FormAddWarehouse = () => {
	const [state, formAction, isPending] = useActionState(
		addWarehouseAction,
		null,
	);

	const [name, setName] = useState("");
	const [capacity, setCapacity] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		startTransition(() => formAction(formData));
	};

	useEffect(() => {
		if (state !== null) {
			if (state) {
				toast({
					title: "Warehouse created",
					variant: "default",
				});
			} else {
				toast({
					title: "Warehouse not created",
					variant: "destructive",
				});
			}
		}
	}, [state]);

	return (
		<form action={formAction} onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Название склада</Label>
				<Input
					id="name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="capacity">Вместимость (м²)</Label>
				<Input
					id="capacity"
					name="capacity"
					type="number"
					value={capacity}
					onChange={(e) => setCapacity(e.target.value)}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="location">Местоположение</Label>
				<Input
					id="location"
					name="location"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					required
				/>
			</div>
			<Button type="submit" disabled={isPending}>
				Добавить склад
			</Button>
		</form>
	);
};
