import { AbsoluteCCommand, RelativeCCommand } from './C'

const PARAMS = [100, 200, 300, 400, 500, 600]
const ABSOLUTE_RESULT = {
  x1: 100,
  y1: 200,
  x2: 300,
  y2: 400,
  x: 500,
  y: 600,
}
const RELATIVE_RESULT = {
  dx1: 100,
  dy1: 200,
  dx2: 300,
  dy2: 400,
  dx: 500,
  dy: 600,
}

describe('AbsoluteCCommand', () => {
  let command: AbsoluteCCommand

  beforeAll(() => {
    command = new AbsoluteCCommand('C', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('C')
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

    const NEW_PARAMS = [700, 800, 900, 1000, 1100, 1200]
    const NEW_RESULT = {
      x1: 700,
      y1: 800,
      x2: 900,
      y2: 1000,
      x: 1100,
      y: 1200,
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
      new AbsoluteCCommand('C', [100, 200, 300, 400, 500, 600, 700])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: C, 100,200,300,400,500,600,700'
    )
  })
})

describe('RelativeCCommand', () => {
  let command: RelativeCCommand

  beforeAll(() => {
    command = new RelativeCCommand('c', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('c')
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

    const NEW_PARAMS = [700, 800, 900, 1000, 1100, 1200]
    const NEW_RESULT = {
      dx1: 700,
      dy1: 800,
      dx2: 900,
      dy2: 1000,
      dx: 1100,
      dy: 1200,
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
      new RelativeCCommand('c', [100, 200, 300, 400, 500, 600, 700])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: c, 100,200,300,400,500,600,700'
    )
  })
})
