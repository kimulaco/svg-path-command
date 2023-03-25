// TODO Create constants
const COMMAND_CHARS = [
  'M',
  'm',
  'L',
  'l',
  'H',
  'h',
  'V',
  'v',
  'Q',
  'q',
  'S',
  's',
  'A',
  'a',
  'Z',
  'z',
]

interface PathCommand {
  command: string
  param: string
}

export const parse = (pathCommand: string): PathCommand[] => {
  const regexp = new RegExp(`(?=${COMMAND_CHARS.join('|')})`, 'g')
  const commands = pathCommand.split(regexp)

  return commands.map((command: string) => {
    return {
      command: command[0],
      param: command.slice(1, command.length),
    }
  })
}
