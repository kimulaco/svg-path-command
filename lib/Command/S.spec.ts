import { AbsoluteSCommand, RelativeSCommand } from './S'

const PARAMS = [100, 200, 300, 400]
const ABSOLUTE_RESULT = {
  x2: 100,
  y2: 200,
  x: 300,
  y: 400,
}
const RELATIVE_RESULT = {
  dx2: 100,
  dy2: 200,
  dx: 300,
  dy: 400,
}

describe('AbsoluteSCommand', () => {
  let command: AbsoluteSCommand

  beforeAll(() => {
    command = new AbsoluteSCommand('S', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('S')
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

    const NEW_PARAMS = [500, 600, 700, 800]
    const NEW_RESULT = {
      x2: 500,
      y2: 600,
      x: 700,
      y: 800,
    }

    command.updateResult(NEW_RESULT)

    expect(command.params).toEqual(NEW_PARAMS)
    expect(command.result).toEqual(NEW_RESULT)

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteSCommand('S', [100, 200, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: S, 100,200,300,400,500'
    )
  })
})

describe('RelativeSCommand', () => {
  let command: RelativeSCommand

  beforeAll(() => {
    command = new RelativeSCommand('s', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('s')
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

    const NEW_PARAMS = [500, 600, 700, 800]
    const NEW_RESULT = {
      dx2: 500,
      dy2: 600,
      dx: 700,
      dy: 800,
    }

    command.updateResult(NEW_RESULT)

    expect(command.params).toEqual(NEW_PARAMS)
    expect(command.result).toEqual(NEW_RESULT)

    expect(() => {
      command.updateResult(undefined)
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeSCommand('s', [100, 200, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: s, 100,200,300,400,500'
    )
  })
})
