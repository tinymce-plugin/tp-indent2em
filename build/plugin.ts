import path from "path"
import fs from "fs"
import { ResolvedConfig } from "vite"
import type { NormalizedOutputOptions, OutputBundle } from 'rollup'
import { minifyJs } from "../utils"
let viteConfig: ResolvedConfig | undefined = undefined
/**
 * 构建tinymce-plugin 插件
 * @author Five
 * @export
 * @return {*} 
 */
 const includeRegexp: RegExp = new RegExp(/\.(css|js)$/i)
 // Filename to exclude
const excludeRegexp: RegExp = new RegExp(/vendor/)

export const buildPlugin = (pluginConfig?: any)=>{
// const root = process.cwd() 
// const outDir = 'dist'  
  return {
    name: 'vite-tp-build-plugin',
    configResolved(resolvedConfig: ResolvedConfig) {
      viteConfig = resolvedConfig
    },
    writeBundle(options: NormalizedOutputOptions, bundle: OutputBundle){
      for (const file of Object.entries(bundle)) {
        // Get the full path of file
   
        
        const root: string = viteConfig.root
        const outDir: string = pluginConfig.outDir||'dist'
        const content = pluginConfig.content|| pluginConfig
        const fileName: string = file[0].endsWith('.js-lean')
          ? file[0].replace(/\.js-lean/, '.lean.js')
          : file[0]
        const filePath: string = path.resolve(root, outDir, fileName)
        // Only handle matching files
        if (includeRegexp.test(fileName) && !excludeRegexp.test(fileName)) {
          try {
            // Read the content from target file
            let data: string = fs.readFileSync(filePath, {
              encoding: 'utf8',
            })
            data = data.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g,'\n')
        
              fileName=='plugin.js'&& (data=data.replace(/(.*)function\(\)/,'(function()').replace(/\}\(\)\;\n$/,'}());'))
            // If the banner content has comment symbol, use it directly
            if (
               content.includes('/*') ||
               content.includes('*/')
            ) {
              data = `${content}\n\n${data}`
            }
            // Otherwise add comment symbol
            else {
              data = `/*! ${content}*/\n\n${data}`
            }
        
            fileName=='plugin.js'&&minifyJs(data,filePath.replace(/plugin\.js$/,'plugin.min.js'),true)
            // Save
            fs.writeFileSync(filePath, data)
          } catch (e) {
            // console.log(e)
          }
     }
  }
},
  }
}
