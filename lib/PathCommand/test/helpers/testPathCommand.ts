import { PathCommand } from '../../index'
import type { CommandTypes, PathCommandParams } from '../../types'

export type ResolveTest = {
  name: string
  args: [CommandTypes, PathCommandParams]
  beforeTest?: (cmd: PathCommand) => PathCommand
  afterTest?: (cmd: PathCommand) => PathCommand
  data?: Record<string, unknown>
  getters?: Record<string, unknown>
  methods?: Record<string, [unknown, unknown]>
}

export type RejectTest = {
  name: string
  args: [CommandTypes, PathCommandParams]
  beforeTest?: (cmd: PathCommand) => PathCommand
  afterTest?: (cmd: PathCommand) => PathCommand
  error: string
}

export type TestConfig = {
  resolves?: ResolveTest[]
  rejects?: RejectTest[]
}

export const testPathCommand = (title: string, testConfig: TestConfig) => {
  describe(title, () => {
    const resolveTests = testConfig.resolves || []
    if (resolveTests.length > 0) {
      describe('resolves', () => {
        for (const resolveTest of resolveTests) {
          test(resolveTest.name, () => {
            let cmd = new PathCommand(resolveTest.args[0], resolveTest.args[1])

            if (typeof resolveTest.beforeTest === 'function') {
              cmd = resolveTest.beforeTest(cmd)
            }

            if (resolveTest.data) {
              for (const dataName of Object.keys(resolveTest.data)) {
                const value = resolveTest.data[dataName]
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                expect((cmd as any)[dataName]).toEqual(value)
              }
            }

            if (resolveTest.getters) {
              for (const getterName of Object.keys(resolveTest.getters)) {
                const returnValue = resolveTest.getters[getterName]
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                expect((cmd as any)[getterName]).toEqual(returnValue)
              }
            }

            if (resolveTest.methods) {
              for (const methodName of Object.keys(resolveTest.methods)) {
                const [args, returnValue] = resolveTest.methods[methodName]
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                expect((cmd as any)[methodName](args)).toEqual(returnValue)
              }
            }

            if (resolveTest.afterTest) {
              cmd = resolveTest.afterTest(cmd)
            }
          })
        }
      })
    }

    const rejectTests = testConfig.rejects || []
    if (rejectTests.length > 0) {
      describe('rejects', () => {
        for (const rejectTest of rejectTests) {
          test(rejectTest.name, () => {
            const createInstance = () => {
              let cmd = new PathCommand(rejectTest.args[0], rejectTest.args[1])

              if (rejectTest.beforeTest) {
                cmd = rejectTest.beforeTest(cmd)
              }

              if (rejectTest.afterTest) {
                rejectTest.afterTest(cmd)
              }
            }

            expect(createInstance).toThrow(rejectTest.error)
          })
        }
      })
    }
  })
}
