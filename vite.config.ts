import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import generouted from '@generouted/tanstack-react-router'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        watch: {
            usePolling: true,
        },
    },
    plugins: [react(), tsConfigPaths(), generouted()],
});
