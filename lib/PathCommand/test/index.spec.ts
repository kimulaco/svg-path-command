import { testPathCommand } from './helpers/testPathCommand'

testPathCommand('test for PathCommand.validate()', {
  rejects: [
    {
      name: 'sholud usable default separator',
      args: ['K' as any, [1, 2]], // eslint-disable-line @typescript-eslint/no-explicit-any
      error: 'Invalid command: K',
    },
  ],
})

testPathCommand('test for PathCommand.toString()', {
  resolves: [
    {
      name: 'sholud usable default separator',
      args: ['L', [1, 2]],
      methods: {
        toString: [undefined, 'L 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud usable space to separator',
      args: ['L', [1, 2]],
      methods: {
        toString: [{ separator: ' ' }, 'L 1 2'] as [unknown, unknown],
      },
    },
    {
      name: 'sholud usable comma to separator',
      args: ['L', [1, 2]],
      methods: {
        toString: [{ separator: ',' }, 'L 1,2'] as [unknown, unknown],
      },
    },
  ],

  rejects: [
    {
      name: 'should throw invalid error if invalid separator character',
      args: ['L', [1, 2]],
      beforeTest: (cmd) => {
        cmd.toString({ separator: '.' as any }) // eslint-disable-line @typescript-eslint/no-explicit-any
        return cmd
      },
      error: 'Invalid separator: .',
    },
  ],
})
