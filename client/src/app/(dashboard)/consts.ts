type Tab = {
	value: string;
	href: string;
	text: string;
};

export const tabs: Tab[] = [
	{
		value: "dashboard",
		href: "/",
		text: "Control Panel",
	},
	{
		value: "warehouses",
		href: "/warehouses",
		text: "Warehouses",
	},
	{
		value: "orders",
		href: "/orders",
		text: "Orders",
	},
	{
		value: "products",
		href: "/products",
		text: "Products",
	},
];
