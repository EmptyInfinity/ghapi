(function(e){function t(t){for(var s,a,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)a=i[l],n[a]&&f.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],s=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},n={app:0},o=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("header",[r("form",{on:{submit:function(t){return t.preventDefault(),e.searchFor(t)}}},[r("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.request,expression:"request"}],attrs:{type:"text",placeholder:"Search for …"},domProps:{value:e.request},on:{input:function(t){t.target.composing||(e.request=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Search"}})])]),r("div",{staticClass:"container"},e._l(e.users,function(t,s){return r("div",{key:s},[r("div",{staticClass:"user"},[r("p",{staticClass:"name",attrs:{id:s},on:{click:function(t){return e.showUserRepos(t)}}},[e._v(e._s(t.login))]),t.login===e.chosenUser?r("div",{staticClass:"starred"},[r("p",[e._v("starred")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.starred,expression:"starred"}],attrs:{type:"number",min:"0"},domProps:{value:e.starred},on:{input:[function(t){t.target.composing||(e.starred=t.target.value)},function(t){return e.getStarred(t)}]}}),r("p",[e._v("times")])]):e._e(),t.login===e.chosenUser?r("div",{staticClass:"type"},[r("input",{attrs:{type:"radio",value:"all",name:"type",id:"all",checked:""},on:{click:function(t){return e.showAll()}}}),r("label",{attrs:{for:"all"}},[e._v("all")]),r("input",{attrs:{type:"radio",value:"forks",name:"type",id:"forks"},on:{click:function(t){return e.showForks()}}}),r("label",{attrs:{for:"forks"}},[e._v("forks")]),r("input",{attrs:{type:"radio",value:"sourced",name:"type",id:"sources"},on:{click:function(t){return e.showSources()}}}),r("label",{attrs:{for:"sources"}},[e._v("sources")])]):e._e(),t.login===e.chosenUser?r("p",{staticClass:"sort"},[e._v("Sort by:\n          "),r("span",{on:{click:function(t){return e.sortName()}}},[e._v("repo name")]),r("span",{on:{click:function(t){return e.sortStars()}}},[e._v("stars count")])]):e._e()]),t.login===e.chosenUser?r("div",{staticClass:"reps"},e._l(e.userReps,function(t,s){return r("div",{key:s,staticClass:"rep"},[r("p",{staticClass:"rep-name"},[e._v(e._s(t.name))]),t.description?r("p",[e._v("description: "+e._s(t.description))]):e._e(),r("p",[e._v("last update: "+e._s(e.updated_at))]),r("p",[r("svg",{staticClass:" octicon-repo-forked",attrs:{"aria-label":"forks",viewBox:"0 0 10 16",version:"1.1",width:"10",height:"16",role:"img"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),e._v(" "+e._s(t.forks))]),r("p",[r("svg",{staticClass:"octicon-star",attrs:{"aria-label":"stars",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"}},[r("path",{attrs:{"fill-rule":"oction-star",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})]),e._v(" "+e._s(t.stargazers_count))]),t.language?r("p",[e._v(e._s(t.language))]):e._e()])}),0):e._e(),t.login===e.chosenUser?r("button",{staticClass:"load",on:{click:function(t){return e.incPage()}}},[e._v("Load more")]):e._e()])}),0)])},o=[],a=(r("96cf"),r("3b8d")),i=(r("7f7f"),r("55dd"),r("ac6a"),r("28a5"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")}),u=[],c={name:"HelloWorld",props:{msg:String}},p=c,l=(r("e97e"),r("2877")),f=Object(l["a"])(p,i,u,!1,null,"95a2cdba",null),h=(f.exports,{name:"app",components:{},data:function(){return{request:"",users:[],userReps:[],reserveReps:[],chosenUser:"",starred:0,typeAll:!0,typeFork:!1,typeSource:!1,page:1}},computed:{updated_at:function(){return this.userReps[this.userReps.length-1].updated_at.split("T")[0]}},methods:{showAll:function(){var e=this;this.userReps=[],this.reserveReps.forEach(function(t){t.stargazers_count>=e.starred&&e.userReps.push(t)})},showForks:function(){var e=this;this.userReps=[],this.reserveReps.forEach(function(t){t.fork&&t.stargazers_count>=e.starred&&e.userReps.push(t)})},showSources:function(){var e=this;this.userReps=[],this.reserveReps.forEach(function(t){!t.fork&&t.stargazers_count>=e.starred&&e.userReps.push(t)})},getStarred:function(e){var t=this;this.userReps=[],this.reserveReps.forEach(function(e){!0===t.typeSource?t.showSources():!0===t.typeFork?t.showForks():t.showAll()})},sortName:function(){this.userReps.sort(function(e,t){var r=e.name.toUpperCase(),s=t.name.toUpperCase();return r<s?-1:r>s?1:0})},sortStars:function(){this.userReps.sort(function(e,t){return t.stargazers_count>e.stargazers_count?1:-1})},searchFor:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.users=[],e.next=3,fetch("https://api.github.com/search/users?q="+this.request).then(function(e){return e.json()}).then(function(e){return e.items.forEach(function(e){return r.users.push(e)})});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),showUserRepos:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/"+t.target.innerText+"/repos?page="+this.page+"&per_page=9").then(function(e){return e.json()}).then(function(e){r.page=1,r.chosenUser=t.target.innerText,r.userReps=[],r.starred=0,e.forEach(function(e){return r.userReps.push(e)}),r.reserveReps=r.userReps});case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),showMoreUserRepos:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/"+this.chosenUser+"/repos?page="+this.page+"&per_page=9").then(function(e){return e.json()}).then(function(e){e.forEach(function(e){return t.userReps.push(e)}),t.reserveReps=t.userReps});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),incPage:function(){this.page++,this.showMoreUserRepos()}}}),d=h,v=(r("5c0b"),Object(l["a"])(d,n,o,!1,null,null,null)),g=v.exports,m=r("2f62");s["a"].use(m["a"]);var _=new m["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({store:_,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("5e27"),n=r.n(s);n.a},"5e27":function(e,t,r){},d9b5:function(e,t,r){},e97e:function(e,t,r){"use strict";var s=r("d9b5"),n=r.n(s);n.a}});
//# sourceMappingURL=app.d95db361.js.map