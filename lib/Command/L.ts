import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteLCommandParseResult = CommandParseResult<'x' | 'y'>
export type RelativeLCommandParseResult = CommandParseResult<'dx' | 'dy'>

export const ABSOLUTE_L = 'L'
export const RELATIVE_L = 'l'
export const PARAM_LENGTH_L = 2

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
    return value.length === PARAM_LENGTH_L
  }

  validateResult(
    value: AbsoluteLCommandParseResult | undefined
  ): value is AbsoluteLCommandParseResult {
    return typeof value?.x === 'number' && typeof value?.y === 'number'
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
    return value.length === PARAM_LENGTH_L
  }

  validateResult(
    value: RelativeLCommandParseResult | undefined
  ): value is RelativeLCommandParseResult {
    return typeof value?.dx === 'number' && typeof value?.dy === 'number'
  }
}
