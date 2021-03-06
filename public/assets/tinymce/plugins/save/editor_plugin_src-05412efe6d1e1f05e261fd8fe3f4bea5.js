/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.Save",{init:function(e,t){var n=this;n.editor=e,e.addCommand("mceSave",n._save,n),e.addCommand("mceCancel",n._cancel,n),e.addButton("save",{title:"save.save_desc",cmd:"mceSave"}),e.addButton("cancel",{title:"save.cancel_desc",cmd:"mceCancel"}),e.onNodeChange.add(n._nodeChange,n),e.addShortcut("ctrl+s",e.getLang("save.save_desc"),"mceSave")},getInfo:function(){return{longname:"Save",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/save",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_nodeChange:function(e,t,n){var e=this.editor;e.getParam("save_enablewhendirty")&&(t.setDisabled("save",!e.isDirty()),t.setDisabled("cancel",!e.isDirty()))},_save:function(){var e=this.editor,t,n,r,i;t=tinymce.DOM.get(e.id).form||tinymce.DOM.getParent(e.id,"form");if(e.getParam("save_enablewhendirty")&&!e.isDirty())return;tinyMCE.triggerSave();if(n=e.getParam("save_onsavecallback")){e.execCallback("save_onsavecallback",e)&&(e.startContent=tinymce.trim(e.getContent({format:"raw"})),e.nodeChanged());return}t?(e.isNotDirty=!0,(t.onsubmit==null||t.onsubmit()!=0)&&t.submit(),e.nodeChanged()):e.windowManager.alert("Error: No form element found.")},_cancel:function(){var e=this.editor,t,n=tinymce.trim(e.startContent);if(t=e.getParam("save_oncancelcallback")){e.execCallback("save_oncancelcallback",e);return}e.setContent(n),e.undoManager.clear(),e.nodeChanged()}}),tinymce.PluginManager.add("save",tinymce.plugins.Save)})();