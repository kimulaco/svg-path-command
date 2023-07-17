import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for z command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['z', []],
      getters: {
        isRelative: true,
        params: [],
        value: {},
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['z', [1]],
      error: 'Invalid params of z command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['z', []],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of z command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['z', []],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
        })
        return cmd
      },
      error: 'Invalid value of z command: {"dx":11}',
    },
  ],
})

testPathCommand('test for Z command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['Z', []],
      getters: {
        isRelative: false,
        params: [],
        value: {},
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['Z', [1]],
      error: 'Invalid params of Z command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['Z', []],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of Z command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['Z', []],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
        })
        return cmd
      },
      error: 'Invalid value of Z command: {"x":11}',
    },
  ],
})
