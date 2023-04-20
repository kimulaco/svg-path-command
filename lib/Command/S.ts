import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

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

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.x2, result.y2, result.x, result.y]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_S
  }

  validateResult(
    value: AbsoluteSCommandParseResult | undefined
  ): value is AbsoluteSCommandParseResult {
    return (
      typeof value?.x2 === 'number' &&
      typeof value?.y2 === 'number' &&
      typeof value?.x === 'number' &&
      typeof value?.y === 'number'
    )
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

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.dx2, result.dy2, result.dx, result.dy]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_S
  }

  validateResult(
    value: RelativeSCommandParseResult | undefined
  ): value is RelativeSCommandParseResult {
    return (
      typeof value?.dx2 === 'number' &&
      typeof value?.dy2 === 'number' &&
      typeof value?.dx === 'number' &&
      typeof value?.dy === 'number'
    )
  }
}
