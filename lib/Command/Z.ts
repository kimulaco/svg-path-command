import { Command } from './Command'
import { ParserError } from '../ParserError'

export type AbsoluteZCommandParseResult = Record<string, never>
export type RelativeZCommandParseResult = Record<string, never>

export const ABSOLUTE_Z = 'Z'
export const RELATIVE_Z = 'z'
export const PARAM_LENGTH_Z = 0

export class AbsoluteZCommand extends Command<
  typeof ABSOLUTE_Z,
  AbsoluteZCommandParseResult
> {
  marshall(): AbsoluteZCommandParseResult {
    const result: AbsoluteZCommandParseResult = {}

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    this.updateParams([])

    return []
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_Z
  }

  validateResult(
    value: AbsoluteZCommandParseResult | undefined
  ): value is AbsoluteZCommandParseResult {
    return typeof value === 'object' && Object.keys(value).length === 0
  }
}

export class RelativeZCommand extends Command<
  typeof RELATIVE_Z,
  RelativeZCommandParseResult
> {
  marshall(): RelativeZCommandParseResult {
    const result: RelativeZCommandParseResult = {}

    this.setResult(result)

    return result
  }

  unmarshall(): number[] {
    if (!this.validateResult(this.result)) {
      throw new ParserError('Invalid result object')
    }

    this.updateParams([])

    return []
  }

  validateParams(value: number[]): boolean {
    return value.length === PARAM_LENGTH_Z
  }

  validateResult(
    value: AbsoluteZCommandParseResult | undefined
  ): value is AbsoluteZCommandParseResult {
    return typeof value === 'object' && Object.keys(value).length === 0
  }
}
