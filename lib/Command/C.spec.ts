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

  test('Validate error', async () => {
    const createInvalidInstance = () => {
      new RelativeCCommand('c', [100, 200, 300, 400, 500, 600, 700])
    }
    expect(createInvalidInstance).toThrow(
      'Command validate error: c, 100,200,300,400,500,600,700'
    )
  })
})
