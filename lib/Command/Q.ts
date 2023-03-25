import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteQCommandParseResult = CommandParseResult<
  'x1' | 'y1' | 'x' | 'y'
>
export type RelativeQCommandParseResult = CommandParseResult<
  'dx1' | 'dy1' | 'dx' | 'dy'
>

export const ABSOLUTE_Q = 'Q'
export const RELATIVE_Q = 'q'

export class AbsoluteQCommand extends Command<
  typeof ABSOLUTE_Q,
  AbsoluteQCommandParseResult
> {
  marshall(): AbsoluteQCommandParseResult {
    const result: AbsoluteQCommandParseResult = {
      x1: this.params[0],
      y1: this.params[1],
      x: this.params[2],
      y: this.params[3],
    }
    this.result = result
    return result
  }
}

export class RelativeQCommand extends Command<
  typeof RELATIVE_Q,
  RelativeQCommandParseResult
> {
  marshall(): RelativeQCommandParseResult {
    const result: RelativeQCommandParseResult = {
      dx1: this.params[0],
      dy1: this.params[1],
      dx: this.params[2],
      dy: this.params[3],
    }
    this.result = result
    return result
  }
}
