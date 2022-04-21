import { defineConfig } from 'vite'
//@ts-ignore
import path from "path";
import typescript from '@rollup/plugin-typescript';
//@ts-ignore
import {buildPlugin} from './build/plugin'
import { namingFormat } from './utils';
const pkg:any = require('./package.json');
const formatMap = {'umd':'plugin.umd.js','es':'index.js','iife':'plugin.js'};
// https://vitejs.dev/config/
let nowData:Date = new Date()
const banner = `
*  @plugin ${pkg.name}
*  @version ${pkg.version} (${nowData.getFullYear()}-${nowData.getMonth()+1}-${nowData.getDate()})
*  @description ${pkg.description}
*  @copyright (${nowData.getFullYear()}) ${pkg.author||'Five'} . All rights reserved. ${ 'https://github.com/tinymce-plugin'+pkg.name.replace(/\@tinymce-plugin/,'')}${ pkg.repository&&pkg.repository.url? '\n*  @repository '+ pkg.repository.url : ''}
`
export default defineConfig(({command,mode})=>{
 return {
  server: {
    host: '0.0.0.0',
    port: 9855,
    // 是否开启 https
    https: false,
  },
  plugins:[typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}}),buildPlugin(banner)],
  build: {
    terserOptions: {
   
      compress: {
        drop_console: command !== 'serve',
        // 默认是true
        drop_debugger: command !== 'serve'
      }
    },
    lib:{
      entry: path.resolve(__dirname, 'src/main.ts'),
      // name: namingFormat.toHump(pkg.name.replace(/\@tinymce-plugin\//,'')),
      name: namingFormat.toHump(pkg.name.replace(/\@tinymce-plugin\//,'')),
      formats: ['iife'],
      fileName: (format) => 'plugin.js',
     },
     minify: false,
     outDir: path.resolve(__dirname, 'dist'),
  }
}
})


