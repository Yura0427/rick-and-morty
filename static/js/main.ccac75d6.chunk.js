(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(20),s=c.n(r),i=(c(73),c(74),c(27)),o=c(8),j=c(110),d=c(109),l=c(1);function b(){return Object(l.jsxs)(j.a,{bg:"light",expand:"sm",children:[Object(l.jsx)(j.a.Brand,{as:i.b,to:"/",children:"Rick and Morty"}),Object(l.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(l.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(l.jsxs)(d.a,{className:"mr-auto",children:[Object(l.jsx)(d.a.Link,{as:i.b,to:"/characters",children:"Characters"}),Object(l.jsx)(d.a.Link,{as:i.b,to:"/episodes",children:"Episodes"}),Object(l.jsx)(d.a.Link,{as:i.b,to:"/locations",children:"Locations"}),Object(l.jsx)(d.a.Link,{as:i.b,to:"/myWatchList",children:"My watch list"})]})})]})}var h=c.p+"static/media/rick-morty-portal.d80c367d.jpg";function u(){return Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"portal",src:h,width:"100%",height:"100%"})})}var O=c(10),x=c(54),p=c.n(x),f=function(){return Object(l.jsx)("div",{className:p.a.preloader,children:Object(l.jsx)("div",{className:p.a.loader})})},m=c(111);function v(e){for(var t=e.info,c=e.active,n=e.setActive,a=[],r=1;r<=t.pages;r++)a.push(Object(l.jsx)(m.a.Item,{active:r===c,onClick:function(e){n(+e.target.innerHTML)},children:r},r));return Object(l.jsx)(m.a,{style:{maxWidth:"95%",overflow:"auto"},size:"sm",children:a})}var y=c(112),g=c(104),S=c(107);function w(e){var t=e.show,c=e.onHide,n=e.character,a=n.name,r=n.image,s=n.origin,i=n.location,o=n.gender,j=n.status,d=n.species,b=n.type;return Object(l.jsxs)(S.a,{show:t,size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(l.jsx)(S.a.Header,{children:Object(l.jsxs)(S.a.Title,{children:[Object(l.jsx)("strong",{children:"Name:"})," ",a]})}),Object(l.jsx)(S.a.Body,{children:Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:a,src:r,style:{maxWidth:"100%"}})}),Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Origin:"})," ",s.name]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Location:"})," ",i.name]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Gender:"})," ",o]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Species:"})," ",d]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Status:"})," ",j]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Type:"})," ",b||"unknown"]})]})})]})}),Object(l.jsx)(S.a.Footer,{children:Object(l.jsx)(g.a,{onClick:c,children:"Close"})})]})}function L(e){var t=e.character,c=a.a.useState(!1),n=Object(O.a)(c,2),r=n[0],s=n[1],i=t.image,o=t.name,j=t.species,d=t.status,b=t.gender;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(y.a,{style:{width:"25%"},children:[Object(l.jsx)(y.a.Img,{variant:"top",src:i}),Object(l.jsxs)(y.a.Body,{children:[Object(l.jsxs)(y.a.Title,{children:[Object(l.jsx)("strong",{children:"Name:"})," ",o]}),Object(l.jsxs)(y.a.Text,{children:[Object(l.jsx)("strong",{children:"Species:"})," ",j]}),Object(l.jsxs)(y.a.Text,{children:[Object(l.jsx)("strong",{children:"Status:"})," ",d]}),Object(l.jsxs)(y.a.Text,{children:[Object(l.jsx)("strong",{children:"Gender:"})," ",b]})]}),Object(l.jsx)(g.a,{variant:"primary",onClick:function(){return s(!0)},children:"See more..."}),Object(l.jsx)(w,{show:r,onHide:function(){return s(!1)},character:t})]})})}var E=c(108),C=c(66);function T(e){var t=e.setSpecies,c=e.setStatus,n=e.setGender;return Object(l.jsx)("div",{className:"m-2",children:Object(l.jsx)(E.a,{children:Object(l.jsxs)(E.a.Row,{children:[Object(l.jsxs)(E.a.Group,{as:C.a,children:[Object(l.jsx)(E.a.Label,{children:"Filter by species"}),Object(l.jsx)(E.a.Control,{onChange:function(e){return t(e.target.value)}})]}),Object(l.jsxs)(E.a.Group,{as:C.a,children:[Object(l.jsx)(E.a.Label,{children:"Filter by status"}),Object(l.jsx)(E.a.Control,{onChange:function(e){return c(e.target.value)}})]}),Object(l.jsxs)(E.a.Group,{as:C.a,children:[Object(l.jsx)(E.a.Label,{children:"Filter by dender"}),Object(l.jsx)(E.a.Control,{onChange:function(e){return n(e.target.value)}})]})]})})})}var _=c(68),k=c(12),N=c(36),I=c.n(N),A="characters/SET_CHARACTERS",F="episodes/SET_EPISODES",P="locations/SET_LOCATIONS",R="watchList/SET_WATCHLIST",G="watchList/SET_TOGGLE",W="watchList/SET_DELETE",z="requestInfo/SET_REQUESTINFO",q="https://rickandmortyapi.com/api/",H={characters:[],episodes:[],locations:[],requestInfo:{},watchList:[]},B=function(e){return{type:z,payload:e}},D=function(e,t,c,n){return function(a){var r="".concat(q,"character/?page=").concat(e);return t&&(r+="&species=".concat(t)),c&&(r+="&status=".concat(c)),n&&(r+="&gender=".concat(n)),t&&c&&(r+="&species=".concat(t,"&status=").concat(c)),t&&n&&(r+="&species=".concat(t,"&gender=").concat(n)),c&&n&&(r+="&status=".concat(c,"&gender=").concat(n)),t&&c&&n&&(r+="&species=".concat(t,"&status=").concat(c,"&gender=").concat(n)),I.a.get(r).then((function(e){var t;a((t=e.data.results,{type:A,payload:t})),a(B(e.data.info))})).catch((function(e){return console.error(e)}))}},M=function(e,t){return function(c){var n="".concat(q,"episode?page=").concat(e);return t&&(n+="&name=".concat(t)),I.a.get(n).then((function(e){var t;c((t=e.data.results,{type:F,payload:t})),c(B(e.data.info))})).catch((function(e){return console.error(e)}))}},J=function(e,t,c,n){return function(a){var r="".concat(q,"location?page=").concat(e);return t&&(r+="&name=".concat(t)),c&&(r+="&type=".concat(c)),n&&(r+="&dimension=".concat(n)),t&&c&&(r+="&name=".concat(t,"&type=").concat(c)),t&&n&&(r+="&name=".concat(t,"&dimension=").concat(n)),c&&n&&(r+="&type=".concat(c,"&dimension=").concat(n)),t&&c&&n&&(r+="&name=".concat(t,"&type=").concat(c,"&dimension=").concat(n)),I.a.get(r).then((function(e){var t;a((t=e.data.results,{type:P,payload:t})),a(B(e.data.info))})).catch((function(e){return console.error(e)}))}},X=function(e){return function(t){e&&I.a.get("https://rickandmortyapi.com/api/episode?name=".concat(e)).then((function(e){var c;t((c=Object(k.a)(Object(k.a)({},e.data.results[0]),{},{done:!1}),{type:R,payload:c}))})).catch((function(e){return console.error(e)}))}},U=function(e){return function(t){t({type:G,payload:e})}},Z=function(e){return function(t){t({type:W,payload:e})}},Q=c(13);function V(){var e=a.a.useState(!0),t=Object(O.a)(e,2),c=t[0],n=t[1],r=a.a.useState(1),s=Object(O.a)(r,2),i=s[0],o=s[1],j=a.a.useState(),d=Object(O.a)(j,2),b=d[0],h=d[1],u=a.a.useState(),x=Object(O.a)(u,2),p=x[0],m=x[1],y=a.a.useState(),g=Object(O.a)(y,2),S=g[0],w=g[1],E=Object(Q.b)();a.a.useEffect((function(){var e=[];e.push(E(D(i,b,p,S))),Promise.all(e).then((function(){})).catch((function(e){console.log("Failed fetching ",e)})).finally((function(){n(!1)}))}),[i,b,p,S,E]);var C=Object(Q.c)((function(e){var t=e.reducer;return{characters:t.characters,info:t.requestInfo}})),_=C.characters,k=C.info;return c?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{setSpecies:h,setStatus:m,setGender:w}),Object(l.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:_&&_.map((function(e){return Object(l.jsx)(L,{character:e},e.id)}))}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(v,{info:k,active:i,setActive:o})})]})}var Y=c(105),K=c(106),$=c(65);function ee(e){var t=e.episode,c=t.id,n=t.name,a=t.air_date;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:t.episode.split(/(?=[A-Z])/)[0].slice(1)}),Object(l.jsx)("td",{children:t.episode.split(/(?=[A-Z])/)[1].slice(1)}),Object(l.jsx)("td",{children:a})]})}function te(){var e=a.a.useState(!0),t=Object(O.a)(e,2),c=t[0],n=t[1],r=a.a.useState(1),s=Object(O.a)(r,2),i=s[0],o=s[1],j=a.a.useState(),d=Object(O.a)(j,2),b=d[0],h=d[1],u=Object(Q.b)();a.a.useEffect((function(){var e=[];e.push(u(M(i,b))),Promise.all(e).then((function(){})).catch((function(e){console.log("Failed fetching ",e)})).finally((function(){n(!1)}))}),[i,b,u]);var x=Object(Q.c)((function(e){var t=e.reducer;return{episodes:t.episodes,info:t.requestInfo}})),p=x.episodes,m=x.info;return c?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:Object(l.jsxs)(Y.a,{bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:Object(l.jsxs)(K.a,{size:"sm",children:[Object(l.jsx)(K.a.Prepend,{children:Object(l.jsx)(K.a.Text,{children:Object(l.jsx)("strong",{children:"Name"})})}),Object(l.jsx)($.a,{placeholder:"Enter name to filter",onChange:function(e){return h(e.target.value)}})]})}),Object(l.jsx)("th",{children:"Sezon"}),Object(l.jsx)("th",{children:"Epizod"}),Object(l.jsx)("th",{children:"Air date"})]})}),Object(l.jsx)("tbody",{children:p&&p.map((function(e){return Object(l.jsx)(ee,{episode:e},e.id)}))})]})}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(v,{info:m,active:i,setActive:o})})]})}function ce(e){var t=e.name,c=e.type,n=e.dimension,a=e.id;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:n})]})}function ne(){var e=a.a.useState(!0),t=Object(O.a)(e,2),c=t[0],n=t[1],r=a.a.useState(1),s=Object(O.a)(r,2),i=s[0],o=s[1],j=a.a.useState(),d=Object(O.a)(j,2),b=d[0],h=d[1],u=a.a.useState(),x=Object(O.a)(u,2),p=x[0],m=x[1],y=a.a.useState(),g=Object(O.a)(y,2),S=g[0],w=g[1],L=Object(Q.b)();a.a.useEffect((function(){var e=[];e.push(L(J(i,b,p,S))),Promise.all(e).then((function(){})).catch((function(e){console.log("Failed fetching ",e)})).finally((function(){n(!1)}))}),[i,b,p,S,L]);var E=Object(Q.c)((function(e){var t=e.reducer;return{locations:t.locations,info:t.requestInfo}})),C=E.locations,T=E.info;return c?Object(l.jsx)(f,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:Object(l.jsxs)(Y.a,{bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:Object(l.jsxs)(K.a,{size:"sm",children:[Object(l.jsx)(K.a.Prepend,{children:Object(l.jsx)(K.a.Text,{children:Object(l.jsx)("strong",{children:"Name"})})}),Object(l.jsx)($.a,{placeholder:"Enter name to filter",onChange:function(e){return h(e.target.value)}})]})}),Object(l.jsx)("th",{children:Object(l.jsxs)(K.a,{size:"sm",children:[Object(l.jsx)(K.a.Prepend,{children:Object(l.jsx)(K.a.Text,{children:Object(l.jsx)("strong",{children:"Type"})})}),Object(l.jsx)($.a,{placeholder:"Enter type to filter",onChange:function(e){return m(e.target.value)}})]})}),Object(l.jsx)("th",{children:Object(l.jsxs)(K.a,{size:"sm",children:[Object(l.jsx)(K.a.Prepend,{children:Object(l.jsx)(K.a.Text,{children:Object(l.jsx)("strong",{children:"Dimension"})})}),Object(l.jsx)($.a,{placeholder:"Enter dimension to filter",onChange:function(e){return w(e.target.value)}})]})})]})}),Object(l.jsx)("tbody",{children:C&&C.map((function(e){var t=e.name,c=e.type,n=e.dimension,a=e.id;return Object(l.jsx)(ce,{id:a,name:t,type:c,dimension:n},a)}))})]})}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(v,{info:T,active:i,setActive:o})})]})}var ae={li:{display:"flex",height:"40px",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rrem",border:"1px solid #ccc",borderRadius:"5px",marginBottom:".5rem"},btn:{width:"30px",height:"30px",margin:"0 .5rem",background:"red",borderRadius:"50%",color:"#fff",border:"none",display:"flex",justifyContent:"center",alignItems:"center"}};function re(e){var t=e.element,c=Object(Q.b)(),n=[];return t.done&&n.push("done"),Object(l.jsxs)("li",{style:ae.li,children:[Object(l.jsxs)("span",{className:n.join(" "),children:[Object(l.jsx)("input",{type:"checkbox",style:{margin:"0 1.2rem"},onChange:function(){return c(U(t.id))},checked:t.done}),t.name]}),Object(l.jsx)("button",{style:ae.btn,onClick:function(){return c(Z(t.id))},children:"\xd7"})]})}function se(){var e=a.a.useState(""),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(Q.b)();a.a.useEffect((function(){r(M(null,c))}),[c,r]);var s=Object(Q.c)((function(e){var t=e.reducer;return{episodes:t.episodes,watchList:t.watchList}})),i=s.episodes,o=s.watchList;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"m-3",style:{margin:"0 auto"},children:Object(l.jsxs)(K.a,{className:"mb-3",style:{width:"80%",margin:"0 auto"},children:[Object(l.jsx)($.a,{placeholder:"Enter episode name",list:"exampleList",onChange:function(e){return n(e.target.value)},value:c}),Object(l.jsx)("datalist",{id:"exampleList",children:i&&i.map((function(e){return Object(l.jsx)("option",{value:e.name},e.id)}))}),Object(l.jsx)(K.a.Append,{children:Object(l.jsx)(g.a,{variant:"outline-secondary",onClick:function(){return function(e){o.find((function(t){return t.name===e}))?(alert("Such a task already exists"),n("")):(r(X(e)),n(""))}(c)},children:"Add to WatchList"})})]})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("ul",{style:{listStyle:"none",margin:"0",padding:"0"},children:o.length?o.map((function(e){return Object(l.jsx)(re,{element:e},e.id)})):Object(l.jsx)("p",{children:"No todos!!!"})})})]})}var ie=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{exact:!0,path:"/characters",component:V}),Object(l.jsx)(o.a,{exact:!0,path:"/episodes",component:te}),Object(l.jsx)(o.a,{exact:!0,path:"/locations",component:ne}),Object(l.jsx)(o.a,{exact:!0,path:"/myWatchList",component:se})]})]})},oe=(c(100),c(37)),je=c(67),de=c(55),le=Object(oe.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(k.a)(Object(k.a)({},e),{},{characters:t.payload});case F:return Object(k.a)(Object(k.a)({},e),{},{episodes:t.payload});case P:return Object(k.a)(Object(k.a)({},e),{},{locations:t.payload});case R:return Object(k.a)(Object(k.a)({},e),{},{watchList:[].concat(Object(_.a)(e.watchList),[t.payload])});case G:return Object(k.a)(Object(k.a)({},e),{},{watchList:e.watchList.map((function(e){return e.id===t.payload?Object(k.a)(Object(k.a)({},e),{},{done:!e.done}):e}))});case W:return Object(k.a)(Object(k.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!==t.payload}))});case z:return Object(k.a)(Object(k.a)({},e),{},{requestInfo:t.payload});default:return e}}}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.c,he=Object(oe.d)(le,Object(de.load)({states:["reducer.watchList"],namespace:""}),be(Object(oe.a)(Object(de.save)({states:["reducer.watchList"],namespace:""}),je.a)));window.store=he;var ue=he;s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Q.a,{store:ue,children:Object(l.jsx)(ie,{})})}),document.getElementById("root"))},54:function(e,t,c){e.exports={preloader:"Perloader_preloader__2TR6J",loader:"Perloader_loader__2iREX",spin:"Perloader_spin__YAejo"}},73:function(e,t,c){},74:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.ccac75d6.chunk.js.map