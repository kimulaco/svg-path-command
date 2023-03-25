import { PathCommand } from './common'
import type { CommandParseResult } from './common'

export type AbsoluteLCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeLCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_L = 'L'
export const RELATIVE_L = 'l'

export class AbsoluteLCommand extends PathCommand<
  typeof ABSOLUTE_L,
  AbsoluteLCommandParseResult
> {
  marshall(): AbsoluteLCommandParseResult {
    const result: AbsoluteLCommandParseResult = {
      x: this.params[0],
      y: this.params[1],
    }
    this.result = result
    return result
  }
}

export class RelativeLCommand extends PathCommand<
  typeof RELATIVE_L,
  RelativeLCommandParseResult
> {
  marshall(): RelativeLCommandParseResult {
    const result: RelativeLCommandParseResult = {
      dx: this.params[0],
      dy: this.params[1],
    }
    this.result = result
    return result
  }
}
