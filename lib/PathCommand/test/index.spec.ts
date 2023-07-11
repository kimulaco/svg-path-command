import { testPathCommand } from './helpers/testPathCommand'

global.console.warn = jest.fn()

testPathCommand('test for PathCommand constructor', {
  resolves: [
    {
      name: 'sholud set argments to data',
      args: ['L', [1, 2]],
      getters: {
        command: 'L',
        params: [1, 2],
      },
    },
  ],
})

testPathCommand('test for PathCommand.validateParams()', {
  rejects: [
    {
      name: 'sholud usable default separator',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      args: ['K' as any, [1, 2]],
      error: 'Invalid command: K',
    },
  ],
})

testPathCommand('test for PathCommand.stringify()', {
  resolves: [
    {
      name: 'sholud usable default separator',
      args: ['L', [1, 2]],
      methods: {
        stringify: [undefined, 'L 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud usable space to separator',
      args: ['L', [1, 2]],
      methods: {
        stringify: [{ separator: ' ' }, 'L 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud usable comma to separator',
      args: ['L', [1, 2]],
      methods: {
        stringify: [{ separator: ',' }, 'L 1,2'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid separator character',
      args: ['L', [1, 2]],
      beforeTest: (cmd) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cmd.stringify({ separator: '.' as any })
        return cmd
      },
      error: 'Invalid separator: .',
    },
  ],
})

testPathCommand('test for PathCommand.updateValue()', {
  resolves: [
    {
      name: 'sholud update value',
      args: ['L', [1, 2]],
      beforeTest: (cmd) => {
        cmd.updateValue({
          x: 11,
          y: 12,
        })
        return cmd
      },
      getters: {
        command: 'L',
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
    },
  ],

  rejects: [],
})

testPathCommand('test for PathCommand.updateResult()', {
  resolves: [
    {
      name: 'sholud update value',
      args: ['L', [1, 2]],
      beforeTest: (cmd) => {
        cmd.updateResult({
          x: 11,
          y: 12,
        })
        return cmd
      },
      getters: {
        command: 'L',
        params: [11, 12],
        value: {
          x: 11,
          y: 12,
        },
      },
      afterTest: (cmd) => {
        expect(global.console.warn).toHaveBeenCalledTimes(1)
        return cmd
      },
    },
  ],

  rejects: [],
})
