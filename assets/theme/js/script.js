!function(){try{document.getElementsById("top-1")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.style="display: none";a.innerHTML='<a href="https://mobirise.com?u=3116507"> Website Software</a> Mobirise v5.9.11 <a href="https://mobirise.com/how-to/school-project.html">How to Create school project Website</a>';document.body.insertBefore(a,document.body.childNodes[0])}}();

(function(){function q(a,b){var c=Array.from(a.querySelectorAll(b));a.matches&&a.matches(b)&&c.splice(0,0,a);return c}function w(a){a=a.getBoundingClientRect();var b=document.documentElement;return{top:a.top+window.pageYOffset-b.clientTop,left:a.left+window.pageXOffset-b.clientLeft}}function u(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function x(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function r(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",
a)}function F(a){(function c(){0>(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(c)})()}function G(a){a.style.display="block";(function c(){var d=parseFloat(a.style.opacity);1<(d+=.1)||(a.style.opacity=d,requestAnimationFrame(c))})()}function t(a){var b=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?b=Object.values(c):a in c&&b.push(c[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),
"i")))}function A(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}function v(a){var b=a.getAttribute("id")+"-carousel",c=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");null===a.getAttribute("id")&&(b=a.classList.value.match(/cid-.*?(?=\s|$)/)+"-carousel");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&
a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href","#"+b);c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});A(a)}function H(a){var b=a.querySelectorAll(".carousel-item").length,c=a.querySelector(".carousel-inner").getAttribute("data-visible");b<c&&
(c=b);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+c)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>c?a.setAttribute("class","col-md-12"):"5"==c?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/c)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});
a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,m=1;m<c;m++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:a.parentNode.children[0]);var h;if(h=b){var e=0;do e++;while(h=h.previousElementSibling);h=e}else h=-1;e=b.querySelector(".col-md-12").cloneNode(!0);e.classList.add("cloneditem-"+m);e.classList.add("clonedCol");e.setAttribute("data-cloned-index",h);a.children[0].appendChild(e)}})}function I(a){var b="",c=a.querySelector("svg linearGradient");
if(c){for(var b=[],c=Array.from(c.children),d=0;d<c.length;d++)b.push('"'+c[d].getAttribute("stop-color")+'"');b='"lineargradient": ['+b+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return b}function y(a,b,c){var d=a.closest(".card"),f=d.parentElement.classList;d.getAttribute("style")||d.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");f.contains("row")&&
(f.remove("row"),f.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",b)});d=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});a.setAttribute("data-pie","{ "+I(a.closest("section"))+' "percent": '+c+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+b+')", "fontSize": "1.3rem", "number": false }');Array.from(d.children).forEach(function(b){switch(!0){case b.matches("p"):b.innerText=
c+"%";a.appendChild(b);break;case b.matches("svg"):break;default:a.appendChild(b)}})}function C(a){var b=a.closest("section").getAttribute("id")+"-svg-gradient",c=+a.getAttribute("data-goal");y(a,b,c)}function J(a,b){if(a.classList.contains("circle-progress-section")&&b.includes("progress")&&"progressCount"!=b)if(b.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(b){var c=a.getAttribute("id")+"-svg-gradient",d=+b.getAttribute("data-goal");y(b,c,d)});else{var c=a.getAttribute("id")+
"-svg-gradient",d=a.querySelector("."+b),f=+d.getAttribute("data-goal");y(d,c,f)}}function D(){if(document.querySelector(".loop-container")){var a=function(b){var c=0,d=0,f=+b.children[0].dataset.speed||.05,e=b.querySelector(".item"),h=e.dataset.direction;if(e){(function(){b.querySelectorAll(".item").forEach(function(a){a.textContent=a.dataset.linewords+"\u00a0"})})();b.style.cssText="position: relative; display: inline-flex; white-space: nowrap;";b.children[1].style.cssText="position: absolute; left: "+
100*-h+"%;";var k=function(){d+=f;c=.8*c+.2*d;100<d&&(c-=d,d=0);b.style.transform="translateX("+c*h+"%)";window.requestAnimationFrame(k)},g=new MutationObserver(function(){document.querySelectorAll(".loop-container").forEach(function(a){a.style.transform=""});g.disconnect();a(b)});g.observe(e,{attributes:!0,attributeFilter:["data-direction","data-speed","data-linewords"]});(function(){window.addEventListener("scroll",function(){return d+=1.5*f})})();k()}};document.querySelectorAll(".loop-container").forEach(function(b){return a(b)})}}
function E(){var a=Array.from(document.querySelectorAll(".ticker__item"));if(0!==a.length){var b=a.map(function(a){return a.textContent}),c=new MutationObserver(function(){a.forEach(function(a,b){a.textContent=a.dataset.word})});a.forEach(function(a,f){a.textContent=b[f];c.observe(a,{attributes:!0,attributeFilter:["data-word"]})});(function(){document.querySelectorAll(".ticker__item").forEach(function(a){a.textContent=a.dataset.word})})()}}var e,k,n="function"==typeof jQuery;n&&(e=jQuery);e?k=e("html").hasClass("is-builder"):
k=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=function(a){for(var b=[],c=this,d=void 0!==a;null!==(c=c.parentElement);)c.nodeType===Node.ELEMENT_NODE&&(d&&!c.matches(a)||b.push(c));return b};Element.prototype.footerReveal=function(){function a(){!d&&b.offsetHeight<=window.outerHeight?(b.style.zIndex="-999",b.style.position="fixed",b.style.bottom="0",b.style.width=c.offsetWidth+"px",c.style.marginBottom=b.offsetHeight+"px"):(b.style.zIndex="",b.style.position=
"",b.style.bottom="",b.style.width="",c.style.marginBottom="")}var b=this,c=b.previousElementSibling,d=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return b};(function(a){var b=function(a,b,f){var e;return function(){var h=this,k=arguments;e?clearTimeout(e):f&&a.apply(h,k);e=setTimeout(function(){f||a.apply(h,k);e=null},b||100)}};window[a]=function(c){var d=new CustomEvent(a);return c?this.addEventListener("resize",b(c)):
this.dispatchEvent(d)}})("smartresize");var K=function(){var a=document.createElement("div"),b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var c=parseInt(window.innerHeight/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).height,10);b.removeChild(a);return d==c}();r(function(){function a(a){a.style.height=9*x(a.parentNode)/16+"px"}function b(a){setTimeout(function(){q(a,".mbr-parallax-background").forEach(function(a){jarallax&&
(jarallax(a,{speed:.6}),a.style.position="relative")})},0)}function c(a){q(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),f=a.querySelector(".mbr-background-video-preview")||document.createElement("div");f.classList.add("mbr-background-video-preview");f.style.display="none";f.style.backgroundSize=
"cover";f.style.backgroundPosition="center";a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(f);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){c[6]=c[6].replace("shorts","embed");var b="http"+("https:"===location.protocol?"s":"")+":",b=b+("//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg"),d=new Image;d.onload=function(){if(120===(d.naturalWidth||d.width)){var b=d.src.split("/").pop();switch(b){case "maxresdefault.jpg":d.src=d.src.replace(b,
"sddefault.jpg");break;case "sddefault.jpg":d.src=d.src.replace(b,"hqdefault.jpg");break;default:k&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")}}else f.style.backgroundImage='url("'+d.src+'")',f.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();var g=document.createElement("div"),e=document.createElement("div"),h=document.createElement("div"),l=document.createElement("div");l.classList.add("mbr-video-foreground");
l.appendChild(g);h.appendChild(l);e.appendChild(h);g.classList.add("mbr-background-video");a.childNodes[1].before(e);b=new YouTubePlayer(g,{modestBranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});e.style.overflow="hidden";e.style.position="absolute";e.style.width="100%";e.style.height="100%";e.style.top="0";e.style.left="0";h.style.background="#000";h.style.top="0";h.style.right="0";h.style.bottom="0";h.style.left="0";l.style.position=
"absolute";l.style.top="0";l.style.left="0";l.style.width="100%";l.style.height="100%";l.style.pointerEvents="none";g.style.marginTop="0";g.style.maxWidth="initial";g.style.transitionProperty="opacity";g.style.transitionDuration="1000ms";g.style.pointerEvents="none";g.style.position="absolute";g.style.top="0";g.style.left="0";g.style.width="100%";g.style.height="100%";g.parentNode.style.overflow="hidden";g.style.transform="scale(1.2)";b.load(c[6],!0);b.play();b.loadPlaylist();b.setLoop(!0);b.mute();
var h=window.outerWidth,l=window.outerHeight,m=b._opts.width/b._opts.height,g=h,e=Math.ceil(g/m);Math.ceil(-((e-l)/2));e<l&&(e=l,g=Math.ceil(e*m),Math.ceil(-((g-h)/2)));b.setSize(g,e)};d.setAttribute("src",b)}else{if(c&&/vimeo/g.test(c[3])){var g=new XMLHttpRequest;g.open("GET","https://vimeo.com/api/v2/video/"+c[6]+".json",!0);g.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);f.style.backgroundImage='url("'+a[0].thumbnail_large+
'")';f.style.display="block"}else k&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")};g.send();g=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();g=document.createElement("div");g.classList.add("mbr-background-video");a.childNodes[1].before(g);b=new Vimeo.Player(g,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0,controls:!1});g=b.element.parentNode;g.style.overflow="hidden";b.element.style.pointerEvents=
"none";b.element.style.marginLeft="-"+(b.element.scrollWidth-g.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else if(k)f.style.backgroundImage='url("images/video-placeholder.jpg")',f.style.display="block";else if(!k){var g=document.createElement("video"),e=document.createElement("source");g.append(e);a.childNodes[1].before(g);e.src=b;g.autoplay=!0;g.loop=!0;g.muted=!0;g.setAttribute("muted","");g.playsinline=!0;g.setAttribute("playsinline","");g.style.position=
"absolute";g.style.left="50%";g.style.top="50%";g.style.bottom="0";g.style.right="0";g.style.minWidth="100%";g.style.minHeight="100%";g.style.transform="translateX(-50%) translateY(-50%)";b="";a.querySelector(".mbr-fallback-image")&&(b=window.getComputedStyle(a.querySelector(".mbr-fallback-image")).backgroundImage,b=b.match(/\((.*?)\)/)[1].replace(/('|")/g,""),g.setAttribute("poster",b));g.parentNode.style.overflow="hidden"}}})}document.querySelector("html").classList.add(t()?"mobile":"desktop");
window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});t()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>c.indexOf(a)&&(a=c[window.innerWidth>a?1:0]);var b=document.querySelector(".mbr-section--full-height");
b&&(b.style.height=a+"px")})}(window.innerWidth,window.innerHeight):K||(window.smartresize(function(){var a=document.querySelector(".mbr-section--full-height");a&&(a.style.height=window.innerHeight+"px")}),document.addEventListener("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&q(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});
if(n)e(document).on("add.cards changeParameter.cards",function(b){var c=q(b.target,".mbr-section--16by9");c.length?c.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):q(b.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==typeof jarallax&&!t()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");
a.jarallax("onScroll")}},0)});if(k){if(!n)return;e(document).on("add.cards",function(a){b(a.target);e(window).trigger("update.parallax")});e(document).on("changeParameter.cards",function(a,c,f,d){if("bg"===c)switch(c=a.target,jarallax&&jarallax(c,"destroy"),c.style.position="",e(a.target).find(".mbr-background-video-preview").remove(),e(a.target).find(".mbr-background-video").remove(),d){case "type":!0===f.parallax&&b(a.target);break;case "value":"image"===f.type&&!0===f.parallax&&b(a.target);break;
case "parallax":!0===f.parallax&&b(a.target)}e(window).trigger("update.parallax")})}else b(document.body);window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var d,f,m=0,h=null,B=!t();window.addEventListener("scroll",function(){f&&clearTimeout(f);var a=document.documentElement.scrollTop,b=a<=m||B;m=a;if(h){var c=a>h.breakPoint;b?c!=h.fixed&&(B?(h.fixed=c,h.elm.classList.toggle("is-fixed")):f=setTimeout(function(){h.fixed=c;h.elm.classList.toggle("is-fixed")},
40)):(h.fixed=!1,h.elm.classList.remove("is-fixed"))}});if(n)e(document).on("add.cards delete.cards",function(a){d&&clearTimeout(d);d=setTimeout(function(){h&&(h.fixed=!1,h.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(h={breakPoint:w(a).top+3*u(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=(x(a)*parseInt(a.getAttribute("height")||
315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(n)e(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&q(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(k){if(!n)return;e(document).on("add.cards",function(a){c(a.target)})}else c(document.body);if(k)e(document).on("changeParameter.cards",function(a,b,f,d){if("bg"===b)switch(d){case "type":"video"===f.type&&c(a.target);break;case "value":"video"===
f.type&&c(a.target)}});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));k||document.addEventListener("click",function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);document.querySelectorAll(c?"body":b.hash).forEach(function(c){a.preventDefault();var f=document.querySelector(".navbar-fixed-top"),
f="#bottom"==b.hash?u(c)-window.innerHeight:w(c).top-(f?60:0);c.classList.contains("panel-collapse")||c.classList.contains("tab-pane")||b.classList.contains("carousel-control")||b.parents(".carousel-controls").length||window.scrollTo({top:f,left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(f){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){c.style.width="";c.style.maxWidth="";c.style.marginLeft="";if(e&&d){var h=e/d;a.style.position="absolute";
a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var m=u(f)/x(f);m>h&&(h=100*(m-h)/h,c.style.width=h+100+"%",c.style.maxWidth=h+100+"%",c.style.marginLeft=-h/2+"%")}}var c=a.querySelector("img"),f=a.parentNode,d=c.width,e=c.height;c.addEventListener("load",function(){d=c.width;e=c.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!k){if(n&&e.fn.socialLikes)e(document).on("add.cards",function(a){q(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",
function(a,b,f){999<f&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=Math.floor(f/1E3)+"k"})});a.socialLikes({initHtml:!1})})});Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.classList.contains("mbr-reveal")&&a.addEventListener("add.cards",function(){a.footerReveal()})});r(function(){if(!t()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||
document.body.scrollTop,e=a+window.innerHeight-100;d.forEach(function(d){var k=d.offsetHeight,g=c(d);(g+k>=a&&g-50<=e||b(d))&&d.classList.contains("hidden")&&(d.classList.remove("hidden"),d.classList.add("animate__fadeInUp"),d.classList.add("animate__delay-1s"),d.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==
getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<b.getAttribute("data-visible")){var c=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(c-1))})&&a.parents(".cloneditem-"+(c-1)).some(function(a){return a.getAttribute("data-cloned-index")>=c}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");
return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var d=Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info")),
d=d.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop, .modal"))return!0}).length)return!0}),d=d.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});d.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");
a.classList.add("animate__delay-1s")});window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}r(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";window.addEventListener("scroll",function(){var b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,
document.documentElement.clientHeight);(document.documentElement.scrollTop||document.body.scrollTop)>b/2-document.documentElement.clientHeight/2||window.scrollY>window.innerHeight?G(a):F(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!k){var p=document.querySelector(".mbr-arrow");p&&p.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);
window.scrollTo(0,w(a).top)})}document.querySelectorAll("nav.navbar").length&&(p=u(document.querySelector("nav.navbar")),document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=p+"px"));if(!k&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))e(document).on("add.cards",function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=
window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display="inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height=
"1px"})});r(function(){if(!k){var a=function(a){a.target&&("VIDEO"==a.target.tagName?(a.preventDefault(),a.stopPropagation()):b(a.target))},b=function(b){var d=b.parents("section")[0].querySelector("iframe"),f=d.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});if(f){if(-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==f.indexOf("vimeo")){var e=new Vimeo.Player(d);e.play()}}else{var h=d.parentNode.querySelector("video");
h&&h.play&&h.play()}var k=b.parents("section")[0],g=k.querySelector(k.querySelector("[data-modal]").getAttribute("data-modal"));g.style.display="table";g.addEventListener("click",function(b){"VIDEO"!==b.target.tagName&&(f?(-1!==f.indexOf("youtu")&&d.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==f.indexOf("vimeo")&&e.pause()):(b=d.parentNode.querySelector("video"))&&b.pause&&b.pause(),g.style.display="none",g.removeEventListener("click",a),k.style.zIndex="0")})};
document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src");if(b){a.removeAttribute("data-src");var f=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(shorts\/|video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);if(-1!==b.indexOf("youtu"))a.setAttribute("src","https://youtube.com/embed/"+f[6]+"?rel=0&enablejsapi=1");else if(-1!==b.indexOf("vimeo"))a.setAttribute("src","https://player.vimeo.com/video/"+
f[6]+"?autoplay=0&loop=0");else if(/\.mp4|\.webm|\.ogg|\.ogv|\.m4a|\.m4v/.test(b)){f=document.createElement("video");f.onloadeddata=function(a){a.target.style.height=a.target.videoHeight>a.target.videoWidth?window.innerHeight-.2*window.innerHeight+"px":"100%"};var e=a.parents("section")[0].querySelector("img");e&&f.setAttribute("poster",e.src);f.setAttribute("controls","");f.setAttribute("playsinline","");f.setAttribute("loop","");f.setAttribute("src",b);a.style.display="none";f.style.width="100%";
a.after(f)}}});document.querySelector("[data-modal]")&&document.querySelectorAll("[data-modal]").forEach(function(b){b.addEventListener("click",a)})}});if(!k){var p=document.querySelectorAll(".dropdown-toggle.show"),z=document.querySelectorAll(".dropdown-menu.show, .dropdown.open"),L=document.querySelectorAll(".dropdown.open");p.forEach(function(a){a.classList.remove("show");a.ariaExpanded="false"});z.forEach(function(a){return a.classList.remove("show")});L.forEach(function(a){return a.classList.remove("open")});
!t()&&(p=document.querySelector("section.menu"))&&(z=window.innerWidth,!p.querySelector(".navbar").classList.contains("collapsed")&&991<z&&(p.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")||a.querySelector("a").parentNode.classList.toggle("open")});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelector("a").parentNode.classList.toggle("open")})}),p.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",
function(){a.classList.contains("open")||a.classList.toggle("open")});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.classList.toggle("open")})})))}k||("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(v(a),H(a))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&
(window.initPopupBtnPlugin=!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){v(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,r(function(){0!=document.querySelectorAll(".accordionStyles").length&&
document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),c=a.closest(".card").querySelector(".panel-collapse"),d=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
!c.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?(d.classList.remove("mbri-arrow-up"),d.classList.add("mbri-arrow-down")):(d.classList.remove("mbri-arrow-down"),d.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==d}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),c=a.querySelectorAll(".carousel-indicators li"),d=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",function(){b.forEach(function(a){a.addEventListener("click",d)});c.forEach(function(a){a.addEventListener("click",
d)});n&&e(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",d)});c.forEach(function(a){a.removeEventListener("click",d)});n&&e(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));if(k){if(!n)return;e(document).on("add.cards",function(a){e(a.target).find(".form-with-styler").length&&
(a=e(a.target).find(".form-with-styler"),e(a).find('select:not("[multiple]")').each(function(){e(this).styler&&e(this).styler()}),e(a).find("input[type=number]").each(function(){e(this).styler&&(e(this).styler(),e(this).parent().parent().removeClass("form-control"))}),e(a).find("input[type=date]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),e(a).find("input[type=time]").each(function(){e(this).datetimepicker&&e(this).datetimepicker({format:"H:i",
datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",function(a){a.target.parents(".form-group").forEach(function(c){c.querySelector(".value").innerHTML=a.target.value})})});if(k)e(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?J(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){C(a)})});
else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress"),document.querySelectorAll(".pie_progress").forEach(function(a){C(a)}));if(k&&n)e(document).on("add.cards",function(a){e(a.target).hasClass("testimonials-slider")&&v(a.target)}).on("changeParameter.cards",function(a,b,c){"testimonialsSlides"===b&&0==e(a.target).find(".carousel-item.active").length&&A(a.target)});else"undefined"===typeof window.initTestimonialsPlugin&&
(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){v(a)}));r(function(){k||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){if(window.Event&&"function"===typeof window.Event)var b=new Event("add.cards");else b=document.createEvent("CustomEvent"),b.initEvent("add.cards",!0,!0);a.dispatchEvent(b)})});r(function(){window.addEventListener("scroll",function(){var a=document.querySelector(".navbar-dropdown"),
b=document.querySelector(".navbar-collapse");if(a&&!a.classList.contains("opacityScrollOff")){var c=1<document.documentElement.scrollTop;a.classList.toggle("opacityScroll",!c);b.classList.toggle("opacityScroll",!c)}})});if(k)e(document).on("add.cards",D);else window.addEventListener("DOMContentLoaded",D);if(k)e(document).on("add.cards",E);else window.addEventListener("DOMContentLoaded",E)})();
