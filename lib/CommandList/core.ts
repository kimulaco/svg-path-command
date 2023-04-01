import {
  ABSOLUTE_A,
  RELATIVE_A,
  PARAM_LENGTH_A,
  AbsoluteACommand,
  RelativeACommand,
} from '../Command/A'
import {
  ABSOLUTE_C,
  RELATIVE_C,
  PARAM_LENGTH_C,
  AbsoluteCCommand,
  RelativeCCommand,
} from '../Command/C'
import {
  ABSOLUTE_H,
  RELATIVE_H,
  PARAM_LENGTH_H,
  AbsoluteHCommand,
  RelativeHCommand,
} from '../Command/H'
import {
  ABSOLUTE_L,
  RELATIVE_L,
  PARAM_LENGTH_L,
  AbsoluteLCommand,
  RelativeLCommand,
} from '../Command/L'
import {
  ABSOLUTE_M,
  RELATIVE_M,
  PARAM_LENGTH_M,
  AbsoluteMCommand,
  RelativeMCommand,
} from '../Command/M'
import {
  ABSOLUTE_Q,
  RELATIVE_Q,
  PARAM_LENGTH_Q,
  AbsoluteQCommand,
  RelativeQCommand,
} from '../Command/Q'
import {
  ABSOLUTE_S,
  RELATIVE_S,
  PARAM_LENGTH_S,
  AbsoluteSCommand,
  RelativeSCommand,
} from '../Command/S'
import {
  ABSOLUTE_T,
  RELATIVE_T,
  PARAM_LENGTH_T,
  AbsoluteTCommand,
  RelativeTCommand,
} from '../Command/T'
import {
  ABSOLUTE_V,
  RELATIVE_V,
  PARAM_LENGTH_V,
  AbsoluteVCommand,
  RelativeVCommand,
} from '../Command/V'
import {
  ABSOLUTE_Z,
  RELATIVE_Z,
  PARAM_LENGTH_Z,
  AbsoluteZCommand,
  RelativeZCommand,
} from '../Command/Z'
import { ParserError } from '../ParserError'

export const COMMANDS = [
  ABSOLUTE_A,
  RELATIVE_A,
  ABSOLUTE_C,
  RELATIVE_C,
  ABSOLUTE_H,
  RELATIVE_H,
  ABSOLUTE_L,
  RELATIVE_L,
  ABSOLUTE_M,
  RELATIVE_M,
  ABSOLUTE_Q,
  RELATIVE_Q,
  ABSOLUTE_S,
  RELATIVE_S,
  ABSOLUTE_T,
  RELATIVE_T,
  ABSOLUTE_V,
  RELATIVE_V,
  ABSOLUTE_Z,
  RELATIVE_Z,
] as const

export type CommandType =
  | AbsoluteACommand
  | RelativeACommand
  | AbsoluteCCommand
  | RelativeCCommand
  | AbsoluteHCommand
  | RelativeHCommand
  | AbsoluteLCommand
  | RelativeLCommand
  | AbsoluteMCommand
  | RelativeMCommand
  | AbsoluteQCommand
  | RelativeQCommand
  | AbsoluteSCommand
  | RelativeSCommand
  | AbsoluteTCommand
  | RelativeTCommand
  | AbsoluteVCommand
  | RelativeVCommand
  | AbsoluteZCommand
  | RelativeZCommand

export type CommandClassType =
  | typeof AbsoluteACommand
  | typeof RelativeACommand
  | typeof AbsoluteCCommand
  | typeof RelativeCCommand
  | typeof AbsoluteHCommand
  | typeof RelativeHCommand
  | typeof AbsoluteLCommand
  | typeof RelativeLCommand
  | typeof AbsoluteMCommand
  | typeof RelativeMCommand
  | typeof AbsoluteQCommand
  | typeof RelativeQCommand
  | typeof AbsoluteSCommand
  | typeof RelativeSCommand
  | typeof AbsoluteTCommand
  | typeof RelativeTCommand
  | typeof AbsoluteVCommand
  | typeof RelativeVCommand
  | typeof AbsoluteZCommand
  | typeof RelativeZCommand

