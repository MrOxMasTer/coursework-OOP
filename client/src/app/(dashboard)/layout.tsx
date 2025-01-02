"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "./consts";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type DashboardLayoutProps = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const router = useRouter();
	const pathname = usePathname();

	// FIXME: href !== "/"
	const activeTab = (
		tabs.find(({ href }) => href !== "/" && pathname.startsWith(href)) ??
		tabs[0]
	).value;

	const handleTabChange = (newValue: string) => {
		const newTab = tabs.find((tab) => tab.value === newValue);

		if (newTab && newTab.href !== pathname) {
			router.push(newTab.href);
		}
	};

	return (
		<div className="container">
			<Tabs
				onValueChange={handleTabChange}
				defaultValue={activeTab}
				className="flex-grow flex flex-col space-y-4 mt-4"
			>
				<TabsList>
					{tabs.map(({ href, text, value }) => (
						<TabsTrigger key={value} asChild value={value}>
							<Link href={href}>{text}</Link>
						</TabsTrigger>
					))}
				</TabsList>
				<div className="flex-grow">{children}</div>
			</Tabs>
		</div>
	);
}
