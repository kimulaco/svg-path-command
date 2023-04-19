import { ParserError } from '../ParserError'
import { isUpperCase } from '../utils/isUpperCase'

export type CommandParseResult<Key extends string> = Record<Key, number | never>

export class Command<
  Command extends string,
  Result extends CommandParseResult<string>
> {
  private _command: Command
  private _params: number[]
  private _isRelative: boolean
  private _result?: Result

  constructor(command: Command, params: number[]) {
    this._command = command
    this._params = params

    if (!this.validate()) {
      throw new ParserError(
        `Command validate error: ${command}, ${params.toString()}`
      )
    }

    this._isRelative = !isUpperCase(command)
    this.marshall()
  }

  get command(): Command {
    return this._command
  }

  get isRelative(): boolean {
    return this._isRelative
  }

  get params(): number[] {
    return this._params
  }

  set params(value: number[]) {
    if (!this.validateParams(value)) {
      throw new ParserError('Invalid params array')
    }

    this._params = value
  }

  get result(): Result | undefined {
    return this._result
  }

  set result(value: Result | undefined) {
    this._result = value
  }

  marshall(): Result | undefined {
    const result: Result | undefined = undefined
    this._result = result
    return result
  }

  unmarshall(): number[] {
    const params = [...this._params]
    this._params = params

    return params
  }

  // TODO: deprecate
  validate(): boolean {
    return this.validateParams(this._params)
  }

  validateParams(value: number[]): boolean {
    return Array.isArray(value)
  }

  validateResult(value: Result | undefined): value is Result {
    return !!value
  }
}
