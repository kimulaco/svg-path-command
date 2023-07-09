import { isValidCommandType, isValidPathCommandParams } from './utils/validate'
import {
  PATH_COMMAND_COMMANDS,
  PATH_COMMAND_SEPARATOR,
  PATH_COMMAND_PARAMS_MAP,
} from './constants'
import type {
  CommandTypes,
  PathCommandParams,
  PathCommandValue,
  PathCommandSeparator,
} from './types'

export { isValidCommandType, isValidPathCommandParams }

export {
  PATH_COMMAND_COMMANDS,
  PATH_COMMAND_SEPARATOR,
  PATH_COMMAND_PARAMS_MAP,
}

export type {
  CommandTypes,
  PathCommandParams,
  PathCommandValue,
  PathCommandSeparator,
}

export class PathCommand {
  private _command: CommandTypes
  private _params: PathCommandParams = []

  constructor(command: CommandTypes, params: PathCommandParams) {
    this.validate(command, params)

    this._command = command
    this._params = params
  }

  get command(): CommandTypes {
    return this._command
  }

  get params(): PathCommandParams {
    return this._params
  }

  get isRelative(): boolean {
    return this.command === this.command.toLowerCase()
  }

  get isValid(): boolean {
    try {
      this.validate(this.command, this.params)
      return true
    } catch {
      return false
    }
  }

  get value(): PathCommandValue {
    const value: PathCommandValue = {}

    const keys = PATH_COMMAND_PARAMS_MAP[this.command]
    keys.forEach((key, i) => {
      value[key] = this.params[i]
    })

    return value
  }

  validate(command: CommandTypes, params: PathCommandParams): void {
    if (!isValidCommandType(command)) {
      throw new Error(`Invalid command: ${command}`)
    }

    if (!isValidPathCommandParams(command, params)) {
      throw new Error(
        `Invalid params of ${command} command: [${(
          params as PathCommandParams
        ).join(', ')}]`
      )
    }
  }

  stringify(option?: { separator?: PathCommandSeparator }): string {
    const separator = option?.separator || ' '

    if (!PATH_COMMAND_SEPARATOR.includes(separator)) {
      throw new Error(`Invalid separator: ${separator}`)
    }

    const paramsString = this.params.join(separator)

    return `${this.command}${paramsString ? ` ${paramsString}` : ''}`
  }

  updateParams(params: PathCommandParams): void {
    this.validate(this.command, params)

    this._params = params
  }
}
