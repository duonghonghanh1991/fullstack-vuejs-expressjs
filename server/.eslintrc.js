module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "process": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "ignorePatterns": ["node_modules/"],
  "rules": {
  }
};