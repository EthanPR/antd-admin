webpackJsonp([9],{49:126,55:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(9),d=a(n),r=l(19),s=a(r),i=l(1),o=a(i),c=l(3),u=a(c),f=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(l[a[n]]=e[a[n]]);return l};t["default"]=function(e){var t,l=e.prefixCls,a=void 0===l?"ant-card":l,n=e.className,r=e.extra,i=e.bodyStyle,c=e.title,p=e.loading,m=e.bordered,y=void 0===m||m,g=f(e,["prefixCls","className","extra","bodyStyle","title","loading","bordered"]),E=e.children,b=(0,u["default"])(a,n,(t={},(0,s["default"])(t,a+"-loading",p),(0,s["default"])(t,a+"-bordered",y),t));p&&(E=o["default"].createElement("div",null,o["default"].createElement("p",{className:a+"-loading-block",style:{width:"94%"}}),o["default"].createElement("p",null,o["default"].createElement("span",{className:a+"-loading-block",style:{width:"28%"}}),o["default"].createElement("span",{className:a+"-loading-block",style:{width:"62%"}})),o["default"].createElement("p",null,o["default"].createElement("span",{className:a+"-loading-block",style:{width:"22%"}}),o["default"].createElement("span",{className:a+"-loading-block",style:{width:"66%"}})),o["default"].createElement("p",null,o["default"].createElement("span",{className:a+"-loading-block",style:{width:"56%"}}),o["default"].createElement("span",{className:a+"-loading-block",style:{width:"39%"}})),o["default"].createElement("p",null,o["default"].createElement("span",{className:a+"-loading-block",style:{width:"21%"}}),o["default"].createElement("span",{className:a+"-loading-block",style:{width:"15%"}}),o["default"].createElement("span",{className:a+"-loading-block",style:{width:"40%"}}))));var h=void 0;return h=c?"string"==typeof c?o["default"].createElement("div",{className:a+"-head"},o["default"].createElement("h3",{className:a+"-head-title"},c)):o["default"].createElement("div",{className:a+"-head"},o["default"].createElement("div",{className:a+"-head-title"},c)):null,o["default"].createElement("div",(0,d["default"])({},g,{className:b}),h,r?o["default"].createElement("div",{className:a+"-extra"},r):null,o["default"].createElement("div",{className:a+"-body",style:i},E))},e.exports=t["default"]},56:[1570,63],63:20,1457:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=(l(196),l(195)),d=a(n),r=(l(126),l(115)),s=a(r),i=(l(49),l(125)),o=a(i),c=(l(56),l(55)),u=a(c),f=(l(134),l(124)),p=a(f),m=l(1),y=a(m),g=l(207),E={"default":1},b=function(){var e=function(e){e===E["default"]&&g.layer.open({title:"\u9ed8\u8ba4\u5f39\u5c42",content:y["default"].createElement("div",{style:{height:360}},"\u5f39\u5c42\u5185\u5bb9")})};return y["default"].createElement("div",{className:"content-inner"},y["default"].createElement(s["default"],{gutter:32},y["default"].createElement(o["default"],{lg:8,md:12},y["default"].createElement(u["default"],{title:"\u9ed8\u8ba4"},y["default"].createElement(p["default"],{type:"primary",onClick:e.bind(null,E["default"])},"\u6253\u5f00\u4e00\u4e2aLayer")))),y["default"].createElement("h2",{style:{margin:"16px 0"}},"API"),y["default"].createElement("div",{style:{margin:"16px 0"}},y["default"].createElement("h2",{style:{margin:"4px 0"}},"layer.open(config)"),"config\u5bf9\u8c61\u4e0e",y["default"].createElement("a",{href:"https://ant.design/components/modal-cn/#API",target:"_blank"},"Modal"),"\u7684\u53c2\u6570\u57fa\u672c\u4e00\u81f4\uff0cconfig\u5c5e\u6027\u5982\u4e0b\u3002 \u6ce8\u610f\uff1a1.visible\u5c5e\u6027\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e\uff1b2.afterClose\u65e0\u6548\uff0clayer.close()\u53ef\u4ee3\u66ff;3.layer.open()\u8fd4\u56de\u4e00\u4e2a\u552f\u4e00\u7684layer Id"),y["default"].createElement(s["default"],null,y["default"].createElement(o["default"],{lg:18,md:24},y["default"].createElement(d["default"],{rowKey:function(e,t){return t},pagination:!1,bordered:!0,scroll:{x:800},columns:[{title:"\u53c2\u6570",dataIndex:"props"},{title:"\u8bf4\u660e",dataIndex:"desciption"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default"}],dataSource:[{props:"content",desciption:"\u5185\u5bb9",type:"string|ReactNode","default":"\u65e0"},{props:"title",desciption:"\u6807\u9898",type:"string|ReactNode","default":"\u6807\u9898"},{props:"confirmLoading",desciption:"\u786e\u5b9a\u6309\u94ae loading\t",type:"boolean","default":"\u65e0"},{props:"closable",desciption:"\u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae",type:"boolean","default":"\u65e0"},{props:"onOk",desciption:"\u70b9\u51fb\u786e\u5b9a\u56de\u8c03",type:"function(e)","default":"\u65e0"},{props:"onCancel",desciption:"\u70b9\u51fb\u906e\u7f69\u5c42\u6216\u53f3\u4e0a\u89d2\u53c9\u6216\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03",type:"function(e)","default":'"\u65e0"'},{props:"width",desciption:"\u5bbd\u5ea6",type:"string|number","default":"520"},{props:"okText",desciption:"\u786e\u8ba4\u6309\u94ae\u6587\u5b57",type:"string","default":"\u65e0"},{props:"cancelText",desciption:"\u53d6\u6d88\u6309\u94ae\u6587\u5b57",type:"string","default":"\u65e0"},{props:"maskClosable",desciption:"\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed",type:"boolean","default":"true"},{props:"style",desciption:"\u53ef\u7528\u4e8e\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f\uff0c\u8c03\u6574\u6d6e\u5c42\u4f4d\u7f6e\u7b49",type:"object","default":"-"},{props:"wrapClassName",desciption:"\u5bf9\u8bdd\u6846\u5916\u5c42\u5bb9\u5668\u7684\u7c7b\u540d",type:"string","default":"-"}]}))),y["default"].createElement("div",{style:{margin:"16px 0"}},y["default"].createElement("h2",{style:{margin:"4px 0"}},"layer.close(index)"),"\u5f53index\u6709\u503c\u65f6\uff0c\u5173\u95ed\u6307\u5b9aId\u7684layer;\u5f53index\u65e0\u503c\u65f6\uff0c\u5173\u95ed\u6700\u9876\u5c42layer"),y["default"].createElement("div",{style:{margin:"16px 0"}},y["default"].createElement("h2",{style:{margin:"4px 0"}},"layer.closeAll()"),"\u5173\u95ed\u6240\u6709\u7684layer"))};t["default"]=b,e.exports=t["default"]}});