import { PATH_COMMAND_COMMANDS, type CommandTypes } from '../'

export const isValidCommandType = (
  command: string,
): command is CommandTypes => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return PATH_COMMAND_COMMANDS.includes(command as any)
}
