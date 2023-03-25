import { CommandType, COMMANDS, parseCommand } from './common'

export class CommandList {
  commands: CommandType[] = []

  constructor(command: string) {
    this.parse(command)
  }

  parse(commandString: string): CommandType[] {
    const _commands = this.splitCommand(commandString).map((_command: string) =>
      parseCommand(_command)
    )
    this.commands = _commands

    return _commands
  }

  private splitCommand(command: string): string[] {
    return command.split(new RegExp(`(?=${COMMANDS.join('|')})`, 'g'))
  }
}
