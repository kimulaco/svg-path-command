import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for a command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      getters: {
        isRelative: true,
        params: [1, 2, 3, 4, 5, 6, 7],
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
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16, 17])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14, 15, 16, 17],
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
    },
    {
      name: 'sholud update params by updateValues()',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateValue({
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          dx: 16,
          dy: 17,
        })
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14, 15, 16, 17],
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
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['a', [1, 2, 3, 4, 5, 6]],
      error: 'Invalid params of a command: [1, 2, 3, 4, 5, 6]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      error: 'Invalid params of a command: [11, 12, 13, 14, 15, 16]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValues()',
      args: ['a', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateValue({
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          x: 16,
          y: 17,
        })
        return cmd
      },
      error: `Invalid value of a command: ${JSON.stringify({
        rx: 11,
        ry: 12,
        xAxisRotation: 13,
        largeArcFlag: 14,
        sweepFlag: 15,
        x: 16,
        y: 17,
      })}`,
    },
  ],
})

testPathCommand('test for A command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      getters: {
        isRelative: false,
        params: [1, 2, 3, 4, 5, 6, 7],
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
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16, 17])
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14, 15, 16, 17],
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
    },
    {
      name: 'sholud update params by updateValues()',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateValue({
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          x: 16,
          y: 17,
        })
        return cmd
      },
      getters: {
        params: [11, 12, 13, 14, 15, 16, 17],
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
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['A', [1, 2, 3, 4, 5, 6]],
      error: 'Invalid params of A command: [1, 2, 3, 4, 5, 6]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12, 13, 14, 15, 16])
        return cmd
      },
      error: 'Invalid params of A command: [11, 12, 13, 14, 15, 16]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValues()',
      args: ['A', [1, 2, 3, 4, 5, 6, 7]],
      beforeTest(cmd) {
        cmd.updateValue({
          rx: 11,
          ry: 12,
          xAxisRotation: 13,
          largeArcFlag: 14,
          sweepFlag: 15,
          dx: 16,
          dy: 17,
        })
        return cmd
      },
      error: `Invalid value of A command: ${JSON.stringify({
        rx: 11,
        ry: 12,
        xAxisRotation: 13,
        largeArcFlag: 14,
        sweepFlag: 15,
        dx: 16,
        dy: 17,
      })}`,
    },
  ],
})
