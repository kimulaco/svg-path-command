import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteMCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeMCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_M = 'M'
export const RELATIVE_M = 'm'
export const PARAM_LENGTH_M = 2

export class AbsoluteMCommand extends Command<
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
    return value.length === PARAM_LENGTH_M
  }

  validateResult(
    value: AbsoluteMCommandParseResult | undefined
  ): value is AbsoluteMCommandParseResult {
    return typeof value?.x === 'number' && typeof value?.y === 'number'
  }
}

export class RelativeMCommand extends Command<
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
    return value.length === PARAM_LENGTH_M
  }

  validateResult(
    value: RelativeMCommandParseResult | undefined
  ): value is RelativeMCommandParseResult {
    return typeof value?.dx === 'number' && typeof value?.dy === 'number'
  }
}
