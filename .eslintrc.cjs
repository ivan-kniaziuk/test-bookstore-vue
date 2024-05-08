/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest'
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier'
	],
	rules: {
		'prettier/prettier': 'error',
		'vue/html-indent': ['warn', 'tab'],
		'vue/no-v-model-argument': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/script-indent': [
			'warn',
			'tab',
			{
				baseIndent: 0,
				switchCase: 1,
				ignores: []
			}
		]
	}
}
