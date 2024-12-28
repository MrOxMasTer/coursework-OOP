"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/hooks/useAppContext";
import { setMobileSidenav } from "@/context/app-context";
import { Menu, Moon, Sun } from "lucide-react";

type Props = HTMLAttributes<HTMLDivElement>;

const DashboardNavbar = ({ className, ...props }: Props) => {
	const { setTheme } = useTheme();
	const [state, dispatch] = useAppContext();
	const { mobileSidenav } = state;

	return (
		<div className={cn("", className)} {...props}>
			<div className="py-4 px-7 flex justify-between gap-6 shadow border-y border-border">
				<div className="capitalize">
					<Button
						size="icon"
						variant="outline"
						className="w-8 h-8 flex md:hidden items-center justify-center"
						onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
					>
						<Menu className="w-4 h-4" />
					</Button>
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="w-8 h-8">
							<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							Light
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							Dark
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							System
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default DashboardNavbar;
