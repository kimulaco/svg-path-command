import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for q command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['q', [1, 2, 3, 4]],
      getters: {
        isRelative: true,
        params: [1, 2, 3, 4],
        value: {
          dx1: 1,
          dy1: 2,
          dx: 3,
          dy: 4,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          dx1: 11,
          dy1: 12,
          dx: 13,
          dy: 14,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx1: 11,
          dy1: 12,
          dx: 13,
          dy: 14,
        })
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          dx1: 11,
          dy1: 12,
          dx: 13,
          dy: 14,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['q', [1, 2, 3]],
      error: 'Invalid params of q command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of q command: [11, 12, 13]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx1: 11,
          dy1: 12,
          x: 13,
          y: 14,
        })
        return cmd
      },
      error: 'Invalid value of q command: {"dx1":11,"dy1":12,"x":13,"y":14}',
    },
  ],
})

testPathCommand('test for Q command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['Q', [1, 2, 3, 4]],
      getters: {
        isRelative: false,
        params: [1, 2, 3, 4],
        value: {
          x1: 1,
          y1: 2,
          x: 3,
          y: 4,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          x1: 11,
          y1: 12,
          x: 13,
          y: 14,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14],
        value: {
          x1: 11,
          y1: 12,
          x: 13,
          y: 14,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['Q', [1, 2, 3]],
      error: 'Invalid params of Q command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of Q command: [11, 12, 13]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateValue({
          x1: 11,
          y1: 12,
          dx: 13,
          dy: 14,
        })
        return cmd
      },
      error: 'Invalid value of Q command: {"x1":11,"y1":12,"dx":13,"dy":14}',
    },
  ],
})
