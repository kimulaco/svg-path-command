import { PathCommand } from '../PathCommand'

export class PathCommandList {
  commands: PathCommand[] = []

  constructor(commands: PathCommand[] = []) {
    this.commands = commands
  }

  toString(): string {
    return this.commands.map((command) => command.toString()).join(' ')
  }
}
