import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for h command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['h', [1]],
      getters: {
        isRelative: true,
        params: [1],
        value: {
          dx: 1,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        params: [11],
        value: {
          dx: 11,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
        })
        return cmd
      },
      getters: {
        params: [11],
        value: {
          dx: 11,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['h', []],
      error: 'Invalid params of h command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of h command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
        })
        return cmd
      },
      error: `Invalid value of h command: ${JSON.stringify({
        x: 11,
      })}`,
    },
  ],
})

testPathCommand('test for H command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['H', [1]],
      getters: {
        isRelative: false,
        params: [1],
        value: {
          x: 1,
        },
      },
    },
    {
      name: 'sholud update params by updateParams()',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        params: [11],
        value: {
          x: 11,
        },
      },
    },
    {
      name: 'sholud update params by updateValue()',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          x: 11,
        })
        return cmd
      },
      getters: {
        params: [11],
        value: {
          x: 11,
        },
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid arguments of constructor',
      args: ['H', []],
      error: 'Invalid params of H command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateParams()',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of H command: []',
    },
    {
      name: 'should throw invalid error if invalid arguments of updateValue()',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateValue({
          dx: 11,
        })
        return cmd
      },
      error: `Invalid value of H command: ${JSON.stringify({
        dx: 11,
      })}`,
    },
  ],
})
