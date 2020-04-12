module.exports = {
  root: true,

  env: {
    node: true,
    es6: true,
    browser: true,
  },

  plugins: ["prettier", "vue"],

  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },

  globals: {
    $nuxt: true,
  },

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },

  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
};
