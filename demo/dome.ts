

// import  "tinymce/skins/content/default/content.css"
// import  "tinymce/skins/ui/oxide/content.min.css"
// import  "tinymce/skins/content/default/content.css"
import tinymce from "tinymce"
import  "../libs/tp/tinymce-plugin"
import "tinymce/skins/content/default/content.css"
import "tinymce/skins/ui/oxide/content.min.css"
import  "tinymce/themes/silver/theme"
import  "tinymce/icons/default"
import  "tinymce/skins/ui/oxide/skin.min.css"
import  "tinymce/plugins/code"
import  "tinymce/plugins/image"
import  "tinymce/plugins/imagetools"
import  "tinymce/plugins/media"
import plugin from "../src/main"
setTimeout(()=>{
  console.log( tinymce.init({
    selector: 'textarea.tinymce',
    plugins: `code image imagetools media ${plugin.opt.registryName}`,
    toolbar: `code ${plugin.opt.registryName}`,
  }));
  tinymce.init({
    selector: 'div#mytextarea',
    menubar: 'file edit  insert view format table tools help mymenubar',
    menu: {
        mymenubar: {title: 'Extension', items: `${plugin.opt.registryName}` },
    },
    plugins: `code ${plugin.opt.registryName}`,
    toolbar: `code ${plugin.opt.registryName}`,
  });
  
  console.log(tinymce);},1000)

