import { PathCommand } from '../PathCommand'

export class PathCommandList {
  commands: PathCommand[] = []

  constructor(commands: PathCommand[] = []) {
    this.commands = commands
  }

  stringify(): string {
    return this.commands.map((command) => command.stringify()).join(' ')
  }
}
