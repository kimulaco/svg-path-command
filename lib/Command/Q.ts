import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteQCommandParseResult = CommandParseResult<
  'x1' | 'y1' | 'x' | 'y'
>
export type RelativeQCommandParseResult = CommandParseResult<
  'dx1' | 'dy1' | 'dx' | 'dy'
>

export const ABSOLUTE_Q = 'Q'
export const RELATIVE_Q = 'q'
export const PARAM_LENGTH_Q = 4

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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.x1, result.y1, result.x, result.y]
    this.params = params

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_Q
  }

  validateResult(
    value: AbsoluteQCommandParseResult | undefined
  ): value is AbsoluteQCommandParseResult {
    return (
      typeof value?.x1 === 'number' &&
      typeof value?.y1 === 'number' &&
      typeof value?.x === 'number' &&
      typeof value?.y === 'number'
    )
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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.dx1, result.dy1, result.dx, result.dy]
    this.params = params

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_Q
  }

  validateResult(
    value: RelativeQCommandParseResult | undefined
  ): value is RelativeQCommandParseResult {
    return (
      typeof value?.dx1 === 'number' &&
      typeof value?.dy1 === 'number' &&
      typeof value?.dx === 'number' &&
      typeof value?.dy === 'number'
    )
  }
}
