(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={index:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/entity-suggest/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0983":function(e,t,n){},1379:function(e,t,n){},2521:function(e,t,n){},"30fe":function(e,t,n){"use strict";n("87ff")},"31c6":function(e,t,n){"use strict";n("2521")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,i,a){var c=Object(r["y"])("EntitySuggestions");return Object(r["r"])(),Object(r["g"])("div",null,[Object(r["j"])(c,{modelValue:i.entities,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.entities=e}),required:""},null,8,["modelValue"])])}function i(e,t,n,o,i,a){var c=Object(r["y"])("SuggestionsList");return Object(r["r"])(),Object(r["e"])(c,{modelValue:o.suggestions.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.suggestions.value=e}),options:o.suggestions.options,loading:o.suggestions.loading,error:o.suggestions.error,"option-key":"id",multiple:n.multiple,"max-selected":n.maxSelected,required:n.required,label:"Пользователь или компания",onSearch:o.onSearch},{tag:Object(r["F"])((function(e){var t=e.item;return[Object(r["i"])(Object(r["B"])(o.alias(t.alias)),1)]})),"dropdown-item":Object(r["F"])((function(e){var t=e.item;return[(Object(r["r"])(),Object(r["e"])(Object(r["A"])(a.dropdownItem(t)),Object(r["o"])(Object(r["k"])(t)),null,16))]})),_:1},8,["modelValue","options","loading","error","multiple","max-selected","required","onSearch"])}n("a9e3"),n("d81d"),n("99af"),n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861");var a={class:"suggest"},c={class:"label"},s={key:0,class:"asterisk"},u=["for"],l=["id","disabled","aria-expanded","aria-owns"],d=["id"];function p(e,t,n,o,i,p){var f=Object(r["y"])("Tag"),m=Object(r["y"])("Loader"),b=Object(r["y"])("Error"),h=Object(r["y"])("NotFound"),v=Object(r["y"])("DropdownItem"),j=Object(r["z"])("click-outside");return Object(r["G"])((Object(r["r"])(),Object(r["g"])("div",a,[Object(r["h"])("div",c,[Object(r["x"])(e.$slots,"label",{},(function(){return[n.required?(Object(r["r"])(),Object(r["g"])("span",s," * ")):Object(r["f"])("",!0),Object(r["h"])("label",{for:n.id},Object(r["B"])(n.label),9,u)]}),!0)]),Object(r["h"])("div",{ref:"inputContainer",class:Object(r["n"])(p.inputContainerClass)},[(Object(r["r"])(!0),Object(r["g"])(r["a"],null,Object(r["w"])(n.modelValue,(function(t,n){return Object(r["r"])(),Object(r["e"])(f,{key:n,onRemove:function(e){return p.remove(n)}},{default:Object(r["F"])((function(){return[Object(r["x"])(e.$slots,"tag",{item:t,index:n},void 0,!0)]})),_:2},1032,["onRemove"])})),128)),Object(r["G"])(Object(r["h"])("input",Object(r["l"])({id:n.id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.query=e}),type:"text",class:"input",disabled:p.maxReached},e.$attrs,{autocomplete:"off","aria-autocomplete":"list","aria-expanded":p.showDropdown,"aria-owns":"".concat(n.id,"_list"),onFocus:t[1]||(t[1]=function(){return p.onFocus&&p.onFocus.apply(p,arguments)}),onBlur:t[2]||(t[2]=function(e){return i.hasFocus=!1}),onKeyup:[t[3]||(t[3]=Object(r["H"])((function(e){return p.moveSelection(-1)}),["up"])),t[4]||(t[4]=Object(r["H"])((function(e){return p.moveSelection(1)}),["down"])),t[5]||(t[5]=Object(r["H"])((function(e){return p.select(n.options[i.activeItemIndex])}),["enter"]))]}),null,16,l),[[r["C"],i.query]])],2),Object(r["G"])(Object(r["h"])("div",{ref:"dropdownContainer",class:Object(r["n"])(["dropdown__container",i.dropdownClass]),style:Object(r["p"])(p.dropdownStyle)},[n.loading?(Object(r["r"])(),Object(r["e"])(m,{key:0,delay:200})):Object(r["f"])("",!0),n.error?Object(r["x"])(e.$slots,"error",{key:1},(function(){return[Object(r["j"])(b,{error:n.error},null,8,["error"])]}),!0):Object(r["f"])("",!0),n.loading||n.error||n.options.length?Object(r["f"])("",!0):Object(r["x"])(e.$slots,"not-found",{key:2},(function(){return[Object(r["j"])(h)]}),!0),Object(r["h"])("ul",{id:"".concat(n.id,"_list"),ref:"dropdown",class:"dropdown",role:"listbox"},[(Object(r["r"])(!0),Object(r["g"])(r["a"],null,Object(r["w"])(n.options,(function(t,o){return Object(r["r"])(),Object(r["e"])(v,{key:t[n.optionKey],active:t[n.optionKey]===p.activeItemKey,selected:p.itemSelected(t),index:o+1,onSelect:function(e){return p.select(t)}},{default:Object(r["F"])((function(){return[Object(r["x"])(e.$slots,"dropdown-item",{item:t,index:o},void 0,!0)]})),_:2},1032,["active","selected","index","onSelect"])})),128))],8,d)],6),[[r["D"],p.showDropdown]])])),[[j,p.hideDropdown]])}var f=n("1da1"),m=(n("96cf"),n("7db0"),n("4de4"),{class:"tag"});function b(e,t,n,o,i,a){var c=Object(r["y"])("Icon");return Object(r["r"])(),Object(r["g"])("span",m,[Object(r["x"])(e.$slots,"default",{},void 0,!0),Object(r["h"])("button",{class:"close",onClick:t[0]||(t[0]=function(){return a.remove&&a.remove.apply(a,arguments)})},[Object(r["j"])(c,{name:"close",class:"close"})])])}n("b0c0");var h={class:"icon"},v=["href"];function j(e,t,n,o,i,a){return Object(r["r"])(),Object(r["g"])("svg",h,[Object(r["h"])("use",{href:"symbols.svg#".concat(n.name)},null,8,v)])}var O={name:"Icon",props:{name:{type:String,required:!0}}},y=n("6b0d"),g=n.n(y);const w=g()(O,[["render",j]]);var _=w,x={name:"Tag",components:{Icon:_},emits:["remove"],methods:{remove:function(e){e.stopPropagation(),this.$emit("remove")}}};n("df1d");const S=g()(x,[["render",b],["__scopeId","data-v-1ae549d6"]]);var I=S,k=["aria-selected"];function D(e,t,n,o,i,a){return Object(r["r"])(),Object(r["g"])("li",{role:"option",class:Object(r["n"])(a.className),"aria-selected":n.selected,onClick:t[0]||(t[0]=function(t){return e.$emit("select")})},[Object(r["x"])(e.$slots,"default",{},void 0,!0)],10,k)}var V={name:"DropdownItem",props:{active:{type:Boolean},selected:{type:Boolean}},emits:["select"],computed:{className:function(){return["dropdown-item",this.active&&"dropdown-item_active"]}}};n("31c6");const C=g()(V,[["render",D],["__scopeId","data-v-44f2c138"]]);var q=C,A=function(e){return Object(r["t"])("data-v-4d836d62"),e=e(),Object(r["s"])(),e},$={key:0,class:"loader__container"},E=A((function(){return Object(r["h"])("svg",{class:"loader",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},[Object(r["h"])("g",null,[Object(r["h"])("circle",{cx:"24",cy:"24",r:"20","stroke-dasharray":"95",fill:"none","stroke-width":"4",stroke:"#90a7b9"})])],-1)})),B=[E];function F(e,t,n,o,i,a){return Object(r["r"])(),Object(r["e"])(r["b"],{name:"fade",appear:""},{default:Object(r["F"])((function(){return[o.shouldRender?(Object(r["r"])(),Object(r["g"])("span",$,B)):Object(r["f"])("",!0)]})),_:1})}var N={name:"Loader",props:{loading:{type:Boolean},delay:{type:Number,default:100}},setup:function(e){var t,n=Object(r["v"])(!1),o=function(){t=setTimeout((function(){n.value=!0}),e.delay)};return o(),Object(r["q"])((function(){clearTimeout(t)})),{shouldRender:n}}};n("f671");const R=g()(N,[["render",F],["__scopeId","data-v-4d836d62"]]);var P=R,L=function(e){return Object(r["t"])("data-v-e2e19e44"),e=e(),Object(r["s"])(),e},H={class:"error dropdown-message"},T=L((function(){return Object(r["h"])("div",{class:"error__title"}," Ошибка! ",-1)})),K={class:"error__message"};function z(e,t,n,o,i,a){return Object(r["r"])(),Object(r["g"])("div",H,[T,Object(r["h"])("div",K,Object(r["B"])(n.error.message),1)])}var M={name:"Error",props:{error:{type:Object,required:!0}}};n("30fe");const U=g()(M,[["render",z],["__scopeId","data-v-e2e19e44"]]);var G=U,J={class:"not-found dropdown-message"};function Q(e,t,n,o,i,a){return Object(r["r"])(),Object(r["g"])("div",J," Ничего не найдено ")}var W={name:"NotFound"};n("625c");const X=g()(W,[["render",Q],["__scopeId","data-v-25533f01"]]);var Y=X;function Z(e,t){var n;return function(){var r=this,o=arguments,i=function(){n=null,e.apply(r,o)};clearTimeout(n),n=setTimeout(i,t)}}var ee=function(e){return e},te=12,ne={name:"SuggestionsList",components:{NotFound:Y,Error:G,Loader:P,DropdownItem:q,Tag:I},props:{modelValue:{type:Array,required:!0},loading:{type:Boolean},error:{type:Object,default:null},required:{type:Boolean},id:{type:String,default:"suggest"},label:{type:String,default:""},minCharacters:{type:Number,default:3},debounce:{type:Number,default:300},dropdownDisplayCount:{type:Number,default:3},options:{type:Array,required:!0},optionKey:{type:String,required:!0},multiple:{type:Boolean},maxSelected:{type:Number,default:NaN}},emits:["input","search","update:modelValue"],data:function(){return{query:"",forceDropdown:!1,hasFocus:!1,dropdownHeight:"auto",dropdownClass:"",activeItemIndex:-1,firstVisibleItemIndex:0}},computed:{showDropdown:function(){return(this.loading||this.error||this.forceDropdown)&&!this.maxReached},shouldSearch:function(){return this.query.length>=this.minCharacters&&!this.maxReached},inputContainerClass:function(){return["input-container",this.hasFocus&&"input-container_focus"]},maxReached:function(){return this.multiple&&this.maxSelected===this.modelValue.length},dropdownStyle:function(){return{maxHeight:this.dropdownHeight}},activeItemKey:function(){var e;return null===(e=this.options[this.activeItemIndex])||void 0===e?void 0:e[this.optionKey]}},watch:{query:function(e){this.$emit("input",e),this.shouldSearch&&this.emitSearch(e),e||(this.forceDropdown=!1)},options:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.forceDropdown=!0,t.next=3,Object(r["m"])();case 3:e.recalculateDropdownHeight();case 4:case"end":return t.stop()}}),t)})))()},showDropdown:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return t.recalculateDropdownPosition(),n.next=4,Object(r["m"])();case 4:t.$refs.dropdownContainer.scrollTo(0,0);case 5:case"end":return n.stop()}}),n)})))()}},created:function(){this.emitSearch=Z(this.emitSearch,this.debounce)},mounted:function(){window.addEventListener("resize",this.recalculateDropdownPosition),document.addEventListener("scroll",this.recalculateDropdownPosition)},beforeUnmount:function(){window.removeEventListener("resize",this.recalculateDropdownPosition),document.removeEventListener("scroll",this.recalculateDropdownPosition)},methods:{emitSearch:function(e){this.$emit("search",e)},select:function(e){if(e&&!this.itemSelected(e)){var t=this.multiple?this.modelValue.concat(e):[e],n=this.multiple&&this.maxSelected===t.length;this.$emit("update:modelValue",t),this.multiple&&!n||(this.forceDropdown=!1,this.query="")}},moveSelection:function(e){var t=function(e,t,n){return(e+t+n)%n};this.activeItemIndex=t(e,this.activeItemIndex,this.options.length);var n=this.activeItemIndex>=this.firstVisibleItemIndex&&this.activeItemIndex<this.firstVisibleItemIndex+this.dropdownDisplayCount;n||(this.$refs.dropdown.children.item(this.activeItemIndex).scrollIntoView(e<0),this.firstVisibleItemIndex=t(e,this.firstVisibleItemIndex,this.dropdownDisplayCount+1))},itemSelected:function(e){var t=this;return!!this.modelValue.find((function(n){return n[t.optionKey]===e[t.optionKey]}))},remove:function(e){this.$emit("update:modelValue",this.modelValue.filter((function(t,n){return n!==e})))},hideDropdown:function(){this.forceDropdown=!1},onFocus:function(){this.hasFocus=!0,this.shouldSearch&&(this.forceDropdown=!0)},recalculateDropdownHeight:function(){if(isFinite(this.dropdownDisplayCount)&&this.$refs.dropdown.childElementCount){for(var e=Math.min(this.dropdownDisplayCount,this.$refs.dropdown.childElementCount),t=0,n=0;n<e;n++)t+=this.$refs.dropdown.children[n].clientHeight;this.dropdownHeight="".concat(t,"px")}else this.dropdownHeight="auto"},recalculateDropdownPosition:function(){var e=this.$refs.inputContainer.getBoundingClientRect(),t=window.innerHeight-(e.bottom+te),n=e.top-te;this.dropdownClass=n>t?"dropdown__container_top":"dropdown__container_bottom"}}};n("d601");const re=g()(ne,[["render",p],["__scopeId","data-v-4f7f1ef2"]]);var oe=re,ie=n("5530"),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.initialValue,n=void 0===t?[]:t,o=e.responseAdapter,i=void 0===o?ee:o,a=Object(r["u"])({loading:!1,options:n,error:null,value:[]}),c=new AbortController,s=null,u=function(e){return s&&(c.abort(),c=new AbortController),a.loading=!0,a.error=null,s=fetch(e.url,Object(ie["a"])({signal:c.signal},e)).then(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,t.ok?a.options=i(n):a.error=n;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){a.loading=!1,s=null})),s};return{suggestions:a,search:u}},ce={class:"entity-item"},se={class:"entity-item__avatar"},ue={class:"entity-item__info"},le={class:"entity-item__name"},de={class:"entity-item__alias"};function pe(e,t,n,o,i,a){var c=Object(r["y"])("Avatar");return Object(r["r"])(),Object(r["g"])("span",ce,[Object(r["h"])("span",se,[Object(r["j"])(c,{type:"user",url:n.avatar,name:n.name||o.prefixedAlias},null,8,["url","name"])]),Object(r["h"])("span",ue,[Object(r["h"])("span",le,Object(r["B"])(n.name||o.prefixedAlias),1),Object(r["h"])("span",de,Object(r["B"])(o.prefixedAlias),1)])])}var fe=function(e){return"@".concat(e)},me=["src","alt","aria-label"];function be(e,t,n,o,i,a){var c=Object(r["y"])("Icon");return Object(r["r"])(),Object(r["g"])("div",{class:Object(r["n"])(a.className)},[n.url?(Object(r["r"])(),Object(r["g"])("img",{key:0,src:n.url,class:"avatar",alt:n.name,"aria-label":n.name},null,8,me)):(Object(r["r"])(),Object(r["e"])(c,{key:1,name:"placeholder-".concat(n.type),class:"avatar-placeholder","aria-label":n.name},null,8,["name","aria-label"]))],2)}var he={name:"Avatar",components:{Icon:_},props:{url:{type:String,default:""},type:{type:String,default:""},size:{type:String,default:"md"},name:{type:String,default:""}},computed:{className:function(){return["avatar","avatar_size-".concat(this.size),"avatar_type-".concat(this.type)]}}};n("5aa0");const ve=g()(he,[["render",be],["__scopeId","data-v-0343665d"]]);var je=ve,Oe={name:"UserItem",components:{Avatar:je},props:{name:{type:String,default:null},alias:{type:String,required:!0},avatar:{type:String,default:null}},setup:function(e){return{prefixedAlias:Object(r["c"])((function(){return fe(e.alias)}))}}};n("fc1c");const ye=g()(Oe,[["render",pe],["__scopeId","data-v-b0638d60"]]);var ge=ye,we=function(e){return Object(r["t"])("data-v-50f74eb6"),e=e(),Object(r["s"])(),e},_e={class:"entity-item"},xe={class:"entity-item__avatar"},Se={class:"entity-item__info"},Ie={class:"entity-item__name"},ke=we((function(){return Object(r["h"])("span",{class:"entity-item__alias"}," Компания ",-1)}));function De(e,t,n,o,i,a){var c=Object(r["y"])("Avatar");return Object(r["r"])(),Object(r["g"])("span",_e,[Object(r["h"])("span",xe,[Object(r["j"])(c,{type:"company",url:n.avatar,name:n.name||o.prefixedAlias},null,8,["url","name"])]),Object(r["h"])("span",Se,[Object(r["h"])("span",Ie,Object(r["B"])(n.name||o.prefixedAlias),1),ke])])}var Ve={name:"CompanyItem",components:{Avatar:je},props:{name:{type:String,default:null},alias:{type:String,required:!0},avatar:{type:String,default:null}},setup:function(e){return{prefixedAlias:Object(r["c"])((function(){return fe(e.alias)}))}}};n("d60e");const Ce=g()(Ve,[["render",De],["__scopeId","data-v-50f74eb6"]]);var qe=Ce,Ae="https://habr.com/kek/v2/publication/suggest-mention",$e={name:"EntitySuggestions",components:{DropdownItem:q,SuggestionsList:oe},props:{modelValue:{type:Array,required:!0},multiple:{type:Boolean},maxSelected:{type:Number,default:NaN},required:{type:Boolean}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,o=ae({initialValue:e.modelValue,responseAdapter:function(e){return e.data.map((function(e){return e.id="".concat(e.type,"-").concat(e.alias),e}))}}),i=o.suggestions,a=o.search;Object(r["E"])((function(){return i.value}),(function(e){n("update:modelValue",e)})),Object(r["E"])((function(){return e.modelValue}),(function(e){i.value=e}));var c=function(e){var t=new URLSearchParams({q:e});a({url:"".concat(Ae,"?").concat(t),method:"GET"})};return{suggestions:i,onSearch:c,search:a,alias:fe}},methods:{dropdownItem:function(e){return"user"===e.type?ge:qe}}};const Ee=g()($e,[["render",i]]);var Be=Ee,Fe={name:"App",components:{EntitySuggestions:Be},data:function(){return{entities:[]}}};const Ne=g()(Fe,[["render",o]]);var Re=Ne,Pe=(n("fce9"),"__clickOutside"),Le="ontouchstart"in document.documentElement?"touchstart":"click",He={beforeMount:function(e,t){if(Te(t)&&t.instance){var n=function(t){e.contains(t.target)||e[Pe].callback(t)};e[Pe]={handler:n,callback:t.value},document.addEventListener(Le,n)}},updated:function(e,t){Te(t)&&(e[Pe].callback=t.value)},unmounted:function(e){e[Pe]&&document.removeEventListener(Le,e[Pe].handler),delete e[Pe]}};function Te(e){return"function"===typeof e.value||(console.error("Value for v-click-outside should be a function"),!1)}var Ke=Object(r["d"])(Re);Ke.directive("click-outside",He),Ke.mount("#app")},"5aa0":function(e,t,n){"use strict";n("cae8")},"625c":function(e,t,n){"use strict";n("f5b3")},"731a":function(e,t,n){},"87ff":function(e,t,n){},a1bc:function(e,t,n){},cab0:function(e,t,n){},cae8:function(e,t,n){},d601:function(e,t,n){"use strict";n("731a")},d60e:function(e,t,n){"use strict";n("a1bc")},df1d:function(e,t,n){"use strict";n("0983")},f5b3:function(e,t,n){},f671:function(e,t,n){"use strict";n("cab0")},fc1c:function(e,t,n){"use strict";n("1379")},fce9:function(e,t,n){}});
//# sourceMappingURL=index.fdc69203.js.map