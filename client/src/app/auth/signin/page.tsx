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

const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(2).max(50),
});

type authTypeSchema = z.infer<typeof signInSchema>;

export default function SignInPage() {
	const form = useForm<authTypeSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<main className="flex-1">
			<h2 className="text-foreground text-center font-bold mt-5 text-5xl">
				Sign in
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
										<Input type="email" placeholder="email" {...field} />
									</FormControl>
									<FormDescription>This is your email</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="h-3" />
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="password" {...field} />
									</FormControl>
									<FormDescription>This is your Password</FormDescription>
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
