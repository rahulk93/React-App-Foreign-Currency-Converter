(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),o=n(6),s=n(1);n(12);function l(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChangeCurrency,r=e.onChangeAmount,u=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:u,onChange:r}),c.a.createElement("select",{value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}var i="https://api.exchangeratesapi.io/latest";var m=function(){var e,t,n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],m=r[1],b=Object(a.useState)(),f=Object(s.a)(b,2),h=f[0],O=f[1],j=Object(a.useState)(),p=Object(s.a)(j,2),y=p[0],v=p[1],g=Object(a.useState)(),C=Object(s.a)(g,2),E=C[0],d=C[1],S=Object(a.useState)(1),k=Object(s.a)(S,2),A=k[0],w=k[1],x=Object(a.useState)(!0),J=Object(s.a)(x,2),N=J[0],q=J[1];return N?(t=A,e=A*E):(e=A,t=A/E),Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),O(e.base),v(t),d(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=h&&null!=y&&fetch("".concat(i,"?base=").concat(h,"&symbols=").concat(y)).then((function(e){return e.json()})).then((function(e){return d(e.rates[y])}))}),[h,y]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Convert"),c.a.createElement(l,{currencyOptions:u,selectedCurrency:h,onChangeCurrency:function(e){return O(e.target.value)},onChangeAmount:function(e){w(e.target.value),q(!0)},amount:t}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(l,{currencyOptions:u,selectedCurrency:y,onChangeCurrency:function(e){return v(e.target.value)},onChangeAmount:function(e){w(e.target.value),q(!1)},amount:e}))};u.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.110c349e.chunk.js.map