// module.exports = {
//   root: true, // Make sure eslint picks up the config at the root of the directory
//   parserOptions: {
//     ecmaVersion: 2020, // Use the latest ecmascript standard
//     sourceType: "module", // Allows using import/export statements
//     ecmaFeatures: {
//       jsx: true, // Enable JSX since we're using React
//     },
//   },
//   settings: {
//     react: {
//       version: "detect", // Automatically detect the react version
//     },
//     "import/resolver": {
//       node: {
//         moduleDirectory: ["node_modules", "src"],
//       },
//     },
//   },
//   env: {
//     browser: true, // Enables browser globals like window and document
//     amd: true, // Enables require() and define() as global variables as per the amd spec.
//     node: true, // Enables Node.js global variables and Node.js scoping.
//     es6: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
//   ],
//   rules: {
//     "prettier/prettier": [
//       "error",
//       { endOfLine: "auto" },
//       { usePrettierrc: true },
//     ], // Use our .prettierrc file as source
//     "react/react-in-jsx-scope": "off",
//     "jsx-a11y/anchor-is-valid": [
//       "error",
//       {
//         components: ["Link"],
//         specialLink: ["hrefLeft", "hrefRight"],
//         aspects: ["invalidHref", "preferButton"],
//       },
//     ],
//   },
// };

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: { "no-useless-escape": "off" },
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
};
