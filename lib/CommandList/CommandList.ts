import { CommandType, COMMANDS, parseCommand } from './core'

export class CommandList {
  commands: CommandType[] = []

  constructor(command: string) {
    this.parse(command)
  }

  parse(commandString: string) {
    const _commands: CommandType[] = []
    const commandStringList = commandString.split(
      new RegExp(`(?=${COMMANDS.join('|')})`, 'g')
    )

    for (const commandString of commandStringList) {
      const commandList = parseCommand(commandString)

      for (const command of commandList) {
        _commands.push(command)
      }
    }

    this.commands = _commands
  }

  stringify(): string {
    return this.commands.map((command) => command.stringify()).join('')
  }
}
