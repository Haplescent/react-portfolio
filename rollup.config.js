import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH
const dist = 'dist'

export default {
  input: 'src/index.js',
  output: {
    file: `${dist}/bundle.cjs.js`,
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    production && terser()
  ]
}
