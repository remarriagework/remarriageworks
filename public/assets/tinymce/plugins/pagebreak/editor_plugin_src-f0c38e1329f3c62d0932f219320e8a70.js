/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.PageBreakPlugin",{init:function(e,t){var n='<img src="'+e.theme.url+'/img/trans.gif" class="mcePageBreak mceItemNoResize" />',r="mcePageBreak",i=e.getParam("pagebreak_separator","<!-- pagebreak -->"),s;s=new RegExp(i.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g,function(e){return"\\"+e}),"g"),e.addCommand("mcePageBreak",function(){e.execCommand("mceInsertContent",0,n)}),e.addButton("pagebreak",{title:"pagebreak.desc",cmd:r}),e.onInit.add(function(){e.theme.onResolveName&&e.theme.onResolveName.add(function(t,n){n.node.nodeName=="IMG"&&e.dom.hasClass(n.node,r)&&(n.name="pagebreak")})}),e.onClick.add(function(e,t){t=t.target,t.nodeName==="IMG"&&e.dom.hasClass(t,r)&&e.selection.select(t)}),e.onNodeChange.add(function(e,t,n){t.setActive("pagebreak",n.nodeName==="IMG"&&e.dom.hasClass(n,r))}),e.onBeforeSetContent.add(function(e,t){t.content=t.content.replace(s,n)}),e.onPostProcess.add(function(e,t){t.get&&(t.content=t.content.replace(/<img[^>]+>/g,function(e){return e.indexOf('class="mcePageBreak')!==-1&&(e=i),e}))})},getInfo:function(){return{longname:"PageBreak",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/pagebreak",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("pagebreak",tinymce.plugins.PageBreakPlugin)})();