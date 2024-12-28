// import "server-only";

import ky from "ky";

export const api = ky.extend({
	prefixUrl: "http://localhost:5001",
});
