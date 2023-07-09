import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for l command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['l', [1, 2]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 1,
          dy: 2,
        },
      },
      methods: {
        toString: [undefined, 'l 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['l', [1, 2]],
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
        toString: [undefined, 'l 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['l', [1]],
      error: 'Invalid params of l command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['l', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of l command: [11]',
    },
  ],
})

testPathCommand('test for L command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['L', [1, 2]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 1,
          y: 2,
        },
      },
      methods: {
        toString: [undefined, 'L 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['L', [1, 2]],
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
        toString: [undefined, 'L 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['L', [1]],
      error: 'Invalid params of L command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['L', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of L command: [11]',
    },
  ],
})
