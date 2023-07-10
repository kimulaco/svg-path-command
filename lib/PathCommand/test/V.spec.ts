import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for v command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['v', [1]],
      getters: {
        isRelative: true,
        params: [1],
        value: {
          dy: 1,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        params: [11],
        value: {
          dy: 11,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          dy: 11,
        })
        return cmd
      },
      getters: {
        params: [11],
        value: {
          dy: 11,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['v', []],
      error: 'Invalid params of v command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of v command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          y: 11,
        })
        return cmd
      },
      error: 'Invalid value of v command: {"y":11}',
    },
  ],
})

testPathCommand('test for V command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['V', [1]],
      getters: {
        isRelative: false,
        params: [1],
        value: {
          y: 1,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        params: [11],
        value: {
          y: 11,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        params: [11],
        value: {
          y: 11,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['V', []],
      error: 'Invalid params of V command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of V command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          dy: 11,
        })
        return cmd
      },
      error: 'Invalid value of V command: {"dy":11}',
    },
  ],
})
