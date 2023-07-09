import {
  PATH_COMMAND_COMMANDS,
  PATH_COMMAND_PARAMS_MAP,
  type CommandTypes,
  type PathCommandParams,
} from '../../'

export const isValidCommandType = (
  command: string
): command is CommandTypes => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return PATH_COMMAND_COMMANDS.includes(command as any)
}

export const isValidPathCommandParams = (
  command: CommandTypes,
  params: number[]
): params is PathCommandParams => {
  return PATH_COMMAND_PARAMS_MAP[command].length === params.length
}
