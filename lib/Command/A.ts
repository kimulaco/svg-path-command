import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'largeArcFlag' | 'sweepFlag' | 'x' | 'y'
>
export type RelativeACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'largeArcFlag' | 'sweepFlag' | 'dx' | 'dy'
>

export const ABSOLUTE_A = 'A'
export const RELATIVE_A = 'a'
export const PARAM_LENGTH_A = 6

export class AbsoluteACommand extends Command<
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

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_A
  }
}

export class RelativeACommand extends Command<
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

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_A
  }
}
