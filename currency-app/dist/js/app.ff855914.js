(function(){"use strict";var e={2098:function(e,t,n){var r=n(9242),o=n(3396);const c={class:"container"};function a(e,t,n,r,a,i){const s=(0,o.up)("currency-rate"),u=(0,o.up)("currency-convert");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(s),(0,o.Wm)(u)])}var i=n(7139);const s={class:"convert"},u=(0,o._)("h2",{class:"convert__title"},"Конвертер валют",-1),l={class:"convert__form-block"},p=(0,o._)("button",{class:"convert__submit",type:"submit"},"Convert",-1),v={class:"convert__form-block"},_={class:"convert__select-block"},d=(0,o._)("label",{for:"convert__from"},"from",-1),f=(0,o.uE)('<option value="RUB">RUB</option><option value="KZT">KZT</option><option value="CNY">CNY</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option>',6),h=[f],y={class:"convert__select-block"},m=(0,o._)("label",{for:"convert__to"},"to",-1),U=(0,o.uE)('<option value="RUB">RUB</option><option value="KZT">KZT</option><option value="CNY">CNY</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option>',6),b=[U],C={class:"convert__result"},D=(0,o.Uk)(" ИТОГО: "),w={class:"convert__result_count"};function R(e,t,n,c,a,f){return(0,o.wg)(),(0,o.iD)("div",s,[u,(0,o._)("form",{onSubmit:t[3]||(t[3]=(0,r.iM)(((...e)=>f.toConvert&&f.toConvert(...e)),["prevent"])),class:"convert__form",action:"#"},[(0,o._)("div",l,[(0,o.wy)((0,o._)("input",{class:"convert__input",min:"0","onUpdate:modelValue":t[0]||(t[0]=e=>a.inputCurrency=e),type:"number"},null,512),[[r.nr,a.inputCurrency]]),p]),(0,o._)("div",v,[(0,o._)("div",_,[d,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.fromCurrency=e),class:"convert__from",id:"convert__from"},h,512),[[r.bM,a.fromCurrency]])]),(0,o._)("div",y,[m,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.toCurrency=e),class:"convert__to"},b,512),[[r.bM,a.toCurrency]])])])],32),(0,o._)("div",C,[D,(0,o._)("span",w,(0,i.zw)(a.result),1)])])}var k={data(){return{inputCurrency:0,fromCurrency:"USD",toCurrency:"RUB",result:0}},methods:{async toConvert(){let e=new Headers;e.append("apikey","9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");let t={method:"GET",redirect:"follow",headers:e};fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.toCurrency}&from=${this.fromCurrency}&amount=${this.inputCurrency}`,t).then((e=>e.json())).then((e=>this.result=e.result.toFixed(2))).catch((e=>console.log("error",e)))}}},g=n(89);const B=(0,g.Z)(k,[["render",R]]);var E=B;const P={class:"currency"},S={class:"currency__head"},G=(0,o._)("h1",{class:"currency__title"},"Курс валют",-1),x=(0,o._)("option",{value:"RUB"},"рубль(Россия)",-1),T=(0,o._)("option",{value:"KZT"},"тенге(Казахстан)",-1),O=(0,o._)("option",{value:"CNY"},"юань(Китай)",-1),Y=[x,T,O],j={class:"currency__rate"},F=(0,o._)("span",null,"EUR:",-1),M={class:"currency__rate"},N=(0,o._)("span",null,"USD:",-1),Z={class:"currency__rate"},H=(0,o._)("span",null,"GBP:",-1);function K(e,t,n,c,a,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",P,[(0,o._)("div",S,[G,(0,o.wy)((0,o._)("select",{class:"currency__base-select",onChange:t[0]||(t[0]=(...e)=>s.getCurrency&&s.getCurrency(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>a.base=e)},Y,544),[[r.bM,a.base]])]),(0,o._)("div",j,[F,(0,o.Uk)(" "+(0,i.zw)(a.EUR),1)]),(0,o._)("div",M,[N,(0,o.Uk)(" "+(0,i.zw)(a.USD),1)]),(0,o._)("div",Z,[H,(0,o.Uk)(" "+(0,i.zw)(a.GBP),1)])])])}var $={data(){return{info:"",base:"RUB",EUR:0,USD:0,GBP:0}},methods:{async getCurrency(){let e=new Headers;e.append("apikey","9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");var t={method:"GET",redirect:"follow",headers:e};fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CUSD%2CGBP&base=${this.base}`,t).then((e=>e.json())).then((e=>{this.EUR=(1/e.rates.EUR).toFixed(1),this.USD=(1/e.rates.USD).toFixed(1),this.GBP=(1/e.rates.GBP).toFixed(1)})).catch((e=>console.log("error",e)))}},async mounted(){let e=new Headers;e.append("apikey","9kiDDpaHeRdJTdiQYPNSYn9ukqDhcpMu");var t={method:"GET",redirect:"follow",headers:e};fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CUSD%2CGBP&base=${this.base}`,t).then((e=>e.json())).then((e=>{this.EUR=(1/e.rates.EUR).toFixed(1),this.USD=(1/e.rates.USD).toFixed(1),this.GBP=(1/e.rates.GBP).toFixed(1)})).catch((e=>console.log("error",e)))}};const z=(0,g.Z)($,[["render",K]]);var V=z,q={components:{currencyConvert:E,currencyRate:V},name:"App"};const J=(0,g.Z)(q,[["render",a]]);var Q=J;const W=(0,r.ri)(Q);W.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,c){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],c=e[l][2];for(var i=!0,s=0;s<r.length;s++)(!1&c||a>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,c<a&&(a=c));if(i){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[r,o,c]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,c,a=r[0],i=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var l=s(n)}for(t&&t(r);u<a.length;u++)c=a[u],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(l)},r=self["webpackChunkcurrency_app"]=self["webpackChunkcurrency_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2098)}));r=n.O(r)})();
//# sourceMappingURL=app.ff855914.js.map