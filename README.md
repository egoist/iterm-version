# iterm-version [![NPM version](https://img.shields.io/npm/v/iterm-version.svg)](https://npmjs.com/package/iterm-version) [![NPM downloads](https://img.shields.io/npm/dm/iterm-version.svg)](https://npmjs.com/package/iterm-version) [![Build Status](https://img.shields.io/circleci/project/EGOIST/iterm-version/master.svg)](https://circleci.com/gh/EGOIST/iterm-version)

> Get iTerm version.

## Install

```bash
$ npm install --save iterm-version
```

## Usage

```js
const itermVersion = require('iterm-version')

itermVersion()
	.then(version => console.log(version))
	.catch(e => console.log(e.message))
```

## API

### itermVersion()

Return a Promise which resolves the version string.

### itermVersion.sync()

Return version string.

## License

MIT © [EGOIST](https://github.com/egoist)
