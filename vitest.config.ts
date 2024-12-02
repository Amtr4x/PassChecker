import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        "./*.config.*",
        "./src/main.ts",
        // This pattern should be remove if you want to test the components in e2e
        "./src/**/*.vue",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
