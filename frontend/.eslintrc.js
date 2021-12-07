module.exports = {
    env: {
        browser: true, es2021: true,
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "consistent-return": "off",
        "eol-last": "off",
        "no-case-declarations": "off",
        indent: [2, 4],
        "indent-legacy": "error",
        quotes: [2, "double", "avoid-escape"],
        "object-curly-spacing": [1, "never"],
        "comma-dangle": [1, "always-multiline"],
        curly: [2, "multi-line"],
        "no-unused-vars": [2, {
            vars: "all", args: "none",
        }],
        "no-mixed-requires": [1],
        "space-before-function-paren": ["error", {
            anonymous: "always", named: "always", asyncArrow: "ignore",
        }],
        "padding-line-between-statements": ["error", {
            blankLine: "always", prev: "var", next: "return",
        }],
        "no-multi-spaces": ["error", {
            ignoreEOLComments: true,
        }],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": ["off"],
        "react/display-name": ["off"],
        "react/prop-types": ["off"],
        camelcase: "off",
        "no-restricted-imports": "error",
        "sort-imports": "warn",
    },
};
