(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/elangulate-web/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"18c4":function(t,e,n){},"47f2":function(t,e,n){},5626:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-navbar"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"}),n("div",{staticClass:"col-8"},[n("router-view")],1),n("div",{staticClass:"col-2"})])],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[n("div",{staticClass:"container"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("indymorning")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"new-journal-entry",params:{id:1234}}}},[t._v("Make A journal entry")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"relevant-journal-entries",params:{id:1234}}}},[t._v("Browse latest Entries")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"user-registration-page"}}},[t._v("Sign up")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"login-page",params:{id:1234}}}},[t._v("Login")])],1),n("li",{staticClass:"nav-item"},[n("div",{staticClass:"nav-link",on:{click:t.logout}},[t._v("Logout")])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"header-navbar",data:function(){return{}},methods:{logout:function(){this.$cookie.delete("jwt"),this.$router.push("BrowseListingsPage")},searchThreads:function(){this.$router.push("BrowseThreadsPage")}}},l=c,u=n("2877"),d=Object(u["a"])(l,i,o,!1,null,"da61c5ae",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",{staticClass:"align-content-center"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",formControlName:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",formControlName:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("input",{staticClass:"btn btn-dark",attrs:{type:"button",value:"Login"},on:{click:t.login}})])])},m=[],f=n("f499"),g=n.n(f),h=n("bc3a"),_=n.n(h),C={name:"login-page",data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;_.a.post("http://localhost:9001/login",{username:this.username,password:this.password}).then(function(e){console.error("RESPONSE"+g()(e.headers)),t.$cookie.set("jwt",e.headers["authorization"],1),t.$router.push({name:"BrowseThreadsPage"})}).catch(function(t){console.error(t)})}}},b=C,x=Object(u["a"])(b,v,m,!1,null,"d48f5598",null),y=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("div",{staticClass:"input-group mb-3"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username","aria-label":"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email","aria-label":"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3"},[t._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password","aria-label":"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"Register"},on:{click:t.registerUser}})])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Username")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Email")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Password")])])}],j={name:"user-registration-form",data:function(){return{username:"",password:"",email:""}},methods:{registerUser:function(){_.a.post("http://localhost:9001/users/sign-up",{username:this.username,password:this.password,email:this.email}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})}}},E=j,k=Object(u["a"])(E,w,S,!1,null,"7af1fa6b",null),T=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.journalEntries,function(e){return n("div",{key:e.id,staticClass:"card"},[n("div",{on:{click:function(n){return t.switchToSingleJournalEntryView(e.id)}}},[n("p",{staticClass:"card-text"},[t._v(t._s(e.title))]),n("p",{staticClass:"card-text"},[t._v(t._s(e.sentences.foreignLanguage))]),n("p",{staticClass:"card-text"},[t._v(t._s(e.sentences.nativeLanguage))]),t._l(e.sentences,function(e,r){return r<=3?n("div",{key:e.id},[n("div",{staticClass:"card-text"},[t._v(t._s(e.foreignText))])]):t._e()})],2)])}),0)},N=[],P=(n("ac6a"),{name:"relevant-journal-entries",data:function(){return{blag:"",journalEntries:[{sentences:{}}],selectedThread:""}},created:function(){this.fetchThreads()},methods:{fetchThreads:function(){var t=this,e=this.$cookie.get("jwt");console.log(e),_.a.get("http://localhost:9001/journal-entries?page=0&size=20",{headers:{Authorization:e}}).then(function(e){e.data.forEach(function(e){return t.journalEntries.push(e)})},function(t){console.error(t)})},switchToSingleJournalEntryView:function(t){this.$router.push({name:"journal-entry",params:{threadId:t}})}}}),O=P,A=(n("d5b9"),Object(u["a"])(O,$,N,!1,null,"70c4c616",null)),L=A.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("thumbnail-image"),n("div",{staticClass:"title-top"},[n("div",{staticClass:"aParent"},[n("h3",[t._v(t._s(t.entry.title))])])]),n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"lang-header"},[t._v(t._s(t.entry.foreignLanguage))]),t._l(t.entry.sentences,function(e){return n("div",{key:e.id+"1"},[n("div",{staticClass:"card-text"},[t._v(t._s(e.foreignText))])])}),n("hr"),n("div",{staticClass:"lang-header"},[t._v(t._s(t.entry.nativeLanguage))]),t._l(t.entry.sentences,function(e){return n("div",{key:e.id+"2"},[n("div",{staticClass:"card-text"},[t._v(t._s(e.nativeText))])])})],2),n("br"),n("br"),n("div",{staticClass:"card"},[n("h5",[t._v("Suggest corrections")]),t._l(t.entry.sentences,function(e,r){return n("div",{key:e.id+"3"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-text"},[t._v(t._s(e.foreignText))]),n("div",{staticClass:"card-text greyed"},[t._v(t._s(e.nativeText))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentCorrections[r],expression:"currentCorrections[index]"}],staticClass:"form-control",attrs:{type:"text",value:"Sentence correction"},domProps:{value:t.currentCorrections[r]},on:{input:function(e){e.target.composing||t.$set(t.currentCorrections,r,e.target.value)}}})])])}),n("input",{staticClass:"btn btn-outline-dark",attrs:{type:"button",value:"Suggest corrections"},on:{click:function(e){return t.submitCorrectionSet(t.currentCorrections,t.entry)}}})],2)]),n("div",{staticClass:"card correction-sets-container"},[t._v("\n        Correction sets\n        "),t._l(t.liveCorrectionSets,function(e){return n("div",{key:e.id,staticClass:"card correction-sets-list"},[n("div",{staticClass:"correction-set"},[n("div",{staticClass:"avatar"},[n("div",{},[n("thumbnail-image")],1),n("div",{},[t._v("\n                        Corrector: Yamrmi Bobski\n                    ")])]),t._l(e.corrections,function(e){return n("div",{key:e.id},[t._v("\n                    "+t._s(e.title)+"\n                    "),n("correction",{attrs:{correction:e,originalText:t.findSpecificSentence(0)}})],1)})],2)])})],2)],1)},I=[],J=(n("7514"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),M=[],z={name:"new-correction-set"},U=z,B=Object(u["a"])(U,J,M,!1,null,"15e2949c",null),D=(B.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")}),H=[],R={name:"CorrectionSet"},G=R,V=Object(u["a"])(G,D,H,!1,null,"663b6a85",null),Y=(V.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stitched-collection"},[n("div",{staticClass:"card"},[n("div",{staticClass:"original-text"},[t._v("\n            "+t._s(t.originalText)+"\n        ")]),n("div",{},t._l(t.correction.correctionSteps,function(e){return n("div",{key:e.id,staticClass:"aParent"},["ADD"==e.action?n("div",{staticClass:"ins"},[t._v(t._s(e.text))]):t._e(),"REMOVE"==e.action?n("div",{staticClass:"del"},[t._v(t._s(e.text))]):t._e(),"NO_CHANGE"==e.action?n("div",{staticClass:"no-change"},[t._v(t._s(e.text))]):t._e()])}),0)])])}),q=[],K={name:"correction",props:{correction:{correctionSteps:{action:String,text:String}},originalText:String},methods:{getFullCorrection:function(t){var e="";return t.correctionSteps.forEach(function(t){"ADD"!==t.action&&"NO_CHANGE"!==t.action||(e=e.concat(t.text))}),e}}},Q=K,W=(n("8369"),Object(u["a"])(Q,Y,q,!1,null,"7bb35c0d",null)),X=W.exports,Z={name:"journal-entry",components:{Correction:X},data:function(){return{id:"",entry:{},currentCorrections:[],liveCorrectionSets:[]}},created:function(){this.id=this.$route.params.threadId,this.fetchJournalEntry(this.id),this.fetchCorrectionSets()},methods:{fetchJournalEntry:function(t){var e=this,n=this.$cookie.get("jwt");_.a.get("http://localhost:9001/journal-entries/".concat(t),{headers:{Authorization:n}}).then(function(t){e.entry=t.data,e.currentCorrections=new Array(e.entry.sentences.length)},function(t){console.error(t)})},fetchCorrectionSets:function(){var t=this,e=this.$cookie.get("jwt");_.a.get("http://localhost:9001/correction-sets",{headers:{Authorization:e}}).then(function(e){t.liveCorrectionSets=e.data},function(t){console.error(t)})},findSpecificSentence:function(t){var e=this.entry.sentences.find(function(e){return e.id===t});if(e)return console.log(this.entry.sentences),e.foreignText},getFullCorrection:function(t){var e="";return t.correctionSteps.forEach(function(t,n){"ADD"!==t.action&&"NO_CHANGE"!==t.action||(e=e.concat(t.text))}),e},submitCorrectionSet:function(t,e){var n=this,r=this.$cookie.get("jwt"),a=[];e.sentences.forEach(function(e,n){var r=t[n]?t[n]:null;a.push({sentenceId:e.id,correctionText:r})});var s={journalEntryId:e.id,corrections:a};_.a.post("http://localhost:9001/correction-sets",s,{headers:{Authorization:r}}).then(function(t){console.log("saved correction set"+t),n.liveCorrectionSets.push(t.data)},function(t){console.error(t)})}}},tt=Z,et=(n("df7b"),Object(u["a"])(tt,F,I,!1,null,"07b2d896",null)),nt=et.exports,rt={name:"app",components:{BrowseThreadsPage:L,UserRegistrationPage:T,HeaderNavbar:p,JournalEntry:nt,LoginPage:y}},at=rt,st=(n("034f"),Object(u["a"])(at,a,s,!1,null,null,null)),it=st.exports,ot=n("8c4f"),ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",[n("div",{staticClass:"input-group mb-3"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title","aria-label":"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._l(t.sentences,function(e,r){return n("div",{key:r},[t._v("\n        Sentence "+t._s(r)+":\n        "),n("div",[t._v("\n            "+t._s(e.foreignText)+"\n        ")]),n("div",[t._v("\n            "+t._s(e.nativeText)+"\n        ")])])}),n("div",{staticClass:"input-group mb-3"},[t._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentForeignSentence,expression:"currentForeignSentence"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Foreign text"},domProps:{value:t.currentForeignSentence},on:{input:function(e){e.target.composing||(t.currentForeignSentence=e.target.value)}}})]),n("div",{staticClass:"input-group mb-3"},[t._m(2),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentNativeSentence,expression:"currentNativeSentence"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Native translation"},domProps:{value:t.currentNativeSentence},on:{input:function(e){e.target.composing||(t.currentNativeSentence=e.target.value)}}})]),n("input",{staticClass:"btn btn-primary",attrs:{type:"button",value:"Add another sentence"},on:{click:function(e){return t.addAnotherSentence()}}}),n("input",{staticClass:"btn btn-success",attrs:{type:"button",value:"Submit Thread"},on:{click:function(e){return t.submitJournalEntry()}}})],2)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Title")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Foreign text")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text"},[t._v("Native translation")])])}],ut={name:"new-journal-entry",data:function(){return{title:"",foreignLanguage:"",nativeLanguage:"",sentences:[],currentForeignSentence:"",currentNativeSentence:""}},created:function(){this.sentences=[]},methods:{submitJournalEntry:function(){var t=this,e=this.$cookie.get("jwt"),n=this.sentences.map(function(e,n){return{foreignText:t.sentences[n].foreignText,nativeText:t.sentences[n].nativeText}});console.log("Sentences"+g()(n)),_.a.post("http://localhost:9001/journal-entries",{title:this.title,foreignLanguage:"JAPANESE",nativeLanguage:"ENGLISH",sentences:this.sentences},{headers:{Authorization:e}}).then(function(e){var n=e.data.id;t.$router.push({name:"journal-entry",params:{threadId:n}})},function(t){console.error(t)})},addAnotherSentence:function(){this.sentences.push({foreignText:this.currentForeignSentence,nativeText:this.currentNativeSentence})}}},dt=ut,pt=Object(u["a"])(dt,ct,lt,!1,null,"d3bb112e",null),vt=pt.exports;r["a"].use(ot["a"]);var mt=new ot["a"]({mode:"history",routes:[{path:"/",component:L},{path:"/login",name:"login-page",component:y},{path:"/user-registration",name:"user-registration-page",component:T},{path:"/journal-entries/new",name:"new-journal-entry",component:vt},{path:"/journal-entries/:threadId",name:"journal-entry",component:nt,props:!0},{path:"/journal-entries",name:"relevant-journal-entries",component:L}]}),ft=(n("f9e3"),n("2dd8"),n("ecee")),gt=n("c074"),ht=n("ad3d"),_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aParent"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"userThumbnail card-img-top float-left",attrs:{src:t.randomImage(),alt:""}})])])},Ct=[],bt={name:"ThumbnailImage",methods:{randomImage:function(){var t=Math.floor(Math.random()*Math.floor(2));return 0==t?"/girl1.jpg":"/girl2.jpg"}}},xt=bt,yt=(n("5d5e"),Object(u["a"])(xt,_t,Ct,!1,null,"1805bed8",null)),wt=yt.exports;ft["c"].add(gt["a"]),ft["c"].add(gt["b"]);var St=n("00e7");r["a"].use(St),r["a"].component("font-awesome-icon",ht["a"]),r["a"].component("thumbnail-image",wt),r["a"].config.productionTip=!1,new r["a"]({router:mt,components:{App:it},render:function(t){return t(it)}}).$mount("#app")},"5d5e":function(t,e,n){"use strict";var r=n("47f2"),a=n.n(r);a.a},"64a9":function(t,e,n){},8369:function(t,e,n){"use strict";var r=n("5626"),a=n.n(r);a.a},bf81:function(t,e,n){},d5b9:function(t,e,n){"use strict";var r=n("bf81"),a=n.n(r);a.a},df7b:function(t,e,n){"use strict";var r=n("18c4"),a=n.n(r);a.a}});
//# sourceMappingURL=app.abe8d275.js.map