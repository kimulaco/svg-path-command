import { COMMAND_CHARS } from './command'

interface PathCommand {
  command: string
  parameter: string
}

export const parse = (pathCommand: string): PathCommand[] => {
  const regexp = new RegExp(`(?=${COMMAND_CHARS.join('|')})`, 'g')
  const commands = pathCommand.split(regexp)

  return commands.map((command: string) => {
    return {
      command: command[0],
      parameter: command.slice(1, command.length),
    }
  })
}
