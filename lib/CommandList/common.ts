import {
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
  AbsoluteACommand,
  RelativeACommand,
  AbsoluteCCommand,
  RelativeCCommand,
  AbsoluteHCommand,
  RelativeHCommand,
  AbsoluteLCommand,
  RelativeLCommand,
  AbsoluteMCommand,
  RelativeMCommand,
  AbsoluteQCommand,
  RelativeQCommand,
  AbsoluteSCommand,
  RelativeSCommand,
  AbsoluteTCommand,
  RelativeTCommand,
  AbsoluteVCommand,
  RelativeVCommand,
  AbsoluteZCommand,
  RelativeZCommand,
} from '../Command'
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

export type CommandKey = (typeof COMMANDS)[number]

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

export const parseCommand = (commandString: string): CommandType => {
  const { command, params } = splitCommand(commandString)

  switch (command) {
    case ABSOLUTE_A:
      return new AbsoluteACommand(command, params)
    case RELATIVE_A:
      return new RelativeACommand(command, params)
    case ABSOLUTE_C:
      return new AbsoluteCCommand(command, params)
    case RELATIVE_C:
      return new RelativeCCommand(command, params)
    case ABSOLUTE_H:
      return new AbsoluteHCommand(command, params)
    case RELATIVE_H:
      return new RelativeHCommand(command, params)
    case ABSOLUTE_L:
      return new AbsoluteLCommand(command, params)
    case RELATIVE_L:
      return new RelativeLCommand(command, params)
    case ABSOLUTE_M:
      return new AbsoluteMCommand(command, params)
    case RELATIVE_M:
      return new RelativeMCommand(command, params)
    case ABSOLUTE_Q:
      return new AbsoluteQCommand(command, params)
    case RELATIVE_Q:
      return new RelativeQCommand(command, params)
    case ABSOLUTE_S:
      return new AbsoluteSCommand(command, params)
    case RELATIVE_S:
      return new RelativeSCommand(command, params)
    case ABSOLUTE_T:
      return new AbsoluteTCommand(command, params)
    case RELATIVE_T:
      return new RelativeTCommand(command, params)
    case ABSOLUTE_V:
      return new AbsoluteVCommand(command, params)
    case RELATIVE_V:
      return new RelativeVCommand(command, params)
    case ABSOLUTE_Z:
      return new AbsoluteZCommand(command, params)
    case RELATIVE_Z:
      return new RelativeZCommand(command, params)
    default:
      throw new ParserError(`Unknown command: ${commandString}`)
  }
}
