type Tab = {
	value: string;
	href: string;
	text: string;
};

export const tabs: Tab[] = [
	{
		value: "dashboard",
		href: "/",
		text: "Панель управления",
	},
	{
		value: "warehouses",
		href: "/warehouses",
		text: "Склады",
	},
	{
		value: "orders",
		href: "/orders",
		text: "Заказы",
	},
	{
		value: "products",
		href: "/products",
		text: "Товары",
	},
];
