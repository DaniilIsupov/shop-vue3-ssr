/**
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = {
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    extends: [
        'eslint:recommended',
        // 'prettier',
        // 'plugin:prettier/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'vue/html-indent': ['warn', 4]
    }
};
