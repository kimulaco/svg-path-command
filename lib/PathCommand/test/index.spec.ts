import { testPathCommand } from './helpers/testPathCommand'

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

testPathCommand('test for PathCommand.validate()', {
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
