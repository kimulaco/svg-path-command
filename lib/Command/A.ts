import { PathCommand } from './common'
import type { CommandParseResult } from './common'

export type AbsoluteACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'largeArcFlag' | 'sweepFlag' | 'x' | 'y'
>
export type RelativeACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'largeArcFlag' | 'sweepFlag' | 'dx' | 'dy'
>

export const ABSOLUTE_A = 'A'
export const RELATIVE_A = 'a'

export class AbsoluteACommand extends PathCommand<
  typeof ABSOLUTE_A,
  AbsoluteACommandParseResult
> {
  marshall(): AbsoluteACommandParseResult {
    const result: AbsoluteACommandParseResult = {
      rx: this.params[0],
      ry: this.params[1],
      largeArcFlag: this.params[2],
      sweepFlag: this.params[3],
      x: this.params[4],
      y: this.params[5],
    }
    this.result = result
    return result
  }
}

export class RelativeACommand extends PathCommand<
  typeof RELATIVE_A,
  RelativeACommandParseResult
> {
  marshall(): RelativeACommandParseResult {
    const result: RelativeACommandParseResult = {
      rx: this.params[0],
      ry: this.params[1],
      largeArcFlag: this.params[2],
      sweepFlag: this.params[3],
      dx: this.params[4],
      dy: this.params[5],
    }
    this.result = result
    return result
  }
}
