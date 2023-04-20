import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteTCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeTCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_T = 'T'
export const RELATIVE_T = 't'
export const PARAM_LENGTH_T = 2

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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.x, result.y]
    this.params = params

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_T
  }

  validateResult(
    value: AbsoluteTCommandParseResult | undefined
  ): value is AbsoluteTCommandParseResult {
    return typeof value?.x === 'number' && typeof value?.y === 'number'
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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.dx, result.dy]
    this.params = params

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_T
  }

  validateResult(
    value: RelativeTCommandParseResult | undefined
  ): value is RelativeTCommandParseResult {
    return typeof value?.dx === 'number' && typeof value?.dy === 'number'
  }
}
