import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for m command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['m', [1, 2]],
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
      args: ['m', [1, 2]],
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
      args: ['m', [1, 2]],
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
      args: ['m', [1]],
      error: 'Invalid params of m command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['m', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of m command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['m', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      error: `Invalid value of m command: ${JSON.stringify({
        x: 11,
        y: 12,
      })}`,
    },
  ],
})

testPathCommand('test for M command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['M', [1, 2]],
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
      args: ['M', [1, 2]],
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
      args: ['M', [1, 2]],
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
      args: ['M', [1]],
      error: 'Invalid params of M command: [1]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['M', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of M command: [11]',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['M', [1, 2]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
          dy: 12,
        })
        return cmd
      },
      error: `Invalid value of M command: ${JSON.stringify({
        dx: 11,
        dy: 12,
      })}`,
    },
  ],
})
