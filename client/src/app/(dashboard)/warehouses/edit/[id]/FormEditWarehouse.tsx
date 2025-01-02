"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { startTransition, useActionState, useEffect } from "react";
import { editWarehouseAction } from "./action";
import { Warehouse } from "@/api/warehousesService";
import { toast } from "@/hooks/use-toast";

type FormEditWarehouseProps = {
	warehouse: Warehouse;
};

export const FormEditWarehouse = ({
	warehouse,
	...props
}: FormEditWarehouseProps) => {
	const { id, location, capacity, name } = warehouse;

	const [state, formAction, isPending] = useActionState(
		editWarehouseAction,
		null,
	);

	// const [name, setName] = useState("");
	// const [capacity, setCapacity] = useState("");
	// const [location, setLocation] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		startTransition(() => formAction(formData));
	};

	useEffect(() => {
		console.log(`STATE: ${state}`);

		if (state !== null) {
			if (state.success) {
				toast({
					title: "Warehouse updated",
					variant: "default",
				});
			} else {
				toast({
					title: "Warehouse not updated",
					variant: "destructive",
				});
			}
		}
	}, [state]);

	return (
		<form
			action={formAction}
			onSubmit={handleSubmit}
			className="space-y-4"
			{...props}
		>
			{/* FIXME: input? */}
			<Input type="hidden" name="id" defaultValue={id} />
			<div className="space-y-2">
				<Label htmlFor="name">Name warehouse</Label>
				<Input
					id="name"
					name="name"
					defaultValue={name}
					// onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="capacity">Capacity (м²)</Label>
				<Input
					id="capacity"
					name="capacity"
					type="number"
					defaultValue={capacity}
					// onChange={(e) => setCapacity(e.target.value)}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="location">Location</Label>
				<Input
					id="location"
					name="location"
					defaultValue={location}
					// onChange={(e) => setLocation(e.target.value)}
					required
				/>
			</div>
			<Button disabled={isPending} type="submit">
				Update warehouse
			</Button>
		</form>
	);
};
