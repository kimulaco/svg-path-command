import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for c command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['c', [1, 2, 3, 4, 5, 6]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx1: 1,
          dy1: 2,
          dx2: 3,
          dy2: 4,
          dx: 5,
          dy: 6,
        },
      },
      methods: {
        stringify: [undefined, 'c 1 2 3 4 5 6'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['c', [1, 2, 3, 4, 5, 6]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx1: 11,
          dy1: 12,
          dx2: 13,
          dy2: 14,
          dx: 15,
          dy: 16,
        },
      },
      methods: {
        stringify: [undefined, 'c 11 12 13 14 15 16'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['c', [1, 2, 3, 4, 5]],
      error: 'Invalid params of c command: [1, 2, 3, 4, 5]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['c', [1, 2, 3, 4, 5, 6]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15])
        return cmd
      },
      error: 'Invalid params of c command: [11, 12, 13, 14, 15]',
    },
  ],
})

testPathCommand('test for C command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['C', [1, 2, 3, 4, 5, 6]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x1: 1,
          y1: 2,
          x2: 3,
          y2: 4,
          x: 5,
          y: 6,
        },
      },
      methods: {
        stringify: [undefined, 'C 1 2 3 4 5 6'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['C', [1, 2, 3, 4, 5, 6]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x1: 11,
          y1: 12,
          x2: 13,
          y2: 14,
          x: 15,
          y: 16,
        },
      },
      methods: {
        stringify: [undefined, 'C 11 12 13 14 15 16'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['C', [1, 2, 3, 4, 5]],
      error: 'Invalid params of C command: [1, 2, 3, 4, 5]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['C', [1, 2, 3, 4, 5, 6]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15])
        return cmd
      },
      error: 'Invalid params of C command: [11, 12, 13, 14, 15]',
    },
  ],
})
