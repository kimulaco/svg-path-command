/* eslint-disable @typescript-eslint/no-var-requires */
const Benchmark = require('benchmark')
const SvgPathCommand = require('../dist/svg-path-command.umd.js')

const suite = new Benchmark.Suite()

const SAMPLE_COMMAND =
  'A 10 20 1 1 50 60 70 a 10 20 1 1 50 60 70 ' +
  'C 10 20 30 40 50 60 c 10 20 30 40 50 60 ' +
  'H 10 h 10 ' +
  'L 10 20 l 10 20 ' +
  'M 10 20 m 10 20 ' +
  'Q 10 20 30 40 q 10 20 30 40 ' +
  'S 10 20 30 40 s 10 20 30 40 ' +
  'T 10 20 t 10 20 ' +
  'V 10 v 10'
const TEST_COMMAND = `${[...Array(10)].map(() => SAMPLE_COMMAND).join('')} Z`

suite
  .add('parse', () => {
    SvgPathCommand.parse(TEST_COMMAND)
  })
  .on('cycle', (event) => {
    if (event.target.error) {
      console.error(event.target.error)
      throw event.target.error
    }

    console.log(String(event.target))
  })
  .run()
