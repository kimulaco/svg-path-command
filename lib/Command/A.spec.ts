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
})
