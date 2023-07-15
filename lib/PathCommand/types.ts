import { PATH_COMMAND_COMMANDS, PATH_COMMAND_SEPARATOR } from './constants'

export type CommandTypes = (typeof PATH_COMMAND_COMMANDS)[number]
export type PathCommandParams = number[]
export type PathCommandValue = Record<string, number>
export type PathCommandSeparator = (typeof PATH_COMMAND_SEPARATOR)[number]
