(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9275],{64317:function(H,T,r){"use strict";var d=r(22122),P=r(28991),t=r(81253),m=r(67294),O=r(62404),C=r(22270),S=r(66758),B=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],I=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],R=m.forwardRef(function(s,i){var f=s.fieldProps,b=s.children,W=s.params,M=s.proFieldProps,Z=s.mode,n=s.valueEnum,l=s.request,u=s.showSearch,a=s.options,e=(0,t.Z)(s,B),p=(0,m.useContext)(S.Z);return m.createElement(O.Z,(0,d.Z)({mode:"edit",valueEnum:(0,C.h)(n),request:l,params:W,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,P.Z)({options:a,mode:Z,showSearch:u,getPopupContainer:p.getPopupContainer},f),ref:i,proFieldProps:M},e),b)}),y=m.forwardRef(function(s,i){var f=s.fieldProps,b=s.children,W=s.params,M=s.proFieldProps,Z=s.mode,n=s.valueEnum,l=s.request,u=s.options,a=(0,t.Z)(s,I),e=(0,P.Z)({options:u,mode:Z||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},f),p=(0,m.useContext)(S.Z);return m.createElement(O.Z,(0,d.Z)({mode:"edit",valueEnum:(0,C.h)(n),request:l,params:W,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,P.Z)({getPopupContainer:p.getPopupContainer},e),ref:i,proFieldProps:M},a),b)}),h=R,o=y,E=h;E.SearchSelect=o,E.displayName="ProFormComponent",T.Z=E},16894:function(H,T,r){"use strict";var d=r(54787),P=r(47888);T.ZP=P.Z},70347:function(){},53211:function(H,T,r){"use strict";r.r(T);var d=r(58024),P=r(39144),t=r(63185),m=r(9676),O=r(34792),C=r(48086),S=r(93224),B=r(86582),I=r(11849),R=r(3182),y=r(9715),h=r(86835),o=r(2824),E=r(94043),s=r.n(E),i=r(67294),f=r(64317),b=r(16894),W=r(75362),M=r(17945),Z=r(85893),n=function(u){var a=(0,i.useRef)(),e=(0,i.useState)([]),p=(0,o.Z)(e,2),x=p[0],j=p[1],w=h.Z.useForm(),N=(0,o.Z)(w,1),K=N[0],q=i.useState(null),$=(0,o.Z)(q,2),L=$[0],V=$[1],J=i.useState(null),Q=(0,o.Z)(J,2),te=Q[0],de=Q[1],ae=i.useState([]),ne=(0,o.Z)(ae,2),me=ne[0],se=ne[1],le=i.useState(!1),X=(0,o.Z)(le,2),z=X[0],ue=X[1],oe=function(){var D=(0,R.Z)(s().mark(function g(){var _,c;return s().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,M.F3)();case 2:return _=v.sent,c=_.data.map(function(U){return{label:U.alias,value:U._id,role:U}}),v.abrupt("return",c);case 5:case"end":return v.stop()}},g)}));return function(){return D.apply(this,arguments)}}(),ie=function(){var D=(0,R.Z)(s().mark(function g(){var _,c;return s().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,M.yC)({roleId:L.roleId,pageSize:-1,sort:"resourceAlias"});case 2:_=v.sent,c=me.filter(function(U){return!_.data.some(function(Y){return Y.resourceId===U._id})}).map(function(U){return(0,I.Z)({resourceAlias:U.alias,resourceId:U._id,resourceName:U.name,isAllowed:!1,isDisabled:!1},L)}),j([].concat((0,B.Z)(_.data),(0,B.Z)(c)));case 5:case"end":return v.stop()}},g)}));return function(){return D.apply(this,arguments)}}();(0,i.useEffect)(function(){var D=function(){var g=(0,R.Z)(s().mark(function _(){var c;return s().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,M.jh)();case 2:c=v.sent,se(c.data);case 4:case"end":return v.stop()}},_)}));return function(){return g.apply(this,arguments)}}();D()},[]),(0,i.useEffect)(function(){L&&ie()},[L]),(0,i.useEffect)(function(){z&&(ie(),ue(!1))},[z]);var ce=function(){var D=(0,R.Z)(s().mark(function g(_){var c,A,v,U,Y,ee,F;return s().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return c=_.createdBy,A=_.updatedBy,v=_.createdAt,U=_.updatedAt,Y=_.__v,ee=(0,S.Z)(_,["createdBy","updatedBy","createdAt","updatedAt","__v"]),console.log("entity",ee),k.next=4,(0,M.H)(ee);case 4:F=k.sent,F instanceof Error?C.default.error(F.message):(C.default.success(F.message),ue(!0));case 6:case"end":return k.stop()}},g)}));return function(_){return D.apply(this,arguments)}}(),pe=[{title:"Resource",dataIndex:"resourceAlias",sorter:!0,tip:"Resource name",render:function(g,_){return(0,Z.jsx)(Z.Fragment,{children:"".concat(_.resourceAlias," (").concat(_.resourceName,")")})}},{title:"Role",dataIndex:"roleName",renderText:function(g,_){return"".concat(_.roleAlias," (").concat(g,")")}},{title:"Allowed",dataIndex:"isAllowed",valueType:"checkbox",render:function(g,_){return(0,Z.jsx)(m.Z,{name:"isAllowed",onChange:function(A){ce((0,I.Z)((0,I.Z)({},_),{},{isAllowed:A.target.checked}))},checked:_.isAllowed})}},{title:"Disabled",dataIndex:"isDisabled",valueType:"text",render:function(g,_){return(0,Z.jsx)(m.Z,{name:"isDisabled",value:_.isDisabled,onChange:function(A){ce((0,I.Z)((0,I.Z)({},_),{},{isDisabled:A.target.checked}))},checked:_.isDisabled})}}];return(0,Z.jsx)(W.ZP,{content:"My amazing resource entry form",children:(0,Z.jsxs)(P.Z,{bordered:!1,children:[(0,Z.jsx)(f.Z,{width:"md",name:"roleId",label:"Roles",request:oe,placeholder:"Please select a role",rules:[{required:!0,message:"Please select a role"}],onChange:function(g,_){return V({roleId:g,roleName:_.role.name,roleAlias:_.role.alias})}}),(0,Z.jsx)(b.ZP,{headerTitle:"Permissions",actionRef:a,rowKey:"_id",search:!1,options:{reload:!1},onChange:function(g,_,c){console.log("_sorter",c);var A={};A.sort=c.field,A.order=c.order==="ascend"?1:-1,setSort(A),setFetchResources(!0)},onSubmit:function(g){console.log(g),setParam(g)},dataSource:x,columns:pe,rowSelection:!1,pagination:!1})]})})};T.default=n},17945:function(H,T,r){"use strict";r.d(T,{yC:function(){return O},QX:function(){return S},FO:function(){return I},Vx:function(){return y},a1:function(){return o},H:function(){return s},Od:function(){return f},jh:function(){return W},F3:function(){return Z}});var d=r(3182),P=r(94043),t=r.n(P),m=r(39031);function O(l){return C.apply(this,arguments)}function C(){return C=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.v_)("/api/permissions/search",u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),C.apply(this,arguments)}function S(l,u){return B.apply(this,arguments)}function B(){return B=(0,d.Z)(t().mark(function l(u,a){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,m.v_)("/api/permissions/count",u,a);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),B.apply(this,arguments)}function I(l,u){return R.apply(this,arguments)}function R(){return R=(0,d.Z)(t().mark(function l(u,a){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,m.U2)("/api/permissions/detail?id=".concat(u),{},a);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),R.apply(this,arguments)}function y(l){return h.apply(this,arguments)}function h(){return h=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.gz)("/api/permissions/update",u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),h.apply(this,arguments)}function o(l){return E.apply(this,arguments)}function E(){return E=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.v_)("/api/permissions/create",u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),E.apply(this,arguments)}function s(l){return i.apply(this,arguments)}function i(){return i=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.v_)("/api/permissions/upsert",u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),i.apply(this,arguments)}function f(l,u){return b.apply(this,arguments)}function b(){return b=(0,d.Z)(t().mark(function l(u,a){return t().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,(0,m.IV)("/api/permissions/delete?id=".concat(u),{},a);case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},l)})),b.apply(this,arguments)}function W(l){return M.apply(this,arguments)}function M(){return M=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.v_)("/api/resources/search",{pageSize:-1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),M.apply(this,arguments)}function Z(l){return n.apply(this,arguments)}function n(){return n=(0,d.Z)(t().mark(function l(u){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.v_)("/api/roles/search",{pageSize:-1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},l)})),n.apply(this,arguments)}},39031:function(H,T,r){"use strict";r.d(T,{U2:function(){return S},v_:function(){return B},gz:function(){return I},IV:function(){return R}});var d=r(3182),P=r(11849),t=r(94043),m=r.n(t),O=r(11238),C=r(43581);O.ZP.interceptors.request.use(function(y,h){var o=localStorage.getItem("auth");if(o&&JSON.parse(o)){var E=JSON.parse(o),s=E.token;s?h.headers.Authorization="Bearer ".concat(s):h.headers.Authorization=null}return console.log("url","http://localhost:8002",y),h.headers["rbac-client-time"]="".concat(new Date," "),{url:"".concat("http://localhost:8002").concat(y),options:(0,P.Z)((0,P.Z)({},h),{},{interceptors:!0})}}),O.ZP.interceptors.response.use(function(){var y=(0,d.Z)(m().mark(function h(o,E){var s,i;return m().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(o.status!==401){b.next=4;break}return localStorage.removeItem("auth"),C.m8.replace({pathname:"/user/login"}),b.abrupt("return",{name:o.name});case 4:if(o.status!==403){b.next=7;break}return C.m8.replace({pathname:"/exception/403"}),b.abrupt("return",{name:o.name});case 7:if(o.status!==404){b.next=10;break}return C.m8.replace({pathname:"/exception/404"}),b.abrupt("return",{name:o.name});case 10:if(o.status!==400){b.next=18;break}return b.next=13,o.clone().json();case 13:return s=b.sent,console.log("data",s),i=new Error(s.message),i.error=s.error,b.abrupt("return",i);case 18:return b.abrupt("return",o);case 19:case"end":return b.stop()}},h)}));return function(h,o){return y.apply(this,arguments)}}());var S=function(){var y=(0,d.Z)(m().mark(function h(o,E,s){return m().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,O.ZP)(o,(0,P.Z)({method:"GET",params:E,skipErrorHandler:!0},s||{})));case 1:case"end":return f.stop()}},h)}));return function(o,E,s){return y.apply(this,arguments)}}(),B=function(){var y=(0,d.Z)(m().mark(function h(o,E,s){return m().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,O.ZP)(o,(0,P.Z)({method:"POST",data:E,skipErrorHandler:!0},s||{}));case 2:return f.abrupt("return",f.sent);case 3:case"end":return f.stop()}},h)}));return function(o,E,s){return y.apply(this,arguments)}}(),I=function(){var y=(0,d.Z)(m().mark(function h(o,E,s){return m().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,O.ZP)(o,(0,P.Z)({method:"PUT",data:E,skipErrorHandler:!0},s||{})));case 1:case"end":return f.stop()}},h)}));return function(o,E,s){return y.apply(this,arguments)}}(),R=function(){var y=(0,d.Z)(m().mark(function h(o,E,s){return m().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,O.ZP)(o,(0,P.Z)({method:"DELETE",data:E,skipErrorHandler:!0},s||{})));case 1:case"end":return f.stop()}},h)}));return function(o,E,s){return y.apply(this,arguments)}}()},39144:function(H,T,r){"use strict";r.d(T,{Z:function(){return Z}});var d=r(96156),P=r(22122),t=r(67294),m=r(94184),O=r.n(m),C=r(98423),S=r(65632),B=function(n,l){var u={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&l.indexOf(a)<0&&(u[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(n);e<a.length;e++)l.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(n,a[e])&&(u[a[e]]=n[a[e]]);return u},I=function(l){var u=l.prefixCls,a=l.className,e=l.hoverable,p=e===void 0?!0:e,x=B(l,["prefixCls","className","hoverable"]);return t.createElement(S.C,null,function(j){var w=j.getPrefixCls,N=w("card",u),K=O()("".concat(N,"-grid"),a,(0,d.Z)({},"".concat(N,"-grid-hoverable"),p));return t.createElement("div",(0,P.Z)({},x,{className:K}))})},R=I,y=function(n,l){var u={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&l.indexOf(a)<0&&(u[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(n);e<a.length;e++)l.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(n,a[e])&&(u[a[e]]=n[a[e]]);return u},h=function(l){return t.createElement(S.C,null,function(u){var a=u.getPrefixCls,e=l.prefixCls,p=l.className,x=l.avatar,j=l.title,w=l.description,N=y(l,["prefixCls","className","avatar","title","description"]),K=a("card",e),q=O()("".concat(K,"-meta"),p),$=x?t.createElement("div",{className:"".concat(K,"-meta-avatar")},x):null,L=j?t.createElement("div",{className:"".concat(K,"-meta-title")},j):null,V=w?t.createElement("div",{className:"".concat(K,"-meta-description")},w):null,J=L||V?t.createElement("div",{className:"".concat(K,"-meta-detail")},L,V):null;return t.createElement("div",(0,P.Z)({},N,{className:q}),$,J)})},o=h,E=r(51752),s=r(71230),i=r(15746),f=r(97647),b=function(n,l){var u={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&l.indexOf(a)<0&&(u[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(n);e<a.length;e++)l.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(n,a[e])&&(u[a[e]]=n[a[e]]);return u};function W(n){var l=n.map(function(u,a){return t.createElement("li",{style:{width:"".concat(100/n.length,"%")},key:"action-".concat(a)},t.createElement("span",null,u))});return l}var M=t.forwardRef(function(n,l){var u,a,e=t.useContext(S.E_),p=e.getPrefixCls,x=e.direction,j=t.useContext(f.Z),w=function(_e){var G;(G=n.onTabChange)===null||G===void 0||G.call(n,_e)},N=function(){var _e;return t.Children.forEach(n.children,function(G){G&&G.type&&G.type===R&&(_e=!0)}),_e},K=n.prefixCls,q=n.className,$=n.extra,L=n.headStyle,V=L===void 0?{}:L,J=n.bodyStyle,Q=J===void 0?{}:J,te=n.title,de=n.loading,ae=n.bordered,ne=ae===void 0?!0:ae,me=n.size,se=n.type,le=n.cover,X=n.actions,z=n.tabList,ue=n.children,oe=n.activeTabKey,ie=n.defaultActiveTabKey,ce=n.tabBarExtraContent,pe=n.hoverable,D=n.tabProps,g=D===void 0?{}:D,_=b(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),c=p("card",K),A=Q.padding===0||Q.padding==="0px"?{padding:24}:void 0,v=t.createElement("div",{className:"".concat(c,"-loading-block")}),U=t.createElement("div",{className:"".concat(c,"-loading-content"),style:A},t.createElement(s.Z,{gutter:8},t.createElement(i.Z,{span:22},v)),t.createElement(s.Z,{gutter:8},t.createElement(i.Z,{span:8},v),t.createElement(i.Z,{span:15},v)),t.createElement(s.Z,{gutter:8},t.createElement(i.Z,{span:6},v),t.createElement(i.Z,{span:18},v)),t.createElement(s.Z,{gutter:8},t.createElement(i.Z,{span:13},v),t.createElement(i.Z,{span:9},v)),t.createElement(s.Z,{gutter:8},t.createElement(i.Z,{span:4},v),t.createElement(i.Z,{span:3},v),t.createElement(i.Z,{span:16},v))),Y=oe!==void 0,ee=(0,P.Z)((0,P.Z)({},g),(u={},(0,d.Z)(u,Y?"activeKey":"defaultActiveKey",Y?oe:ie),(0,d.Z)(u,"tabBarExtraContent",ce),u)),F,fe=z&&z.length?t.createElement(E.Z,(0,P.Z)({size:"large"},ee,{className:"".concat(c,"-head-tabs"),onChange:w}),z.map(function(re){return t.createElement(E.Z.TabPane,{tab:re.tab,disabled:re.disabled,key:re.key})})):null;(te||$||fe)&&(F=t.createElement("div",{className:"".concat(c,"-head"),style:V},t.createElement("div",{className:"".concat(c,"-head-wrapper")},te&&t.createElement("div",{className:"".concat(c,"-head-title")},te),$&&t.createElement("div",{className:"".concat(c,"-extra")},$)),fe));var k=le?t.createElement("div",{className:"".concat(c,"-cover")},le):null,he=t.createElement("div",{className:"".concat(c,"-body"),style:Q},de?U:ue),Ee=X&&X.length?t.createElement("ul",{className:"".concat(c,"-actions")},W(X)):null,be=(0,C.Z)(_,["onTabChange"]),ve=me||j,Pe=O()(c,(a={},(0,d.Z)(a,"".concat(c,"-loading"),de),(0,d.Z)(a,"".concat(c,"-bordered"),ne),(0,d.Z)(a,"".concat(c,"-hoverable"),pe),(0,d.Z)(a,"".concat(c,"-contain-grid"),N()),(0,d.Z)(a,"".concat(c,"-contain-tabs"),z&&z.length),(0,d.Z)(a,"".concat(c,"-").concat(ve),ve),(0,d.Z)(a,"".concat(c,"-type-").concat(se),!!se),(0,d.Z)(a,"".concat(c,"-rtl"),x==="rtl"),a),q);return t.createElement("div",(0,P.Z)({ref:l},be,{className:Pe}),F,k,he,Ee)});M.Grid=R,M.Meta=o;var Z=M},58024:function(H,T,r){"use strict";var d=r(38663),P=r.n(d),t=r(70347),m=r.n(t),O=r(18106),C=r(13062),S=r(89032)}}]);
