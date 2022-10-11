import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/index.ts"),
			name: "types",
			fileName: format => `requests.${format}.js`
		},
		commonjsOptions: {
			exclude: ["./src/*"]
		}
	}
})
