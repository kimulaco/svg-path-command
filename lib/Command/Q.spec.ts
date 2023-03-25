import { AbsoluteQCommand, RelativeQCommand } from './Q'

const PARAMS = [100, 200, 300, 400]
const ABSOLUTE_RESULT = {
  x1: 100,
  y1: 200,
  x: 300,
  y: 400,
}
const RELATIVE_RESULT = {
  dx1: 100,
  dy1: 200,
  dx: 300,
  dy: 400,
}

describe('AbsoluteQCommand', () => {
  let command: AbsoluteQCommand

  beforeAll(() => {
    command = new AbsoluteQCommand('Q', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('Q')
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

describe('RelativeQCommand', () => {
  let command: RelativeQCommand

  beforeAll(() => {
    command = new RelativeQCommand('q', PARAMS)
  })

  test('Create instance', async () => {
    expect(command.command).toBe('q')
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
