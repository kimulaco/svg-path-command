import { PathCommand } from './common'
import type { CommandParseResult } from './common'

export type AbsoluteVCommandParseResult = CommandParseResult<'y'>
export type RelativeVCommandParseResult = CommandParseResult<'dy'>

export const ABSOLUTE_V = 'V'
export const RELATIVE_V = 'v'

export class AbsoluteVCommand extends PathCommand<
  typeof ABSOLUTE_V,
  AbsoluteVCommandParseResult
> {
  marshall(): AbsoluteVCommandParseResult {
    const result: AbsoluteVCommandParseResult = {
      y: this.params[0],
    }
    this.result = result
    return result
  }
}

export class RelativeVCommand extends PathCommand<
  typeof RELATIVE_V,
  RelativeVCommandParseResult
> {
  marshall(): RelativeVCommandParseResult {
    const result: RelativeVCommandParseResult = {
      dy: this.params[0],
    }
    this.result = result
    return result
  }
}
