import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteCCommandParseResult = CommandParseResult<
  'x1' | 'y1' | 'x2' | 'y2' | 'x' | 'y'
>
export type RelativeCCommandParseResult = CommandParseResult<
  'dx1' | 'dy1' | 'dx2' | 'dy2' | 'dx' | 'dy'
>

export const ABSOLUTE_C = 'C'
export const RELATIVE_C = 'c'
export const PARAM_LENGTH_C = 6

export class AbsoluteCCommand extends Command<
  typeof ABSOLUTE_C,
  AbsoluteCCommandParseResult
> {
  marshall(): AbsoluteCCommandParseResult {
    const result: AbsoluteCCommandParseResult = {
      x1: this.params[0],
      y1: this.params[1],
      x2: this.params[2],
      y2: this.params[3],
      x: this.params[4],
      y: this.params[5],
    }

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [
      result.x1,
      result.y1,
      result.x2,
      result.y2,
      result.x,
      result.y,
    ]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_C
  }

  validateResult(
    value: AbsoluteCCommandParseResult | undefined
  ): value is AbsoluteCCommandParseResult {
    return (
      typeof value?.x1 === 'number' &&
      typeof value?.y1 === 'number' &&
      typeof value?.x2 === 'number' &&
      typeof value?.y2 === 'number' &&
      typeof value?.x === 'number' &&
      typeof value?.y === 'number'
    )
  }
}

export class RelativeCCommand extends Command<
  typeof RELATIVE_C,
  RelativeCCommandParseResult
> {
  marshall(): RelativeCCommandParseResult {
    const result: RelativeCCommandParseResult = {
      dx1: this.params[0],
      dy1: this.params[1],
      dx2: this.params[2],
      dy2: this.params[3],
      dx: this.params[4],
      dy: this.params[5],
    }

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [
      result.dx1,
      result.dy1,
      result.dx2,
      result.dy2,
      result.dx,
      result.dy,
    ]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_C
  }

  validateResult(
    value: RelativeCCommandParseResult | undefined
  ): value is RelativeCCommandParseResult {
    return (
      typeof value?.dx1 === 'number' &&
      typeof value?.dy1 === 'number' &&
      typeof value?.dx2 === 'number' &&
      typeof value?.dy2 === 'number' &&
      typeof value?.dx === 'number' &&
      typeof value?.dy === 'number'
    )
  }
}
