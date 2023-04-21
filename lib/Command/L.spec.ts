import { AbsoluteLCommand, RelativeLCommand } from './L'

const PARAMS = [100, 200]
const ABSOLUTE_RESULT = { x: 100, y: 200 }
const RELATIVE_RESULT = { dx: 100, dy: 200 }

describe('AbsoluteLCommand', () => {
  let command: AbsoluteLCommand

  beforeAll(() => {
    command = new AbsoluteLCommand('L', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('L')
    expect(command.params).toEqual(PARAMS)
    expect(command.isRelative).toBe(false)
    expect(command.result).toEqual(ABSOLUTE_RESULT)
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual(ABSOLUTE_RESULT)
    expect(command.result).toEqual(ABSOLUTE_RESULT)
  })

  test('unmarshall()', async () => {
    command.marshall()
    expect(command.result).toEqual(ABSOLUTE_RESULT)

    command.updateResult({ x: 200, y: 200 })

    expect(command.params).toEqual([200, 200])
    expect(command.result).toEqual({ x: 200, y: 200 })

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteLCommand('L', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: L, 100,200,300'
    )
  })
})

describe('RelativeLCommand', () => {
  let command: RelativeLCommand

  beforeAll(() => {
    command = new RelativeLCommand('l', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('l')
    expect(command.params).toEqual(PARAMS)
    expect(command.isRelative).toBe(true)
    expect(command.result).toEqual(RELATIVE_RESULT)
  })

  test('marshall()', async () => {
    const result = command.marshall()
    expect(result).toEqual(RELATIVE_RESULT)
    expect(command.result).toEqual(RELATIVE_RESULT)
  })

  test('unmarshall()', async () => {
    command.marshall()
    expect(command.result).toEqual(RELATIVE_RESULT)

    command.updateResult({ dx: 200, dy: 200 })

    expect(command.params).toEqual([200, 200])
    expect(command.result).toEqual({ dx: 200, dy: 200 })

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeLCommand('l', [100, 200, 300])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: l, 100,200,300'
    )
  })
})
