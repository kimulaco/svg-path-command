import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.x]
    this.params = params

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_H
  }

  validateResult(
    value: AbsoluteHCommandParseResult | undefined
  ): value is AbsoluteHCommandParseResult {
    return typeof value?.x === 'number'
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

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.dx]
    this.params = params

    return params
  }

  validateParams(): boolean {
    return this.params.length === PARAM_LENGTH_H
  }

  validateResult(
    value: RelativeHCommandParseResult | undefined
  ): value is RelativeHCommandParseResult {
    return typeof value?.dx === 'number'
  }
}
