(function(e,t){var n=function(){var t=e(document).data("events");return t&&t.click&&e.grep(t.click,function(e){return e.namespace==="rails"}).length};n()&&e.error("jquery-ujs has already been loaded!");var r;e.rails=r={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(t){var n=e('meta[name="csrf-token"]').attr("content");n&&t.setRequestHeader("X-CSRF-Token",n)},fire:function(t,n,r){var i=e.Event(n);return t.trigger(i,r),i.result!==!1},confirm:function(e){return confirm(e)},ajax:function(t){return e.ajax(t)},href:function(e){return e.attr("href")},handleRemote:function(n){var i,s,o,u,a,f,l;if(r.fire(n,"ajax:before")){u=n.data("cross-domain"),a=u===t?null:u,f=n.data("type")||e.ajaxSettings&&e.ajaxSettings.dataType;if(n.is("form")){i=n.attr("method"),s=n.attr("action"),o=n.serializeArray();var c=n.data("ujs:submit-button");c&&(o.push(c),n.data("ujs:submit-button",null))}else n.is(r.inputChangeSelector)?(i=n.data("method"),s=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):(i=n.data("method"),s=r.href(n),o=n.data("params")||null);l={type:i||"GET",data:o,dataType:f,crossDomain:a,beforeSend:function(e,i){return i.dataType===t&&e.setRequestHeader("accept","*/*;q=0.5, "+i.accepts.script),r.fire(n,"ajax:beforeSend",[e,i])},success:function(e,t,r){n.trigger("ajax:success",[e,t,r])},complete:function(e,t){n.trigger("ajax:complete",[e,t])},error:function(e,t,r){n.trigger("ajax:error",[e,t,r])}},s&&(l.url=s);var h=r.ajax(l);return n.trigger("ajax:send",h),h}return!1},handleMethod:function(n){var i=r.href(n),s=n.data("method"),o=n.attr("target"),u=e("meta[name=csrf-token]").attr("content"),a=e("meta[name=csrf-param]").attr("content"),f=e('<form method="post" action="'+i+'"></form>'),l='<input name="_method" value="'+s+'" type="hidden" />';a!==t&&u!==t&&(l+='<input name="'+a+'" value="'+u+'" type="hidden" />'),o&&f.attr("target",o),f.hide().append(l).appendTo("body"),f.submit()},disableFormElements:function(t){t.find(r.disableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with",t[n]()),t[n](t.data("disable-with")),t.prop("disabled",!0)})},enableFormElements:function(t){t.find(r.enableSelector).each(function(){var t=e(this),n=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[n](t.data("ujs:enable-with")),t.prop("disabled",!1)})},allowAction:function(e){var t=e.data("confirm"),n=!1,i;return t?(r.fire(e,"confirm")&&(n=r.confirm(t),i=r.fire(e,"confirm:complete",[n])),n&&i):!0},blankInputs:function(t,n,r){var i=e(),s,o,u=n||"input,textarea";return t.find(u).each(function(){s=e(this),o=s.is(":checkbox,:radio")?s.is(":checked"):s.val(),o==!!r&&(i=i.add(s))}),i.length?i:!1},nonBlankInputs:function(e,t){return r.blankInputs(e,t,!0)},stopEverything:function(t){return e(t.target).trigger("ujs:everythingStopped"),t.stopImmediatePropagation(),!1},callFormSubmitBindings:function(n,r){var i=n.data("events"),s=!0;return i!==t&&i.submit!==t&&e.each(i.submit,function(e,t){if(typeof t.handler=="function")return s=t.handler(r)}),s},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return r.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==t&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},r.fire(e(document),"rails:attachBindings")&&(e.ajaxPrefilter(function(e,t,n){e.crossDomain||r.CSRFProtection(n)}),e(document).delegate(r.linkDisableSelector,"ajax:complete",function(){r.enableElement(e(this))}),e(document).delegate(r.linkClickSelector,"click.rails",function(n){var i=e(this),s=i.data("method"),o=i.data("params");if(!r.allowAction(i))return r.stopEverything(n);i.is(r.linkDisableSelector)&&r.disableElement(i);if(i.data("remote")!==t)return(n.metaKey||n.ctrlKey)&&(!s||s==="GET")&&!o?!0:(r.handleRemote(i)===!1&&r.enableElement(i),!1);if(i.data("method"))return r.handleMethod(i),!1}),e(document).delegate(r.inputChangeSelector,"change.rails",function(t){var n=e(this);return r.allowAction(n)?(r.handleRemote(n),!1):r.stopEverything(t)}),e(document).delegate(r.formSubmitSelector,"submit.rails",function(n){var i=e(this),s=i.data("remote")!==t,o=r.blankInputs(i,r.requiredInputSelector),u=r.nonBlankInputs(i,r.fileInputSelector);if(!r.allowAction(i))return r.stopEverything(n);if(o&&i.attr("novalidate")==t&&r.fire(i,"ajax:aborted:required",[o]))return r.stopEverything(n);if(s)return u?(setTimeout(function(){r.disableFormElements(i)},13),r.fire(i,"ajax:aborted:file",[u])):!e.support.submitBubbles&&e().jquery<"1.7"&&r.callFormSubmitBindings(i,n)===!1?r.stopEverything(n):(r.handleRemote(i),!1);setTimeout(function(){r.disableFormElements(i)},13)}),e(document).delegate(r.formInputClickSelector,"click.rails",function(t){var n=e(this);if(!r.allowAction(n))return r.stopEverything(t);var i=n.attr("name"),s=i?{name:i,value:n.val()}:null;n.closest("form").data("ujs:submit-button",s)}),e(document).delegate(r.formSubmitSelector,"ajax:beforeSend.rails",function(t){this==t.target&&r.disableFormElements(e(this))}),e(document).delegate(r.formSubmitSelector,"ajax:complete.rails",function(t){this==t.target&&r.enableFormElements(e(this))}),e(function(){csrf_token=e("meta[name=csrf-token]").attr("content"),csrf_param=e("meta[name=csrf-param]").attr("content"),e('form input[name="'+csrf_param+'"]').val(csrf_token)}))})(jQuery);