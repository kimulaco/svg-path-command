import { isUpperCase } from '../utils/isUpperCase'

export type CommandParseResult<Key extends string> = Record<Key, number | never>

export class Command<
  Command extends string,
  Result extends CommandParseResult<string>
> {
  command: Command
  params: number[]
  isRelative: boolean
  result?: Result

  constructor(command: Command, params: number[]) {
    this.command = command
    this.params = params
    this.isRelative = !isUpperCase(command)
    this.marshall()
  }

  marshall(): Result | undefined {
    const result: Result | undefined = undefined
    this.result = result
    return result
  }
}
