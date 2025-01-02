export type PromisesUse<T extends (...all: unknown[]) => readonly unknown[]> =
	ReturnType<typeof Promise.all<ReturnType<T>>>;
