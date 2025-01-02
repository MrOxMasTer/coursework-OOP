import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: {
		appIsrStatus: true,
	},
	experimental: {
		serverActions: {
			allowedOrigins: ["*", "http://localhost:5001/"],
		},
		// taint
		// ppr
		// typedEnv
		// typedRoutes
		// dynamicIO: true,
		// authInterrupts: true
	},
};

export default nextConfig;
