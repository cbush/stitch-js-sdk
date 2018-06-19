import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'mongodb-stitch-browser-services-mongodb-remote'
    },
    {
      file: 'lib/index.esm.js',
      format: 'es',
      name: 'mongodb-stitch-browser-services-mongodb-remote'
    }
  ],
  plugins: [
    typescript()
  ]
}
