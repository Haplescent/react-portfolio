import babel from '@rollup/plugin-babel'
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const production = !process.env.ROLLUP_WATCH
const dist = 'dist'

export default {
  input: 'src/server.js',
  external: ['react'],
  output: {
    file: `${dist}/bundle.cjs.js`,
    format: 'cjs'
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({ exclude: '/node_modules/' }, { babelHelpers: 'bundled' }),
    production && terser(),
    nodeResolve({ preferBuiltins: false }),
    json()
  ]
}
