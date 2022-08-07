
# 🚀 tpIndent2em
[![tinymce-plugin](https://tinymce-plugin.github.io/badge.svg)](https://github.com/tinymce-plugin)&nbsp;
[![release candidate](https://img.shields.io/npm/v/@tinymce-plugin/tp-indent2em.svg)](https://www.npmjs.com/package/@tinymce-plugin/tp-indent2em)&nbsp;
[![tinymce Version](https://img.shields.io/badge/tinymce-5.2.0~5.x.x-green.svg)](https://www.tiny.cloud)&nbsp; 
[![GitHub license](https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg)](https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE)&nbsp;
[![tinymce Version](https://img.shields.io/npm/dw/@tinymce-plugin/tp-indent2em)](https://github.com/tinymce-plugin/tp-indent2em)

> 实现 tinymce 富文本框首行缩进功能 能很好配合 字体大小(fon-size)  字母间距(letter-spacing) 实现首行缩进

# 使用方式
### CDN

```html
<script src="https://unpkg.com/tinymce-plugin/plugins/tpIndent2em/plugin.min.js"></script><!--引入-->

<!-- 使用 -->
<script>
   tinymce.init({
  ...
   plugins: "tpIndent2em"
   toolbar: "tpIndent2em"
  ...
 })
</script>

```
### NPM

> **使用 tinymce-plugin 库**

#### 下载 tinymce-plugin 
<codeGroup>
 <codeGroupItem title="NPM" active>

```sh
npm i tinymce-plugin 
```
</codeGroupItem>
<codeGroupItem title="YARN">

```sh
yarn add tinymce-plugin -D 
```
</codeGroupItem>
</codeGroup>

#### 项目中使用

```js {1-2,5-6}
 import "tinymce-plugin"
 import "tinymce-plugin/plugins/tpIndent2em/plugin.js";
 tinymce.init({
  ...
   plugins: "tpIndent2em"
   toolbar: "tpIndent2em"
  ...
 })

```

## 下载方式2

```js
import "@tinymce/tp-indent2em"
```
<codeGroup>
 <codeGroupItem title="NPM" active>

```sh
npm i @tinymce-plugin/tp-indent2em
```
</codeGroupItem>
<codeGroupItem title="YARN">

```sh
yarn add @tinymce-plugin/tp-indent2em -D 
```
</codeGroupItem>
</codeGroup>

#### 项目中使用

```js {1-2,5-6}
 import "tinymce-plugin"
 import "@tinymce-plugin/tp-indent2em";
 tinymce.init({
  ...
   plugins: "tpIndent2em"
   toolbar: "tpIndent2em"
  ...
 })
```
:::tip
 `tpIndent2em` 依赖 `tinymce-plugin`
:::
# Demo


<demoGroup>
 <demoGroupItem title="Javascript">

:::tinymce
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" type="image/x-icon">
    <title>Tinymce-Plugin</title>
    <style>
      .open-plugin{
        width:150px;
        height: 30px;
        display: flex;
        padding: 0px 10px;
        background-color:rgb(27, 158, 234);
        border-radius:5px;
        color:white;
        font-size:0;
        text-align:center;
        cursor:pointer;
        align-content: space-around;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
      }
      .open-plugin img{
        display: block;
        width: 20px;
        height: 20px;
      }
      .open-plugin span{
        display: inline-block;
        height:20px;
        line-height:20px;
        vertical-align: middle;
        margin-left:10px;
        font-size:14px;
      }
    </style>
    <script src='/tinymce/tinymce.js'></script>
    <script src="/tinymce/tinymce-plugin.js"></script>
    <script src="https://unpkg.com/tinymce-plugin/langs/zh_CN.js"></script>
    <script src="https://unpkg.com/tinymce-plugin/plugins/tpIndent2em/plugin.min.js"></script>    
  </head>
  <body tp-page-height="298">
    <div>
      <textarea class="tinymce">
        <p>这是一个首行缩进插件</p>
      </textarea>
    </div>
    <div>
      <p></p>
      <a onclick="openPlugin()" class="open-plugin"  title="点击调用触发插件" ><img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" alt=""><span>点击调用触发插件</span></a>
    </div>
    <script>

     tinymce.init({
        selector: 'textarea.tinymce',
        language: 'zh_CN',
        skeletonScreen: true,
        plugins: 'code tpIndent2em autoresize',
        toolbar: 'code tpIndent2em'
        });

     var openPlugin=()=>{
       tinymce.activeEditor.execCommand('mceTpIndent2em');
     }
    </script>
  </body>
</html>

```
:::


 </demoGroupItem>
 <demoGroupItem title="Vue3" active>

:::tinymce-vue3

```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div>
</template>

<script>
import tinymce from "tinymce";
import "tinymce-plugin";
import TinymceVue from "@tinymce-plugin/tinymce-vue";
import "tinymce-plugin/plugins/tpIndent2em/plugin.js";
export default{
name: 'domeVue3',
components: { TinymceVue },
data(){
    return {
        content: '这是一个首行缩进插件',
        tinymceOptions:{
                min_height: 300,
                max_height: 700,
                skeletonScreen: true,
                base_url:'/tinymce',
                plugins: 'code tpIndent2em preview autoresize',
                toolbar: 'code tpIndent2em preview',
             
        }
    }
  }
}
</script>
```
:::
 </demoGroupItem>
 <demoGroupItem title="Vue2">

:::tinymce-vue2
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>
</template>

<script>
import tinymce from "tinymce";
import "tinymce-plugin";
import "tinymce-plugin/plugins/tpIndent2em/plugin.js";
import TinymceVue from "@tinymce-plugin/tinymce-vue";
export default{
name: 'domeVue2',
components: { TinymceVue },
data(){
    return {
        content: '这是一个首行缩进插件',
        tinymceOptions:{
                min_height: 300,
                max_height: 700,
                base_url:'/tinymce',
                plugins: 'code tpIndent2em preview autoresize',
                toolbar: 'code tpIndent2em Preview',
                skeletonScreen: true,
        }
    }
  }
}
</script>
```
:::
 </demoGroupItem>
 <demoGroupItem title="React">

:::tinymce-react
```html
<script>
import React from 'react';
import ReactDOM from 'react-dom';
import tinymce from "tinymce";
import "tinymce-plugin";
import "tinymce-plugin/plugins/tpIndent2em/plugin.js";
import { Editor } from '@tinymce/tinymce-react';

     class ReactDemo extends React.Component{
       constructor(props) {
           super(props);
           this.state = { reactDemoInitialValue: "<p>这是一个REactDemo</p>"};
           this.reactDemoInit = {
                    min_height: 220,
                    base_url:'/tinymce',
                    branding: false,
                    language:'zh_CN',
                    menubar: false,
                    skeletonScreen: true,
                    plugins: 'code tpIndent2em autoresize',
                    toolbar: 'undo redo code tpIndent2em',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
             };
       this.handleChange = (data)=>{
              this.setState({reactDemoInitialValue: data})
        }
      }
      render(){
        return (
           <div>
            <h1>这是一个首行缩进插件</h1>
            <div>
            <Editor initialValue={this.state.reactDemoInitialValue} init={this.reactDemoInit} onEditorChange={this.handleChange} />
            </div>
            <div dangerouslySetInnerHTML={{__html: this.state.reactDemoInitialValue }} ></div>
          </div>
          );
      }
    }

   ReactDOM.render(<ReactDemo />, document.getElementById('ReactRootID'));
</script>
```
:::
 </demoGroupItem>
</demoGroup>