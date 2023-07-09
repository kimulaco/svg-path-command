import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for z command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['z', []],
      getters: {
        isValid: true,
        isRelative: true,
        value: {},
      },
      methods: {
        toString: [undefined, 'z'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['z', [1]],
      error: 'Invalid params of z command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['z', []],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of z command: [11]',
    },
  ],
})

testPathCommand('test for Z command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['Z', []],
      getters: {
        isValid: true,
        isRelative: false,
        value: {},
      },
      methods: {
        toString: [undefined, 'Z'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['Z', [1]],
      error: 'Invalid params of Z command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['Z', []],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of Z command: [11]',
    },
  ],
})
