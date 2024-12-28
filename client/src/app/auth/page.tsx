"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const authSchema = z.object({
	email: z.string().email(),
});

type authTypeSchema = z.infer<typeof authSchema>;

export default function AuthPage() {
	const form = useForm<authTypeSchema>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: "",
		},
	});

	return (
		<main className="flex-1">
			<h2 className="text-foreground text-center font-bold mt-5 text-5xl">
				Auth
			</h2>
			<div className="container mt-16 flex justify-center items-center">
				<div className="w-72">
					<Form {...form}>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="email" {...field} />
									</FormControl>
									<FormDescription>This is your email</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</Form>
				</div>
			</div>
		</main>
	);
}
