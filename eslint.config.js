import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      globals: { window: 'readonly', document: 'readonly', console: 'readonly' }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
]
