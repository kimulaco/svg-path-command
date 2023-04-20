import { AbsoluteACommand, RelativeACommand } from './A'

const PARAMS = [100, 200, 0, 1, 300, 400]
const ABSOLUTE_RESULT = {
  rx: 100,
  ry: 200,
  largeArcFlag: 0,
  sweepFlag: 1,
  x: 300,
  y: 400,
}
const RELATIVE_RESULT = {
  rx: 100,
  ry: 200,
  largeArcFlag: 0,
  sweepFlag: 1,
  dx: 300,
  dy: 400,
}

describe('AbsoluteACommand', () => {
  let command: AbsoluteACommand

  beforeAll(() => {
    command = new AbsoluteACommand('A', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('A')
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

    const NEW_PARAMS = [500, 600, 1, 0, 700, 800]
    const NEW_RESULT = {
      rx: 500,
      ry: 600,
      largeArcFlag: 1,
      sweepFlag: 0,
      x: 700,
      y: 800,
    }
    command.result = NEW_RESULT
    const params = command.unmarshall()

    expect(params).toEqual(NEW_PARAMS)
    expect(command.params).toEqual(NEW_PARAMS)
    expect(command.result).toEqual(NEW_RESULT)

    command.result = undefined
    expect(() => {
      command.unmarshall()
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new AbsoluteACommand('A', [100, 200, 0, 1, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: A, 100,200,0,1,300,400,500'
    )
  })
})

describe('RelativeACommand', () => {
  let command: RelativeACommand

  beforeAll(() => {
    command = new RelativeACommand('a', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('a')
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

    const NEW_PARAMS = [500, 600, 1, 0, 700, 800]
    const NEW_RESULT = {
      rx: 500,
      ry: 600,
      largeArcFlag: 1,
      sweepFlag: 0,
      dx: 700,
      dy: 800,
    }
    command.result = NEW_RESULT
    const params = command.unmarshall()

    expect(params).toEqual(NEW_PARAMS)
    expect(command.params).toEqual(NEW_PARAMS)
    expect(command.result).toEqual(NEW_RESULT)

    command.result = undefined
    expect(() => {
      command.unmarshall()
    }).toThrow('Invalid result object')
  })

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeACommand('a', [100, 200, 0, 1, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: a, 100,200,0,1,300,400,500'
    )
  })
})
