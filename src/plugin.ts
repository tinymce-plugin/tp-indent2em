import * as Buttons from './ui/Buttons';
import * as Commands from './api/Commands';
// import tinymce from "tinymce"
// declare const tinymce: any;

export default (opt:pluginOpt) => {
  tinymce.PluginManager.add(opt.registryName, (editor: any, url: any) => {
    Buttons.setup(editor,opt);
    Commands.register(editor,opt);
    return {
      getMetadata: function () {
          return  {
              name: opt.name,
              url: opt.repo,
          };
      }
  };
  });
};
