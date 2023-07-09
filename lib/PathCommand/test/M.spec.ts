import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for m command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['m', [1, 2]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 1,
          dy: 2,
        },
      },
      methods: {
        toString: [undefined, 'm 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['m', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 11,
          dy: 12,
        },
      },
      methods: {
        toString: [undefined, 'm 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['m', [1]],
      error: 'Invalid params of m command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['m', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of m command: [11]',
    },
  ],
})

testPathCommand('test for M command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['M', [1, 2]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 1,
          y: 2,
        },
      },
      methods: {
        toString: [undefined, 'M 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['M', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 11,
          y: 12,
        },
      },
      methods: {
        toString: [undefined, 'M 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['M', [1]],
      error: 'Invalid params of M command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['M', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of M command: [11]',
    },
  ],
})
