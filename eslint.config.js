import { defineConfig } from "eslint-define-config";
import js from "@eslint/js";
import next from "eslint-config-next";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  js.configs.recommended,
  next(),
  {
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
