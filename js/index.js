var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(r)for(var n of r(t))s.call(t,n)&&o(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),c=(e,t)=>{var n={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&r)for(var o of r(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n};import{a as d,j as p,r as u,U as x,P as m,F as h,R as f,C as g,b as y,c as j,B as v,L as b,d as w,u as I,e as k,f as C,g as S,h as P,I as D,S as E,i as O,k as _,l as A,D as R,T,m as F,n as L,o as N,p as q,q as $,E as z,s as M,M as B,t as U,v as H,w as V,x as K,y as W,z as G,A as J,G as Q,H as X,J as Y,K as Z,N as ee,O as te,Q as ne,V as re,W as ae,X as se}from"./vendor.js";const oe=undefined;(function e(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();var ie="";const le={},ce={default:d.create(le)};function de(e){if(e){if(ce[e])return ce;ce[e]=d.create(le)}return ce}const pe=({appConfig:e})=>{if(e.request){const{request:t={}}=e;if("[object Array]"===Object.prototype.toString.call(t))t.forEach((e=>{const t=e.instanceName?e.instanceName:"default";if(t){const n=undefined;ue(e,de(t)[t])}}));else{const e=undefined;ue(t,de().default)}}};function ue(e,t){const n=e,{interceptors:r={}}=n,a=c(n,["interceptors"]);Object.keys(a).forEach((e=>{t.defaults[e]=a[e]})),r.request&&t.interceptors.request.use(r.request.onConfig||function(e){return e},r.request.onError||function(e){return Promise.reject(e)}),r.response&&t.interceptors.response.use(r.response.onConfig||function(e){return e},r.response.onError||function(e){return Promise.reject(e)})}function xe(e){pe({appConfig:e})}const me=({addProvider:e,appConfig:t})=>{t.app&&t.app.addProvider&&e(t.app.addProvider)},he=(e,t)=>`${e.toString()}\n\nThis is located at:${t}`,fe={display:"flex",flexDirection:"column",alignItems:"center",margin:"100px 0",color:"#ed3131"},ge=({componentStack:e,error:t})=>p.exports.jsxs("div",{style:fe,title:he(t,e),children:[p.exports.jsxs("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"843",width:"60",height:"60",children:[p.exports.jsx("path",{d:"M1024 512C1024 229.23 794.77 0 512 0S0 229.23 0 512s229.23 512 512 512c117.41 0 228.826-39.669 318.768-111.313 10.79-8.595 12.569-24.308 3.975-35.097-8.594-10.789-24.308-12.568-35.097-3.974C718.47 938.277 618.002 974.049 512 974.049 256.818 974.049 49.951 767.182 49.951 512S256.818 49.951 512 49.951 974.049 256.818 974.049 512c0 87.493-24.334 171.337-69.578 243.96-7.294 11.708-3.716 27.112 7.992 34.405 11.707 7.294 27.11 3.716 34.405-7.991C997.014 701.88 1024 608.898 1024 512z","p-id":"844",fill:"#cdcdcd"}),p.exports.jsx("path",{d:"M337.17 499.512c34.485 0 62.44-27.955 62.44-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438z m374.635 0c34.484 0 62.439-27.955 62.439-62.439s-27.955-62.439-62.44-62.439c-34.483 0-62.438 27.955-62.438 62.44 0 34.483 27.955 62.438 62.439 62.438zM352.788 704.785c43.377-34.702 100.364-55.425 171.7-55.425 71.336 0 128.322 20.723 171.7 55.425 26.513 21.21 42.695 42.786 50.444 58.284 6.168 12.337 1.168 27.34-11.17 33.508-12.337 6.169-27.34 1.168-33.508-11.17-0.918-1.834-3.462-6.024-7.788-11.793-7.564-10.084-17.239-20.269-29.183-29.824-34.671-27.737-80.71-44.478-140.495-44.478-59.786 0-105.824 16.74-140.496 44.478-11.944 9.555-21.619 19.74-29.182 29.824-4.327 5.769-6.87 9.959-7.788 11.794-6.169 12.337-21.171 17.338-33.509 11.17-12.337-6.17-17.338-21.172-11.169-33.509 7.75-15.498 23.931-37.074 50.444-58.284z","p-id":"845",fill:"#cdcdcd"})]}),p.exports.jsx("h3",{children:"Oops! Something went wrong."})]});class ye extends u.exports.Component{constructor(e){super(e),this.state={error:null,info:{componentStack:""}}}componentDidCatch(e,t){const{onError:n}=this.props;if("function"==typeof n)try{n.call(this,e,t.componentStack)}catch(r){}this.setState({error:e,info:t})}render(){const{children:e,Fallback:t}=this.props,{error:n,info:r}=this.state;return null!==n&&"function"==typeof t?p.exports.jsx(t,{componentStack:r&&r.componentStack,error:n}):e||null}}ye.defaultProps={Fallback:ge};const je=[{name:"\u7528\u6237\u7ba1\u7406",path:"/UserManagement",icon:x},{name:"\u8ba2\u5355\u7cfb\u7edf",path:"/OrderManagement",icon:m,children:[{name:"\u8ba2\u5355\u67e5\u8be2",path:"/OrderManagement/Order",icon:h},{name:"\u672a\u53d1\u8d27\u8ba2\u5355",path:"/OrderManagement/UndeliveredOrder",icon:m}]},{name:"\u53d1\u8d27\u7cfb\u7edf",path:"/DeliverySystem",icon:f},{name:"\u5206\u9500\u7cfb\u7edf",path:"/DistributionSystem",icon:g},{name:"\u8bcd\u5e93\u7ba1\u7406",path:"/ThesaurusManagement",icon:y},{name:"\u5370\u5237\u7cfb\u7edf",path:"/PrintingSystem",icon:j}],ve=e=>e.map((e=>{var t=e,{icon:n,children:r}=t,a=c(t,["icon","children"]);return l(i({},a),{icon:u.exports.createElement(n),children:r&&ve(r)})}));function be({children:e,location:t}){return p.exports.jsx(v,{title:"\u6613\u601d\u901a-\u540e\u53f0",style:{minHeight:"100vh"},location:{pathname:t.pathname},menuDataRender:()=>ve(je),menuItemRender:(e,t)=>e.path?p.exports.jsx(b,{to:e.path,children:t}):t,footerRender:()=>null,children:p.exports.jsx("div",{style:{minHeight:"60vh"},children:e})})}function we(){return p.exports.jsx("div",{children:p.exports.jsx("h2",{children:"Dashboard page"})})}const Ie=async function(e){try{const t=e.instanceName?e.instanceName:"default",n=de()[t];if("function"!=typeof n)throw new Error(`unknown ${t} in request method`);const r=await n(e);return n.defaults.withFullResponse||e.withFullResponse?r:r.data}catch(t){throw console.error(t),t}};function ke(e,t={}){const n=I(e,i({manual:!0,requestMethod:Ie},t)),{run:r}=n,a=c(n,["run"]);return i({request:r},a)}w.forEach(["delete","get","head","options"],(function e(t){Ie[t]=function(e,n){return Ie(w.merge(n||{},{method:t,url:e}))}})),w.forEach(["post","put","patch"],(function e(t){Ie[t]=function(e,n,r){return Ie(w.merge(r||{},{method:t,url:e,data:n}))}})),Ie.CancelToken=d.CancelToken,Ie.isCancel=d.isCancel;const Ce=window.location.host.indexOf("localhost")>-1||window.location.host.indexOf("127.0.0.1")>-1,Se="https://yisitong.com",Pe=10,De={created:"\u5f85\u652f\u4ed8",paid:"\u5f85\u5370\u5237",waitingDeliver:"\u5f85\u53d1\u8d27",transiting:"\u8fd0\u8f93\u4e2d",transited:"\u5f85\u7b7e\u6536",received:"\u5df2\u7b7e\u6536"};var Ee={getUsers:async e=>await Ie({url:`${Se}/cms/users`,params:e}),login:async e=>await Ie({method:"POST",headers:{"Content-Type":"application/json"},url:`${Se}/cms/auth/_login`,data:e})},Oe={};const{RangePicker:_e}=R,Ae=e=>{const{items:t,onSubmit:n,initialValues:r={}}=e,[a]=k.useForm();u.exports.useEffect((()=>{a.setFieldsValue(r)}),[r]);const s=(e,t)=>{const{placeholder:n,value:r,source:s=[],onChange:o}=t;switch(e){case"DatePicker":return p.exports.jsx(_e,{locale:A});case"Cascader":return p.exports.jsx(_,{options:s,placeholder:n,value:r});case"Switch":return p.exports.jsx(O,{onChange:e=>{o(e,a)}});case"Select":return p.exports.jsx(E,{options:s,placeholder:n,value:r});default:return p.exports.jsx(D,{placeholder:n,value:r})}},o=()=>{const e=[];for(let n=0;n<(t||[]).length;n++){const{name:r,label:a,required:o,placeholder:i,message:l,type:c,span:d,value:u,source:x,onChange:m}=t[n]||{},h=Math.floor(24/t.length);e.push(p.exports.jsx(P,{span:d||h,children:p.exports.jsx(k.Item,{name:r,label:a,rules:[{required:o,message:l||"Input something!"}],children:s(c,{placeholder:i,value:u,source:x,onChange:m})})},n))}return e},i=e=>{n&&n(e)};return p.exports.jsxs(k,{form:a,name:"advanced_search",className:"ant-advanced-search-form",onFinish:i,children:[p.exports.jsx(C,{gutter:24,children:o()}),p.exports.jsxs(C,{gutter:24,style:{textAlign:"right",float:"right",marginBottom:24,marginRight:0},children:[p.exports.jsx(S,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"}),p.exports.jsx(S,{style:{margin:"0 0 8px 8px"},onClick:()=>{a.resetFields()},children:"\u6e05\u9664"})]})]})},Re=[{title:"\u7528\u6237id",dataIndex:"id",key:"id"},{title:"\u6635\u79f0",dataIndex:"nickname",key:"nickname"},{title:"\u624b\u673a",dataIndex:"phone",key:"phone"},{title:"\u662f\u5426\u4ed8\u8d39\u7528\u6237",dataIndex:"paid",key:"paid",render:e=>e?"\u662f":"\u5426"},{title:"\u7528\u6237\u9636\u6bb5",dataIndex:"learningStage",key:"learningStage"},{title:"\u8ba2\u5355\u5217\u8868",dataIndex:"orderList",key:"orderList",render:(e,t)=>p.exports.jsx(b,{to:`/OrderManagement/Order?userID=${null==t?void 0:t.id}`,children:"\uff08\u70b9\u51fb\u67e5\u8be2\uff09"})},{title:"\u7d2f\u8ba1\u8ba2\u5355\u6570\u91cf",dataIndex:"totalOrderCount",key:"totalOrderCount"},{title:"\u7d2f\u8ba1\u8ba2\u5355\u91d1\u989d",dataIndex:"totalPaidAmount",key:"totalPaidAmount",render:e=>e&&e.toFixed(2)},{title:"\u5907\u6ce8",dataIndex:"remarks",key:"remarks"}];function Te(){const{data:e,error:t,loading:n,request:r}=ke(Ee.getUsers),{list:a=[],total:s}=e||{},[o,i]=u.exports.useState(0),[l,c]=u.exports.useState({});u.exports.useEffect((()=>{!async function(){await r({page:o,size:10})}()}),[]);const d=e=>{const{phone:t,nickname:n,wechat:a}=e||{};c(e),i(0),r({page:0,size:10,userID:t,search:n||a})},x=e=>{const{phone:t,nickname:n,wechat:a}=l||{};i(e-1),r({page:e-1,size:10,userID:t,search:n||a})};return p.exports.jsxs("div",{className:Oe.container,children:[p.exports.jsx("h2",{children:"\u7528\u6237\u5217\u8868"}),p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(Ae,{onSubmit:d,items:[{name:"phone",label:"\u7528\u6237ID",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237 ID"},{name:"nickname",label:"\u7528\u6237\u6635\u79f0",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u6635\u79f0"},{name:"wechat",label:"\u5fae\u4fe1\u6635\u79f0",placeholder:"\u5fae\u4fe1\u6635\u79f0"}]}),p.exports.jsx(T,{loading:n,dataSource:a,rowKey:"id",columns:Re,bordered:!0,pagination:{pageSize:10,onChange:x,total:s}})]})]})}var Fe={getOrders:async e=>await Ie({url:`${Se}/cms/_listOrders`,data:e,method:"POST",headers:{"Content-Type":"application/json"}}),getDoc:async e=>await Ie({url:`${Se}/cms/orders/${e}/_getDoc`,method:"POST",responseType:"arraybuffer"})},Le={};const Ne=()=>{const e=window.location.hash,[,t]=null==e?void 0:e.split("?"),n=(null==t?void 0:t.split("&"))||[],r={};for(let a=0;a<n.length;a++){const[e,t]=n[a].split("=");r[e]=t}return r},qe=(e,t)=>{const n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)},$e=[{title:"\u8ba2\u5355\u7f16\u53f7",dataIndex:"id",key:"id"},{title:"\u6635\u79f0",dataIndex:"nickname",key:"nickname"},{title:"\u7528\u6237ID",dataIndex:"userID",key:"userID"},{title:"\u8ba2\u5355\u65e5\u671f",dataIndex:"createdAt",key:"createdAt",render:e=>q(1e3*e).format("L")},{title:"\u662f\u5426\u4ed8\u8d39\u7528\u6237",dataIndex:"status",key:"status",render:e=>"create"!==e?"\u662f":"\u5426"},{title:"\u8ba2\u5355\u91d1\u989d(\u5143)",dataIndex:"actualPrice",key:"actualPrice",render:e=>(e/100).toFixed(2)},{title:"\u8ba2\u5355\u72b6\u6001",dataIndex:"status",key:"status",render:e=>De[e]}];function ze(){const{data:e,error:t,loading:n,request:r}=ke(Fe.getOrders),{list:a=[],paidOrderCount:s,paidAmount:o,resultTotal:d}=e||{},[x,m]=u.exports.useState(0),[h,f]=u.exports.useState({}),[g,y]=u.exports.useState({size:10});u.exports.useEffect((()=>{const e=Ne();f(e)}),[]),u.exports.useEffect((()=>{!async function(){const e=i({page:x,size:10},Ne());y(e),await r(e)}()}),[]);const j=e=>{const t=e||{},{timeRange:n}=t,a=c(t,["timeRange"]),[s,o]=n||[],l=i({size:10,createdAtStart:s&&+s||void 0,createdAtEnd:o&&+o||void 0},a);y(l),m(0),r(i({page:0},l))},v=e=>{m(e-1),r(l(i({},g),{page:e-1}))};return p.exports.jsx(F,{locale:L,children:p.exports.jsxs("div",{className:Le.container,children:[p.exports.jsx("h2",{children:"\u8ba2\u5355\u5217\u8868"}),p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(Ae,{onSubmit:j,items:[{name:"timeRange",label:"\u4e0b\u5355\u65e5\u671f",type:"DatePicker",span:7},{name:"orderID",label:"\u8ba2\u5355\u7f16\u53f7"},{name:"userID",label:"\u7528\u6237ID"},{name:"nickname",label:"\u7528\u6237\u6635\u79f0",span:5}],initialValues:h}),p.exports.jsxs("div",{style:{marginTop:12,position:"relative",fontWeight:600,display:"flex",alignItems:"center"},children:[p.exports.jsxs(N,{color:"#87d068",children:["\u8ba2\u5355\u6570\uff1a",s||0,"\u4e2a"]}),p.exports.jsxs(N,{color:"#f50",children:["\u8ba2\u5355\u603b\u91d1\u989d\uff1a",(o||0).toFixed(2),"\u5143"]})]}),p.exports.jsx(T,{loading:n,dataSource:a,rowKey:"id",columns:$e,bordered:!0,pagination:{pageSize:10,onChange:v,total:d}})]})]})})}const Me=[{title:"\u8ba2\u5355\u7f16\u53f7",dataIndex:"id",key:"id"},{title:"\u6635\u79f0",dataIndex:"nickname",key:"nickname"},{title:"\u7528\u6237ID",dataIndex:"userID",key:"userID"},{title:"\u8ba2\u5355\u65e5\u671f",dataIndex:"createdAt",key:"createdAt",render:e=>q(1e3*e).format("L")},{title:"\u8ba2\u5355\u91d1\u989d(\u5143)",dataIndex:"actualPrice",key:"actualPrice",render:e=>(e/100).toFixed(2)}];function Be(){const{data:e,error:t,loading:n,request:r}=ke(Fe.getOrders),{list:a=[],paidOrderCount:s,paidAmount:o,resultTotal:d}=e||{},[x,m]=u.exports.useState(0),[h,f]=u.exports.useState({page:x,size:10,statusList:["paid","transiting"]});u.exports.useEffect((()=>{!async function(){await r(h)}()}),[]);const g=e=>{const t=e||{},{timeRange:n}=t,a=c(t,["timeRange"]),[s,o]=n||[],d=l(i(l(i({},h),{createdAtStart:s&&+s||void 0,createdAtEnd:o&&+o||void 0}),a),{page:0});f(d),m(0),r(i({page:0},d))},y=e=>{m(e-1);const t=l(i({},h),{page:e-1});f(t),r(t)},j=()=>{const{createdAtStart:e,createdAtEnd:t}=h,n=undefined,r=undefined;new z({fileName:e?`\u672a\u53d1\u8d27\u8ba2\u5355 ${e}-${t}`:"\u672a\u53d1\u8d27\u8ba2\u5355",datas:[{sheetData:a,sheetName:"\u8ba2\u5355",sheetFilter:["id","nickname","userID","createdAt","actualPrice"],sheetHeader:["\u8ba2\u5355\u7f16\u53f7","\u7528\u6237\u6635\u79f0","\u7528\u6237ID","\u8ba2\u5355\u65e5\u671f","\u8ba2\u5355\u91d1\u989d(\u5143)"],columnWidths:[10,10,10,10,10]}]}).saveExcel()};return p.exports.jsx(F,{locale:L,children:p.exports.jsxs("div",{className:Le.container,children:[p.exports.jsx("h2",{children:"\u672a\u53d1\u8d27\u8ba2\u5355\u5217\u8868"}),p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(Ae,{onSubmit:g,items:[{name:"timeRange",label:"\u4e0b\u5355\u65e5\u671f",type:"DatePicker",span:7}]}),p.exports.jsxs("div",{style:{marginTop:12,position:"relative",fontWeight:600,display:"flex",alignItems:"center"},children:[p.exports.jsx(S,{type:"primary",shape:"round",icon:p.exports.jsx($,{}),style:{marginRight:16},onClick:j,children:"\u5bfc\u51fa\u4e3a Execl"}),p.exports.jsxs(N,{color:"#87d068",children:["\u8ba2\u5355\u6570\uff1a",s||0]})]}),p.exports.jsx(T,{loading:n,dataSource:a,rowKey:"id",columns:Me,bordered:!0,pagination:{pageSize:10,onChange:y,total:d}})]})]})})}var Ue={};function He(e){const{title:t,filter:n,tags:r,service:a,table:s,extraParams:o,customRender:c,timestamp:d}=e,{data:x,error:m,loading:h,request:f}=ke(a),{list:g=[],resultTotal:y=0,total:j=0}=x||{},[v,b]=u.exports.useState(0),[w,I]=u.exports.useState({}),[k,C]=u.exports.useState({size:10});u.exports.useEffect((()=>{const e=Ne();I(e)}),[]),u.exports.useEffect((()=>{!async function(){const e=i(i(i({page:v,size:10},Ne()),o||{}),k);C(e),await f(e)}()}),[d]);const S=e=>{var t;let r=e;n.paramsHandler&&(r=null==(t=n.paramsHandler(e))?void 0:t.params),C(r),b(0),f(i({page:0,size:10},r))},P=e=>{b(e-1),f(l(i({},k),{page:e-1,size:10}))};return p.exports.jsx(F,{locale:L,children:p.exports.jsxs("div",{className:Ue.container,children:[p.exports.jsx("h2",{children:t}),p.exports.jsxs(p.exports.Fragment,{children:[(null==n?void 0:n.enable)&&p.exports.jsx(Ae,{items:n.items,onSubmit:S,initialValues:w}),c&&c(k),r&&r.length>0&&p.exports.jsx("div",{style:{marginTop:12,position:"relative",fontWeight:600,display:"flex",alignItems:"center"},children:r.map((e=>p.exports.jsxs(N,{color:"#87d068",children:[e.label,"\uff1a",x[e.key]||e.defaultValue]})))}),p.exports.jsx(T,i({loading:h,dataSource:g,rowKey:"id",bordered:!0,pagination:{pageSize:10,current:v+1,onChange:P,total:y||j}},s))]})]})})}var Ve={getMaterials:async e=>await Ie({url:`${Se}/cms/_listTeachingMaterials`,data:e,method:"POST",headers:{"Content-Type":"application/json"}}),create:async e=>await Ie({url:`${Se}/cms/teachingMaterials`,data:e,method:"POST",headers:{"Content-Type":"multipart/form-data"}}),async update(e){const t=e||{},{id:n}=t,r=c(t,["id"]);return await Ie({url:`${Se}/cms/teachingMaterials/${n}`,data:r,method:"PUT",headers:{"Content-Type":"application/json"}})},nodeTree:async e=>await Ie({url:`${Se}/cms/materialNodes`,params:e}),deleteNode:async e=>await Ie({url:`${Se}/cms/teachingMaterials/${e}`,method:"DELETE"})};const Ke=e=>{const{visible:t,handleCancel:n,handleSure:r,data:a,nodes:s}=e,{request:o}=ke(Ve.create),{request:l}=ke(Ve.update),d=M.createRef(),x=!(null==a?void 0:a.id);u.exports.useEffect((()=>{var e,t;if(!d)return;const n=We(a,s);null==(e=d.current)||e.setFieldsValue(n),n||null==(t=d.current)||t.resetFields()}),[a,t]);const m=()=>{var e;null==(e=null==d?void 0:d.current)||e.submit()},h=async e=>{var t;if(!x)return await f(e);{const{extraInfo:n,parentID:r,title:a,subTitle:s,order:i,desc:l}=e||{},c=n&&n.split("\n").filter((e=>!!e))||void 0,d=[...r||[]].pop();let p=new FormData;d&&p.append("parentID",d),s&&p.append("subTitle",s),c&&p.append("extraInfo",c),a&&p.append("title",a),l&&p.append("desc",l),(i||0===i)&&p.append("order",i);const u=((null==(t=document.getElementById("file"))?void 0:t.files)||[])[0];u&&p.append("file",u),await o(p)}r&&r(),n&&n()},f=async e=>{const t=e||{},{extraInfo:n,parentID:r}=t,s=c(t,["extraInfo","parentID"]);await l(i({id:null==a?void 0:a.id,parentID:[...r||[]].pop(),extraInfo:n&&n.split("\n").filter((e=>!!e))||void 0},s))};return p.exports.jsx(B,{title:(x?"\u521b\u5efa":"\u4fee\u6539")+"\u8bcd\u5e93",visible:t,onOk:m,onCancel:n,children:p.exports.jsxs(k,{ref:d,onFinish:h,children:[p.exports.jsx(k.Item,{label:"\u7236\u8282\u70b9",name:"parentID",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7236\u8282\u70b9!"}],children:p.exports.jsx(_,{options:s})}),p.exports.jsx(k.Item,{label:"\u4e3b\u6807\u9898",name:"title",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u4e3b\u6807\u9898!"}],children:p.exports.jsx(D,{})}),p.exports.jsx(k.Item,{label:"\u526f\u6807\u9898",name:"subTitle",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u526f\u6807\u9898!"}],children:p.exports.jsx(D,{})}),p.exports.jsx(k.Item,{label:"\u5907\u6ce8\u4fe1\u606f",name:"desc",children:p.exports.jsx(D,{})}),p.exports.jsx(k.Item,{label:"\u5217\u8868\u5b57\u6bb5",name:"extraInfo",children:p.exports.jsx(D.TextArea,{placeholder:"\u6839\u636e\u56de\u8f66\u5206\u5272"})}),p.exports.jsx(k.Item,{label:"\u6392\u2002\u2002\u2002\u2002\u5e8f",name:"order",children:p.exports.jsx(D,{type:"number"})}),p.exports.jsx(k.Item,{label:"\u9009\u62e9\u6587\u4ef6",name:"file",children:p.exports.jsx(D,{type:"file",id:"file",disabled:!x})})]})})},We=(e={},t)=>{if(!e||!t||0===t.length)return null;const{id:n,parentID:r,title:a,subTitle:s,info:o,desc:i,order:l}=e;return{parentID:Ge(r,t),extraInfo:null==o?void 0:o.extraInfo.join("\n"),title:a,subTitle:s,desc:i,id:n,order:l}},Ge=(e,t)=>{let n=[];for(let r=0;r<t.length&&!n.includes(e);r++){n=[];const a=t[r];if(a.children)n.push(a.value),n.push(...Ge(e,a.children));else if(a.value===e){n.push(e);break}}return n};function Je(){const[e,t]=u.exports.useState(!1),[n,r]=u.exports.useState(null),{request:a}=ke(Ve.nodeTree),{request:s}=ke(Ve.deleteNode),[o,c]=u.exports.useState([]),[d,x]=u.exports.useState([]),[m,h]=u.exports.useState(+new Date),[f,g]=u.exports.useState(+new Date),[y,j]=u.exports.useState({size:10});u.exports.useEffect((()=>{!async function(){const e=await a({});x(e.map((e=>{const{label:t,value:n}=e;return{label:t,value:n,children:[]}}))||[]),c(e||[])}()}),[f]);const v=e=>{const t={title:"\u786e\u5b9a\u5220\u9664\u8be5\u8bcd\u6c47",onOk:async()=>{await s(e),h(+new Date),(null==y?void 0:y.onlyParentNode)&&g(+new Date)}};B.confirm(t)},b=[{title:"\u8bcd\u5e93\u540d",dataIndex:"title",key:"title",render:(e,t)=>{const{title:n,subTitle:r,parentName:a}=t||{};return`${a}_${n}_${r}`}},{title:"\u8bcd\u6c47\u6570\u91cf",dataIndex:"wordCount",key:"wordCount",render:(e,t)=>{var n;return`${null==(n=null==t?void 0:t.info)?void 0:n.wordCount}\u4e2a`}},{title:"\u5217\u8868\u5b57\u6bb5",dataIndex:"extraInfo",key:"extraInfo",render:(e,t)=>{var n;const r=(null==(n=null==t?void 0:t.info)?void 0:n.extraInfo)||[],[a,...s]=r,o=[...(a||"").split(","),...s].filter((e=>e));return p.exports.jsx("ul",{children:o.map((e=>p.exports.jsx("li",{children:e})))})}},{title:"\u5907\u6ce8\u4fe1\u606f",dataIndex:"desc",key:"desc"},{title:"\u6392\u5e8f",dataIndex:"order",key:"order"},{title:"\u64cd\u4f5c",dataIndex:"operater",key:"operater",render:(e,t)=>p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(S,{style:{marginRight:24},type:"primary",onClick:w.bind(null,t),children:"\u4fee\u6539"}),p.exports.jsx(S,{type:"primary",danger:!0,onClick:v.bind(null,null==t?void 0:t.id),children:"\u5220\u9664"})]})}],w=e=>{t(!0),r(e)};return p.exports.jsxs(p.exports.Fragment,{children:[p.exports.jsx(He,{timestamp:m,customRender:()=>p.exports.jsx(S,{style:{marginBottom:18},onClick:()=>{const{parentIdList:e=[]}=y||{},n=e[0];r(n?{parentID:n}:null),t(!0)},size:"large",children:"\u65b0\u5efa\u8bcd\u5e93"}),table:{columns:b},title:"\u8bcd\u5e93\u4fe1\u606f",service:Ve.getMaterials,extraParams:{stageList:[2]},filter:{enable:!0,items:[{name:"parentIDList",label:"\u7236\u8282\u70b9",type:"Cascader",span:8,source:(null==y?void 0:y.onlyParentNode)?d:o||[],placeholder:"\u8bf7\u9009\u62e9\u8282\u70b9"},{name:"onlyParentNode",label:"\u53ea\u770b\u7236\u8282\u70b9",type:"Switch",span:6,onChange:(e,t)=>{t.setFieldsValue({parentIDList:void 0}),j(l(i({},y),{onlyParentNode:e}))}}],paramsHandler:e=>{const{parentIDList:t=[],onlyParentNode:n}=e||{},r=[...t].pop(),a={parentIdList:r&&[r]||void 0,stageList:n?[1]:[2]};return j(l(i({},a),{onlyParentNode:n})),{params:a}}}}),p.exports.jsx(Ke,{params:y,nodes:(null==y?void 0:y.onlyParentNode)?d:o,visible:e,data:n,handleSure:()=>{h(+new Date)},handleCancel:()=>{t(!1),r(null)}})]})}const Qe=["paid","waitingDeliver","transiting","transited","received"],Xe=[{title:"\u8ba2\u5355\u7f16\u53f7",dataIndex:"id",key:"id"},{title:"\u7528\u6237\u6635\u79f0",dataIndex:"nickname",key:"nickname"},{title:"\u7528\u6237ID",dataIndex:"userID",key:"userID"},{title:"\u8ba2\u5355\u65e5\u671f",dataIndex:"createdAt",key:"createdAt",render:e=>q(1e3*e).format("L")},{title:"\u662f\u5426\u4ed8\u8d39\u7528\u6237",dataIndex:"status",key:"status",render:e=>"create"!==e?"\u662f":"\u5426"},{title:"\u8ba2\u5355\u91d1\u989d(\u5143)",dataIndex:"actualPrice",key:"actualPrice",render:e=>(e/100).toFixed(2)}];function Ye(){const[e,t]=u.exports.useState([]),[n,r]=u.exports.useState(!1),{request:a}=ke(Fe.getDoc),s={type:"radio",onChange:(e,n)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",n),t(n)},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})};return p.exports.jsx(U,{spinning:n,children:p.exports.jsx(He,{service:Fe.getOrders,table:{columns:Xe,rowSelection:s},title:"\u8ba2\u5355\u67e5\u8be2",filter:{enable:!0,items:[{name:"statusList",label:"\u8ba2\u5355\u72b6\u6001",type:"Select",placeholder:"\u9009\u62e9\u72b6\u6001",span:6,source:[{label:"\u5f85\u652f\u4ed8",value:"created"},{label:"\u5f85\u5370\u5237",value:"paid"},{label:"\u5f85\u53d1\u8d27",value:"waitingDeliver"},{label:"\u8fd0\u8f93\u4e2d",value:"transiting"},{label:"\u5f85\u7b7e\u6536",value:"transited"},{label:"\u5df2\u7b7e\u6536",value:"received"}]},{name:"timeRange",label:"\u4e0b\u5355\u65e5\u671f",type:"DatePicker",span:7},{name:"orderID",label:"\u8ba2\u5355\u7f16\u53f7",span:6},{name:"userID",label:"\u7528\u6237ID",span:5}],paramsHandler:e=>{const t=e||{},{timeRange:n,statusList:r}=t,a=c(t,["timeRange","statusList"]),[s,o]=n||[],l=undefined;return{params:i({createdAtStart:s&&Math.round(+s/1e3)||void 0,createdAtEnd:o&&Math.round(+o/1e3)||void 0,statusList:r?[r]:Qe},a)}}},extraParams:{statusList:Qe},customRender:()=>p.exports.jsx(S,{style:{marginBottom:18},onClick:async()=>{r(!0);const t=e[0],{id:n,userID:s,nickname:o}=t||{};n||H.error("\u9700\u8981\u5148\u9009\u4e00\u4e2a\u8ba2\u5355");try{const e=await a(n),t=URL.createObjectURL(new Blob([e],{type:"application/zip"})),i=`${n}+${o}+${s}`;r(!1),qe(t,i)}catch(i){H.error("\u4e0b\u8f7d\u5931\u8d25"),r(!1)}},size:"large",children:"\u6253\u5305\u4e0b\u8f7d"})})})}const Ze=undefined,et=undefined;var tt="_loginForm_1dnmk_1",nt="_container_1dnmk_6";const rt=undefined,at=undefined,st=[{path:"/login",component:e=>{const{request:t}=ke(Ee.login),n=async e=>{const{account:n,password:r}=e||{},a=new URLSearchParams;a.append("account",n),a.append("password",r),await t({account:n,password:V.hex(r)});const{returnTo:s}=Ne();s&&(window.location.href=window.decodeURIComponent(s))},r=e=>{};return p.exports.jsx("div",{className:nt,children:p.exports.jsxs(k,{name:"login",labelCol:{span:8},wrapperCol:{span:16},onFinish:n,onFinishFailed:r,autoComplete:"off",className:tt,children:[p.exports.jsx(k.Item,{label:"\u8d26\u53f7",name:"account",rules:[{required:!0,message:"\u8f93\u5165\u8d26\u53f7!"}],children:p.exports.jsx(D,{})}),p.exports.jsx(k.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:p.exports.jsx(D.Password,{})}),p.exports.jsx(k.Item,{wrapperCol:{offset:8,span:16},children:p.exports.jsx(S,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}},{path:"/",component:be,children:[{path:"/UserManagement",component:Te},{path:"/OrderManagement",children:[{path:"/Order",component:ze},{path:"/UndeliveredOrder",component:Be}]},{path:"/DeliverySystem",component:we},{path:"/DistributionSystem",component:we},{path:"/ThesaurusManagement",component:Je},{path:"/PrintingSystem",component:Ye},{path:"/",exact:!0,component:Te},{component:({name:e})=>p.exports.jsxs("div",{children:[p.exports.jsx("h2",{children:"404"}),p.exports.jsx("div",{children:p.exports.jsx(b,{to:"/",children:"Home"})}),p.exports.jsx("div",{children:p.exports.jsx(b,{to:"/dashboard",children:"Dashboard"})})]})}]}];function ot(e,t){return(t||[]).reduce(((e,t)=>{const n=t(e);return e.pageConfig&&(n.pageConfig=e.pageConfig),e.getInitialProps&&(n.getInitialProps=e.getInitialProps),n}),e)}function it(e,t){t&&["pageConfig","getInitialProps"].forEach((n=>{Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))}function lt(e,t,n,r){const{__LAZY__:a,dynamicImport:s,__LOADABLE__:o}=e||{};return o?J(s,{resolveComponent:e=>{const r=e.default;return it(r,n),ot(r,t)},fallback:r}):a?u.exports.lazy((()=>s().then((e=>{if(t&&t.length){const r=e.default;return it(r,n),l(i({},e),{default:ot(r,t)})}return e})))):(it(e,n),ot(e,t))}function ct(e,t){return e.map((e=>{const n=e,{children:r,component:a,routeWrappers:s,wrappers:o}=n,l=c(n,["children","component","routeWrappers","wrappers"]);let d=r?[]:s;o&&o.length&&(d=d.concat(o));const p=i({},l);return a&&(p.component=lt(a,d,e,t)),r&&(p.children=ct(r,t)),p}))}function dt(e){const t=e,{type:n,children:r}=t,a=c(t,["type","children"]);let s=r;if(!s&&e.routes){const t=ct(e.routes,e.fallback);s=p.exports.jsx(pt,{routes:t,fallback:e.fallback})}return"static"===n?p.exports.jsx(Q,l(i({},a),{children:s})):p.exports.jsx(X,l(i({},a),{children:s}))}function pt({routes:e,fallback:t}){return p.exports.jsx(K,{children:e.map(((e,n)=>{const{children:r}=e;if(r){const r=e,{component:a,children:s}=r,o=c(r,["component","children"]),d=p.exports.jsx(pt,{routes:s,fallback:t}),u=e=>a?p.exports.jsx(a,l(i({},e),{children:d})):d;return p.exports.jsx(G,l(i({},o),{render:u}),n)}if(e.redirect){const t=e,{redirect:r}=t,a=c(t,["redirect"]);return p.exports.jsx(W,i({from:e.path,to:r},a),n)}{const r=e,{component:a}=r,s=c(r,["component"]);if(a){const e=window.__ICE_SSR_ENABLED__?e=>p.exports.jsx(a,i({},e)):e=>p.exports.jsx(u.exports.Suspense,{fallback:t||p.exports.jsx("div",{children:"loading"}),children:p.exports.jsx(a,i({},e))});return p.exports.jsx(G,l(i({},s),{render:e}),n)}return console.error("[Router] component is required when config routes"),null}}))})}function ut(...e){if(0===e.length)return"";const t=[],n=e.filter((e=>""!==e));return n.forEach(((e,r)=>{if("string"!=typeof e)throw new Error(`Path must be a string. Received ${e}`);let a=e;r>0&&(a=a.replace(/^[/]+/,"")),a=r<n.length-1?a.replace(/[/]+$/,""):a.replace(/[/]+$/,"/"),t.push(a)})),t.join("/")}function xt(e,t){return e.map((e=>{const n={};if(e.path){const r=ut(t||"",e.path);n.path="/"===r?"/":r.replace(/\/$/,"")}if(e.children)n.children=xt(e.children,n.path||e.path);else if(e.component){const t=e.component;t.pageConfig=Object.assign({},t.pageConfig,{componentName:t.name})}return i(i({},e),n)}))}function mt(){const e=undefined;return e=>{const{pageConfig:t}=e,{title:n,scrollToTop:r}=t||{},a=undefined;return t=>{const[a,s]=u.exports.useState(window.__ICE_PAGE_PROPS__);return u.exports.useEffect((()=>{n&&(document.title=n),r&&window.scrollTo(0,0),window.__ICE_PAGE_PROPS__?window.__ICE_PAGE_PROPS__=null:e.getInitialProps&&(async()=>{const{href:t,origin:n,pathname:r,search:a}=window.location,o=undefined,i=undefined,l=undefined,c={pathname:r,path:t.replace(n,""),query:Y.parse(a),ssrError:window.__ICE_SSR_ERROR__},d=await e.getInitialProps(c);s(d)})()}),[]),p.exports.jsx(e,i({},Object.assign({},t,a)))}}}const ht=({setRenderApp:e,appConfig:t,modifyRoutes:n,wrapperPageComponent:r,modifyRoutesComponent:a,buildConfig:s,context:o,applyRuntimeAPI:d})=>{const{router:u={},app:x={}}=t,{ErrorBoundaryFallback:m,onErrorBoundaryHandler:h}=x,{parseSearchParams:f=!0}=x,g=undefined;r((e=>{const t=undefined;return t=>{const n=f&&d("getSearchParams");return p.exports.jsx(e,i({},Object.assign({},t,{searchParams:n})))}})),n((()=>xt(u.routes||st,""))),a((()=>pt));const y=e=>{const{pageConfig:t={}}=e,n=undefined;return n=>t.errorBoundary?p.exports.jsx(ye,{Fallback:m,onError:h,children:p.exports.jsx(e,i({},n))}):p.exports.jsx(e,i({},n))},j=undefined;r(mt()),r(y),u.modifyRoutes&&n(u.modifyRoutes);const v=s&&s.router&&s.router.lazy,b=undefined;e(((e,t,n={})=>()=>{let r=i(l(i({},u),{lazy:v}),n);r.history||(r.history=d("createHistory",{type:u.type,basename:u.basename}));const a=r,{fallback:s}=a,o=c(a,["fallback"]);return p.exports.jsx(dt,l(i({},o),{children:t?p.exports.jsx(t,{routes:ct(e,s),fallback:s}):null}))}))},ft=u.exports.createContext(null),gt=({value:e={},children:t})=>{const[n,r]=u.exports.useState(e),a=(e={})=>{r(i(i({},n),e))};return p.exports.jsx(ft.Provider,{value:[n,a],children:t})},yt=()=>{const e=undefined;return u.exports.useContext(ft)};function jt(e){const t=undefined;return t=>{const[n,r]=yt(),a=e;return p.exports.jsx(a,l(i({},t),{auth:n,setAuth:r}))}}const vt=e=>t=>{const{pageConfig:n={}}=t,r=undefined;return jt((r=>{const a=r,{auth:s,setAuth:o}=a,l=c(a,["auth","setAuth"]),d=n.auth;if(d&&!Array.isArray(d))throw new Error("pageConfig.auth must be an array");const u=undefined;return!Array.isArray(d)||!d.length||Object.keys(s).filter((e=>!!d.includes(e)&&s[e])).length?p.exports.jsx(t,i({},l)):e.NoAuthFallback?"function"==typeof e.NoAuthFallback?p.exports.jsx(e.NoAuthFallback,{}):e.NoAuthFallback:null}))};var bt=({context:e,appConfig:t,addProvider:n,wrapperPageComponent:r})=>{const a=undefined,s=(e&&e.initialData?e.initialData:{}).auth||{},o=t.auth||{},i=undefined;n((({children:e})=>p.exports.jsx(gt,{value:s,children:e}))),r(vt(o))};function wt(e){e.loadModule(me),e.loadModule(ht),e.loadModule(bt)}const It={icestarkType:"es"},kt=Z({loadRuntimeModules:wt,createElement:u.exports.createElement,runtimeAPI:{createHistory:ee,getSearchParams:te}});function Ct(e){xe(e),ne&&ne(e),re({appConfig:e,buildConfig:It,ErrorBoundary:ye,appLifecycle:{createBaseApp:kt,initAppLifeCycles:ae,emitLifeCycles:se}})}const St=undefined;Ct({app:{rootId:"ice-container"},router:{type:"hash"},request:{withCredentials:!0,interceptors:{request:{onConfig:e=>{const t=e.params||{};return(Object.entries(t)||[]).forEach((([e,n])=>{void 0===n&&(t[e]=void 0)})),e}},response:{onError:e=>{var t,n,r,a,s;if(Ce)return Promise.reject(e);if(403===(null==(t=null==e?void 0:e.response)?void 0:t.status)||"error.data.unauthorized-error"==(null==(r=null==(n=null==e?void 0:e.response)?void 0:n.data)?void 0:r.code)){const e=window.location.href;window.location.href=`/#/login?returnTo=${window.encodeURIComponent(e)}`}const o=null==(s=null==(a=null==e?void 0:e.response)?void 0:a.data)?void 0:s.message;return o&&H.error(o),Promise.reject(e)}}}}});
