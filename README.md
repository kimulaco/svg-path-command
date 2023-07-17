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

const pathCommand = parse('M2,8 L5,2 L8,8')
console.log(pathCommand.stringify()) // 'M2 8 L5 2 L8 8'

pathCommand.commands[0].updateParams([4, 16])

pathCommand.commands[1].updateValue({
  x: 10,
  y: 4,
})

console.log(pathCommand.stringify()) // 'M4 16 L10 4 L8 8'
```

See [API Doc](https://kimulaco.github.io/svg-path-command/) for detailed usage

## License

[MIT License](LICENSE).
