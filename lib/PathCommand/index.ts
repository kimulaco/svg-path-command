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

export class PathCommand {
  protected command: CommandTypes
  protected params: PathCommandParams = []

  constructor(command: CommandTypes, params: PathCommandParams) {
    this.validate(command, params)

    this.command = command
    this.params = params
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
    if (!PATH_COMMAND_COMMANDS.includes(command)) {
      throw new Error(`Invalid command: ${command}`)
    }

    const valueKeys = PATH_COMMAND_PARAMS_MAP[command]
    if (Array.isArray(valueKeys) && valueKeys.length !== params.length) {
      throw new Error(
        `Invalid params of ${command} command: [${params.join(', ')}]`
      )
    }
  }

  toString(option?: { separator?: PathCommandSeparator }): string {
    const separator = option?.separator || ' '

    if (!PATH_COMMAND_SEPARATOR.includes(separator)) {
      throw new Error(`Invalid separator: ${separator}`)
    }

    const paramsString = this.params.join(separator)

    return `${this.command}${paramsString ? ` ${paramsString}` : ''}`
  }

  updateParams(params: PathCommandParams): void {
    this.validate(this.command, params)

    this.params = params
  }
}
