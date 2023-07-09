import { parsePathCommandList } from '../'
import { PathCommandList } from '../../PathCommandList'

describe('test for parser', () => {
  it('should return PathCommandList instance', () => {
    const pathCommandList = parsePathCommandList('L 1 2 M 3 4 L 5 6 Z')

    expect(pathCommandList).toBeInstanceOf(PathCommandList)
    expect(pathCommandList.commands).toHaveLength(4)
  })

  it('should throw error if no numeric params', () => {
    expect(() => {
      parsePathCommandList('L one 2 Z')
    }).toThrow('Invalid command params: L one 2')
  })

  it('should throw error if invalid params', () => {
    expect(() => {
      parsePathCommandList('L 1 2 3 Z')
    }).toThrow('Invalid command string: L 1 2 3')
  })
})
