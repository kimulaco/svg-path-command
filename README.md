# svg-path-command

[![npm version](https://badge.fury.io/js/svg-path-command.svg)](https://badge.fury.io/js/svg-path-command)
[![Test Status](https://github.com/kimulaco/svg-path-command/workflows/Test/badge.svg)](https://github.com/kimulaco/svg-path-command/actions)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/kimulaco/svg-path-command/branch/main/graph/badge.svg?token=SL63YJ6XQ0)](https://codecov.io/gh/kimulaco/svg-path-command)

SVG path data parser library.

## Install

```bash
npm i svg-path-command
```

## Use

```js
import { parse } from 'svg-path-command'
// const { parse } = require('svg-path-command') // If CommonJS

const pathCommand = parse('M2,8 L5,2 L8,8')
console.log(pathCommand.commands)
/*
[
  {
    command: 'M',
    params: [2, 8],
    isRelative: false,
    result: { x: 2, y: 8 },
  },
  {
    command: 'L',
    params: [5, 2],
    isRelative: false,
    result: { x: 5, y: 2 },
  },
  {
    command: 'L',
    params: [8, 8],
    isRelative: false,
    result: { x: 8, y: 8 },
  },
]
*/

pathCommand.commands[1].updateResult({
  x: 10,
  y: 12,
})
console.log(pathCommand.stringify()) // 'M2,8 L10,12 L8,8'
```

## License

[MIT License](LICENSE).
