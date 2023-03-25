import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteTCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeTCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_T = 'T'
export const RELATIVE_T = 't'

export class AbsoluteTCommand extends Command<
  typeof ABSOLUTE_T,
  AbsoluteTCommandParseResult
> {
  marshall(): AbsoluteTCommandParseResult {
    const result: AbsoluteTCommandParseResult = {
      x: this.params[0],
      y: this.params[1],
    }
    this.result = result
    return result
  }
}

export class RelativeTCommand extends Command<
  typeof RELATIVE_T,
  RelativeTCommandParseResult
> {
  marshall(): RelativeTCommandParseResult {
    const result: RelativeTCommandParseResult = {
      dx: this.params[0],
      dy: this.params[1],
    }
    this.result = result
    return result
  }
}
