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
        'standard',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        semi: ['warn', 'always'],
        indent: ['warn', 4],
        'space-before-function-paren': ['warn', 'never'],

        'vue/html-indent': ['warn', 4]
    }
};
