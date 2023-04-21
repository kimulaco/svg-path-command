import { Command } from './Command'
import type { CommandParseResult } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteVCommandParseResult = CommandParseResult<'y'>
export type RelativeVCommandParseResult = CommandParseResult<'dy'>

export const ABSOLUTE_V = 'V'
export const RELATIVE_V = 'v'
export const PARAM_LENGTH_V = 1

export class AbsoluteVCommand extends Command<
  typeof ABSOLUTE_V,
  AbsoluteVCommandParseResult
> {
  marshall(): AbsoluteVCommandParseResult {
    const result: AbsoluteVCommandParseResult = {
      y: this.params[0],
    }

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.y]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_V
  }

  validateResult(
    value: AbsoluteVCommandParseResult | undefined
  ): value is AbsoluteVCommandParseResult {
    return typeof value?.y === 'number'
  }
}

export class RelativeVCommand extends Command<
  typeof RELATIVE_V,
  RelativeVCommandParseResult
> {
  marshall(): RelativeVCommandParseResult {
    const result: RelativeVCommandParseResult = {
      dy: this.params[0],
    }

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    const result = { ...this.result }
    const params = [result.dy]

    this.setParams(params)

    return params
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_V
  }

  validateResult(
    value: RelativeVCommandParseResult | undefined
  ): value is RelativeVCommandParseResult {
    return typeof value?.dy === 'number'
  }
}
