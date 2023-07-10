import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for l command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['l', [1, 2]],
      getters: {
        isRelative: true,
        params: [1, 2],
        value: {
          dx: 1,
          dy: 2,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['l', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          dx: 11,
          dy: 12,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['l', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
          dy: 12,
        })
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          dx: 11,
          dy: 12,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['l', [1]],
      error: 'Invalid params of l command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['l', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of l command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['l', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      error: `Invalid value of l command: ${JSON.stringify({
        x: 11,
        y: 12,
      })}`,
    },
  ],
})

testPathCommand('test for L command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['L', [1, 2]],
      getters: {
        isRelative: false,
        params: [1, 2],
        value: {
          x: 1,
          y: 2,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['L', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['L', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      getters: {
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['L', [1]],
      error: 'Invalid params of L command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['L', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of L command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['L', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
          dy: 12,
        })
        return cmd
      },
      error: `Invalid value of L command: ${JSON.stringify({
        dx: 11,
        dy: 12,
      })}`,
    },
  ],
})
