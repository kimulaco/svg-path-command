import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for q command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['q', [1, 2, 3, 4]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx1: 1,
          dy1: 2,
          dx: 3,
          dy: 4,
        },
      },
      methods: {
        toString: [undefined, 'q 1 2 3 4'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx1: 11,
          dy1: 12,
          dx: 13,
          dy: 14,
        },
      },
      methods: {
        toString: [undefined, 'q 11 12 13 14'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['q', [1, 2, 3]],
      error: 'Invalid params of q command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of q command: [11, 12, 13]',
    },
  ],
})

testPathCommand('test for Q command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['Q', [1, 2, 3, 4]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x1: 1,
          y1: 2,
          x: 3,
          y: 4,
        },
      },
      methods: {
        toString: [undefined, 'Q 1 2 3 4'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x1: 11,
          y1: 12,
          x: 13,
          y: 14,
        },
      },
      methods: {
        toString: [undefined, 'Q 11 12 13 14'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['Q', [1, 2, 3]],
      error: 'Invalid params of Q command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['Q', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of Q command: [11, 12, 13]',
    },
  ],
})
