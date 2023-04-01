import { CommandClassType, CommandType } from '../core'

export const toEqualCommand = (
  instance: CommandType,
  {
    instanceClass,
    command,
    params,
  }: { instanceClass: CommandClassType; command: string; params: number[] }
) => {
  expect(instance).toBeInstanceOf(instanceClass)
  expect(instance.command).toBe(command)
  expect(instance.params).toEqual(params)
}
