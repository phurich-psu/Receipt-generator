(function(e){function t(t){for(var n,l,o=t[0],i=t[1],c=t[2],p=0,d=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},s={app:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Receipt-generator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Navbar"),a("v-content",[a("router-view")],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{staticClass:"cyan lighten-1",attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"headline"},[a("span",[e._v("Receipt Generator")])]),a("v-spacer")],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},e._l(e.lists,(function(t){return a("v-list-item",{key:t.text,attrs:{router:"",to:t.route}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[e._v("\n          "+e._s(t.text)+"\n        ")])],1)})),1)],1)},o=[],i={data(){return{drawer:!0,lists:[{icon:"home",text:"Home",route:"/"},{icon:"favorite",text:"Example",route:"/example"},{icon:"person",text:"About",route:"/about"}]}}},c=i,u=a("2877"),p=a("6544"),d=a.n(p),v=a("40dc"),x=a("5bc1"),m=a("132d"),f=a("da13"),b=a("5d23"),y=a("34c3"),h=a("f774"),_=a("2fa4"),g=a("2a7f"),C=Object(u["a"])(c,l,o,!1,null,null,null),T=C.exports;d()(C,{VAppBar:v["a"],VAppBarNavIcon:x["a"],VIcon:m["a"],VListItem:f["a"],VListItemContent:b["a"],VListItemIcon:y["a"],VNavigationDrawer:h["a"],VSpacer:_["a"],VToolbarTitle:g["a"]});var w={name:"App",components:{Navbar:T},data:()=>({})},k=w,V=a("7496"),S=a("a75b"),A=Object(u["a"])(k,s,r,!1,null,null,null),P=A.exports;d()(A,{VApp:V["a"],VContent:S["a"]});var N=a("f309");a("d1e7");n["a"].use(N["a"]);var O=new N["a"]({icons:{iconfont:"mdi"}}),j=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard ma-5"},[a("h1",{staticClass:"subheading grey--text"},[e._v("Receipt Generator")]),a("v-container",[a("v-card",{staticClass:"pa-9"},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg6:"",xl6:""}},[a("div",{staticClass:"caption grey--text text-center"},[e._v("Input")]),a("br"),a("v-form",{attrs:{id:"receipt"}},[a("v-layout",[a("v-flex",{attrs:{lg3:""}},[a("v-select",{attrs:{items:e.font,solo:""},model:{value:e.selectedFont,callback:function(t){e.selectedFont=t},expression:"selectedFont"}})],1),a("v-flex",{attrs:{lg12:""}},[a("v-text-field",{attrs:{label:"Business Name/Enter your own text",solo:""},model:{value:e.businessName,callback:function(t){e.businessName=t},expression:"businessName"}})],1)],1),a("v-text-field",{attrs:{label:"Address/Enter your own text",solo:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("v-text-field",{attrs:{label:"City,State/Enter your own text",solo:""},model:{value:e.cityState,callback:function(t){e.cityState=t},expression:"cityState"}}),a("v-text-field",{attrs:{label:"Phone Number/Enter your own text",solo:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Date","prepend-icon":"event",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},n))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[a("v-date-picker",{on:{input:function(t){e.menu2=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Time","prepend-icon":"access_time",readonly:""},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},n))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e.menu3?a("v-time-picker",{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.menu.save(e.time)}},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):e._e()],1),a("v-layout",[a("v-flex",{attrs:{lg3:""}},[a("v-select",{attrs:{items:e.currency,solo:""},model:{value:e.selectedCurrency,callback:function(t){e.selectedCurrency=t},expression:"selectedCurrency"}})],1),a("v-flex",{attrs:{lg12:""}},[a("v-text-field",{attrs:{label:"Cost",solo:""},model:{value:e.cost,callback:function(t){e.cost=t},expression:"cost"}})],1)],1),a("v-layout",[a("v-flex",{attrs:{lg3:""}},[a("v-select",{attrs:{items:e.tax,"item-text":"taxType","item-value":"taxLabel","persistent-hint":"","return-object":"","single-line":"",solo:""},model:{value:e.selectedTax,callback:function(t){e.selectedTax=t},expression:"selectedTax"}})],1),a("v-flex",{attrs:{lg12:""}},[a("v-text-field",{attrs:{label:"For e.g. 7",solo:""},model:{value:e.taxPercent,callback:function(t){e.taxPercent=t},expression:"taxPercent"}})],1)],1),a("v-text-field",{attrs:{label:"Last 4 digits of card/Enter your own text",rules:e.paymentRules,solo:""},model:{value:e.payment,callback:function(t){e.payment=t},expression:"payment"}}),a("v-text-field",{attrs:{label:"Add Custom Text/Enter your own text",solo:""},model:{value:e.customText,callback:function(t){e.customText=t},expression:"customText"}})],1)],1),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg6:"",xl6:""}},[a("div",{staticClass:"caption grey--text text-center"},[e._v("Receipt")]),a("br"),a("v-card",{staticClass:"mx-auto pa-12 grey lighten-5 font-weight-medium",attrs:{id:"receipt",flat:e.flat,loading:e.loading,outlined:e.outlined,elevation:e.elevation,raised:e.raised,width:"400px",height:"600px"}},[a("v-card-text",{staticClass:"py-1 text-center"},[(e.selectedFont="Bold")?a("span",{staticClass:"font-weight-black"},[e._v(e._s(e.businessName))]):e._e()]),a("v-card-text",{staticClass:"py-1 text-center"},[e._v(e._s(e.address))]),a("v-card-text",{staticClass:"py-1 text-center"},[e._v(e._s(e.cityState))]),a("v-card-text",{staticClass:"py-1 text-center"},[e._v(e._s(e.phone))]),a("v-card-text",{staticClass:"py-1"},[a("span",{staticClass:"text-left"},[e._v(e._s(e.date))]),a("span",{staticClass:"float-right"},[e._v(e._s(e.time))])]),a("v-card-text",{staticClass:"py-3 text-center"},[e._v("SALE")]),a("v-card-text",{staticClass:"py-1"},[a("span",{staticClass:"text-left"},[e._v("AMOUNT")]),a("span",{staticClass:"float-right"},["None"!==e.selectedCurrency?a("span",[e._v(e._s(e.selectedCurrency)+" ")]):e._e(),e._v(e._s(parseFloat(e.cost).toFixed(2)))])]),"No Tax"!==e.selectedTax.taxType?a("v-card-text",{staticClass:"py-1"},[a("span",{staticClass:"text-left"},[e._v(e._s(e.selectedTax.taxLabel))]),a("span",{staticClass:"float-right"},["None"!==e.selectedCurrency?a("span",[e._v(e._s(e.selectedCurrency)+" ")]):e._e(),e._v(e._s((e.cost*e.taxPercent/100).toFixed(2)))])]):e._e(),a("v-card-text",{staticClass:"py-1"},[a("span",{staticClass:"text-left"},[e._v("TOTAL")]),a("span",{staticClass:"float-right"},["None"!==e.selectedCurrency?a("span",[e._v(e._s(e.selectedCurrency)+" ")]):e._e(),e._v(e._s((parseFloat(e.cost)+parseFloat(e.cost*e.taxPercent/100)).toFixed(2)))])]),a("v-card-text",{staticClass:"pt-3 text-center"},[e._v("Payment: "+e._s(e.payment))]),a("v-card-text",{staticClass:"py-1"},[a("span",{staticClass:"text-left"},[e._v("AUTH # "+e._s(e.auth))]),a("span",{staticClass:"float-right"},[e._v("APPR CODE: "+e._s(e.approve))])]),a("v-card-text",{staticClass:"py-1 text-center"},[e._v("APPROVED")]),a("v-card-text",{staticClass:"py-3 text-center"},[e._v(e._s(e.customText))])],1)],1)],1)],1)],1)],1)},L=[],F={data(){return{selectedFont:"Bold",font:["Bold","None"],date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,time:(new Date).toTimeString().substr(0,5),menu2:!1,modal2:!1,menu3:!1,businessName:null,address:null,cityState:null,phone:null,selectedCurrency:"$",currency:["$","€","£","¥","฿","Rs","DHS","HK$","SG$","R$","None"],cost:0,selectedTax:{taxType:"Tax %",taxLabel:"TAX"},tax:[{taxType:"Tax %",taxLabel:"TAX"},{taxType:"Additional %",taxLabel:"ADDITIONAL"},{taxType:"Tip %",taxLabel:"TIP"},{taxType:"VAT %",taxLabel:"VAT"},{taxType:"Sales Tax %",taxLabel:"SALESTAX"},{taxType:"Service %",taxLabel:"SERVICE"},{taxType:"No Tax",taxLabel:""}],taxPercent:0,auth:Math.floor(9e3*Math.random())+1e3,approve:Math.floor(9e7*Math.random())+1e7,payment:null,customText:null,paymentRules:[e=>4==e.length||0==e.length||"Must be 4 digits"]}}},I=F,R=a("b0af"),M=a("99d9"),$=a("a523"),D=a("2e4b"),B=a("0e8f"),G=a("4bd4"),H=a("a722"),U=a("e449"),X=a("b974"),z=a("8654"),J=a("c964"),K=Object(u["a"])(I,E,L,!1,null,null,null),q=K.exports;d()(K,{VCard:R["a"],VCardText:M["a"],VContainer:$["a"],VDatePicker:D["a"],VFlex:B["a"],VForm:G["a"],VLayout:H["a"],VMenu:U["a"],VSelect:X["a"],VTextField:z["a"],VTimePicker:J["b"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example ma-5"},[a("h1",{staticClass:"subheading grey--text"},[e._v("About Me")]),a("v-container",{staticClass:"text-center"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{src:e.images.profile,"max-width":"200","max-height":"200"}})],1),a("br"),a("br"),a("h3",[e._v("5910210688 Phurich Nilvisut (Nell)")]),a("br"),a("br"),a("h3",[e._v("ICT Student, Faculty of Scince, PSU")])],1)],1)},W=[],Y={data(){return{images:{profile:a("8ea6")}}}},Z=Y,ee=a("adda"),te=a("0fd9"),ae=Object(u["a"])(Z,Q,W,!1,null,null,null),ne=ae.exports;d()(ae,{VContainer:$["a"],VImg:ee["a"],VRow:te["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example ma-5"},[a("h1",{staticClass:"subheading grey--text"},[e._v("Example")]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-img",{attrs:{src:e.images.sample,"max-width":"400","max-height":"500"}})],1),a("br"),a("br")],1)],1)},re=[],le={data(){return{images:{sample:a("f194")}}}},oe=le,ie=Object(u["a"])(oe,se,re,!1,null,null,null),ce=ie.exports;d()(ie,{VContainer:$["a"],VImg:ee["a"],VRow:te["a"]}),n["a"].use(j["a"]);var ue=new j["a"]({mode:"history",base:"/Receipt-generator/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"About",component:ne},{path:"/example",name:"Example",component:ce}]});n["a"].config.productionTip=!1,new n["a"]({vuetify:O,router:ue,render:e=>e(P)}).$mount("#app")},"8ea6":function(e,t,a){e.exports=a.p+"img/IMG_0289-1.c74e5851.jpg"},f194:function(e,t,a){e.exports=a.p+"img/sample.dde1d154.jpg"}});
//# sourceMappingURL=app.f9508bf9.js.map