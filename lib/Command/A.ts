import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

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

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [
      result.rx,
      result.ry,
      result.largeArcFlag,
      result.sweepFlag,
      result.x,
      result.y,
    ]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_A
  }

  validateResult(
    value: AbsoluteACommandParseResult | undefined
  ): value is AbsoluteACommandParseResult {
    return (
      typeof value?.rx === 'number' &&
      typeof value?.ry === 'number' &&
      typeof value?.largeArcFlag === 'number' &&
      typeof value?.sweepFlag === 'number' &&
      typeof value?.x === 'number' &&
      typeof value?.y === 'number'
    )
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

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [
      result.rx,
      result.ry,
      result.largeArcFlag,
      result.sweepFlag,
      result.dx,
      result.dy,
    ]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_A
  }

  validateResult(
    value: RelativeACommandParseResult | undefined
  ): value is RelativeACommandParseResult {
    return (
      typeof value?.rx === 'number' &&
      typeof value?.ry === 'number' &&
      typeof value?.largeArcFlag === 'number' &&
      typeof value?.sweepFlag === 'number' &&
      typeof value?.dx === 'number' &&
      typeof value?.dy === 'number'
    )
  }
}
