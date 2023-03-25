import { ParserError } from '../ParserError'

const parseCommandParam = (commandString: string): number[] => {
  const paramString = commandString.slice(1, commandString.length)

  return paramString.split(/,|\s/g).map((param: string) => {
    const value = Number(param)

    if (isNaN(value)) {
      throw new ParserError(`Invalid path command: ${commandString}`)
    }

    return value
  })
}

export const parseCommand = (
  commandString: string
): { command: string; params: number[] } => {
  if (!commandString) throw new ParserError('Required command string')

  return {
    command: commandString[0],
    params: parseCommandParam(commandString),
  }
}
