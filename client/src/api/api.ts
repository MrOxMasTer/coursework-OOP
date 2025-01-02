// import "server-only";

import ky from "ky";

export const api = ky.create({
	prefixUrl: "http://localhost:5001",
});
