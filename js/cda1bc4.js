window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var k=arguments;try{k.callee=f.caller}catch(g){}k=[].slice.call(k);typeof console.log==="object"?log.apply.call(console.log,console,k):console.log.apply(console,k)}};
(function(a){function k(){}var g,n;for(g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");n=g.pop();)a[n]=a[n]||k})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());
(function(a,k){var g=function(a,k,g){var j;return function(){var p=this,m=arguments;j?clearTimeout(j):g&&a.apply(p,m);j=setTimeout(function(){g||a.apply(p,m);j=null},k||100)}};jQuery.fn[k]=function(a){return a?this.bind("resize",g(a)):this.trigger(k)}})(jQuery,"smartresize");
(function(a){function k(b){var a=["Moz","Webkit","O","ms"],c=b.charAt(0).toUpperCase()+b.substr(1);if(b in q.style)return b;for(b=0;b<a.length;++b){var d=a[b]+c;if(d in q.style)return d}}function g(b){"string"===typeof b&&this.parse(b);return this}function n(b,a,c){!0===a?b.queue(c):a?b.queue(a,c):c()}function o(b){var h=[];a.each(b,function(b){b=a.camelCase(b);b=a.transit.propertyMap[b]||b;b=p(b);-1===a.inArray(b,h)&&h.push(b)});return h}function r(b,h,c,d){b=o(b);a.cssEase[c]&&(c=a.cssEase[c]);
var l=""+s(h)+" "+c;0<parseInt(d,10)&&(l+=" "+s(d));var e=[];a.each(b,function(b,a){e.push(a+" "+l)});return e.join(", ")}function j(b,h){h||(a.cssNumber[b]=!0);a.transit.propertyMap[b]=i.transform;a.cssHooks[b]={get:function(h){return(a(h).css("transform")||new g).get(b)},set:function(h,d){var l=a(h).css("transform")||new g;l.setFromString(b,d);a(h).css({transform:l})}}}function p(b){return b.replace(/([A-Z])/g,function(b){return"-"+b.toLowerCase()})}function m(b,a){return"string"===typeof b&&!b.match(/^[\-0-9\.]+$/)?
b:""+b+a}function s(b){a.fx.speeds[b]&&(b=a.fx.speeds[b]);return m(b,"ms")}a.transit={version:"0.1.3",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var q=document.createElement("div"),i={},e=-1<navigator.userAgent.toLowerCase().indexOf("chrome");i.transition=k("transition");i.transitionDelay=k("transitionDelay");i.transform=k("transform");
i.transformOrigin=k("transformOrigin");q.style[i.transform]="";q.style[i.transform]="rotateY(90deg)";i.transform3d=""!==q.style[i.transform];a.extend(a.support,i);var d=i.transitionEnd={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[i.transition]||null,q=null;a.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"};a.cssHooks.transform={get:function(b){return a(b).data("transform")},
set:function(b,h){var c=h;c instanceof g||(c=new g(c));b.style[i.transform]="WebkitTransform"===i.transform&&!e?c.toString(!0):c.toString();a(b).data("transform",c)}};a.cssHooks.transformOrigin={get:function(b){return b.style[i.transformOrigin]},set:function(b,a){b.style[i.transformOrigin]=a}};j("scale");j("translate");j("rotate");j("rotateX");j("rotateY");j("rotate3d");j("perspective");j("skewX");j("skewY");j("x",!0);j("y",!0);g.prototype={setFromString:function(b,a){var c="string"===typeof a?a.split(","):
a.constructor===Array?a:[a];c.unshift(b);g.prototype.set.apply(this,c)},set:function(b){var a=Array.prototype.slice.apply(arguments,[1]);this.setter[b]?this.setter[b].apply(this,a):this[b]=a.join(",")},get:function(b){return this.getter[b]?this.getter[b].apply(this):this[b]||0},setter:{rotate:function(b){this.rotate=m(b,"deg")},rotateX:function(b){this.rotateX=m(b,"deg")},rotateY:function(b){this.rotateY=m(b,"deg")},scale:function(b,a){void 0===a&&(a=b);this.scale=b+","+a},skewX:function(b){this.skewX=
m(b,"deg")},skewY:function(b){this.skewY=m(b,"deg")},perspective:function(b){this.perspective=m(b,"px")},x:function(b){this.set("translate",b,null)},y:function(b){this.set("translate",null,b)},translate:function(b,a){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==b&&(this._translateX=m(b,"px"));null!==a&&(this._translateY=m(a,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||
0},scale:function(){var b=(this.scale||"1,1").split(",");b[0]&&(b[0]=parseFloat(b[0]));b[1]&&(b[1]=parseFloat(b[1]));return b[0]===b[1]?b[0]:b},rotate3d:function(){for(var b=(this.rotate3d||"0,0,0,0deg").split(","),a=0;3>=a;++a)b[a]&&(b[a]=parseFloat(b[a]));b[3]&&(b[3]=m(b[3],"deg"));return b}},parse:function(b){var a=this;b.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(b,d,l){a.setFromString(d,l)})},toString:function(b){var a=[],c;for(c in this)if(this.hasOwnProperty(c)&&(i.transform3d||!("rotateX"===
c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(b&&"scale"===c?a.push(c+"3d("+this[c]+",1)"):b&&"translate"===c?a.push(c+"3d("+this[c]+",0)"):a.push(c+"("+this[c]+")"));return a.join(" ")}};a.fn.transition=a.fn.transit=function(b,h,c,e){var l=this,t=0,g=!0;"function"===typeof h&&(e=h,h=void 0);"function"===typeof c&&(e=c,c=void 0);"undefined"!==typeof b.easing&&(c=b.easing,delete b.easing);"undefined"!==typeof b.duration&&(h=b.duration,delete b.duration);"undefined"!==typeof b.complete&&
(e=b.complete,delete b.complete);"undefined"!==typeof b.queue&&(g=b.queue,delete b.queue);"undefined"!==typeof b.delay&&(t=b.delay,delete b.delay);"undefined"===typeof h&&(h=a.fx.speeds._default);"undefined"===typeof c&&(c=a.cssEase._default);var h=s(h),k=r(b,h,c,t),j=a.transit.enabled&&i.transition?parseInt(h,10)+parseInt(t,10):0;if(0===j)return n(l,g,function(a){l.css(b);e&&e();a()}),l;var q={},m=function(c){var h=!1,g=function(){h&&l.unbind(d,g);0<j&&l.each(function(){this.style[i.transition]=
q[this]||null});"function"===typeof e&&e.apply(l);"function"===typeof c&&c()};0<j&&d&&a.transit.useTransitionEnd?(h=!0,l.bind(d,g)):window.setTimeout(g,j);l.each(function(){0<j&&(this.style[i.transition]=k);a(this).css(b)})};n(l,g,function(b){var a=0;"MozTransition"===i.transition&&25>a&&(a=25);window.setTimeout(function(){m(b)},a)});return this};a.transit.getTransitionValue=r})(jQuery);
(function(a,k,g,n){var o=a(n),r=function(a,d){a.element.trigger("waypoint.reached",d);if(a.options.triggerOnce)a.element[k]("destroy")},j=function(a,d){if(!d)return-1;for(var b=d.waypoints.length-1;b>=0&&d.waypoints[b].element[0]!==a[0];)b-=1;return b},p=[],m=function(e){a.extend(this,{element:a(e),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:a.proxy(function(){var d=this.element.scrollTop(),b=d>this.oldScroll,h=this,c=a.grep(this.waypoints,function(a){return b?a.offset>h.oldScroll&&
a.offset<=d:a.offset<=h.oldScroll&&a.offset>d}),e=c.length;if(!this.oldScroll||!d)a[g]("refresh");this.oldScroll=d;e&&(b||c.reverse(),a.each(c,function(a,c){if(c.options.continuous||a===e-1)r(c,[b?"down":"up"])}))},this)});a(e).bind("scroll.waypoints",a.proxy(function(){if(!this.didScroll)this.didScroll=!0,n.setTimeout(a.proxy(function(){this.doScroll();this.didScroll=!1},this),a[g].settings.scrollThrottle)},this)).bind("resize.waypoints",a.proxy(function(){if(!this.didResize)this.didResize=!0,n.setTimeout(a.proxy(function(){a[g]("refresh");
this.didResize=!1},this),a[g].settings.resizeThrottle)},this));o.load(a.proxy(function(){this.doScroll()},this))},s=function(e){var d=null;a.each(p,function(b,a){if(a.element[0]===e)return d=a,!1});return d},q={init:function(e,d){this.each(function(){var b=a.fn[k].defaults.context,h,c=a(this);if(d&&d.context)b=d.context;a.isWindow(b)||(b=c.closest(b)[0]);h=s(b);h||(h=new m(b),p.push(h));var i=j(c,h),l=a.extend({},i<0?a.fn[k].defaults:h.waypoints[i].options,d);l.offset=l.offset==="bottom-in-view"?
function(){return(a.isWindow(b)?a[g]("viewportHeight"):a(b).height())-a(this).outerHeight()}:l.offset;i<0?h.waypoints.push({element:c,offset:null,options:l}):h.waypoints[i].options=l;e&&c.bind("waypoint.reached",e);d&&d.handler&&c.bind("waypoint.reached",d.handler)});a[g]("refresh");return this},remove:function(){return this.each(function(e,d){var b=a(d);a.each(p,function(a,c){var d=j(b,c);d>=0&&(c.waypoints.splice(d,1),c.waypoints.length||(c.element.unbind("scroll.waypoints resize.waypoints"),p.splice(a,
1)))})})},destroy:function(){return this.unbind("waypoint.reached")[k]("remove")}},i={refresh:function(){a.each(p,function(e,d){var b=a.isWindow(d.element[0]),h=b?0:d.element.offset().top,c=b?a[g]("viewportHeight"):d.element.height(),i=b?0:d.element.scrollTop();a.each(d.waypoints,function(b,a){if(a){var e=a.options.offset,g=a.offset;typeof a.options.offset==="function"?e=a.options.offset.apply(a.element):typeof a.options.offset==="string"&&(e=parseFloat(a.options.offset),e=a.options.offset.indexOf("%")?
Math.ceil(c*(e/100)):e);a.offset=a.element.offset().top-h+i-e;a.options.onlyOnScroll||(g!==null&&d.oldScroll>g&&d.oldScroll<=a.offset?r(a,["up"]):g!==null&&d.oldScroll<g&&d.oldScroll>=a.offset?r(a,["down"]):!g&&d.element.scrollTop()>a.offset&&r(a,["down"]))}});d.waypoints.sort(function(a,b){return a.offset-b.offset})})},viewportHeight:function(){return n.innerHeight?n.innerHeight:o.height()},aggregate:function(){var e=a();a.each(p,function(d,b){a.each(b.waypoints,function(a,b){e=e.add(b.element)})});
return e}};a.fn[k]=function(e){if(q[e])return q[e].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof e==="function"||!e)return q.init.apply(this,arguments);else if(typeof e==="object")return q.init.apply(this,[null,e]);else a.error("Method "+e+" does not exist on jQuery "+k)};a.fn[k].defaults={continuous:!0,offset:0,triggerOnce:!1,context:n};a[g]=function(a){return i[a]?i[a].apply(this):i.aggregate()};a[g].settings={resizeThrottle:200,scrollThrottle:100};o.load(function(){a[g]("refresh")})})(jQuery,
"waypoint","waypoints",window);
(function(a,k,g){function n(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var o="hashchange",r=document,j,p=a.event.special,m=r.documentMode,s="on"+o in k&&(m===g||m>7);a.fn[o]=function(a){return a?this.bind(o,a):this.trigger(o)};a.fn[o].delay=50;p[o]=a.extend(p[o],{setup:function(){if(s)return!1;a(j.start)},teardown:function(){if(s)return!1;a(j.stop)}});j=function(){function j(){var b=n(),g=c(d);if(b!==d)h(d=b,g),a(k).trigger(o);else if(g!==d)location.href=location.href.replace(/#.*/,
"")+g;e=setTimeout(j,a.fn[o].delay)}var i={},e,d=n(),b=function(a){return a},h=b,c=b;i.start=function(){e||j()};i.stop=function(){e&&clearTimeout(e);e=g};a.browser.msie&&!s&&function(){var d,e;i.start=function(){if(!d)e=(e=a.fn[o].src)&&e+n(),d=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){e||h(n());j()}).attr("src",e||"javascript:0").insertAfter("body")[0].contentWindow,r.onpropertychange=function(){try{if(event.propertyName==="title")d.document.title=r.title}catch(a){}}};
i.stop=b;c=function(){return n(d.location.href)};h=function(b,c){var e=d.document,g=a.fn[o].domain;if(b!==c)e.title=r.title,e.open(),g&&e.write('<script>document.domain="'+g+'"<\/script>'),e.close(),d.location.hash=b}}();return i}()})(jQuery,this);
var $win=$(window),vpW=$win.width(),vpH=$win.height(),iPhoneZusatz=0,isiPhone=navigator.userAgent.toLowerCase().indexOf("iphone")>-1;isiPhone&&(iPhoneZusatz=60);var $scrollbody=$("html,body"),$g=$("#gallery"),size=1;$(window).smartresize(function(){resize()});$(window).on("orientationchange",function(){window.orientation!==0?$("#overlay").show():$("#overlay").hide()});
function resize(){vpW=$win.width();vpH=$win.height()+iPhoneZusatz;vpW/vpH>1?$("#parallax").width(vpH*0.9).height(vpH*0.9):$("#parallax").width(vpW*0.9).height(vpW*0.9);vpW>700&&$("section.fullheight").css("min-height",vpH*0.8);vpW>934?$("#nullslide").find(".daten").height($g.height()*0.75):$("#nullslide").find(".daten").height("auto");$("#gallery.open").css({"min-height":vpH});$(".image img").css({"max-height":vpH*0.9});$(".portrait img").height($g.height()*0.5)}resize();$("section").waypoint({offset:"50%"});
$("body").on("waypoint.reached","section",function(a,b){var c=$(this);b==="up"&&(c=c.prev());c.length||(c=c.end());$(".section-active").removeClass("section-active");c.addClass("section-active");$(".link-active").removeClass("link-active");$("a[href=#"+c.attr("id")+"]").addClass("link-active")});$(window).hashchange(function(a){a.preventDefault()});
$("nav").find("a[href^='#']").click(function(a){a.preventDefault();$(this);var b=$(this.hash);$scrollbody.stop().animate({scrollTop:b.offset().top-20},500,"swing",function(){$activeElement=b})});var slideIndex=0,$slides=$("#slides"),$activeSlide=$("#nullslide"),numSlides=$slides.find(".slide").length;
$("#absolventen ul li a").click(function(a){a.preventDefault();a.stopPropagation();$that=$(this);a=$that.attr("href");$activeSlide=$slides.find(a);$g.hasClass("open")?$scrollbody.stop().animate({scrollTop:$g.offset().top-50},500,function(){$g.find("#nullslide").stop().animate({opacity:0},500,function(){$g.find("#nullslide").html($activeSlide.html()).css("opacity",1);$("#nullslide").find(".loading").each(function(){var a=$(this),c=new Image;$(c).load(function(){$(this).hide().appendTo(a).fadeIn().css("display",
"inline-block");resize()}).attr("src",$(this).attr("data-src"))})})}):$scrollbody.stop().animate({scrollTop:$g.offset().top-50},500,function(){$g.stop().animate({"min-height":vpH},500,function(){$g.addClass("open");$g.find("#nullslide").html($activeSlide.html()).css("opacity",1);$("#nullslide").find(".loading").each(function(){var a=$(this),c=new Image;$(c).load(function(){$(this).hide().appendTo(a).fadeIn().css("display","inline-block");resize()}).attr("src",$(this).attr("data-src"))})})})});
$g.on("click","a",function(a){a.stopPropagation()});
$g.click(function(a){a.pageX-$g.offset().left<$g.width()*0.5?$activeSlide.prev().length>0&&($activeSlide=$activeSlide.prev(),$("#nullslide").find(".slide-inner").transition({left:vpW},500,function(){$(this).remove();$("#nullslide").html($activeSlide.html());$("#nullslide").find(".loading").each(function(){var a=$(this),c=new Image;$(c).hide().load(function(){$(this).appendTo(a).fadeIn().css("display","inline-block");resize()}).attr("src",$(this).attr("data-src"))})})):$activeSlide.next().length>0&&
($activeSlide=$activeSlide.next(),$("#nullslide").find(".slide-inner").transition({left:-vpW},500,function(){$(this).remove();$("#nullslide").html($activeSlide.html());$("#nullslide").find(".loading").each(function(){var a=$(this),c=new Image;$(c).hide().load(function(){$(this).appendTo(a).fadeIn().css("display","inline-block");resize()}).attr("src",$(this).attr("data-src"))})}))});
$("#close a").click(function(a){a.preventDefault();a.stopPropagation();$g.find("#nullslide").stop().animate({opacity:0},500,function(){$(this).html("");$g.stop().animate({"min-height":0},500,function(){$g.removeClass("open")})})});var $cursor=$("#cursor");$("#gallery").mouseenter(function(){$cursor.removeClass("normal").addClass("gallery")}).mouseleave(function(){$cursor.addClass("normal").removeClass("gallery")});var cStyle="";
$(document).mousemove(function(a){var b=a.pageX,c=a.pageY-$(window).scrollTop();a.pageX>vpW*0.5?cStyle!=="right"&&(cStyle="right",$("#cursor").removeClass("left").addClass("right")):cStyle!=="left"&&(cStyle="left",$("#cursor").removeClass("right").addClass("left"));$cursor.css({left:b,top:c})});$("document").ready(function(){$("body").fadeIn();preload("img/absolventen/alexandra_skupin/alexandra_skupin.jpg,img/absolventen/alexandra_skupin/alexandra_skupin_1.jpg,img/absolventen/alexandra_turban/a_t_1.jpg,img/absolventen/alexandra_turban/alexandra_turban.jpg,img/absolventen/alina_kalass/alina_kalass.jpg,img/absolventen/alina_kalass/alina_kalass_1.jpg,img/absolventen/alina_kalass/alina_kalass_2.jpg,img/absolventen/alina_kalass/alina_kalass_3.jpg,img/absolventen/alina_kalass/alina_kalass_4.jpg,img/absolventen/alisa_wimmer/alisa_wimmer.jpg,img/absolventen/alisa_wimmer/alisa_wimmer_1.jpg,img/absolventen/alisa_wimmer/alisa_wimmer_2.jpg,img/absolventen/anja_fuchs/anja_fuchs.jpg,img/absolventen/anja_fuchs/anja_fuchs_1.jpg,img/absolventen/anja_fuchs/anja_fuchs_2.jpg,img/absolventen/anna_straetmans/anna_straetmans.jpg,img/absolventen/anna_straetmans/anna_straetmans_1.jpg,img/absolventen/anna_straetmans/anna_straetmans_2.jpg,img/absolventen/anna_straetmans/anna_straetmans_3.jpg,img/absolventen/anne-katrin_hilbert/anne-katrin_hilbert.jpg,img/absolventen/anne-katrin_hilbert/anne-katrin_hilbert_1.jpg,img/absolventen/annelie_stenzel/annelie_stenzel.jpg,img/absolventen/annelie_stenzel/annelie_stenzel_1.jpg,img/absolventen/annelie_stenzel/annelie_stenzel_2.jpg,img/absolventen/annelie_stenzel/annelie_stenzel_3.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher_1.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher_2.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher_3.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher_4.jpg,img/absolventen/benjamin_hatscher/benjamin_hatscher_5.jpg,img/absolventen/benjamin_leichtenstern/benjamin_leichtenstern.jpg,img/absolventen/benjamin_leichtenstern/benjamin_leichtenstern_1.jpg,img/absolventen/benjamin_leichtenstern/benjamin_leichtenstern_2.jpg,img/absolventen/benjamin_leichtenstern/benjamin_leichtenstern_3.jpg,img/absolventen/caroline_fischer/caroline_fischer.jpg,img/absolventen/christina_hausiel/christina_hausiel.jpg,img/absolventen/christine_boy/christine_boy.jpg,img/absolventen/christine_boy/christine_boy_1.jpg,img/absolventen/christine_boy/christine_boy_2.jpg,img/absolventen/christine_boy/christine_boy_3.jpg,img/absolventen/christine_boy/christine_boy_4.jpg,img/absolventen/christine_boy/christine_boy_5.jpg,img/absolventen/christoph_kohlhas/christoph_kohlhas.jpg,img/absolventen/christoph_kohlhas/christoph_kohlhas_1.jpg,img/absolventen/christoph_kohlhas/christoph_kohlhas_2.jpg,img/absolventen/eugenia_dirksen/eugenia_dirksen.jpg,img/absolventen/eugenia_dirksen/eugenia_dirksen_1.jpg,img/absolventen/eugenia_dirksen/eugenia_dirksen_2.jpg,img/absolventen/felicia_winterstein/felicia_winterstein.jpg,img/absolventen/felicia_winterstein/felicia_winterstein_1.jpg,img/absolventen/felicia_winterstein/felicia_winterstein_2.jpg,img/absolventen/felicia_winterstein/felicia_winterstein_3.jpg,img/absolventen/felix_nuermberger/felix_nuermberger.jpg,img/absolventen/felix_nuermberger/felix_nuermberger_1.jpg,img/absolventen/felix_nuermberger/felix_nuermberger_2.jpg,img/absolventen/felix_nuermberger/felix_nuermberger_3.jpg,img/absolventen/florian_leitl/florian_leitl.jpg,img/absolventen/florian_leitl/florian_leitl_1.jpg,img/absolventen/florian_leitl/florian_leitl_2.jpg,img/absolventen/florian_leitl/florian_leitl_3.jpg,img/absolventen/florian_sommer/florian_sommer.jpg,img/absolventen/florian_sommer/florian_sommer_1.jpg,img/absolventen/florian_sommer/florian_sommer_2.jpg,img/absolventen/florian_uebelmann/florian_uebelmann.jpg,img/absolventen/florian_uebelmann/florian_uebelmann_1.jpg,img/absolventen/hanna_radek/hanna_radek.jpg,img/absolventen/hanna_radek/hanna_radek_1.jpg,img/absolventen/iris_eichenmueller/iris_eichenmueller.jpg,img/absolventen/iris_eichenmueller/iris_eichenmueller_1.jpg,img/absolventen/iris_eichenmueller/iris_eichenmueller_2.jpg,img/absolventen/johannes_heuckeroth/johannes_heuckeroth.jpg,img/absolventen/johannes_heuckeroth/johannes_heuckeroth_1.jpg,img/absolventen/johannes_heuckeroth/johannes_heuckeroth_2.jpg,img/absolventen/jonas_schubert/jonas_schubert.jpg,img/absolventen/jonas_schubert/jonas_schubert_1.jpg,img/absolventen/jonathan_kromer/jonathan_kromer.jpg,img/absolventen/jonathan_kromer/jonathan_kromer_1.jpg,img/absolventen/jonathan_kromer/jonathan_kromer_2.jpg,img/absolventen/julia_bittruf/julia_bittruf.jpg,img/absolventen/julia_bittruf/julia_bittruf_1.jpg,img/absolventen/julia_bittruf/julia_bittruf_2.jpg,img/absolventen/katja_korotynsky/katja_korotynsky.jpg,img/absolventen/katja_korotynsky/katja_korotynsky_1.jpg,img/absolventen/katrin_oswald/katrin_oswald.jpg,img/absolventen/katrin_oswald/katrin_oswald_1.jpg,img/absolventen/katrin_oswald/katrin_oswald_2.jpg,img/absolventen/katrin_oswald/katrin_oswald_3.jpg,img/absolventen/katrin_oswald/katrin_oswald_4.jpg,img/absolventen/leander_weiss/leander_weiss.jpg,img/absolventen/leander_weiss/leander_weiss_1.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler_1.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler_2.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler_3.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler_4.jpg,img/absolventen/lisa_freudenthaler/lisa_freudenthaler_5.jpg,img/absolventen/marcel_knuedeler/marcel_knuedeler.jpg,img/absolventen/marcel_knuedeler/marcel_knuedeler_1.jpg,img/absolventen/marcel_knuedeler/marcel_knuedeler_2.jpg,img/absolventen/marcel_knuedeler/marcel_knuedeler_3.jpg,img/absolventen/marie_kister/marie_kister.jpg,img/absolventen/martina_beyer/martina_beyer.jpg,img/absolventen/martina_beyer/martina_beyer_1.jpg,img/absolventen/martina_beyer/martina_beyer_2.jpg,img/absolventen/matthias_grundl/matthias_grundl.jpg,img/absolventen/matthias_grundl/matthias_grundl_1.jpg,img/absolventen/max_junk/max_junk.jpg,img/absolventen/max_junk/max_junk_1.jpg,img/absolventen/max_junk/max_junk_2.jpg,img/absolventen/max_junk/max_junk_3.jpg,img/absolventen/michael_haas/michael_haas.jpg,img/absolventen/michael_haas/michael_haas_1.jpg,img/absolventen/michael_haas/michael_haas_2.jpg,img/absolventen/michael_haas/michael_haas_3.jpg,img/absolventen/nele_heckl/nele_heckl.jpg,img/absolventen/nils_strehlow/nils_strehlow.jpg,img/absolventen/nils_strehlow/nils_strehlow_1.jpg,img/absolventen/olha_kozlyuk/olha_kozlyuk.jpg,img/absolventen/paul_schweizer/paul_schweizer.jpg,img/absolventen/ramona_harrer/ramona_harrer.jpg,img/absolventen/ramona_harrer/ramona_harrer_1.jpg,img/absolventen/ramona_harrer/ramona_harrer_2.jpg,img/absolventen/ramona_ring/ramona_ring.jpg,img/absolventen/ramona_ring/ramona_ring_1.jpg,img/absolventen/ramona_ring/ramona_ring_2.jpg,img/absolventen/ramona_ring/ramona_ring_3.jpg,img/absolventen/ramona_ring/ramona_ring_4.jpg,img/absolventen/robert_gruss/robert_gruss.jpg,img/absolventen/roland_wittl/roland_wittl.jpg,img/absolventen/roland_wittl/roland_wittl_1.jpg,img/absolventen/rosa_niclas/rosa_niclas.jpg,img/absolventen/saladin_becker/saladin_becker.jpg,img/absolventen/shirin_shafiei/shirin_shafiei.jpg,img/absolventen/shirin_shafiei/shirin_shafiei_1.jpg,img/absolventen/shirin_shafiei/shirin_shafiei_2.jpg,img/absolventen/shirin_shafiei/shirin_shafiei_3.jpg,img/absolventen/silvia_goldhammer/silvia_goldhammer.jpg,img/absolventen/silvia_goldhammer/silvia_goldhammer_1.jpg,img/absolventen/silvia_goldhammer/silvia_goldhammer_2.jpg,img/absolventen/silvia_goldhammer/silvia_goldhammer_3.jpg,img/absolventen/silvia_goldhammer/silvia_goldhammer_4.jpg,img/absolventen/stefan_buehl/stefan_buehl.jpg,img/absolventen/thomas_schienagel/thomas_schienagel.jpg,img/absolventen/wilfried_pollan/wilfried_pollan.jpg".split(","))});
function preload(a){$(a).each(function(){$("<img/>")[0].src=this})}
var animateTitle=!0,layer0={element:$("#layer0"),speed:0.04,startX:72,startY:57,x:0,y:0},layer1={element:$("#layer1"),speed:0.04,startX:74,startY:30,x:0,y:0},layer2={element:$("#layer2"),speed:0.05,startX:15,startY:32,x:0,y:0},layer3={element:$("#layer3"),speed:0.02,startX:38,startY:30,x:0,y:0},layer4={element:$("#layer4"),speed:0.06,startX:28,startY:58,x:0,y:0},layer5={element:$("#layer5"),speed:0.03,startX:7,startY:50,x:0,y:0},layer6={element:$("#layer6"),speed:0.09,startX:50,startY:66,x:0,y:0},
layer7={element:$("#layer7"),speed:0.06,startX:90,startY:49,x:0,y:0},layers=[layer0,layer1,layer2,layer3,layer4,layer5,layer6,layer7],ofY;initLayers();moveLayers();function initLayers(){for(var a=0,b=layers.length;a<b;a++)lay=layers[a],lay.x=lay.startX,lay.y=lay.startY}function moveLayers(){for(var a=0,b=layers.length;a<b;a++)lay=layers[a],lay.element.css({left:lay.x+"%",top:lay.y+"%"})}
$("#home").mouseenter(function(a){var b=a.pageY;relX=a.pageX-vpW/2;relY=b-vpH/2;a=0;for(b=layers.length;a<b;a++)lay=layers[a],lay.x=lay.startX+lay.speed*relX*0.1,lay.y=lay.startY+lay.speed*relY*0.1,lay.element.stop().animate({left:lay.x+"%",top:lay.y+"%"},200,"swing",function(){animate=!0})}).mouseleave(function(){animate=!1;for(var a=0,b=layers.length;a<b;a++)lay=layers[a],lay.x=lay.startX,lay.y=lay.startY,lay.element.stop().animate({left:lay.x+"%",top:lay.y+"%"},500,"swing")});var animate=!1;
$("#home").mousemove(function(a){var b=a.pageY;relX=a.pageX-vpW/2;relY=b-vpH/2;if(animate===!0){a=0;for(b=layers.length;a<b;a++)lay=layers[a],lay.x=lay.startX+lay.speed*relX*0.1,lay.y=lay.startY+lay.speed*relY*0.1;moveLayers()}});
