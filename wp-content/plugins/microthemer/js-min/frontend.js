function getMTWindow(){var e=!1;return window.top&&window.top.TvrMT?e=window.top:window.parent&&window.parent.TvrMT?e=window.parent:window.parent&&window.parent.parent&&window.parent.parent.TvrMT&&(e=window.parent.parent),e&&e.opener&&function(e,t){try{return t&&t.TvrMT&&!t.closed&&t.document.domain.indexOf(e.document.domain)>-1}catch(e){return!1}}(window,e.opener)&&(e=e.opener),e}var MTWindow=getMTWindow();try{if(MTWindow){var TvrMT=MTWindow.TvrMT;window.onerror=function(e,t,r){TvrMT.TvrUi.JSerrors.push({error:e,URL:t,line:r,source:window.top.TvrLang.frontend}),TvrMT.TvrUi.instant_show_js_error("front")},TvrMT.TvrUi.catch_js_errors(window,!0),window.tvrLazyLoad=function(e){function t(t,r){var s,a=e.createElement(t);for(s in r)r.hasOwnProperty(s)&&a.setAttribute(s,r[s]);return a}function r(e){var t,r,s=d[e];s&&(t=s.callback,(r=s.urls).shift(),c=0,r.length||(t&&t.call(s.context,s.obj),d[e]=null,u[e].length&&a(e)))}function s(){var t=navigator.userAgent;((o={async:!0===e.createElement("script").async}).webkit=/AppleWebKit\//.test(t))||(o.ie=/MSIE|Trident/.test(t))||(o.opera=/Opera/.test(t))||(o.gecko=/Gecko\//.test(t))||(o.unknown=!0)}function a(a,c,p,f,_){var m,g,v,h,y,T,b=function(){r(a)},w="css"===a,M=[];if(o||s(),c)if(c="string"==typeof c?[c]:c.concat(),w||o.async||o.gecko||o.opera)u[a].push({urls:c,callback:p,obj:f,context:_});else for(m=0,g=c.length;m<g;++m)u[a].push({urls:[c[m]],callback:m===g-1?p:null,obj:f,context:_});if(!d[a]&&(h=d[a]=u[a].shift())){for(l||(l=e.head||e.getElementsByTagName("head")[0]),m=0,g=(y=h.urls.concat()).length;m<g;++m)T=y[m],w?v=o.gecko?t("style"):t("link",{href:T,rel:"stylesheet"}):(v=t("script",{src:T})).async=!1,v.className="lazyload",v.setAttribute("charset","utf-8"),o.ie&&!w&&"onreadystatechange"in v&&!("draggable"in v)?v.onreadystatechange=function(){/loaded|complete/.test(v.readyState)&&(v.onreadystatechange=null,b())}:w&&(o.gecko||o.webkit)?o.webkit?(h.urls[m]=v.href,i()):(v.innerHTML='@import "'+T+'";',n(v)):v.onload=v.onerror=b,M.push(v);for(m=0,g=M.length;m<g;++m)l.insertBefore(M[m],document.getElementById("mtdynSeperatorcss-1"))}}function n(e){var t;try{t=!!e.sheet.cssRules}catch(s){return void((c+=1)<200?setTimeout(function(){n(e)},50):t&&r("css"))}r("css")}function i(){var e,t=d.css;if(t){for(e=p.length;--e>=0;)if(p[e].href===t.urls[0]){r("css");break}c+=1,t&&(c<200?setTimeout(i,50):r("css"))}}var o,l,d={},c=0,u={css:[],js:[]},p=e.styleSheets;return{css:function(e,t,r,s){a("css",e,t,r,s)},js:function(e,t,r,s){a("js",e,t,r,s)}}}(this.document),jQuery(document).ready(function(e){function t(){TvrMT.MTF=f,TvrMT.init.set_vars(),TvrMT.TvrCom.set_vars(),TvrMT.mod.MTace.set_vars(),TvrMT.mod.MTint.set_vars(),TvrMT.mod.MTloop.set_vars(),TvrMT.mod.MTdd.set_vars(),TvrMT.mod.MTsave.set_vars(),TvrMT.mod.MTsass.set_vars(),TvrMT.mod.MTgrid.set_vars()}function r(){t(),f.init_front()}var s=TvrMT.TvrUi,a=TvrMT.TvrCom,n=TvrMT.mod.MTint,i=TvrMT.mod.MTloop,o=TvrMT.mod.MTdd,l=TvrMT.mod.MTsave,d=TvrMT.mod.MTsass,c=TvrMT.mod.MTgrid,u=TvrMT.tvrsprintf,p=MTWindow.TvrLang,f={triggerEl:{},triggerEls:{},triggerElIndex:"",styleSheetObj:{},stylesheetUrl:"",stat:{html:e("html"),body:e("body"),win:window,doc:document,MTFrontEls:!1},set_vars:function(){if(MTWindow=getMTWindow(),!(TvrMT=MTWindow.TvrMT))return!1;s=TvrMT.TvrUi,a=TvrMT.TvrCom,n=TvrMT.mod.MTint,i=TvrMT.mod.MTloop,o=TvrMT.mod.MTdd,l=TvrMT.mod.MTsave,d=TvrMT.mod.MTsass,c=TvrMT.mod.MTgrid,u=TvrMT.tvrsprintf,p=MTWindow.TvrLang,t()},init_front:function(){a.startT(arguments),window.FLBuilder?(TvrMT.integrate.FLBuilder=window.FLBuilder,n.manually_turn_toggle("on","enable_beaver_builder",!0),s.stat.tvr.addClass("bbeaver_is_on")):(n.manually_turn_toggle("off","enable_beaver_builder",!0),s.stat.tvr.removeClass("bbeaver_is_on")),s.baseFontSize=parseInt(f.stat.html.css("font-size")),f.save_page_id_from_mt_body_class(),f.add_styleNode("dynSeperator"),f.add_styleNode("dynSeperator"),f.get_mt_stylesheet(),s.server_scss||(document.getElementById("mtdynSeperatorcss-1").insertAdjacentHTML("beforebegin",i.generate_initial_style_node_html()),f.stylesheet&&f.stylesheet.remove());var t=window.TVR_DEV_MODE?"/page":"-min",r=s.pluginUrl+"css/animate.min.css";if(e("#mtdynSeperatorcss-0").before('<link rel="stylesheet" type="text/css" href="'+r+'">'),a.isDefined(window.MT_Events_Data))f.JSEventsLoaded=!0;else{var d=s.pluginUrl+"js"+t+"/animation-events.js";e.ajax({url:d,dataType:"script",success:function(e){}})}s.sRules.setup_mt_vars&&s.sRules.setup_mt_vars(),s.sRules.define("mode","browser"),s.sRules.define("async",!0),s.sRules.define("page",document),s.reinitRules=!0,s.pref.default_sug_values_set||o.refresh_sug_values({specific:"color"}),i.run_global_scans({},["active_events"]),f.support.createHTMLDocument=function(){var e=document.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}();f.stat.body.append('<div id="mt-stuff-ignore"><div id="one-click-go"></div><div id="one-click-create">+</div><div id="mt-el-options" class="mt-matching"></div></div>'),f.stat.MTFrontEls=e("#mt-stuff-ignore"),s.pref.selname_code_synced&&f.stat.html.addClass("selname_code_synced"),f.trigger_iframe_loaded(),s.setup_keyboard_shortcuts(document),parseInt(e("#mt-show-admin-bar").attr("content"))||f.stat.html.addClass("no-admin-bar-please"),a.in_array(p.load_wp,s.progStatus)&&l.update_prog_indicator("minus",!1,p.load_wp),a.in_array(p.refresh_js,s.progStatus)&&l.update_prog_indicator("minus",!1,p.refresh_js),a.in_array(p.refresh_styles,s.progStatus)&&l.update_prog_indicator("minus",!1,p.refresh_styles),s.awaitingIframeReloadAfterSave?(f.refresh_stylesheet({mt:s.server_scss,gf:s.update_gf_url}),s.update_gf_url=!1,s.awaitingIframeReloadAfterSave=!1):(f.get_computed_styles({data:s.curSelCSS,con:"str",intelli:s.intelli}),s.refresh_comp_css()),s.remember_page_viewed(),f.stat.body.on("mouseenter","div.mt-el-quick-item",function(t){var r=e(this);if(r.hasClass("mt-el-quick-label"))return!1;s.sug_sel_mouseenter(r)}).on("mouseleave","div.mt-el-quick-item",function(t){if(e(this).hasClass("mt-el-quick-label"))return!1;s.sug_sel_mouseleave()}),f.stat.html.on("mouseup",function(){s.colorPickerDragging&&s.picker_method("clickpick")}),f.stat.html.click(function(t){var r=e(t.target);if(s.close_all_expanded(r,""),r.hasClass("mt-el-quick-label")||r.hasClass("num-els-heading"))return!1;if(TvrMT.integrate.FLBuilder&&(r.hasClass("fl-builder-done-button")?n.manually_turn_toggle("off","enable_beaver_builder",!0):(r.hasClass("fl-builder-cancel-button")||"dismiss"==r.data("action"))&&n.manually_turn_toggle("on","enable_beaver_builder",!0)),s.pref.hover_inspect)if(t.preventDefault(),t.stopPropagation(),s.el_selected){var i=r.closest(".mt-el-quick-item");if(a.isDomEl(i))if((r=i).hasClass("mt-quick-create")){var o=f.dom.sels.final[parseInt(r.data("id"))].code;s.wizard_new_or_update_selector({},"wizard-add",o)}else r.hasClass("mt-matching-item")&&(s.tvr_iterate_selectors_v(!1,r.data("id")),s.feature_off(!1,"hover_inspect",{noSave:1}));else f.element_unselected(r,t)}else f.element_selected(r);else{var l=!1,d=r.closest('a, input[type="submit"], button[type="submit"]');a.isDomEl(d)&&(l={el:d,tagName:d.prop("tagName").toLowerCase()}),f.singleClick(r,t,l)}}).dblclick(function(t){t.preventDefault();var r=e(t.target);if(n.isInsideBuilderUi(r))return!1;r.data("double",2),s.toggle_feature(!1,"hover_inspect"),s.feature_on(!1,"show_interface"),s.pref.hover_inspect&&r.trigger("mouseover.wiz-hover").trigger("click")}),s.pref.wizard_expanded&&this.maybe_start_mutation_observer(),a.endT(arguments)},frontend_jquery_select:function(t){return e(t)},trigger_iframe_loaded:function(){s.iframe_loaded(f.stat.html)},support:{},save_page_id_from_mt_body_class:function(){var e=f.stat.body.attr("class"),t=/mt-(\d+)\s/.exec(e);t&&(s.pageOrPostID=t[1])},get_current_url:function(){return decodeURIComponent(f.stat.html.find("#iframe-url").attr("content"))},new_or_default_document:function(e){var t=e;if(f.support.createHTMLDocument){var r=(t=document.implementation.createHTMLDocument("")).createElement("base");r.href=document.location.href,t.head.appendChild(r)}return t},overlayCount:0,get_mt_stylesheet:function(){a.startT(arguments),f.stylesheet=e("#microthemer-css"),a.isDomEl(f.stylesheet)||(f.stylesheet=e('link[href*="\\/micro-themes\\/'+s.cssMin+s.cssStub+'-styles.css"]')),a.isDomEl(f.stylesheet)?f.stylesheetUrl=f.stylesheet.attr("href"):(f.stylesheet=!1,f.stylesheetUrl=!1),a.endT(arguments)},add_mt_overlay:function(t){a.startT(arguments);var r="",s=this.length&&this.length<80?this.length:79,n=["left","top","right","bottom"],i={padding:!0,margin:!0,border:!0,content:!0};if(t.each(function(t){if(a.startT("overlay_prep"),t>s)return a.endT("overlay_prep"),!1;var o,l,d=0,c=f.overlayCount,u=e(this);if(!u.hasClass("tvr-element-overlay")&&u.is(":visible")){u.addClass("tvr-element-overlay");var p=u.css(["font-size","border-top-width","border-right-width","border-bottom-width","border-left-width","margin-top","margin-right","margin-bottom","margin-left","padding-top","padding-right","padding-bottom","padding-left"]),_=(parseInt(p["font-size"]),u.innerWidth()),m=u.innerHeight(),g=u.offset();g.top=g.top+parseInt(p["border-top-width"]),g.left=g.left+parseInt(p["border-left-width"]);var v='<div id="over-cont-'+c+'" class="tvr-overlay tvr-container-overlay" style="width:'+_+"px;height:"+m+"px;top:"+g.top+"px;left:"+g.left+'px;">';if(i.margin){for(l="",d=0;d<n.length;d++)l+=(o=n[d])+":"+(0-parseInt(p["margin-"+o])-parseInt(p["border-"+o+"-width"]))+"px;";v+='<div class="tvr-overlay tvr-margin-overlay" style="'+l+'"></div>'}if(i.border){for(l="",d=0;d<n.length;d++)l+=(o=n[d])+":"+(0-parseInt(p["border-"+o+"-width"]))+"px;";v+='<div class="tvr-overlay tvr-border-overlay" style="'+l+'"></div>'}if(i.padding&&(v+='<div class="tvr-overlay tvr-padding-overlay"></div>'),i.content){for(l="",d=0;d<n.length;d++)l+=(o=n[d])+":"+parseInt(p["padding-"+o])+"px;";v+='<div class="tvr-overlay tvr-content-overlay" style="'+l+'"></div>'}r+=v+="</div>",f.overlayCount++}a.endT("overlay_prep")}),a.isDomEl(f.triggerEl)){var o=f.triggerEl.offset();e("#one-click-go, #one-click-create, #mt-el-options").offset({top:o.top,left:o.left})}return f.stat.MTFrontEls.append(r),a.endT(arguments),!0},refreshJS:function(){a.startT(arguments),location.reload(),a.endT(arguments)},remove_stylesheets_and_post_css_refresh:function(e){if(e.length)for(var t=0;t<e.length;++t){var r=e[t];r.parentNode&&(r.parentNode.removeChild(r),!0)}f.post_css_refresh()},refresh_stylesheet:function(t){for(var r=[],n=[],i=[],o="?reload="+(new Date).getTime(),l=document.head.getElementsByClassName("lazyload"),d=0;d<l.length;++d){var c=l[d],u=("link"===c.tagName.toLowerCase()?c.href:c.textContent).indexOf("micro-themes")>-1;(t.mt&&u||t.gf&&!u)&&r.push(l[d])}if(t.mt){var p=e("#microthemer-css")[0];p&&n.push(p);var _=s.microUrl+s.cssMin+s.cssStub+"-styles.css"+o;i.push(_)}if(t.gf){var m=e("#microthemer_g_font-css")[0];m&&n.push(m);var g=a.checkObject(s.uiData,["non_section","meta","g_fonts","g_url"]);g&&i.push(g+o.replace("?","&"))}n=n.concat(r),i.length?window.tvrLazyLoad.css(i,function(e){f.remove_stylesheets_and_post_css_refresh(n)},"done"):f.remove_stylesheets_and_post_css_refresh(n)},post_css_refresh:function(){f.get_computed_styles({data:s.curSelCSS,con:"str"}),s.refresh_comp_css(),s.el_selected||s.feature_off(0,"mt_highlight",{fHTML:1,noSave:1}),a.in_array(p.refresh_styles,s.progStatus)&&l.update_prog_indicator("minus",!1,p.refresh_styles),s.reinitRules=!0,s.maybe_update_wizard_panels()},styleNodes:{dynSeperator:[],preview:[],animation:[],pause_animation:[]},get_style_nodes:function(e,t,r){if(s.server_scss)return[];t=t||i.get_style_node_meta(e);for(var a=[],n=0;n<t.length;n++){var o=t[n].id,l=document.getElementById(o);if(t[n].node=l,l){var d=r?t[n]:l;a.push(d)}}return a},edit_style_nodes:function(t,r,s){s=s||f.get_style_nodes(t,!1,!0);for(var a=0;a<s.length;a++){var n=s[a],i=n.node;switch(r){case"delete":i.parentNode.removeChild(i);break;case"reorder":var o=this.getPreviousSectionNode(n.mq_key,n.section_key);e(i).detach().insertAfter(o)}}},update_preview_style_node:function(t,r,n){if(s.server_scss)return!1;var o=i.format_css_node_id(t),l=e("#"+o);n&&(r=n+" {\n"+r+" } "),a.isDomEl(l)||(l=f.add_preview_style_node(t,o)),l.text(r)},add_preview_style_node:function(t,r){var s=t[1],a=t[2],n=this.getPreviousSectionNode(s,a);return this.insertAfter(n,'<style id="'+r+'"></style>'),e("#"+r)},insertCopiedStyleNodes:function(t,r){for(var s=r.slice(2),a=0;a<t.length;a++){var n=e(t[a]),i=e(s[a]);this.insertAfter(n,i)}},insertAfter:function(e,t){e.after(t)},getPreviousSectionNode:function(e,t){return s.itemScan("section","prev","getPreviousNode",t,!1,{incCurrentSection:!1,mq_key:e})},add_styleNode:function(e){var t=f.styleNodes[e],r=document.createElement("style"),s="mt"+e+"css-"+t.length;r.setAttribute("id",s),document.head.appendChild(r),t.push(s)},remove_styleNode:function(t){var r=f.styleNodes[t],s=r[r.length-1];e("#"+s).remove(),r.pop()},update_dynamic_css:function(e,t,r){var s=f.styleNodes[t];s.length||f.add_styleNode(t);var a=s[s.length-1];document.getElementById(a).innerHTML=e},after_animation:function(e,t){var r="transition"==t.type?"transitionend.tvr webkitTransitionEnd.tvr oTransitionEnd.tvr otransitionend.tvr MSTransitionEnd.tvr":"oanimationend.tvr animationend.tvr webkitAnimationEnd.tvr";e.on(r,function(){t.cb.apply(this,t.args),e.off(r)})},trigger_animation:function(e){var t=e.ast_selector_string+" { -webkit-animation-name: none !important; animation-name: none !important;  }",r=e.flashCSSRules,n=f.jquery_compat_sel_elements(e.ast_eventless_selector_string),i=n.first();a.isDomEl(n)&&(e.isJSEvent?i.hasClass(e.JSEventClass)?n.removeClass(e.JSEventClass):n.addClass(e.JSEventClass):f.update_dynamic_css(t,"animation"),window.requestAnimationFrame(function(t){window.requestAnimationFrame(function(t){e.isJSEvent&&n.addClass(e.JSEventClass),f.update_dynamic_css(r,"animation")})}),f.after_animation(i,{cb:function(){f.remove_styleNode("animation")}}),"inline"===i.css("display")&&(s.animation_inline_warning={short:p.inline_animation_short,long:"<p>"+p.inline_animation_long+"</p>",type:"info"}))},element_selected:function(e){a.startT(arguments),s.el_selected=1,f.stat.html.add(s.stat.tvr).addClass("mt-element-selected"),f.align_selector_go_menu(),s.maybe_update_wizard_panels({onlyDeferred:1}),e.trigger("blur"),s.maybe_auto_select_label(),s.stat.tvr.removeClass("tvr_inspect_waiting"),a.endT(arguments)},element_unselected:function(e,t){a.startT(arguments),s.el_selected=0,f.stat.html.add(s.stat.tvr).removeClass("mt-element-selected"),s.redo_sug_sels("",!0),e&&e.trigger("blur").trigger("mouseover"),a.endT(arguments)},clean_classes:function(e){a.startT(arguments);var t=["no-admin-bar-please","mt_highlight","mt-sels-target","mt-element-selected","tvr-hh-mode","mt-hover-bound","customize-support","tvr-trigger-el","tvr-element-overlay","tvr-static-overlay","tvr-hover-element","mt-click","mt-mouseenter","mt-focus","mt-inview_once","mt-inview"];t=n.filter_mt_ignore_classes(t);var r=new RegExp(t.join("|"),"g"),s=e.replace(r,"").replace(/\s\s+/g," ").replace(/^\s+|\s+$/g,"");return a.endT(arguments),s},align_selector_go_menu:function(){a.startT(arguments);var t=e("#mt-el-opts-inner"),r=e(f.stat.html.hasClass("mt-sels-target")?"#one-click-go":"#one-click-create"),s=f.off_screen(t);t.css({position:s.on?"static":"absolute",right:s.right?"-"+r.outerWidth()+"px":"auto",bottom:s.bottom?"-"+r.outerHeight()+"px":"auto"}),a.endT(arguments)},set_quick_go_options:function(t){a.startT(arguments);var r=f.get_matching_selectors(t,s.get_all_selector_code()),n=a.obj_length(r),i=e("#mt-el-options"),o=e("#one-click-go"),l=e("#one-click-create"),d="mt-el-quick-item",c="",u=n?o:l,_="",m={};if(n){f.stat.html.addClass("mt-sels-target"),o.text(n),c='<div class="mt-el-quick-label '+d+'" title="'+p.quick_go_long+'">'+p.quick_go+':<span class="num-els-icon num-els-heading" title="'+p.num_els_n+'">N</span></div>';for(var g in r)r.hasOwnProperty(g)&&(_+='<div class="mt-matching-item mt-matching '+d+'" data-code="'+(b=a.regular_escape_quotes(r[g].code))+'" '+(w=s.pref.selname_code_synced?"":'title="'+b+'"')+'data-id="'+r[g].id+'" >'+r[g].sName+s.num_els_icon(r[g].n)+"</div>",m[r[g].code]=!0);_=c+'<div class="quick-items-body existing-sels">'+_+"</div>"}else f.stat.html.removeClass("mt-sels-target");var v=0,h="";a.startT("prepare_new_sug");for(var y=0;y<f.dom.sels.final.length;y++){var T=f.dom.sels.final[y];if(!m[T.code]){if(y>=8)break;var b=a.regular_escape_quotes(T.code),w='title="'+p.quick_create_long+'"',M=((T.isCombo?" combobox has-arrows":"")&&"x_plus"==T.refKey?"<sup>+</sup>":"")?"+":"";h+='<div class="mt-quick-create '+d+'" data-code="'+b+'" '+w+'data-id="'+y+'" >'+b+s.num_els_icon(T.n,M)+"</div>",++v}}a.endT("prepare_new_sug"),v&&(h=(c='<div class="mt-el-quick-label '+d+'" title="'+p.quick_create_long+'">'+p.quick_create+': <span class="num-els-icon num-els-heading" title="'+p.num_els_n+'">N</span></div>')+'<div class="quick-items-body create-sels">'+h+"</div>"),i.html('<div id="mt-el-opts-inner">'+_+h+"</div>"),i.css({width:u.outerWidth(),height:u.outerHeight()}),a.endT(arguments)},dom:{sels:{nothing:[]}},N:[],Nsub:{index:"",N:[]},selectorMatches:function(e,t){a.startT(arguments);var r=Element.prototype,n=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(e){return-1!==[].indexOf.call(document.querySelectorAll(e),this)},i=!1;try{i=n.call(e,t)}catch(e){s.TVR_DEV_MODE&&console.log("Invalid selector present",e)}return a.endT(arguments),i},mediaMatches:function(e){return window.matchMedia(e).matches},jquery_compat_sel_elements:function(t,r){a.startT(arguments),t=a.custom_to_non_escaped(t),t=s.analyse_sel_code(t).code;var n,i=a.pseudo_str_to_arr(t);if(i){var o=s.get_pseudo_config(i);for(var l in o)if(o.hasOwnProperty(l)){var d=o[l],c=d.replace?d.replace:"";d.strip&&(t=t.replace(l,c))}if(r)return t;n=f.validate_and_filter_excluded_els(t);for(l in o)o.hasOwnProperty(l)&&(d=o[l]).filter&&n.length&&(n=n.filter(function(){var t=e(this),r=t[0],s=(a.get_tagName(t),t.val()),n=t.attr("min"),i=t.attr("max");switch(l){case":in-range":return n&&s>=n&&i&&s<=i;case":out-of-range":return n&&s<n&&i&&s>i;case":invalid":return f.selectorMatches(r,":invalid");case":valid":return f.selectorMatches(r,":valid")}}))}else{if(r)return t;n=f.validate_and_filter_excluded_els(t)}return a.endT(arguments),n},format_att_selector:function(e,t){var r;switch(t){case"id":r="#"+e;break;case"class":r="."+e.split(" ")[0];break;case"type":r='[type="'+e+'"]'}return r},search_dom:function(t,r){a.startT(arguments);var s=!1,n=a.get_tagName(t),i=t.parent(),o={tagName:[n]};a.isDomEl(i)&&(s=!0,a.get_tagName(i));for(var l in r.atts)if(r.atts.hasOwnProperty(l)){var d=r.atts[l];if(!(r[d+"Count"]>=r["max_"+d]||"body"!=n&&r[d+"LevelCount"]>=r["max_"+d+"_level"]||"id"==d&&r.elHasId)){var c=t.attr(d);if(c&&"class"==d&&(c=f.clean_classes(c)),c){"id"==d&&0===r.level&&(r.elHasId=!0);var u=c.split(" ");o[d]=[];for(var p in u)if(u.hasOwnProperty(p)&&!("class"==d&&"body"!=n&&p>=r.max_class_per_level)){var _=f.format_att_selector(u[p],d);o[d].push(_),++r[d+"Count"]}"class"==d&&++r[d+"LevelCount"]}else o[d]=0}}var m=t.parents(),g=t.prevAll(),v=t.nextAll(),h=t.children(),y=h.not("script, link").first(),T=g.length+1,b=g.filter(n).length+1,w=v.length+1,M=v.filter(n).length+1,C={":first-child":1===T?1:0,":first-of-type":1===b?1:0,":nth-child(n)":T,":nth-of-type":b,":last-child":1===w?1:0,":last-of-type":1===M?1:0,":nth-last-child(n)":w,":nth-last-of-type(n)":M,":only-child":1===T&&1===w?1:0,":only-of-type":1===b&&1===M?1:0},k=":nth-of-type("+b+")";o.pseudo={},o.pseudo[":nth-of-type"]=[];for(var E in o)if(o.hasOwnProperty(E)&&"id"!=E&&"pseudo"!=E&&o[E])for(var S in o[E])if(o[E].hasOwnProperty(S)){var x=o[E][S];o.pseudo[":nth-of-type"].push(x+k)}var N,O={el:{type:"el",fullObj:t,count:1,m:[]},par:{type:"par",fullObj:m,count:m.length,m:[]},child:{type:"child",fullObj:y,count:h.length,m:[]},prev:{type:"prev",fullObj:g,count:T-1,m:[]},next:{type:"next",fullObj:v,count:w-1,m:[]}};for(var L in O)O.hasOwnProperty(L)&&O[L].fullObj&&O[L].fullObj.each(function(t){var s=e(this),n=a.get_tagName(s),i=n;for(var o in r.atts)if(r.atts.hasOwnProperty(o)){var l=r.atts[o],d=s.attr(l);if(d&&"class"==l&&(d=f.clean_classes(d)),d){i+=f.format_att_selector(d,l);break}}O[L].m.push({tagName:n,obj:s,bcLabel:i}),"el"==O[L].type&&(N=i)});if(r.nodes.push({level:r.level,SelType:o,tagName:n,elBcLabel:N,pseudo:C,family:O}),r.level,("html"==n||"body"==n)&&(r.sels.sigAtts[n+"SelType"]=o,"body"==n))for(var l in o.class)if(o.class.hasOwnProperty(l)){var P=o.class[l],j=P.match(/^\.mt\-\d+$/),q=P.match(/^\.mt\-.+$/);j?r.sels.sigAtts.pageIdClass=j[0]:q?r.sels.sigAtts.pageNameClass=q[0]:r.sels.sigAtts.pageOtherClass.push(P)}return s?(++r.level,f.search_dom(i,r)):(a.endT(arguments),r)},build_selector_suggestions_2:function(t){a.startT(arguments);var r=f.triggerEl;if(!a.isDomEl(r))return!1;var n={$el:r,el:r[0],foundSingle:!1,level:0,idCount:0,classCount:0,classLevelCount:0,typeCount:0,singleCount:0,elHasId:0,max_id:5,max_levels:18,max_class_per_level:20,max_class:1e3,max_type:1,max_single:1e3,atts:["type","id","class"],nodes:[],invalidSel:!1,sels:{sigAtts:{htmlSelType:[],bodySelType:[],pageIdClass:0,pageNameClass:0,pageOtherClass:[]},allRefKeys:[],alreadyGot:{},curLevel:0,prevLevel:0,directEl:[],passes:[[],[],[]],final:[],nothing:[],combo:{}},html:{breadCrumbs:{trail:{},combo:{}}}};n=f.search_dom(r,n);var i={passNum:0,incReg:1,incPseudo:0,findFirstSingle:0,incJustSpanDiv:0};if((n=f.generate_selectors(n,i)).foundSingle||(i.passNum=1,i.incPseudo=1,i.fullTrail=1,i.max_single=30,n=f.generate_selectors(n,i)),a.startT("generate_selectors post processing"),n.sels.final=e.extend(!0,[],n.sels.passes[0]),i.passNum>0&&n.foundSingle){var o=[];for(var l in n.sels.passes[i.passNum])if(n.sels.passes[i.passNum].hasOwnProperty(l)){var d=n.sels.passes[i.passNum][l];1===d.n&&o.push(d)}n.sels.final=n.sels.final.concat(o)}n.sels.final.sort(a.firstBy("n").thenBy("justTagName").thenBy("level").thenBy("trailLength").thenBy("useOfNth").thenBy("specificity",-1).thenBy("charLength")),n=f.organise_equiv_selectors(n),a.endT("generate_selectors post processing"),f.dom=n,n.sels.final[0]?s.intelli_css=n.sels.final[0].code:f.dom.sels.nothing[0]?s.intelli_css=f.dom.sels.nothing[0].code:s.intelli_css="#no-element",n.sels.final[0],s.update_selector_suggestions(),a.endT(arguments)},sel_trail:function(e){return{pieces:e.split(/\s?>\s?|\s?\+(?![^(]*\))\s?|\s?~\s?|\s/)}},organise_equiv_selectors:function(t){for(var r=0;r<t.sels.final.length;r++)(a=t.sels.final[r]).n<30?a.$targetEls.each(function(t){a.refKey+=String(Array.prototype.indexOf.call(f.N,e(this)[0]))}):a.refKey="x_plus",t.sels.allRefKeys[a.refKey]?(e.isArray(t.sels.combo[a.refKey])||(t.sels.combo[a.refKey]=[],t.sels.combo[a.refKey].push(t.sels.allRefKeys[a.refKey].code)),a.removeMe=1,t.sels.combo[a.refKey].push(a.code),t.sels.allRefKeys[a.refKey].isCombo=1):t.sels.allRefKeys[a.refKey]=a;for(var s=t.sels.final.length-1;s>=0;s--){var a=t.sels.final[s];a.removeMe&&t.sels.final.splice(s,1)}return t},generate_selectors:function(e,t){a.startT(arguments),t=t||{};for(var r in e.nodes)if(e.nodes.hasOwnProperty(r)){var s=e.nodes[r];s.level!==e.curLevel&&(e.prevLevel=e.curLevel,e.curLevel=s.level);for(var n in s.SelType)if(s.SelType.hasOwnProperty(n)){if(e.foundSingle&&e.singleCount>=t.max_single)return e;if(s.SelType[n]){var i=s.SelType[n];if("pseudo"==n){if(t.incPseudo)for(var o in i)if(i.hasOwnProperty(o))for(var l in i[o])i[o].hasOwnProperty(l)&&(e=f.format_sel_item(i[o][l],n,s,e,t))}else if(t.incReg)for(var l in i)i.hasOwnProperty(l)&&(e=f.format_sel_item(i[l],n,s,e,t))}}var d=t.incPseudo&&!e.foundSingle;if(r>=e.max_levels-1&&!d)break}return a.endT(arguments),e},format_sel_item:function(t,r,s,n,i){a.startT(arguments),i=i||{};var o,l="tagName"!=r||"span"!=t&&"div"!=t?0:1,d=[];if(0!==s.level){if(!l||i.incJustSpanDiv)for(var c in n.sels.directEl)if(n.sels.directEl.hasOwnProperty(c)){var u=n.sels.directEl[c];o="tagName"!=r&&"pseudo"!=r||!u.justTagName?0:1,d.push({code:t+" "+u.code,justTagName:o}),i.fullTrail&&d.push({code:t+f.full_trail(n.nodes,s,u,{})+" > "+u.code,justTagName:o})}}else d.push({code:t,justTagName:"tagName"==r||"pseudo"==r?1:0});for(var c in d)if(d.hasOwnProperty(c)&&(t=d[c].code,o=d[c].justTagName,!n.sels.alreadyGot[t])){n.sels.alreadyGot[t]=1;var p=f.apply_css_filters(t,s,n);if(t=p.code,!l||i.incJustSpanDiv){var _=f.jquery_compat_sel_elements(t);"#no-element"==_.selector&&(n.invalidSel=!0);var m=_.length}var g=t.match(/nth\-/g);g=g?g.length:0;var v={code:t,charLength:t.length,trailLength:f.sel_trail(t).pieces.length,useOfNth:g,$targetEls:_,n:m,refKey:"",level:s.level,specificity:a.get_specifcity(t),justTagName:o,pseudo:"pseudo"==r?1:0};if(l&&!i.incJustSpanDiv||(m<1?n.sels.nothing.push(v):n.sels.passes[i.passNum].push(v)),0===s.level){var h=e.extend(!0,{},v);p&&p.prefix&&(h.code=p.nonPrefixCode),n.sels.directEl.push(h)}if(1===m&&(n.foundSingle=!0,n.singleCount++,n.singleCount>=i.max_single))break}return a.endT(arguments),n},apply_css_filters:function(e,t,r,a){var n,i,o,l=!1;if(!(a=a||{}).manual&&0===t.level){var d=["pseudo_classes","pseudo_elements"];for(var c in d)if(d.hasOwnProperty(c)){o=d[c];for(n in s.pref[o])s.pref[o].hasOwnProperty(n)&&(i=s.get_pseudo_config([n])[n],n=f.maybe_adjust_for_editable_pseudo(i,n),s.pref[o][i.pCE]&&(":nth-of-type(n)"==i.pCE&&(e=f.apply_filter_at_level({level:"suffix",code:e,regPattern:new RegExp(":nth\\-of\\-type\\(.+\\)","g"),strMatch:!1,repl:""})),e+=n))}}var u=e,p="";if(s.pref.page_specific["page-id"]&&r.sels.sigAtts.pageIdClass&&(p+=r.sels.sigAtts.pageIdClass),s.pref.page_specific["page-name"]&&r.sels.sigAtts.pageNameClass&&(p+=r.sels.sigAtts.pageNameClass),!a.manual&&p&&((v=f.prefix_on(e,t,r,p)).skip||(e=v.justPrepend?p+" "+e:f.apply_filter_at_level({level:v.level,code:e,strMatch:v.strMatch,repl:v.repl,addIfNotPresent:1}))),a.manual){n=a.$li.data("filter"),o=a.$li.data("type"),i=s.get_pseudo_config([n])[n],n=f.maybe_adjust_for_editable_pseudo(i,n);var _,m,g=!1;if("pseudo_elements"==o||"pseudo_classes"==o){l=i.editable?new RegExp(i.pCE.replace(i.editable.str,"\\(.+\\)")):i.pCE;h=!1;_="suffix",m=n}else if("page_specific"==o){p="page-id"==i.pCE?r.sels.sigAtts.pageIdClass:r.sels.sigAtts.pageNameClass;var v=f.prefix_on(e,t,r,p),h=s.pref[o][i.pCE]?v.strMatch:p;_=v.level,m=v.repl,g=v.skip}var y=1;s.pref[o][i.pCE]||(m="",g=!1,y=0),g||(e=f.apply_filter_at_level({level:_,code:e,regPattern:l,strMatch:h,repl:m,addIfNotPresent:y}))}return{code:e,nonPrefixCode:u,prefix:p}},maybe_adjust_for_editable_pseudo:function(e,t){if(e.editable){var r=s.get_pseudo("val",{pseudoCE:t});t=r?t.replace(e.editable.str,"("+r+")"):t}return t},apply_filter_at_level:function(e){var t=f.sel_trail(e.code).pieces,r="suffix"==e.level?t.length-1:e.level,s=t[r],n=e.strMatch?e.strMatch:e.regPattern;return(e.strMatch?s.indexOf(n)>-1:s.match(n))?t[r]=s.replace(n,e.repl):e.addIfNotPresent&&(t[r]+=e.repl),a.isDefined(t[r])||t.splice(r,1),e.code=t.join(" "),e.code},prefix_on:function(e,t,r,s){var a,n={},i=f.sel_trail(e).pieces,o=i[0].indexOf(r.sels.sigAtts.pageIdClass)>-1||i[0].indexOf(r.sels.sigAtts.pageNameClass)>-1;if("html"==t.tagName||"body"==t.tagName||o){var l=!1;if("html"==t.tagName){var d=f.bl_components(i[1]),c=r.sels.sigAtts.bodySelType;for(var u in c)if(c.hasOwnProperty(u))for(var p in c[u])if(c[u].hasOwnProperty(p)){var _=c[u][p];if(d.pseudoStripped==_){a=1,l=!0;break}}l||(n={level:1,strMatch:i[1],repl:s+" "+i[1]})}else{d=f.bl_components(i[0]);a=0}("body"==t.tagName||l||o)&&(n={level:a,strMatch:d.bodyLevelAtt,repl:d.pseudoStripped+s+d.pseudoStr,skip:d.pseudoStripped.indexOf(s)>-1})}else n={justPrepend:1,level:0,strMatch:i[0],repl:s+" "+i[0]};return n},bl_components:function(e){var t={bodyLevelAtt:e,pseudoStripped:a.strip_pseudo(e),pseudoArr:a.pseudo_str_to_arr(e),pseudoStr:""};return t.pseudoArr&&(t.pseudoStr=t.pseudoArr.join("")),t},full_trail:function(e,t,r,s){for(var a="",n=t.level-1;n>0;n--)a+=" > "+e[n].SelType.pseudo[":nth-of-type"][0];return a},finish_tag_string:function(e,t){return a.startT(arguments),t+="area"!=e&&"base"!=e&&"br"!=e&&"col"!=e&&"command"!=e&&"embed"!=e&&"hr"!=e&&"img"!=e&&"input"!=e&&"meta"!=e&&"param"!=e&&"source"!=e?"&#62;...&#60;/"+e+"&#62;":" /&#62;",a.endT(arguments),t},find_parent_attributes:function(e,t){return e.attr(t)&&f.clean_classes(e.attr(t))?e:!!(e=e.parent().not("html")).prop("tagName")&&f.find_parent_attributes(e,t)},format_mixed_array:function(e,t){a.startT(arguments);for(var r={},s=0;s<e.length;s++){var n=t[s].atts,i="&#60;"+n.type;n.id&&(i+=' id="'+n.id+'"'),n.class&&(n.class=n.class.replace("tvr-element-overlay","").replace("tvr-static-overlay","").replace("  "," "),/\S/.test(n.class)&&(i+=' class="'+n.class+'"')),i=f.finish_tag_string(n.type,i),r[s]=[],r[s].val=e[s],r[s].htmlString=i}return a.endT(arguments),r},compProps:{},flatten:function(e,t){a.startT(arguments);var r=[],s=-1;for(var n in e)if(e.hasOwnProperty(n)&&"[object Array]"===Object.prototype.toString.call(e[n]))for(var i in e[n])e[n].hasOwnProperty(i)&&(r[++s]=t?e[n][i][t]:e[n][i]);return a.endT(arguments),r},sel_elements:{},validate_and_filter_excluded_els:function(t){try{return e(t)}catch(t){return e("#no-element")}},el_comp_styles:function(e,t,r){var s={},a=!1;if(r.eventClass&&!e.hasClass(r.eventClass)&&(e.addClass(r.eventClass),a=!0),r.pseudoEl)for(var n=0;n<t.length;n++){var i=t[n];s[i]=window.getComputedStyle(e[0],r.pseudoEl).getPropertyValue(i)}else s=e.css(t);return a&&e.removeClass(r.eventClass),s},get_computed_styles:function(t){if(a.startT(arguments),!t.intelli){t.pseudoEl=null;var r=a.get_pseudo_el(t.data);r&&(t.pseudoEl=r[0]),t.eventClass=s.maybe_pair_class(t.data,"class");var n=t.M=s.get_pg_meta(t.row);n&&o.event_type(n.eventKey)&&(t.eventClass="mt-"+n.eventKey)}var i="str"==t.con?f.jquery_compat_sel_elements(t.data):f.triggerEl;if(f.sel_elements=i,!i.length)return s.compProps={},a.endT(arguments),!1;var d;d=t.intelli?f.flatten([s.cssProps[s.pgInFocusWiz]],"cssf"):s.pref.pg_focus?f.flatten([s.cssProps[s.pref.pg_focus]],"cssf"):f.flatten(s.cssProps,"cssf");for(var u=Object.keys(s.propAliases),_=0;_<u.length;_++){var m=u[_],g=s.propAliases[m],v=d.indexOf(m);-1!==v&&(d[v]=g)}var h=i.length;h>19&&(h=19);var y={ltr:{start:"left",end:"right",webkitauto:"left"},rtl:{start:"right",end:"left",webkitauto:"right"}},T=[],b=[];f.compProps={};var w=0,M=jQuery.fn.jquery.split(".").map(function(e){return("0"+e).slice(-2)}).join(".");M=M.toString(),i.each(function(r){if(++w,r>h)return!1;T[r]=[];var n=e(this);if(!(M>="01.09.00")){var i={"font-family":""},o={short:p.update_jquery,long:"<p>"+p.update_jquery_long+"</p>",type:"error"};return l.log(o),l.update_full_logs(),!1}i=f.el_comp_styles(n,d,t);0===r&&"grid"===s.pref.pg_focus&&(s.grid=c.update_grid_settings(n,i.display));for(var u in i)if(i.hasOwnProperty(u)&&a.hasValue(i[u])){if("text-align"!=u||"start"!=i[u]&&"end"!=i[u]){if("text-align"==u&&"-webkit-auto"==i[u])i[u]=y[i.direction][i[u].replace(/-/g,"")];else if("text-decoration"==u){_=i[u].split(" ");i[u]=_[0]}}else;if(i[u]=a.sane_decimal(i[u]),"background-position"==u||"background-repeat"==u||"background-size"==u||"background-clip"==u||"background-attachment"==u){var _=i[u].split(",");i[u]=_[0]}"background-image"==u&&(i["background-img-full"]=i[u],i["extracted-gradient"]=a.extract_str("gradient",i[u]),i[u]=a.extract_str("bg-image",i[u]));var m=n.parent();if(b[r]=[],b[r].element={},b[r].element=n.css(["font-size","width","height"]),a.isDomEl(m)&&(b[r].parent=m.css(["font-size","width","height"]),"inline"===m.css("display"))){var g;if(g=f.get_first_block_parent(m)){var v=g.css(["width","height"]);b[r].parent.width=v.width,b[r].parent.height=v.height}}}T[r].propsList=i,T[r].atts=[],T[r].atts.type=n.prop("tagName").toLowerCase(),T[r].atts.id=n.attr("id"),T[r].atts.class=n.attr("class")});for(var C in d)if(d.hasOwnProperty(C)){var k=d[C],E=T[0].propsList[k],S=[],x=!1;for(var N in T)T.hasOwnProperty(N)&&T[N].propsList&&(S[N]=T[N].propsList[k],S[N]!=E&&(x=!0));f.compProps[k]=x?f.format_mixed_array(S,T):E}t.intelli?(s.intelliCompProps=f.compProps,s.intellinodeCSS=b):(s.compProps=f.compProps,s.nodeCSS=b),a.endT(arguments)},maybe_run_grid_control_update:function(){var t=e(f.sel_elements[0]);if(a.isDomEl(t)){var r=t.css("display");s.grid=c.update_grid_settings(t,r),c.update_grid_canvas()}},get_first_block_parent:function(t){var r=!1;return t.parents().each(function(){var t=e(this);if("inline"!==t.css("display"))return r=t,!1}),r},reposition_overlays:function(t){a.startT(arguments);var r,n,i,o={con:"reg",scroll:!0,css:"#no-element"},l=e.extend({},o,t);f.stat.MTFrontEls&&f.stat.MTFrontEls.find("div.tvr-container-overlay").remove(),f.$highligted_els&&f.$highligted_els.length&&f.$highligted_els.removeClass("tvr-element-overlay tvr-static-overlay tvr-hover-element"),f.overlayCount=0;try{if("mixed-hover"==l.con?i=n=f.sel_elements.eq(s.mixedElKey):"grid-nth-item"===l.con?i=n=s.grid.items[s.nthItemIndex].$item:(r="reg"===l.con?s.curSelCSS:"intelli"===l.con?s.intelli_css:l.css,i=(n=l.$sel_elements?l.$sel_elements:f.jquery_compat_sel_elements(r)).first()),!n.length)return void a.endT(arguments);f.$highligted_els=n,l.scroll&&(f.off_screen(i,!0).half.on||e("html, body").animate({scrollTop:i.offset().top-36},250)),f.add_mt_overlay(n)}catch(t){s.TVR_DEV_MODE&&console.log("exceptionObject",t,e(n))}a.endT(arguments)},maintain_cur_scroll:function(e,t,r){a.startT(arguments);var s=f.stat.body.scrollTop()+e;if(f.stat.body.scrollTop(s),!a.isDomEl(f.triggerEl))return a.endT(arguments),!1;var n=f.off_screen(f.triggerEl);t&&!n.half.on&&f.stat.body.scrollTop(f.triggerEl.offset().top-100),a.endT(arguments)},mouse_coordinate:function(e,t){a.startT(arguments);var r=e.clientX+f.stat.body.scrollLeft(),s=e.clientY+f.stat.body.scrollTop(),n={x:r,y:s};if(t){var i=t.offset();n.elX=r-i.left,n.elY=s-i.top}return a.endT(arguments),n},quick_button_clicked:function(t){a.startT(arguments);var r=e("#one-click-create"),s=t.elX<=r.outerWidth()&&t.elY<=r.outerHeight();return s&&(s=f.stat.html.hasClass("mt-sels-target")?"go":"create"),a.endT(arguments),s},off_screen:function(t,r){if(a.startT(arguments),!a.isDomEl(t))return!1;var s=t.offset(),n={c:{scrT:e(window).scrollTop(),scrL:e(window).scrollLeft(),top:s.top,height:t.height(),windowHeight:e(window).height(),left:s.left,width:t.width(),windowWidth:e(window).width()}};n.bottom=n.c.top+n.c.height<=n.c.windowHeight+n.c.scrT?0:1,n.right=n.c.left+n.c.width<=n.c.windowWidth+n.c.scrL?0:1,n.top=n.c.top>=n.c.scrT?0:1,n.left=n.c.left>=n.c.scrL?0:1,n.on=!(n.bottom||n.right||n.top||n.left);var i=["half","third"];for(var o in i)if(i.hasOwnProperty(o)){var l=o+2,d=i[o];n[d]={bottom:n.c.top+n.c.height/l<=n.c.windowHeight+n.c.scrT?0:1,right:n.c.left+n.c.width/l<=n.c.windowWidth+n.c.scrL?0:1,top:n.c.top+n.c.height/l>=n.c.scrT?0:1,left:n.c.left+n.c.width/l>=n.c.scrL?0:1},n[d].on=!(n[d].bottom||n[d].right||n[d].top||n[d].left)}return a.endT(arguments),n},get_matching_selectors:function(t,r){a.startT(arguments);var s=[],n=t[0],i=0;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o].code;f.selectorMatches(n,l)&&(s[i]={id:o,fName:r[o].fName,sName:r[o].sName,code:l,n:e(l).length,ui_order:i},++i)}return s.sort(a.firstBy("n").thenBy("ui_order",-1)),a.endT(arguments),s},maybe_start_mutation_observer:function(){if(a.startT(arguments),s.pref.wizard_expanded&&!s.mutationObserver){var e=f.stat.body[0],t={childList:!0,subtree:!0},r=new MutationObserver(function(e,t){var r;for(r=0;r<e.length;r++){var n=e[r],i=["mt-stuff-ignore","mt-el-options","one-click-go","one-click-create"],o=n.target.id;n.target.id,n.target.parent&&n.target.parent.id,a.in_array(o,i)||(s.domChanged=!0)}});r.observe(e,t),s.mutationObserver=r}a.endT(arguments)},maybe_stop_mutation_observer:function(){s.mutationObserver&&(s.mutationObserver.disconnect(),s.mutationObserver=!1)},bind_wizard_hover:function(){if(a.startT(arguments),f.stat.html.hasClass("tvr-hh-mode"))return!0;f.stat.html.addClass("tvr-hh-mode"),TvrMT.integrate.FLBuilder&&s.bb_is_editing()&&(f.BBTempDisabled=!0,FLBuilder.triggerHook?TvrMT.integrate.FLBuilder.triggerHook("endEditingSession"):(TvrMT.integrate.FLBuilder._destroyOverlayEvents(),TvrMT.integrate.FLBuilder._closePanel())),s.show_wizard(!0),s.pref.wizard_expanded&&(s.default_to_tab("wizard"),s.domChanged&&(s.update_wizard_html({updateVisEditor:1}),s.domChanged=!1)),n.reinitRules()&&(s.reinitRules=!0),f.stat.html.hasClass("mt-hover-bound")||(f.stat.html.addClass("mt-hover-bound"),f.stat.body.on("mouseover.wiz-hover","*",function(t){t.stopPropagation();var r=e(this);if(s.el_selected||r.hasClass("tvr-hover-element")||r.hasClass("mt-matching")||!f.stat.html.hasClass("tvr-hh-mode"))return!1;r.addClass("tvr-hover-element"),f.all_targeting_actions(r,{wrapjQuery:!1,scroll:!1})}).on("mouseout.wiz-hover","*",function(t){t.stopPropagation(),e(this).removeClass("tvr-hover-element")})),a.endT(arguments)},all_targeting_actions:function(t,r){t=r.wrapjQuery?e(t):t,a.startT("remove existing els"),e(".tvr-trigger-el").removeClass("tvr-trigger-el"),a.endT("remove existing els"),f.triggerEl=t,t.addClass("tvr-trigger-el"),s.feature_on(0,"mt_highlight",{fHTML:1,noSave:1}),s.stat.tvr.addClass("tvr_inspect_waiting"),f.instant_targeting_actions(r),"immediate"==r.quick?f.quick_targeting_actions(r):(s.timer.quickTarget&&clearTimeout(s.timer.quickTarget),s.timer.quickTarget=setTimeout(function(){f.quick_targeting_actions(r)},50)),"immediate"==r.deferred?f.deferred_targeting_actions(r):(s.timer.deferredTarget&&clearTimeout(s.timer.deferredTarget),s.timer.deferredTarget=setTimeout(function(){f.deferred_targeting_actions(r)},150)),r.selectElement&&f.element_selected(t)},instant_targeting_actions:function(e){a.startT(arguments),f.reposition_overlays({con:"targeting-hover",scroll:e.scroll,$sel_elements:f.triggerEl}),a.endT(arguments)},quick_targeting_actions:function(e){if(a.startT(arguments),!a.isDomEl(f.triggerEl))return!1;e.onlyQuick=!0,s.maybe_update_wizard_panels(e),f.N=document.getElementsByTagName("*"),f.triggerElIndex=String(Array.prototype.indexOf.call(f.N,f.triggerEl[0])),f.build_selector_suggestions_2(),f.set_quick_go_options(f.triggerEl),s.update_dom_arrows(e),a.endT(arguments)},deferred_targeting_actions:function(e){if(a.startT(arguments),!a.isDomEl(f.triggerEl))return!1;e.onlyQuick=!1,e.onlyDeferred=!0,e.forceHTMLUpdate=!0,e.exclActual=!0,s.maybe_update_wizard_panels(e),a.endT(arguments)},unbind_wizard_hover:function(){a.startT(arguments),f.stat.html.removeClass("tvr-hh-mode"),f.element_unselected(),s.feature_off(0,"mt_highlight",{fHTML:1,noSave:1}),s.hide_wizard(),f.triggerEl={},f.BBTempDisabled&&TvrMT.integrate.FLBuilder&&(FLBuilder.triggerHook?TvrMT.integrate.FLBuilder.triggerHook("restartEditingSession"):s.bb_is_editing()&&TvrMT.integrate.FLBuilder._bindOverlayEvents(),f.BBTempDisabled=!1),a.endT(arguments)},singleClick:function(e,t,r){if(a.startT(arguments),n.builderIsActive())return!1;if(r&&t.preventDefault(),r&&"a"==r.tagName){var i=r.el.attr("href");if(i&&(i.match(/\.(gif|jpe?g|png|svg)$/i)||i.indexOf(s.siteUrl.replace(/https?:\/\//,""))<0))return window.open(i,""),!1;if(i&&i.indexOf(s.uiUrl)>-1)return l.update_full_logs({short:p.navigate_mt,long:"<p>"+p.navigate_mt_long+"</p>",type:"info"}),a.endT(arguments),!1}setTimeout(function(){var t=parseInt(e.data("double"),10);if(t>0)return e.data("double",t-1),!1;if(r)if("a"==r.tagName&&"#"!=i.charAt(0))i.indexOf("et_fb=1")>-1?MTWindow.location=i:window.location=i;else{var s=e.closest("form");a.isDomEl(s)&&s.trigger("submit")}},1e3),a.endT(arguments)}};n.check_integrations(window),TvrMT.integrate.elementor?r():window.addEventListener?window.addEventListener("load",r,!1):window.attachEvent&&window.attachEvent("onload",r)})}}catch(e){}