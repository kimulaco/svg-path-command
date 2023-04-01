import { CommandType, COMMANDS, parseCommand } from './common'

export class CommandList {
  commands: CommandType[] = []

  constructor(command: string) {
    this.parse(command)
  }

  parse(commandString: string) {
    const _commands: CommandType[] = []
    const commandStringList = this.splitCommand(commandString)

    for (const commandString of commandStringList) {
      const commandList = parseCommand(commandString)

      for (const command of commandList) {
        _commands.push(command)
      }
    }

    this.commands = _commands
  }

  private splitCommand(command: string): string[] {
    return command.split(new RegExp(`(?=${COMMANDS.join('|')})`, 'g'))
  }
}
