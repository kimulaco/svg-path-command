import { PathCommand } from './common'

export type AbsoluteZCommandParseResult = Record<string, never>
export type RelativeZCommandParseResult = Record<string, never>

export const ABSOLUTE_Z = 'Z'
export const RELATIVE_Z = 'z'

export class AbsoluteZCommand extends PathCommand<
  typeof ABSOLUTE_Z,
  AbsoluteZCommandParseResult
> {
  marshall(): AbsoluteZCommandParseResult {
    const result: AbsoluteZCommandParseResult = {}
    this.result = result
    return result
  }
}

export class RelativeZCommand extends PathCommand<
  typeof RELATIVE_Z,
  RelativeZCommandParseResult
> {
  marshall(): RelativeZCommandParseResult {
    const result: RelativeZCommandParseResult = {}
    this.result = result
    return result
  }
}
