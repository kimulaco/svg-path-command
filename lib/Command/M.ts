import { PathCommand } from './common'
import type { CommandParseResult } from './common'

export type AbsoluteMCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeMCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_M = 'M'
export const RELATIVE_M = 'm'

export class AbsoluteMCommand extends PathCommand<
  typeof ABSOLUTE_M,
  AbsoluteMCommandParseResult
> {
  marshall(): AbsoluteMCommandParseResult {
    const result: AbsoluteMCommandParseResult = {
      x: this.params[0],
      y: this.params[1],
    }
    this.result = result
    return result
  }
}

export class RelativeMCommand extends PathCommand<
  typeof RELATIVE_M,
  RelativeMCommandParseResult
> {
  marshall(): RelativeMCommandParseResult {
    const result: RelativeMCommandParseResult = {
      dx: this.params[0],
      dy: this.params[1],
    }
    this.result = result
    return result
  }
}
