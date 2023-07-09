import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for t command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['t', [1, 2]],
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 1,
          dy: 2,
        },
      },
      methods: {
        stringify: [undefined, 't 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: true,
        value: {
          dx: 11,
          dy: 12,
        },
      },
      methods: {
        stringify: [undefined, 't 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['t', [1]],
      error: 'Invalid params of t command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['t', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of t command: [11]',
    },
  ],
})

testPathCommand('test for T command', {
  resolves: [
    {
      name: 'sholud create instance',
      args: ['T', [1, 2]],
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 1,
          y: 2,
        },
      },
      methods: {
        stringify: [undefined, 'T 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud create instance',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11, 12])
        return cmd
      },
      getters: {
        isValid: true,
        isRelative: false,
        value: {
          x: 11,
          y: 12,
        },
      },
      methods: {
        stringify: [undefined, 'T 11 12'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if less param of constructor',
      args: ['T', [1]],
      error: 'Invalid params of T command: [1]',
    },
    {
      name: 'should throw invalid error if less param of updateParams',
      args: ['T', [1, 2]],
      beforeTest(cmd) {
        cmd.updateParams([11])
        return cmd
      },
      error: 'Invalid params of T command: [11]',
    },
  ],
})
