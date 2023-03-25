import { CommandList } from './CommandList'

export const parse = (command: string): CommandList => {
  return new CommandList(command)
}
