webpackJsonp([11],{49:126,55:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(9),n=l(d),r=a(19),s=l(r),u=a(1),c=l(u),i=a(3),f=l(i),o=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var d=0,l=Object.getOwnPropertySymbols(e);d<l.length;d++)t.indexOf(l[d])<0&&(a[l[d]]=e[l[d]]);return a};t["default"]=function(e){var t,a=e.prefixCls,l=void 0===a?"ant-card":a,d=e.className,r=e.extra,u=e.bodyStyle,i=e.title,m=e.loading,p=e.bordered,E=void 0===p||p,g=o(e,["prefixCls","className","extra","bodyStyle","title","loading","bordered"]),h=e.children,y=(0,f["default"])(l,d,(t={},(0,s["default"])(t,l+"-loading",m),(0,s["default"])(t,l+"-bordered",E),t));m&&(h=c["default"].createElement("div",null,c["default"].createElement("p",{className:l+"-loading-block",style:{width:"94%"}}),c["default"].createElement("p",null,c["default"].createElement("span",{className:l+"-loading-block",style:{width:"28%"}}),c["default"].createElement("span",{className:l+"-loading-block",style:{width:"62%"}})),c["default"].createElement("p",null,c["default"].createElement("span",{className:l+"-loading-block",style:{width:"22%"}}),c["default"].createElement("span",{className:l+"-loading-block",style:{width:"66%"}})),c["default"].createElement("p",null,c["default"].createElement("span",{className:l+"-loading-block",style:{width:"56%"}}),c["default"].createElement("span",{className:l+"-loading-block",style:{width:"39%"}})),c["default"].createElement("p",null,c["default"].createElement("span",{className:l+"-loading-block",style:{width:"21%"}}),c["default"].createElement("span",{className:l+"-loading-block",style:{width:"15%"}}),c["default"].createElement("span",{className:l+"-loading-block",style:{width:"40%"}}))));var b=void 0;return b=i?"string"==typeof i?c["default"].createElement("div",{className:l+"-head"},c["default"].createElement("h3",{className:l+"-head-title"},i)):c["default"].createElement("div",{className:l+"-head"},c["default"].createElement("div",{className:l+"-head-title"},i)):null,c["default"].createElement("div",(0,n["default"])({},g,{className:y}),b,r?c["default"].createElement("div",{className:l+"-extra"},r):null,c["default"].createElement("div",{className:l+"-body",style:u},h))},e.exports=t["default"]},56:[1570,63],63:20,1453:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var d=(a(196),a(195)),n=l(d),r=(a(126),a(115)),s=l(r),u=(a(500),a(455)),c=l(u),i=(a(49),a(125)),f=l(i),o=(a(56),a(55)),m=l(o),p=a(9),E=l(p),g=a(16),h=l(g),y=a(18),b=l(y),v=a(17),x=l(v),N=a(1),w=l(N),k=a(207),I=function(e){function t(a){(0,h["default"])(this,t);var l=(0,b["default"])(this,e.call(this,a));return l.handleSelectChange=function(e){l.setState({filterCase:{gender:e}})},l.state={filterCase:{gender:""}},l}return(0,x["default"])(t,e),t.prototype.render=function(){var e=this.state.filterCase,t={dataSource:[{key:"1",name:"John Brown",age:24,address:"New York"},{key:"2",name:"Jim Green",age:23,address:"London"}],columns:[{title:"name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],pagination:!1},a={fetch:{url:"https://randomuser.me/api",data:{results:10,testPrams:"test"},dataKey:"results"},columns:[{title:"Name",dataIndex:"name",render:function(e){return e.first+" "+e.last}},{title:"Phone",dataIndex:"phone"},{title:"Gender",dataIndex:"gender"}],rowKey:"registered"},l={fetch:{url:"https://randomuser.me/api",data:(0,E["default"])({results:10,testPrams:"test"},e),dataKey:"results"},columns:[{title:"Name",dataIndex:"name",render:function(e){return e.first+" "+e.last}},{title:"Phone",dataIndex:"phone"},{title:"Gender",dataIndex:"gender"}],rowKey:"registered"};return w["default"].createElement("div",{className:"content-inner"},w["default"].createElement(s["default"],{gutter:32},w["default"].createElement(f["default"],{lg:12,md:24},w["default"].createElement(m["default"],{title:"\u9ed8\u8ba4"},w["default"].createElement(k.DataTable,{pagination:!1}))),w["default"].createElement(f["default"],{lg:12,md:24},w["default"].createElement(m["default"],{title:"\u9759\u6001\u6570\u636e"},w["default"].createElement(k.DataTable,t))),w["default"].createElement(f["default"],{lg:12,md:24},w["default"].createElement(m["default"],{title:"\u8fdc\u7a0b\u6570\u636e"},w["default"].createElement(k.DataTable,a))),w["default"].createElement(f["default"],{lg:12,md:24},w["default"].createElement(m["default"],{title:"\u53c2\u6570\u53d8\u5316"},w["default"].createElement(c["default"],{placeholder:"Please select gender",allowClear:!0,onChange:this.handleSelectChange,style:{width:200,marginBottom:16}},w["default"].createElement(c["default"].Option,{value:"male"},"Male"),w["default"].createElement(c["default"].Option,{value:"female"},"Female")),w["default"].createElement(k.DataTable,l)))),w["default"].createElement("h2",{style:{margin:"16px 0"}},"Props"),w["default"].createElement(s["default"],null,w["default"].createElement(f["default"],{lg:18,md:24},w["default"].createElement(n["default"],{rowKey:function(e,t){return t},pagination:!1,bordered:!0,scroll:{x:800},columns:[{title:"\u53c2\u6570",dataIndex:"props"},{title:"\u8bf4\u660e",dataIndex:"desciption"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default"}],dataSource:[{props:"fetch",desciption:"\u8fdc\u7a0b\u83b7\u53d6\u6570\u636e\u7684\u53c2\u6570",type:"Object","default":"\u540e\u9762\u6709\u7a7a\u52a0\u4e0a"}]}))))},t}(w["default"].Component);t["default"]=I,e.exports=t["default"]}});