import { Command } from './Command'

export type AbsoluteZCommandParseResult = Record<string, never>
export type RelativeZCommandParseResult = Record<string, never>

export const ABSOLUTE_Z = 'Z'
export const RELATIVE_Z = 'z'
export const PARAM_LENGTH_Z = 0

export class AbsoluteZCommand extends Command<
  typeof ABSOLUTE_Z,
  AbsoluteZCommandParseResult
> {
  marshall(): AbsoluteZCommandParseResult {
    const result: AbsoluteZCommandParseResult = {}
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_Z
  }
}

export class RelativeZCommand extends Command<
  typeof RELATIVE_Z,
  RelativeZCommandParseResult
> {
  marshall(): RelativeZCommandParseResult {
    const result: RelativeZCommandParseResult = {}
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_Z
  }
}
