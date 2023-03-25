import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteCCommandParseResult = CommandParseResult<
  'x1' | 'y1' | 'x2' | 'y2' | 'x' | 'y'
>
export type RelativeCCommandParseResult = CommandParseResult<
  'dx1' | 'dy1' | 'dx2' | 'dy2' | 'dx' | 'dy'
>
export const ABSOLUTE_C = 'C'
export const RELATIVE_C = 'c'

export class AbsoluteCCommand extends Command<
  typeof ABSOLUTE_C,
  AbsoluteCCommandParseResult
> {
  marshall(): AbsoluteCCommandParseResult {
    const result: AbsoluteCCommandParseResult = {
      x1: this.params[0],
      y1: this.params[1],
      x2: this.params[2],
      y2: this.params[3],
      x: this.params[4],
      y: this.params[5],
    }
    this.result = result
    return result
  }
}

export class RelativeCCommand extends Command<
  typeof RELATIVE_C,
  RelativeCCommandParseResult
> {
  marshall(): RelativeCCommandParseResult {
    const result: RelativeCCommandParseResult = {
      dx1: this.params[0],
      dy1: this.params[1],
      dx2: this.params[2],
      dy2: this.params[3],
      dx: this.params[4],
      dy: this.params[5],
    }
    this.result = result
    return result
  }
}
