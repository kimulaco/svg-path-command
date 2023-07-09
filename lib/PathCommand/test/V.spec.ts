import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for v command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['v', [1]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dy: 1,
        },
      },
      methods: {
        stringify: [undefined, 'v 1'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dy: 11,
        },
      },
      methods: {
        stringify: [undefined, 'v 11'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['v', []],
      error: 'Invalid params of v command: []',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['v', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of v command: []',
    },
  ],
})

testPathCommand('test for V command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['V', [1]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          y: 1,
        },
      },
      methods: {
        stringify: [undefined, 'V 1'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          y: 11,
        },
      },
      methods: {
        stringify: [undefined, 'V 11'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['V', []],
      error: 'Invalid params of V command: []',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['V', [1]],
      beforeTest(cmd) {
        cmd.updateParams([])
        return cmd
      },
      error: 'Invalid params of V command: []',
    },
  ],
})
