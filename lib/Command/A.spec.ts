import { AbsoluteACommand, RelativeACommand } from './A'

const PARAMS = [100, 200, 300, 0, 1, 400, 500]
const ABSOLUTE_RESULT = {
  rx: 100,
  ry: 200,
  xAxisRotation: 300,
  largeArcFlag: 0,
  sweepFlag: 1,
  x: 400,
  y: 500,
}
const RELATIVE_RESULT = {
  rx: 100,
  ry: 200,
  xAxisRotation: 300,
  largeArcFlag: 0,
  sweepFlag: 1,
  dx: 400,
  dy: 500,
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

    const NEW_PARAMS = [500, 600, 700, 1, 0, 800, 900]
    const NEW_RESULT = {
      rx: 500,
      ry: 600,
      xAxisRotation: 700,
      largeArcFlag: 1,
      sweepFlag: 0,
      x: 800,
      y: 900,
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
      new AbsoluteACommand('A', [100, 200, 300, 0, 1, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: A, 100,200,300,0,1,300,400,500'
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

    const NEW_PARAMS = [500, 600, 700, 1, 0, 800, 900]
    const NEW_RESULT = {
      rx: 500,
      ry: 600,
      xAxisRotation: 700,
      largeArcFlag: 1,
      sweepFlag: 0,
      dx: 800,
      dy: 900,
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
      new RelativeACommand('a', [100, 200, 300, 0, 1, 300, 400, 500])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: a, 100,200,300,0,1,300,400,500'
    )
  })
})
