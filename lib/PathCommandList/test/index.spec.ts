import { PathCommandList } from '../'
import { PathCommand } from '../../PathCommand'

describe('test for PathCommandList', () => {
  it('should create instance', () => {
    const cmdList = new PathCommandList([
      new PathCommand('L', [1, 2]),
      new PathCommand('M', [3, 4]),
      new PathCommand('L', [5, 6]),
      new PathCommand('Z', []),
    ])
    expect(cmdList.commands).toHaveLength(4)
    expect(cmdList.stringify()).toBe('L 1 2 M 3 4 L 5 6 Z')
  })
})
