import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for h command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['h', [1]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 1,
        },
      },
      methods: {
        stringify: [undefined, 'h 1'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 11,
        },
      },
      methods: {
        stringify: [undefined, 'h 11'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['h', []],
      error: 'Invalid params of h command: []',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['h', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of h command: []',
    },
  ],
})

testPathCommand('test for H command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['H', [1]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 1,
        },
      },
      methods: {
        stringify: [undefined, 'H 1'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 11,
        },
      },
      methods: {
        stringify: [undefined, 'H 11'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['H', []],
      error: 'Invalid params of H command: []',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['H', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of H command: []',
    },
  ],
})
