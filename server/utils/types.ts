export type Simplify<T> = {
	[Key in keyof T]: T[Key];
};
