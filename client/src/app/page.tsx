import { Dashboard } from "./Dashboard";

export default async function Home() {
	const promises = Promise.all([]);

	return (
		<main className="flex h-full">
			<div className="container flex justify-center mx-auto">
				<Dashboard promises={promises} />
			</div>
		</main>
	);
}
