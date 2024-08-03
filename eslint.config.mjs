/* eslint-disable @typescript-eslint/no-unused-vars */
import globals from "globals";
import pluginJs from "@eslint/js";

// Нужно чтобы работали подсказки типов в конфиге
import { Linter } from "eslint";

/**
 * @type {Linter.Config}
 */
const options = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts}"
    ],
    rules: {
    },

  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
];


export default options;