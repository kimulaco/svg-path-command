import { PathCommand } from './common'
import type { CommandParseResult } from './common'

export type AbsoluteHCommandParseResult = CommandParseResult<'x'>
export type RelativeHCommandParseResult = CommandParseResult<'dx'>

export const ABSOLUTE_H = 'H'
export const RELATIVE_H = 'h'

export class AbsoluteHCommand extends PathCommand<
  typeof ABSOLUTE_H,
  AbsoluteHCommandParseResult
> {
  marshall(): AbsoluteHCommandParseResult {
    const result: AbsoluteHCommandParseResult = {
      x: this.params[0],
    }
    this.result = result
    return result
  }
}

export class RelativeHCommand extends PathCommand<
  typeof RELATIVE_H,
  RelativeHCommandParseResult
> {
  marshall(): RelativeHCommandParseResult {
    const result: RelativeHCommandParseResult = {
      dx: this.params[0],
    }
    this.result = result
    return result
  }
}
