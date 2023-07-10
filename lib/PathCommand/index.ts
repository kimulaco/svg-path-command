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
    this.validateParams(command, params)

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

  get value(): PathCommandValue {
    const value: PathCommandValue = {}

    const keys = PATH_COMMAND_PARAMS_MAP[this.command]
    keys.forEach((key, i) => {
      value[key] = this.params[i]
    })

    return value
  }

  private convertValueToParams(
    command: CommandTypes,
    value: PathCommandValue
  ): PathCommandParams {
    const keys = PATH_COMMAND_PARAMS_MAP[command]
    const error = new Error(
      `Invalid value of ${command} command: ${JSON.stringify(value)}`
    )

    if (keys.length !== Object.keys(value).length) {
      throw error
    }

    const params: PathCommandParams = []
    for (const key of keys) {
      if (!value[key]) {
        throw error
      }
      params.push(value[key])
    }

    return params
  }

  validateParams(command: CommandTypes, params: PathCommandParams): void {
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
    this.validateParams(this.command, params)

    this._params = params
  }

  updateValue(value: PathCommandValue): void {
    const params = this.convertValueToParams(this.command, value)

    this.validateParams(this.command, params)

    this._params = params
  }

  updateResult(value: PathCommandValue): void {
    console.warn(
      'updateResult is deprecated so will be removed in the future. use updateValue.'
    )
    this.updateValue(value)
  }
}
