import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteSCommandParseResult = CommandParseResult<
  'x2' | 'y2' | 'x' | 'y'
>
export type RelativeSCommandParseResult = CommandParseResult<
  'dx2' | 'dy2' | 'dx' | 'dy'
>

export const ABSOLUTE_S = 'S'
export const RELATIVE_S = 's'
export const PARAM_LENGTH_S = 4

export class AbsoluteSCommand extends Command<
  typeof ABSOLUTE_S,
  AbsoluteSCommandParseResult
> {
  marshall(): AbsoluteSCommandParseResult {
    const result: AbsoluteSCommandParseResult = {
      x2: this.params[0],
      y2: this.params[1],
      x: this.params[2],
      y: this.params[3],
    }
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_S
  }
}

export class RelativeSCommand extends Command<
  typeof RELATIVE_S,
  RelativeSCommandParseResult
> {
  marshall(): RelativeSCommandParseResult {
    const result: RelativeSCommandParseResult = {
      dx2: this.params[0],
      dy2: this.params[1],
      dx: this.params[2],
      dy: this.params[3],
    }
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_S
  }
}
