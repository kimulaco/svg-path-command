import {
  PATH_COMMAND_PARAMS_MAP,
  type CommandTypes,
  type PathCommandParams,
} from '../'

export const isValidPathCommandParams = (
  command: CommandTypes,
  params: number[]
): params is PathCommandParams => {
  return PATH_COMMAND_PARAMS_MAP[command].length === params.length
}