export type CommandKey = (typeof COMMANDS)[number]

const COMMAND_CONFIG = {
  A: {
    CommandClass: AbsoluteACommand,
    paramLength: PARAM_LENGTH_A,
  },
  a: {
    CommandClass: RelativeACommand,
    paramLength: PARAM_LENGTH_A,
  },
  C: {
    CommandClass: AbsoluteCCommand,
    paramLength: PARAM_LENGTH_C,
  },
  c: {
    CommandClass: RelativeCCommand,
    paramLength: PARAM_LENGTH_C,
  },
  H: {
    CommandClass: AbsoluteHCommand,
    paramLength: PARAM_LENGTH_H,
  },
  h: {
    CommandClass: RelativeHCommand,
    paramLength: PARAM_LENGTH_H,
  },
  L: {
    CommandClass: AbsoluteLCommand,
    paramLength: PARAM_LENGTH_L,
  },
  l: {
    CommandClass: RelativeLCommand,
    paramLength: PARAM_LENGTH_L,
  },
  M: {
    CommandClass: AbsoluteMCommand,
    paramLength: PARAM_LENGTH_M,
  },
  m: {
    CommandClass: RelativeMCommand,
    paramLength: PARAM_LENGTH_M,
  },
  Q: {
    CommandClass: AbsoluteQCommand,
    paramLength: PARAM_LENGTH_Q,
  },
  q: {
    CommandClass: RelativeQCommand,
    paramLength: PARAM_LENGTH_Q,
  },
  S: {
    CommandClass: AbsoluteSCommand,
    paramLength: PARAM_LENGTH_S,
  },
  s: {
    CommandClass: RelativeSCommand,
    paramLength: PARAM_LENGTH_S,
  },
  T: {
    CommandClass: AbsoluteTCommand,
    paramLength: PARAM_LENGTH_T,
  },
  t: {
    CommandClass: RelativeTCommand,
    paramLength: PARAM_LENGTH_T,
  },
  V: {
    CommandClass: AbsoluteVCommand,
    paramLength: PARAM_LENGTH_V,
  },
  v: {
    CommandClass: RelativeVCommand,
    paramLength: PARAM_LENGTH_V,
  },
  Z: {
    CommandClass: AbsoluteZCommand,
    paramLength: PARAM_LENGTH_Z,
  },
  z: {
    CommandClass: RelativeZCommand,
    paramLength: PARAM_LENGTH_Z,
  },
} as const

const parseCommandParam = (commandString: string): number[] => {
  const paramString = commandString.slice(1, commandString.length)

  return paramString
    .replace(/-/g, ',-')
    .split(/,|\s/g)
    .filter((param) => !!param)
    .map((param: string) => {
      const value = Number(param)

      if (isNaN(value)) {
        throw new ParserError(`Invalid command: ${commandString}`)
      }

      return value
    })
}

export const splitCommand = (
  commandString: string
): { command: string; params: number[] } => {
  if (!commandString) throw new ParserError('Required command string')

  return {
    command: commandString[0],
    params: parseCommandParam(commandString),
  }
}

export const parseCommand = (commandString: string): CommandType[] => {
  const { command, params } = splitCommand(commandString)

  if (!(command in COMMAND_CONFIG)) {
    throw new ParserError(`Unknown command: ${commandString}`)
  }

  const _command = command as CommandKey
  const { paramLength, CommandClass } = COMMAND_CONFIG[_command]

  if (paramLength === 0) {
    if (params.length !== 0) {
      throw new ParserError(`Invalid command: ${command} ${params.toString()}`)
    }

    return [new CommandClass(_command as never, params)]
  }

  if (params.length % paramLength !== 0) {
    throw new ParserError(`Invalid command: ${command} ${params.toString()}`)
  }

  const commandLength = params.length / paramLength || 1
  const commands: CommandType[] = []

  for (let i = 0; i < commandLength; i++) {
    commands.push(
      new CommandClass(
        _command as never,
        params.slice(i * paramLength, i * paramLength + paramLength)
      )
    )
  }

  return commands
}
