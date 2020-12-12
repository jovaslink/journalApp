(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),o=a.n(c),i=a(6),u=a(7),l=a.n(u),s=a(10),m=a(19),d=a(28);a(70),a(73);d.a.initializeApp({apiKey:"AIzaSyAjFySsPBpTJXo50wwPpkb4ohxc8_cTLYk",authDomain:"journalapp-55c2e.firebaseapp.com",databaseURL:"https://journalapp-55c2e.firebaseio.com",projectId:"journalapp-55c2e",storageBucket:"journalapp-55c2e.appspot.com",messagingSenderId:"634861537777",appId:"1:634861537777:web:f166eb03477960ccc95c50"});var p=d.a.firestore(),f=new d.a.auth.GoogleAuthProvider,b=a(20),h=a(9),E=a(35),v=function(e){var t=e.isLoggedIn,a=e.component,n=Object(E.a)(e,["isLoggedIn","component"]);return r.a.createElement(h.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(h.a,{to:"/"}):r.a.createElement(a,e)}}))},g=function(e){var t=e.isLoggedIn,a=e.component,n=Object(E.a)(e,["isLoggedIn","component"]);return r.a.createElement(h.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(h.a,{to:"/auth/login"})}}))},j=a(33),O=a(4),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target;c(Object(O.a)(Object(O.a)({},r),{},Object(j.a)({},t.name,t.value)))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)};return[o,r,i]},y="[Auth] Login",N="[Auth] Logout",w="[UI] Error",k="[UI] Remove Error",x="[UI] Loading Start",C="[UI] Loading Finish",I="[NOTES] Add Note",S="[NOTES] Active Note",L="[NOTES] Load Notes",R="[NOTES] Update Note",D="[NOTES] Delete Note",T="[NOTES] Logout Cleaning",A=a(11),Y=a.n(A),P=function(e){return{type:w,payload:e}},B=function(){return{type:k}},U=function(){return{type:x}},M=function(){return{type:C}},q=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("".concat(t,"/journal/notes")).orderBy("date","desc").get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(O.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/drqrch61u/upload",(a=new FormData).append("upload_preset","bmi5bgwd"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/drqrch61u/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){return{type:S,payload:Object(O.a)({id:e},t)}},G=function(e){return{type:L,payload:e}},W=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:n=t.sent,a(G(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(){return function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r=a().notes.active.id,delete(c=a().notes.active).id,c.url||delete c.url,e.next=7,p.doc("".concat(n,"/journal/notes/").concat(r)).update(c);case 7:t(X(r,c)),Y.a.fire("Saved",c.title,"success");case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},X=function(e,t){return{type:R,payload:{id:e,note:Object(O.a)({id:e},t)}}},K=function(e){return{type:D,payload:e}},V=function(e,t){return{type:I,payload:Object(O.a)({id:e},t)}},H=function(e,t){return{type:y,payload:{uid:e,displayName:t}}},Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).ui.loading,a=_({email:"jovaslink@hotmail.com",password:"123456"}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=o.email,l=o.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(a){a(U()),d.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(B()),a(H(t.uid,t.displayName)),a(M())})).catch((function(e){a(M()),a(P(e.message)),Y.a.fire("ERROR",e.message,"error")}))}}(u,l))},className:"animate__animated animate__fadeIn"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:u,className:"auth__input",autoComplete:"off",onChange:c}),r.a.createElement("input",{type:"password",placeholder:"Password",value:l,name:"password",onChange:c,className:"auth__input"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks",onClick:function(){e((function(e){d.a.auth().signInWithPopup(f).then((function(t){var a=t.user;e(H(a.uid,a.displayName))}))}))}},r.a.createElement("p",null,"Login con redes sociales"),r.a.createElement("div",{className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in con google")))),r.a.createElement(b.b,{to:"/auth/register",className:"link"},"Crear nueva cuenta")))},Z=a(58),$=a.n(Z),ee=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).ui.loading,a=_({name:"jovaslink",email:"jovaslink@hotmail.com",password:"123456",password2:"123456"}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=o.name,p=o.email,f=o.password,h=o.password2,E=function(){return 0===u.trim().length?(e(P("El nombre es requerido")),Y.a.fire("ERROR","El nombre es requerido","error"),!1):$.a.isEmail(p)?f.length<5||f!==h?(e(P("El password no coincide o es menor a 5 caracteres")),Y.a.fire("ERROR","El password no coincide o es menor a 5 caracteres","error"),!1):(e(B()),!0):(e(P("Email invalido")),Y.a.fire("ERROR","Email invalido","error"),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Registro"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E()&&e(function(e,t,a){return function(n){n(U()),d.a.auth().createUserWithEmailAndPassword(t,a).then(function(){var t=Object(s.a)(l.a.mark((function t(a){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.user,t.next=3,r.updateProfile({displayName:e});case 3:n(B()),n(H(r.uid,r.displayName)),n(M());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){n(M()),n(P(e.message)),Y.a.fire("ERROR",e.message,"error")}))}}(u,p,f))},className:"animate__animated animate__fadeIn"},r.a.createElement("input",{type:"text",placeholder:"Nombre",name:"name",value:u,onChange:c,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:p,onChange:c,className:"auth__input",autoComplete:"off"}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:f,onChange:c,className:"auth__input"}),r.a.createElement("input",{type:"password",placeholder:"Confirmar password",name:"password2",value:h,onChange:c,className:"auth__input"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5",disabled:t},"Registro"),r.a.createElement(b.b,{to:"/auth/login",className:"link"},"\xbfYa est\xe1s registrado?")))},te=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/auth/login",component:Q}),r.a.createElement(h.b,{exact:!0,path:"/auth/register",component:ee}),r.a.createElement(h.a,{to:"/auth/login"}))))},ae=a(34),ne=a.n(ae),re=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=Object(i.b)(),l=ne()(a);return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){u(z(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__card"},r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,l.format("DD")),r.a.createElement("h5",null,l.format("MMM")),r.a.createElement("h4",null,l.format("YYYY")))))},ce=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(re,Object.assign({key:e.id},e))})))},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).auth.name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"fas fa-code"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signOut();case 2:t({type:N}),t({type:T});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,p.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(z(c.id,r)),t(V(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-robot fa-5x"}),r.a.createElement("p",{className:"mt-5"},"Nueva entrada")),r.a.createElement(ce,null))},ie=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes.active})),a=t.date,n=t.id,c=ne()(a),o=function(){e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,p.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(K(e)),Y.a.fire("Deleted","Note deleted","success");case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(n))};return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,c.format("DD")," ",c.format("MMM")," ",c.format("YYYY")),r.a.createElement("input",{type:"file",style:{display:"none"},id:"fileselector",name:"file",onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c,o,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y.a.fire({title:"Uploading...",text:"Wait a moment...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){Y.a.showLoading()}}),t.next=3,F(e);case 3:r=t.sent,c=n().notes.active.id,o=n().notes.active,i=Object(O.a)(Object(O.a)({},o),{},{url:r}),a(z(c,i)),a(J()),Y.a.close();case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileselector").click()}},"Imagen"),r.a.createElement("button",{onClick:function(){e(J())},className:"btn"},"Guardar"),r.a.createElement("button",{onClick:function(){Y.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&o()}))},className:"btn"},"Borrar")))},ue=function(){var e=Object(i.c)((function(e){return e.notes})),t=e.active,a=e.active,c=Object(i.b)(),o=a.url,u=_(t),l=Object(m.a)(u,3),s=l[0],d=l[1],p=l[2],f=d.title,b=d.body,h=Object(n.useRef)(t.id);return Object(n.useEffect)((function(){t.id!==h.current&&(p(t),h.current=t.id)}),[t,p]),Object(n.useEffect)((function(){c(z(d.id,Object(O.a)({},d)))}),[d,c]),r.a.createElement("div",{className:"notes__main-content animate__animated animate__fadeIn"},o&&r.a.createElement("div",{className:"notes__image",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement(ie,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Inicia con un t\xedtulo",className:"notes__title-input",autoComplete:"off",name:"title",value:f,onChange:s}),r.a.createElement("textarea",{placeholder:"Escribe algo...",className:"notes__textarea",name:"body",value:b,onChange:s})))},le=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Selecciona una entrada",r.a.createElement("br",null),"o crea una."),r.a.createElement("i",{className:"fas fa-code fa-4x mt-5"}))},se=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn"},r.a.createElement(oe,null),r.a.createElement("main",null,e?r.a.createElement(ue,null):r.a.createElement(le,null)))};function me(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),p=Object(m.a)(u,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(H(a.uid,a.displayName)),E(!0),e(W(a.uid)),o(!1)):(E(!1),o(!1));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,E]),c?r.a.createElement("h1",null,"Espere..."):r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(v,{path:"/auth",isLoggedIn:f,component:te}),r.a.createElement(g,{exact:!0,path:"/",isLoggedIn:f,component:se}),r.a.createElement(h.a,{to:"auth/login"}))))}var de=a(21),pe=a(59),fe={loading:!1,msgError:null},be=a(43),he={notes:[],active:null},Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ve=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{uid:t.payload.uid,name:t.payload.displayName};case N:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(O.a)(Object(O.a)({},e),{},{msgError:t.payload});case k:return Object(O.a)(Object(O.a)({},e),{},{msgError:null});case x:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case C:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(O.a)(Object(O.a)({},e),{},{active:Object(O.a)({},t.payload)});case L:return Object(O.a)(Object(O.a)({},e),{},{notes:Object(be.a)(t.payload)});case R:return Object(O.a)(Object(O.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case D:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case T:return he;case I:return Object(O.a)(Object(O.a)({},e),{},{notes:[t.payload].concat(Object(be.a)(e.notes))});default:return e}}}),ge=Object(de.e)(ve,Ee(Object(de.a)(pe.a))),je=function(){return r.a.createElement(i.a,{store:ge},r.a.createElement(me,null))};a(152);o.a.render(r.a.createElement(je,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(153)}},[[60,1,2]]]);
//# sourceMappingURL=main.55292045.chunk.js.map