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

  test('stringify()', async () => {
    const commandList = new CommandList('M100,100 l 50, -50 Z')
    expect(commandList.stringify()).toBe('M100,100l50,-50Z')
  })

  test('update command', async () => {
    const commandList = new CommandList('M2,8 L 5,2 L8, 8Z')
    commandList.commands[1].updateResult({
      x: 12,
      y: 20,
    } as any) // eslint-disable-line @typescript-eslint/no-explicit-any

    expect(commandList.commands[1].params).toEqual([12, 20])
    expect(commandList.commands[1].result).toEqual({ x: 12, y: 20 })
    expect(commandList.stringify()).toBe('M2,8L12,20L8,8Z')
  })
})
