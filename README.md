# svg-path-command

[![Test Status](https://github.com/kimulaco/svg-path-command/workflows/Test/badge.svg)](https://github.com/kimulaco/svg-path-command/actions)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/kimulaco/svg-path-command/branch/main/graph/badge.svg?token=SL63YJ6XQ0)](https://codecov.io/gh/kimulaco/svg-path-command)

## Install

```bash
npm i svg-path-command
```

## Use

```js
import { parse } from 'svg-path-command'

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
    params: [Array],
    isRelative: false,
    result: { x: 5, y: 2 },
  },
  {
    command: 'L',
    params: [Array],
    isRelative: false,
    result: { x: 8, y: 8 },
  },
]
*/
```

## License

[MIT License](LICENSE).
