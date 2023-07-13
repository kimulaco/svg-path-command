import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'xAxisRotation' | 'largeArcFlag' | 'sweepFlag' | 'x' | 'y'
>
export type RelativeACommandParseResult = CommandParseResult<
  'rx' | 'ry' | 'xAxisRotation' | 'largeArcFlag' | 'sweepFlag' | 'dx' | 'dy'
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
      xAxisRotation: this.params[2],
      largeArcFlag: this.params[3],
      sweepFlag: this.params[4],
      x: this.params[5],
      y: this.params[6],
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
      result.xAxisRotation,
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
      typeof value?.xAxisRotation === 'number' &&
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
      xAxisRotation: this.params[2],
      largeArcFlag: this.params[3],
      sweepFlag: this.params[4],
      dx: this.params[5],
      dy: this.params[6],
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
      result.xAxisRotation,
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
      typeof value?.xAxisRotation === 'number' &&
      typeof value?.largeArcFlag === 'number' &&
      typeof value?.sweepFlag === 'number' &&
      typeof value?.dx === 'number' &&
      typeof value?.dy === 'number'
    )
  }
}
