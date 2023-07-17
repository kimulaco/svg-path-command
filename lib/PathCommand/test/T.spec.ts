import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for t command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['t', [1, 2]],
      getters: {
        isRelative: true,
        params: [1, 2],
        value: {
          dx: 1,
          dy: 2,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          dx: 11,
          dy: 12,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
          dy: 12,
        })
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          dx: 11,
          dy: 12,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['t', [1]],
      error: 'Invalid params of t command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of t command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      error: 'Invalid value of t command: {"x":11,"y":12}',
    },
  ],
})

testPathCommand('test for T command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['T', [1, 2]],
      getters: {
        isRelative: false,
        params: [1, 2],
        value: {
          x: 1,
          y: 2,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['T', [1]],
      error: 'Invalid params of T command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of T command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
          dy: 12,
        })
        return cmd
      },
      error: 'Invalid value of T command: {"dx":11,"dy":12}',
    },
  ],
})
