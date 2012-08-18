(function(){var e=tinymce.DOM,t=tinymce.dom.Event,n=tinymce.each,r=tinymce.explode;tinymce.create("tinymce.plugins.TabFocusPlugin",{init:function(i,s){function o(e,n){if(n.keyCode===9)return t.cancel(n)}function u(i,s){function p(t){function r(e){return e.nodeName==="BODY"||e.type!="hidden"&&e.style.display!="none"&&e.style.visibility!="hidden"&&r(e.parentNode)}function s(e){return e.attributes.tabIndex.specified||e.nodeName=="INPUT"||e.nodeName=="TEXTAREA"}function a(){return tinymce.isIE6||tinymce.isIE7}function f(e){return(!a()||s(e))&&e.getAttribute("tabindex")!="-1"&&r(e)}l=e.select(":input:enabled,*[tabindex]:not(iframe)"),n(l,function(e,t){if(e.id==i.id)return o=t,!1});if(t>0){for(u=o+1;u<l.length;u++)if(f(l[u]))return l[u]}else for(u=o-1;u>=0;u--)if(f(l[u]))return l[u];return null}var o,u,f,l,h;if(s.keyCode===9){h=r(i.getParam("tab_focus",i.getParam("tabfocus_elements",":prev,:next"))),h.length==1&&(h[1]=h[0],h[0]=":prev"),s.shiftKey?h[0]==":prev"?l=p(-1):l=e.get(h[0]):h[1]==":next"?l=p(1):l=e.get(h[1]);if(l)return l.id&&(i=tinymce.get(l.id||l.name))?i.focus():window.setTimeout(function(){tinymce.isWebKit||window.focus(),l.focus()},10),t.cancel(s)}}i.onKeyUp.add(o),tinymce.isGecko?(i.onKeyPress.add(u),i.onKeyDown.add(o)):i.onKeyDown.add(u)},getInfo:function(){return{longname:"Tabfocus",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/tabfocus",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("tabfocus",tinymce.plugins.TabFocusPlugin)})();