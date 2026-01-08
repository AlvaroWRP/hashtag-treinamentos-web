import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            'no-constant-condition': 'warn',
            'no-unused-vars': 'warn',
            semi: 'error',
        },
    },
    pluginJs.configs.recommended,
    eslintPluginPrettier,
];
