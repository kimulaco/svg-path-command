import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for s command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['s', [1, 2, 3, 4]],
      getters: {
        isRelative: true,
        params: [1, 2, 3, 4],
        value: {
          dx2: 1,
          dy2: 2,
          dx: 3,
          dy: 4,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          dx2: 11,
          dy2: 12,
          dx: 13,
          dy: 14,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx2: 11,
          dy2: 12,
          dx: 13,
          dy: 14,
        })
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          dx2: 11,
          dy2: 12,
          dx: 13,
          dy: 14,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['s', [1, 2, 3]],
      error: 'Invalid params of s command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of s command: [11, 12, 13]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx2: 11,
          dy2: 12,
          x: 13,
          y: 14,
        })
        return cmd
      },
      error: 'Invalid value of s command: {"dx2":11,"dy2":12,"x":13,"y":14}',
    },
  ],
})

testPathCommand('test for S command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['S', [1, 2, 3, 4]],
      getters: {
        isRelative: false,
        params: [1, 2, 3, 4],
        value: {
          x2: 1,
          y2: 2,
          x: 3,
          y: 4,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          x2: 11,
          y2: 12,
          x: 13,
          y: 14,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          x2: 11,
          y2: 12,
          x: 13,
          y: 14,
        })
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          x2: 11,
          y2: 12,
          x: 13,
          y: 14,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['S', [1, 2, 3]],
      error: 'Invalid params of S command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of S command: [11, 12, 13]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          x2: 11,
          y2: 12,
          dx: 13,
          dy: 14,
        })
        return cmd
      },
      error: 'Invalid value of S command: {"x2":11,"y2":12,"dx":13,"dy":14}',
    },
  ],
})
