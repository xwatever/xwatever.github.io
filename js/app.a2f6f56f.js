(function(){"use strict";var e={3360:function(e,t,i){var o=i(3751),n=i(641);const s=(0,n.Lk)("div",{id:"scrollbar"},null,-1),u={class:"wrapper"};function a(e,t,i,o,a,r){const h=(0,n.g2)("navbar"),c=(0,n.g2)("sidebar"),l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)(n.FK,null,[s,(0,n.bF)(h,{width:e.width,onClicked:r.toggleNavMenu,onHeight:r.getNavbarHeight},null,8,["width","onClicked","onHeight"]),(0,n.Lk)("div",u,[(0,n.bF)(c),(0,n.bF)(l,{view:e.view,subView:e.subView,width:e.width,height:e.height,navbarHeight:e.navbarHeight,keydownAndWheelActive:e.keydownAndWheelActive,onHeight:r.toggleScroll,onHandleScrolling:e.toggleHandleScrolling},null,8,["view","subView","width","height","navbarHeight","keydownAndWheelActive","onHeight","onHandleScrolling"])])],64)}i(4114);var r=i(33);const h={class:"navbar"},c=(0,n.Lk)("div",{class:"title"},"xwatever's portfolio",-1);function l(e,t,i,o,s,u){return(0,n.uX)(),(0,n.CE)("nav",h,[c,(0,n.Lk)("div",{class:(0,r.C4)(["menu",{active:e.dropDownMenu}])},[(0,n.Lk)("span",{title:"My socials and contacts",onClick:t[0]||(t[0]=(...e)=>u.toggleMenu&&u.toggleMenu(...e)),class:(0,r.C4)(["link",{active:"home"==e.viewedPage}])},"HOME ",2),(0,n.Lk)("span",{title:"My life summary, probably",onClick:t[1]||(t[1]=(...e)=>u.toggleMenu&&u.toggleMenu(...e)),class:(0,r.C4)(["link",{active:"about"==e.viewedPage}])}," ABOUT ",2),(0,n.Lk)("span",{title:"More to come, probably still having my assignments from my college days as projects",onClick:t[2]||(t[2]=(...e)=>u.toggleMenu&&u.toggleMenu(...e)),class:(0,r.C4)(["link",{active:"projects"==e.viewedPage}])}," PROJECTS ",2)],2),(0,n.Lk)("div",{class:(0,r.C4)(["mobile-config fa-solid",{active:e.dropDownMenu,"fa-bars":e.mobileView}]),title:"Menu dropdown",onClick:t[3]||(t[3]=(...e)=>u.toggleDropdown&&u.toggleDropdown(...e))},null,2)])}var d=i(9325),w={props:["width"],watch:{$route:function(e,t){t!==e&&(this.dropDownMenu=!1,this.viewedPage="manage-cost-and-schedules-for-civil-construction-app"==e.name||"optional-course-scheduling-app"==e.name?"projects":e.name)},width:function(e,t){e<550?this.mobileView=!0:(e>550||t)&&(this.mobileView=!1)}},mounted(){this.width<550&&(this.mobileView=!0);var e=document.getElementsByClassName("navbar")[0].getBoundingClientRect().height;this.$emit("height",e)},data:function(){return{mobileView:!1,dropDownMenu:!1,viewedPage:"home"}},methods:{toggleDropdown(){this.dropDownMenu=!this.dropDownMenu},toggleMenu(e){const t=e.target.innerHTML.replace(/ /g,"");"HOME"==t?(this.$emit("clicked","home"),setTimeout((()=>{d.A.push({name:"home"})}),50)):"ABOUT"==t?(this.$emit("clicked","about"),setTimeout((()=>{d.A.push({name:"about"})}),50)):"PROJECTS"==t&&(this.$emit("clicked","projects"),setTimeout((()=>{d.A.push({name:"projects"})}),50))}}},b=i(6262);const m=(0,b.A)(w,[["render",l]]);var v=m;const g={id:"sidebar"};function p(e,t,i,o,s,u){return(0,n.uX)(),(0,n.CE)("div",g)}var f={methods:{}};const y=(0,b.A)(f,[["render",p]]);var V=y,k=i(6278);const S=(0,k.y$)({state(){return{aboutSubView:[],view:[]}},mutations:{getAboutSubView(e){e.aboutSubView=JSON.parse(sessionStorage.getItem("aboutSubView")||"{}")},getView(e){e.view=JSON.parse(sessionStorage.getItem("view")||"{}")}},actions:{getAboutSubView(e){e.commit("getAboutSubView")},getView(e){e.commit("getView")}}});var A=S,T={name:"App",components:{navbar:v,sidebar:V},data:function(){return{width:0,height:0,navbarHeight:0,view:"home",subView:"about-me",keydownAndWheelActive:!0,ScrollDebounce:!0}},created(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.handleSession()},mounted(){this.handleSession(),document.getElementById("scrollbar").style.display="block",document.body.style.overflowY="hidden",setTimeout((()=>{let e="home",t="about-me";this.width=window.innerWidth,this.height=window.innerHeight,this.view=e,this.subView=t,setTimeout((()=>{console.log(this.width),console.log(this.height),console.log(this.navbarHeight),console.log(this.view),console.log(this.subView),console.log(this.keydownAndWheelActive),console.log(this.ScrollDebounce),setTimeout((()=>{window.addEventListener("keydown",this.keydownHandler),window.addEventListener("wheel",this.wheelHandler)}),50)}),50)}),50)},methods:{handleResize(){this.width=window.innerWidth,this.height=window.innerHeight},getNavbarHeight(e){this.navbarHeight=e},handleSession(){A.dispatch("getView"),A.dispatch("getAboutSubView"),setTimeout((()=>{this.view=A.state.view,this.subView=void 0!=A.state.subView?A.state.subView:"about-me","home"==this.view?d.A.push({name:"home"}):"about"==this.view?d.A.push({name:"about"}):"projects"==this.view&&d.A.push({name:"projects"})}),50)},toggleNavMenu(e){this.view=e,this.toggleScroll({state:!0}),"home"==e?this.subView="about-me":"projects"==e&&(this.subView="work"),sessionStorage.setItem("aboutSubView",JSON.stringify(void 0!=this.subView?this.subView:"")),sessionStorage.setItem("view",JSON.stringify(this.view))},toggleRouteKeyDownMain(e){40===e.keyCode?("home"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("about-me"==this.subView?this.subView="education":"education"==this.subView?this.subView="work":"work"==this.subView&&(this.view="projects",setTimeout((()=>{d.A.push({name:"projects"})}),50))),sessionStorage.setItem("aboutSubView",JSON.stringify(void 0!=this.subView?this.subView:"")),sessionStorage.setItem("view",JSON.stringify(this.view))):38===e.keyCode&&("projects"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("work"==this.subView?this.subView="education":"education"==this.subView?this.subView="about-me":"about-me"==this.subView&&(this.view="home",setTimeout((()=>{d.A.push({name:"home"})}),50))),sessionStorage.setItem("aboutSubView",JSON.stringify(void 0!=this.subView?this.subView:"")),sessionStorage.setItem("view",JSON.stringify(this.view)))},toggleRouteWheelMain(e){e.deltaY>=0?("home"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("about-me"==this.subView?this.subView="education":"education"==this.subView?this.subView="work":"work"==this.subView&&(this.view="projects",setTimeout((()=>{d.A.push({name:"projects"})}),50))),sessionStorage.setItem("aboutSubView",JSON.stringify(void 0!=this.subView?this.subView:"about-me")),sessionStorage.setItem("view",JSON.stringify(this.view))):e.deltaY<=0&&("projects"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("work"==this.subView?this.subView="education":"education"==this.subView?this.subView="about-me":"about-me"==this.subView&&(this.view="home",setTimeout((()=>{d.A.push({name:"home"})}),50))),sessionStorage.setItem("aboutSubView",JSON.stringify(void 0!=this.subView?this.subView:"")),sessionStorage.setItem("view",JSON.stringify(this.view)))},toggleScroll(e){setTimeout((()=>{0==e.state?(this.keydownAndWheelActive=!0,document.body.style.overflowY="scroll",document.getElementById("scrollbar").style.display="none",setTimeout((()=>{this.keydownAndWheelActive=!1,setTimeout((()=>{this.wheelHandler(),this.keydownHandler()}),50)}),50)):null==e.state?this.keydownAndWheelActive=!1:(this.keydownAndWheelActive=!0,document.getElementById("scrollbar").style.display="block",document.body.style.overflowY="hidden",window.addEventListener("keydown",this.keydownHandler),window.addEventListener("wheel",this.wheelHandler),"up"==e.direction?"projects"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("work"==this.subView?this.subView="education":"education"==this.subView?this.subView="about-me":"about-me"==this.subView&&(this.view="home",setTimeout((()=>{d.A.push({name:"home"})}),50))):"down"==e.direction&&("home"==this.view?(this.view="about",setTimeout((()=>{d.A.push({name:"about"})}),50)):"about"==this.view&&("about-me"==this.subView?this.subView="education":"education"==this.subView?this.subView="work":"work"==this.subView&&(this.view="projects",setTimeout((()=>{d.A.push({name:"projects"})}),50)))))}),75)},wheelHandler(e){1==this.keydownAndWheelActive?this.ScrollDebounce&&(this.ScrollDebounce=!1,this.toggleRouteWheelMain(e),setTimeout((()=>{this.ScrollDebounce=!0}),500)):window.removeEventListener("wheel",this.wheelHandler)},keydownHandler(e){1==this.keydownAndWheelActive?this.ScrollDebounce&&(this.ScrollDebounce=!1,this.toggleRouteKeyDownMain(e),setTimeout((()=>{this.ScrollDebounce=!0}),500)):window.removeEventListener("keydown",this.keydownHandler)}}};const O=(0,b.A)(T,[["render",a]]);var j=O;const H=(0,o.Ef)(j);H.config.devtools=!0,H.use(d.A).use(A).mount("#app")},9325:function(e,t,i){var o=i(5220);const n=()=>i.e(530).then(i.bind(i,4194)),s=()=>i.e(227).then(i.bind(i,7227)),u=()=>i.e(406).then(i.bind(i,7406)),a=()=>i.e(851).then(i.bind(i,7369)),r=()=>i.e(486).then(i.bind(i,2486)),h=()=>i.e(584).then(i.bind(i,1402)),c=[{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:n},{path:"/about",name:"about",component:s},{path:"/cv",name:"cv",component:a},{path:"/resume",name:"resume",component:r},{path:"/projects",name:"projects",component:u,children:[{path:"manage-cost-and-schedules-for-civil-construction-app/",name:"manage-cost-and-schedules-for-civil-construction-app",component:h},{path:"optional-course-scheduling-app/",name:"optional-course-scheduling-app",component:h}]}],l=(0,o.aE)({mode:"hash",history:(0,o.LA)("/portfolio/"),routes:c});t.A=l}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,o,n,s){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],s=e[c][2];for(var a=!0,r=0;r<o.length;r++)(!1&s||u>=s)&&Object.keys(i.O).every((function(e){return i.O[e](o[r])}))?o.splice(r--,1):(a=!1,s<u&&(u=s));if(a){e.splice(c--,1);var h=n();void 0!==h&&(t=h)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,n,s]}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,o){return i.f[o](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{227:"eac5b835",406:"0b45f134",486:"128b2bf1",530:"dccd2a86",584:"342c9f3f",851:"13e6f85c"}[e]+".js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="xwatever.github.io:";i.l=function(o,n,s,u){if(e[o])e[o].push(n);else{var a,r;if(void 0!==s)for(var h=document.getElementsByTagName("script"),c=0;c<h.length;c++){var l=h[c];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+s){a=l;break}}a||(r=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+s),a.src=o),e[o]=[n];var d=function(t,i){a.onerror=a.onload=null,clearTimeout(w);var n=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(i)})),t)return t(i)},w=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),r&&document.head.appendChild(a)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={524:0};i.f.j=function(t,o){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var s=new Promise((function(i,o){n=e[t]=[i,o]}));o.push(n[2]=s);var u=i.p+i.u(t),a=new Error,r=function(o){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+u+")",a.name="ChunkLoadError",a.type=s,a.request=u,n[1](a)}};i.l(u,r,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,u=o[0],a=o[1],r=o[2],h=0;if(u.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(r)var c=r(i)}for(t&&t(o);h<u.length;h++)s=u[h],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(c)},o=self["webpackChunkxwatever_github_io"]=self["webpackChunkxwatever_github_io"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[504],(function(){return i(3360)}));o=i.O(o)})();
//# sourceMappingURL=app.a2f6f56f.js.map