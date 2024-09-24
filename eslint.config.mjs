// /* eslint-disable @typescript-eslint/no-unused-vars */
// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from 'typescript-eslint';

// // Нужно чтобы работали подсказки типов в конфиге
// import { Linter } from "eslint";

// /**
//  * @type {Linter.Config}
//  */
// const options = [
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,

//   {
//     files: [
//       "src/**/*.{js,ts}"
//     ],
//     rules: {
//       '@typescript-eslint/ban-ts-comment': 0,
//       "@typescript-eslint/await-thenable": "error",
//       "@typescript-eslint/ban-tslint-comment": 0,
//        "@typescript-eslint/method-signature-style": ["error", 'property'],
//        "@typescript-eslint/no-explicit-any": "warn"
//     },
//   },
//   {
//     languageOptions: {
//       globals: globals.browser,
//     }
//   },
// ];


// export default options;

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/ban-tslint-comment": 0,
      "@typescript-eslint/method-signature-style": ["error", 'property'],
      "@typescript-eslint/no-explicit-any": "warn",
      '@typescript-eslint/no-unused-vars': 'warn',
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-mixed-enums": "error",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment": "warn"
    },
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    files: ["/src/*"]
  }
);