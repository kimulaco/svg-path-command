import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for s command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['s', [1, 2, 3, 4]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx2: 1,
          dy2: 2,
          dx: 3,
          dy: 4,
        },
      },
      methods: {
        toString: [undefined, 's 1 2 3 4'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx2: 11,
          dy2: 12,
          dx: 13,
          dy: 14,
        },
      },
      methods: {
        toString: [undefined, 's 11 12 13 14'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['s', [1, 2, 3]],
      error: 'Invalid params of s command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['s', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of s command: [11, 12, 13]',
    },
  ],
})

testPathCommand('test for S command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['S', [1, 2, 3, 4]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x2: 1,
          y2: 2,
          x: 3,
          y: 4,
        },
      },
      methods: {
        toString: [undefined, 'S 1 2 3 4'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x2: 11,
          y2: 12,
          x: 13,
          y: 14,
        },
      },
      methods: {
        toString: [undefined, 'S 11 12 13 14'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['S', [1, 2, 3]],
      error: 'Invalid params of S command: [1, 2, 3]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['S', [1, 2, 3, 4]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13])
        return cmd
      },
      error: 'Invalid params of S command: [11, 12, 13]',
    },
  ],
})
