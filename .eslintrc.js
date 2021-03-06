// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //   'js': 'never',
    //   'vue': 'never'
    // }],
    'quotes': 0,
    'indent': 0,
    'object-curly-spacing': 0,
    'comma-dangle': 0,
    'semi': 0,
    'quote-props': 0,
    'no-alert':0,
    'prefer-const':0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    // 'generator-star-spacing': 0,
    "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "always",
        "asyncArrow": "ignore"
    }],
    
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0
  }
}
