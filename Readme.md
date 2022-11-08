# eslint-plugin-confidence

![status](https://github.com/we-fun/eslint-plugin-confidence/actions/workflows/lint-and-test.yml/badge.svg)

> Use this in caution! Only if you know what you are doing ;)

> Forked from the awesome [eslint-plugin-only-warn](https://github.com/bfanger/), MIT licensed.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-confidence`:

```
$ npm install eslint-plugin-confidence --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-confidence` globally.

## Usage

Add `confidence` to the plugins section of your `.eslintrc` configuration file:

```json
{
  "plugins": ["confidence"]
}
```

This will make eslint cli report an errorcode which can be detected in git hook or CI pipeline.

Tip: Use [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) te prevent committing eslint warnings.

# Features

- Suppress all warnings
- Report errors with a `Math.random()`

# Why confidence?

- Sometimes we want to strengthen confidence of the whole team
- With less warnings and errors reported, team members get more confidence
- With much more confidence, people will focus on what they are coding and think less
