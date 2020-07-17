(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/notes-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"040a":function(t,e,n){"use strict";var o=n("ac6c"),r=n.n(o);r.a},"11cc":function(t,e,n){},"18ea":function(t,e,n){"use strict";var o=n("ade7"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{attrs:{id:"nav"}},[n("div",{staticClass:"nav-content"},[n("router-link",{attrs:{to:"/"}},[n("h1",{attrs:{id:"logo"}},[t._v("Notes")])]),n("div",{staticClass:"nav-buttons"},[n("router-link",{attrs:{to:"/notes/new"}},[n("RoundButton",{attrs:{color:"white"}},[t._v("+")])],1)],1)],1)]),n("main",{attrs:{id:"main"}},[n("Container",[n("router-view")],1)],1)])},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._t("default")],2)},i=[],c={name:"Container"},u=c,l=(n("9c6f"),n("2877")),d=Object(l["a"])(u,s,i,!1,null,"15104210",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"round-btn",class:[t.color,t.size],on:{click:t.onClick}},[t._t("default")],2)},p=[],h={name:"RoundButton",props:{color:String,size:String},methods:{onClick:function(){this.$emit("onClick")}}},v=h,b=(n("c016"),Object(l["a"])(v,m,p,!1,null,"af452d62",null)),g=b.exports,w={components:{RoundButton:g,Container:f}},x=w,k=(n("034f"),Object(l["a"])(x,r,a,!1,null,null,null)),C=k.exports,_=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",[t._l(t.notes,(function(e){return n("Column",{key:e.id,attrs:{xs:6,sm:3,md:2,lg:1}},[n("NoteItem",{attrs:{note:e},on:{clickDelete:function(n){return t.onNoteDelete(e.id)}}})],1)})),n("ConfirmDialog",{attrs:{show:t.showDialog,"on-confirm":t.deleteNote,"on-cancel":function(){return t.showDialog=!1}}},[t._v(" Вы уверены? ")])],2)},O=[],j=n("5530"),y=n("2f62"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._t("default")],2)},$=[],R={name:"Row"},T=R,E=(n("18ea"),Object(l["a"])(T,D,$,!1,null,"8c7ad572",null)),P=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column",class:t.columnClasses},[t._t("default")],2)},V=[],B=(n("a9e3"),{name:"Column",computed:{columnClasses:function(){var t=[];return this.xs&&t.push("xs-".concat(this.xs)),this.sm&&t.push("sm-".concat(this.sm)),this.md&&t.push("md-".concat(this.md)),this.lg&&t.push("lg-".concat(this.lg)),t}},props:{xs:Number,sm:Number,md:Number,lg:Number}}),I=B,L=(n("cd1c"),Object(l["a"])(I,S,V,!1,null,"a76844ca",null)),A=L.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("router-link",{attrs:{to:"/notes/"+t.note.id+"/edit"}},[n("div",{staticClass:"note-short-content"},[n("div",{staticClass:"todo-list"},[t._l(t.shortTodos,(function(e,o){return n("div",{key:o,staticClass:"todo-item"},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked}}),t._v(" "+t._s(e.text.length>15?e.text.slice(0,15)+"...":e.text)+" ")])])})),t.note.todos.length>5?n("div",{staticClass:"more-sign"},[t._v(" ... ")]):t._e()],2)]),n("div",{staticClass:"note-name"},[t._v(" "+t._s(t.note.name)+" ")])]),n("RoundButton",{staticClass:"delete-btn",attrs:{color:"red",size:"small"},on:{onClick:t.onClickDelete}},[t._v(" x ")])],1)},z=[],F=(n("fb6a"),{name:"NoteItem",components:{RoundButton:g},props:{note:{id:0,name:"",todos:[]}},computed:{shortTodos:function(){return this.note.todos.slice(0,4)}},methods:{onClickDelete:function(){this.$emit("clickDelete")}}}),H=F,J=(n("da4a"),Object(l["a"])(H,M,z,!1,null,"8dc7e87e",null)),q=J.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classList,attrs:{id:"confirm-dialog"}},[n("div",{staticClass:"dialog-background"}),n("div",{staticClass:"dialog-content"},[n("p",{staticClass:"dialog-text"},[t._t("default")],2),n("div",{staticClass:"dialog-buttons"},[n("button",{staticClass:"btn btn-green",on:{click:t.onConfirm}},[t._v(" Да ")]),n("button",{staticClass:"btn btn-red",on:{click:t.onCancel}},[t._v(" Отменить ")])])])])},K=[],Q={name:"ConfirmDialog",props:{show:Boolean,onConfirm:Function,onCancel:Function},data:function(){return{classList:["hide","hiding"]}},computed:{showDialog:function(){return this.show}},watch:{showDialog:function(t,e){var n=this;if(e!==t)switch(this.classList=[],t){case!1:this.classList.push("hiding"),setTimeout((function(){n.classList.push("hide")}),300);break;case!0:this.classList.push("show");break;default:break}}}},U=Q,W=(n("9486"),Object(l["a"])(U,G,K,!1,null,"27d707d5",null)),X=W.exports,Y={name:"Home",components:{ConfirmDialog:X,NoteItem:q,Column:A,Row:P},data:function(){return{deleteId:0,showDialog:!1}},computed:Object(j["a"])({},Object(y["c"])(["notes"])),methods:Object(j["a"])(Object(j["a"])({},Object(y["b"])(["getNotes","removeNote"])),{},{onNoteDelete:function(t){this.deleteId=t,this.showDialog=!0},deleteNote:function(){this.removeNote(this.deleteId),this.getNotes(),this.showDialog=!1}}),created:function(){this.getNotes()}},Z=Y,tt=Object(l["a"])(Z,N,O,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit-note"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.isNewNote?"Создать":"Изменить")+" заметку")])]),n("div",{attrs:{id:"edit-form"}},[n("form",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errorText,expression:"errorText"}],staticClass:"form-item error"},[t._v(" "+t._s(t.errorText)+" ")]),n("div",{staticClass:"form-item"},[n("label",{attrs:{for:"name-input"}},[t._v(" Название ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.name,expression:"note.name"}],key:"name",attrs:{id:"name-input",type:"text"},domProps:{value:t.note.name},on:{input:function(e){e.target.composing||t.$set(t.note,"name",e.target.value)}}})]),n("div",{staticClass:"form-item"},[n("label",[t._v(" Todo список ")]),n("ul",{staticClass:"todo-list"},[t._l(t.note.todos,(function(e,o){return n("li",{key:o,staticClass:"todo"},[n("Checkbox",{model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"todo.checked"}}),n("label",{staticClass:"todo-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"todo.text"}],key:e.i,attrs:{type:"text"},domProps:{value:e.text},on:{input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}})]),n("button",{staticClass:"delete-todo",on:{click:function(e){return e.preventDefault(),t.removeTodo(o)}}},[t._v(" x ")])],1)})),n("li",[n("button",{staticClass:"btn btn-block btn-blue",on:{click:function(e){return e.preventDefault(),t.addTodo(e)}}},[t._v(" Добавить ")])])],2)]),n("div",{staticClass:"control-btns"},[n("button",{staticClass:"btn btn-green",on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v(" Сохранить ")]),n("button",{staticClass:"btn btn-red",on:{click:function(e){e.preventDefault(),t.showDialog=!0}}},[t._v(" Отменить ")])])])]),n("ConfirmDialog",{attrs:{show:t.showDialog,"on-confirm":t.cancel,"on-cancel":function(){return t.showDialog=!1}}},[t._v(" Вы уверены? ")])],1)},ot=[],rt=(n("a434"),n("b0c0"),n("498a"),n("96cf"),n("1da1")),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"todo-check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputVal)?t._i(t.inputVal,null)>-1:t.inputVal},on:{change:function(e){var n=t.inputVal,o=e.target,r=!!o.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);o.checked?s<0&&(t.inputVal=n.concat([a])):s>-1&&(t.inputVal=n.slice(0,s).concat(n.slice(s+1)))}else t.inputVal=r}}}),n("span",{staticClass:"checkmark"})])},st=[],it={name:"Checkbox",props:{value:Boolean},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},ct=it,ut=(n("af50"),Object(l["a"])(ct,at,st,!1,null,"095fb620",null)),lt=ut.exports,dt={name:"EditNote",components:{ConfirmDialog:X,Checkbox:lt},data:function(){return{note:{name:"",todos:[]},errorText:"",showDialog:!1}},computed:{isNewNote:function(){return this.$route.meta.newNote}},methods:Object(j["a"])(Object(j["a"])({},Object(y["b"])(["saveNote"])),{},{addTodo:function(){this.note.todos.push({text:"",checked:!1})},removeTodo:function(t){this.note.todos.splice(t,1)},save:function(){var t=this;return Object(rt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.note.name=t.note.name.trim(),t.note.name.length){e.next=4;break}return t.errorText="Название не может быть пустым",e.abrupt("return");case 4:if(t.note.todos.length){e.next=7;break}return t.errorText="Необходимо добавить хотя бы один todo пункт",e.abrupt("return");case 7:return e.next=9,t.saveNote(t.note);case 9:t.$router.history.push("/");case 10:case"end":return e.stop()}}),e)})))()},cancel:function(){this.showDialog=!1,this.$router.history.push("/")}}),created:function(){var t=this;return Object(rt["a"])(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isNewNote){e.next=2;break}return e.abrupt("return");case 2:if(n=t.$route.params.id,o=t.$store.state.notes,o.length){e.next=8;break}return e.next=7,t.$store.dispatch("getNotes");case 7:o=t.$store.state.notes;case 8:if(r=o[n],r){e.next=12;break}return t.$router.history.push("/notes/new"),e.abrupt("return");case 12:t.note=r;case 13:case"end":return e.stop()}}),e)})))()},beforeRouteLeave:function(t,e,n){this.note={name:"",todos:[]},n()}},ft=dt,mt=(n("040a"),Object(l["a"])(ft,nt,ot,!1,null,"29909f4c",null)),pt=mt.exports;o["a"].use(_["a"]);var ht=[{path:"/",name:"Home",component:et,meta:{title:"Главная"}},{path:"/notes/new",name:"Create",component:pt,meta:{title:"Создать заметку",newNote:!0}},{path:"/notes/:id/edit",name:"Edit",component:pt,meta:{title:"Изменить заметку"}}],vt=new _["a"]({mode:"history",base:"/notes-app/",routes:ht});vt.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));var bt,gt=vt,wt=(n("d3b7"),"notesdb"),xt="notes",kt=1;function Ct(){return _t.apply(this,arguments)}function _t(){return _t=Object(rt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){if(bt)return t(bt);var n=window.indexedDB.open(wt,kt);n.onerror=function(t){console.log("Error opening db",t),e(t)},n.onsuccess=function(e){bt=e.target.result,t(bt)},n.onupgradeneeded=function(t){var e=t.target.result;e.createObjectStore(xt,{autoIncrement:!0,keyPath:"id"})}})));case 1:case"end":return t.stop()}}),t)}))),_t.apply(this,arguments)}var Nt={deleteNote:function(t){return Object(rt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ct();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var o=n.transaction([xt],"readwrite");o.oncomplete=function(){e()};var r=o.objectStore(xt);r.delete(t)})));case 4:case"end":return e.stop()}}),e)})))()},getNotes:function(){return Object(rt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ct();case 2:return e=t.sent,t.abrupt("return",new Promise((function(t){var n=e.transaction([xt],"readonly"),o={};n.oncomplete=function(){t(o)};var r=n.objectStore(xt);r.openCursor().onsuccess=function(t){var e=t.target.result;e&&(o[e.value.id]=e.value,e.continue())}})));case 4:case"end":return t.stop()}}),t)})))()},saveNote:function(t){return Object(rt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ct();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var o=n.transaction([xt],"readwrite");o.oncomplete=function(){e()};var r=o.objectStore(xt);r.put(t)})));case 4:case"end":return e.stop()}}),e)})))()}};o["a"].use(y["a"]);var Ot=new y["a"].Store({state:{notes:{}},mutations:{SET_NOTES:function(t,e){t.notes=e}},actions:{saveNote:function(t,e){return Nt.saveNote(e)},getNotes:function(t){return Object(rt["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Nt.getNotes();case 3:o=e.sent,n("SET_NOTES",o);case 5:case"end":return e.stop()}}),e)})))()},removeNote:function(t,e){return Nt.deleteNote(e)}}});o["a"].config.productionTip=!1,new o["a"]({router:gt,store:Ot,render:function(t){return t(C)}}).$mount("#app")},"5e32":function(t,e,n){},"66aa":function(t,e,n){},"85ec":function(t,e,n){},9486:function(t,e,n){"use strict";var o=n("11cc"),r=n.n(o);r.a},"9c6f":function(t,e,n){"use strict";var o=n("ef6e"),r=n.n(o);r.a},ac6c:function(t,e,n){},ade7:function(t,e,n){},af50:function(t,e,n){"use strict";var o=n("c837"),r=n.n(o);r.a},c016:function(t,e,n){"use strict";var o=n("66aa"),r=n.n(o);r.a},c837:function(t,e,n){},cd1c:function(t,e,n){"use strict";var o=n("5e32"),r=n.n(o);r.a},da4a:function(t,e,n){"use strict";var o=n("ff96"),r=n.n(o);r.a},ef6e:function(t,e,n){},ff96:function(t,e,n){}});
//# sourceMappingURL=app.ca1cf606.js.map