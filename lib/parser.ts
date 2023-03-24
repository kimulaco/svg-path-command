interface PathCommand {
  command: string
  parameter: string
}

export const parse = (pathCommand: string): PathCommand[] => {
  const commands = pathCommand.split(/(?=M|m)/g)

  return commands.map((command: string) => {
    return {
      command: command[0],
      parameter: command.slice(1, command.length),
    }
  })
}
