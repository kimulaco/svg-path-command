import { CommandList } from './CommandList'
import {
  RelativeLCommand,
  AbsoluteMCommand,
  AbsoluteZCommand,
} from '../Command'

describe('CommandList', () => {
  test('Create instance', async () => {
    const commandList = new CommandList('M100,100l50,-50Z')
    const commands = commandList.commands

    expect(commands.length).toBe(3)
    expect(commands[0] instanceof AbsoluteMCommand).toBe(true)
    expect(commands[1] instanceof RelativeLCommand).toBe(true)
    expect(commands[2] instanceof AbsoluteZCommand).toBe(true)
  })
})
