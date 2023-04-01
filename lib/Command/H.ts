import { Command } from './Command'
import type { CommandParseResult } from './Command'

export type AbsoluteHCommandParseResult = CommandParseResult<'x'>
export type RelativeHCommandParseResult = CommandParseResult<'dx'>

export const ABSOLUTE_H = 'H'
export const RELATIVE_H = 'h'
export const PARAM_LENGTH_H = 1

export class AbsoluteHCommand extends Command<
  typeof ABSOLUTE_H,
  AbsoluteHCommandParseResult
> {
  marshall(): AbsoluteHCommandParseResult {
    const result: AbsoluteHCommandParseResult = {
      x: this.params[0],
    }
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_H
  }
}

export class RelativeHCommand extends Command<
  typeof RELATIVE_H,
  RelativeHCommandParseResult
> {
  marshall(): RelativeHCommandParseResult {
    const result: RelativeHCommandParseResult = {
      dx: this.params[0],
    }
    this.result = result
    return result
  }

  validate(): boolean {
    return this.params.length === PARAM_LENGTH_H
  }
}
