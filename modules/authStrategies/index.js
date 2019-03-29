import { resolve } from 'path';

export default function SimpleModule (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.template.js'),
    filename: './plugin.template.js',
    options: moduleOptions
  })
}