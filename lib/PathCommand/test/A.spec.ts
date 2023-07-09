import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for a command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          rx: 1,
          ry: 2,
          xAxisRotation: 3,
          largeArcFlag: 4,
          sweepFlag: 5,
          dx: 6,
          dy: 7,
        },
      },
      methods: {
        stringify: [undefined, 'a 1 2 3 4 5 6 7'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud update params',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16, 17])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          dx: 16,
          dy: 17,
        },
      },
      methods: {
        stringify: [undefined, 'a 11 12 13 14 15 16 17'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['a', [1, 2, 3, 4, 5, 6]],
      error: 'Invalid params of a command: [1, 2, 3, 4, 5, 6]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      error: 'Invalid params of a command: [11, 12, 13, 14, 15, 16]',
    },
  ],
})

testPathCommand('test for A command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          rx: 1,
          ry: 2,
          xAxisRotation: 3,
          largeArcFlag: 4,
          sweepFlag: 5,
          x: 6,
          y: 7,
        },
      },
      methods: {
        stringify: [undefined, 'A 1 2 3 4 5 6 7'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud update params',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16, 17])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          x: 16,
          y: 17,
        },
      },
      methods: {
        stringify: [undefined, 'A 11 12 13 14 15 16 17'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['A', [1, 2, 3, 4, 5, 6]],
      error: 'Invalid params of A command: [1, 2, 3, 4, 5, 6]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      error: 'Invalid params of A command: [11, 12, 13, 14, 15, 16]',
    },
  ],
})
