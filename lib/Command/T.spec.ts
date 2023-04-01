import { AbsoluteTCommand, RelativeTCommand } from './T'

const PARAMS = [100, 200]
const ABSOLUTE_RESULT = { x: 100, y: 200 }
const RELATIVE_RESULT = { dx: 100, dy: 200 }

describe('AbsoluteTCommand', () => {
  let command: AbsoluteTCommand

  beforeAll(() => {
    command = new AbsoluteTCommand('T', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('T')
    expect(command.params).toEqual(PARAMS)
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual(ABSOLUTE_RESULT)
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual(ABSOLUTE_RESULT)
    expect(command.result).toEqual(ABSOLUTE_RESULT)
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteTCommand('T', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: T, 100,200,300'
    )
  })
})

describe('RelativeTCommand', () => {
  let command: RelativeTCommand

  beforeAll(() => {
    command = new RelativeTCommand('t', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('t')
    expect(command.params).toEqual(PARAMS)
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual(RELATIVE_RESULT)
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual(RELATIVE_RESULT)
    expect(command.result).toEqual(RELATIVE_RESULT)
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeTCommand('t', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: t, 100,200,300'
    )
  })
})
