import {
  PathCommand,
  isValidCommandType,
  isValidPathCommandParams,
  PATH_COMMAND_COMMANDS,
} from '../PathCommand'
import { PathCommandList } from '../PathCommandList'

const splitCommand = (
  commandString: string,
): { command: string; params: number[] } => {
  if (commandString.length < 1)
    throw new Error('command string must be at least 1 character')

  return {
    command: commandString[0],
    params: parseCommandParams(commandString),
  }
}

const parseCommandParams = (commandString: string): number[] => {
  if (commandString.length <= 1) {
    return []
  }

  const _paramString = commandString.slice(1, commandString.length)

  const _params = _paramString
    .replace(/-/g, ',-') // '10-10 20-20' => '10,-10 20,-20'
    .split(/,|\s/g)
    .filter((_param) => !!_param)

  return _params.map((_param: string) => {
    const paramValue = Number(_param)

    if (isNaN(paramValue)) {
      throw new Error(`Invalid command params: ${commandString}`)
    }

    return paramValue
  })
}

export const parsePathCommandList = (
  commandString: string,
): PathCommandList => {
  const commands: PathCommand[] = []
  const commandStringList = commandString.split(
    new RegExp(`(?=${PATH_COMMAND_COMMANDS.join('|')})`, 'g'),
  )

  for (const commandStringItem of commandStringList) {
    const { command, params } = splitCommand(commandStringItem.trim())

    if (
      !isValidCommandType(command) ||
      !isValidPathCommandParams(command, params)
    ) {
      throw new Error(`Invalid command string: ${commandStringItem.trim()}`)
    }

    commands.push(new PathCommand(command, params))
  }

  return new PathCommandList(commands)
}
