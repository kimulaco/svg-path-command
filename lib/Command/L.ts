import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteLCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeLCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_L = 'L'
export const RELATIVE_L = 'l'

const PARAM_LENGTH = 2

export class AbsoluteLCommand extends Command<
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

  validate(): boolean {
    return this.params.length === PARAM_LENGTH
  }
}

export class RelativeLCommand extends Command<
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

  validate(): boolean {
    return this.params.length === PARAM_LENGTH
  }
}
