import path from 'path'
import vue from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'

const dev = process.env.SERVER === 'true'

export default {
  input: path.resolve(__dirname, 'src/app.js'),
  output: {
    format: 'amd',
    file: 'dist/app.js'
  },
  plugins: [
    vue(),
    dev && serve({
      contentBase: ['dist']
    })
  ]
}