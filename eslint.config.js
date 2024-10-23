export default [
  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
    },
  },
];
