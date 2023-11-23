import{s as ke,r as Ee,o as Te}from"../chunks/scheduler.ce710c66.js";import{S as Me,i as Se,g as c,r as he,s as _,h as f,j as x,u as pe,c as b,y as $,f as g,k as l,l as De,a as le,v as ge,x as t,E as W,B as H,I as Ce,d as ve,t as _e,w as be,m as xe,n as Ie,o as Le}from"../chunks/index.d2955eda.js";import{P as Ve,a as Pe,g as oe}from"../chunks/page.9adf934c.js";import{a as He,t as R}from"../chunks/stores.901aa39e.js";import{c as je}from"../chunks/auth.6035c411.js";import{e as Q}from"../chunks/singletons.ef4a065c.js";function ye(n){let e,s;return{c(){e=c("small"),s=xe(n[2]),this.h()},l(u){e=f(u,"SMALL",{class:!0});var i=x(e);s=Ie(i,n[2]),i.forEach(g),this.h()},h(){l(e,"class","text-red-500")},m(u,i){le(u,e,i),t(e,s)},p(u,i){i&4&&Le(s,u[2])},d(u){u&&g(e)}}}function we(n){let e,s;return{c(){e=c("small"),s=xe(n[3]),this.h()},l(u){e=f(u,"SMALL",{class:!0});var i=x(e);s=Ie(i,n[3]),i.forEach(g),this.h()},h(){l(e,"class","text-red-500")},m(u,i){le(u,e,i),t(e,s)},p(u,i){i&8&&Le(s,u[3])},d(u){u&&g(e)}}}function Ne(n){let e,s,u,i,r,k,O='<h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">Login</h2>',I,A,w,y,E,U,L,a,B,X,T,v,Y,Z,j,ie='<button class="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] opacity-100 cursor-not-allowed cursor-pointer hover:bg-white hover:text-[#f9ca03]" type="submit">Login</button>',ee,V,ue="<span>or</span>",te,M,S,ce="Facebook",se,D,fe="Google",ae,P,de=`<span class="text-sm">Don&#39;t Have an Account?</span> <a href="${`${Q}/signup`}" class="font-medium text-[#f9ca03] hover:text-[#f9ca03]">Signup</a>`,re,C,F,ne,me;s=new Ve({props:{data:n[0]}});let d=n[4]&&ye(n),m=n[4]&&we(n);return C=new Pe({props:{data:n[0]}}),{c(){e=c("main"),he(s.$$.fragment),u=_(),i=c("div"),r=c("div"),k=c("div"),k.innerHTML=O,I=_(),A=_(),w=c("form"),y=c("div"),E=c("div"),U=_(),L=c("div"),a=c("input"),B=_(),d&&d.c(),X=_(),T=c("div"),v=c("input"),Y=_(),m&&m.c(),Z=_(),j=c("div"),j.innerHTML=ie,ee=_(),V=c("div"),V.innerHTML=ue,te=_(),M=c("div"),S=c("button"),S.textContent=ce,se=_(),D=c("button"),D.textContent=fe,ae=_(),P=c("div"),P.innerHTML=de,re=_(),he(C.$$.fragment),this.h()},l(o){e=f(o,"MAIN",{class:!0});var h=x(e);pe(s.$$.fragment,h),u=b(h),i=f(h,"DIV",{class:!0});var z=x(i);r=f(z,"DIV",{class:!0});var p=x(r);k=f(p,"DIV",{"data-svelte-h":!0}),$(k)!=="svelte-1d0zeqt"&&(k.innerHTML=O),I=b(p),A=b(p),w=f(p,"FORM",{class:!0});var q=x(w);y=f(q,"DIV",{class:!0});var N=x(y);E=f(N,"DIV",{id:!0,style:!0}),x(E).forEach(g),U=b(N),L=f(N,"DIV",{});var G=x(L);a=f(G,"INPUT",{class:!0,placeholder:!0,id:!0,minlength:!0,maxlength:!0,type:!0}),B=b(G),d&&d.l(G),G.forEach(g),X=b(N),T=f(N,"DIV",{});var J=x(T);v=f(J,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),Y=b(J),m&&m.l(J),J.forEach(g),N.forEach(g),Z=b(q),j=f(q,"DIV",{"data-svelte-h":!0}),$(j)!=="svelte-1g0b7n0"&&(j.innerHTML=ie),q.forEach(g),ee=b(p),V=f(p,"DIV",{class:!0,"data-svelte-h":!0}),$(V)!=="svelte-3054w9"&&(V.innerHTML=ue),te=b(p),M=f(p,"DIV",{class:!0});var K=x(M);S=f(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(S)!=="svelte-1m9y8zm"&&(S.textContent=ce),se=b(K),D=f(K,"BUTTON",{class:!0,"data-svelte-h":!0}),$(D)!=="svelte-8icvab"&&(D.textContent=fe),K.forEach(g),ae=b(p),P=f(p,"DIV",{class:!0,"data-svelte-h":!0}),$(P)!=="svelte-xarj6g"&&(P.innerHTML=de),p.forEach(g),z.forEach(g),re=b(h),pe(C.$$.fragment,h),h.forEach(g),this.h()},h(){l(E,"id","errorMsg"),De(E,"color","red"),l(a,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),l(a,"placeholder","Enter your Email Address"),l(a,"id","emailInput"),l(a,"minlength","7"),l(a,"maxlength","255"),l(a,"type","email"),l(v,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),l(v,"placeholder","Enter 6 Digit Long Password"),l(v,"minlength","6"),l(v,"maxlength","255"),l(v,"type","password"),l(y,"class","rounded-md shadow-sm -space-y-px"),l(w,"class","mt-8 space-y-6"),l(V,"class","text-center"),l(S,"class","m-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"),l(D,"class","m-2 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),l(M,"class","flex items-center justify-center"),l(P,"class","text-center"),l(r,"class","max-w-md w-full space-y-4 bg-white my-4 px-4 py-4 rounded-md"),l(i,"class","min-h-screen flex items-center justify-center bg-gray-100"),l(e,"class","bg-[#fff]")},m(o,h){le(o,e,h),ge(s,e,null),t(e,u),t(e,i),t(i,r),t(r,k),t(r,I),t(r,A),t(r,w),t(w,y),t(y,E),t(y,U),t(y,L),t(L,a),W(a,n[1].email),t(L,B),d&&d.m(L,null),t(y,X),t(y,T),t(T,v),W(v,n[1].password),t(T,Y),m&&m.m(T,null),t(w,Z),t(w,j),t(r,ee),t(r,V),t(r,te),t(r,M),t(M,S),t(M,se),t(M,D),t(r,ae),t(r,P),t(e,re),ge(C,e,null),F=!0,ne||(me=[H(a,"focus",n[7]),H(a,"input",n[8]),H(v,"focus",n[9]),H(v,"input",n[10]),H(w,"submit",Ce(n[5])),H(S,"click",n[6]),H(D,"click",$e)],ne=!0)},p(o,[h]){const z={};h&1&&(z.data=o[0]),s.$set(z),h&2&&a.value!==o[1].email&&W(a,o[1].email),o[4]?d?d.p(o,h):(d=ye(o),d.c(),d.m(L,null)):d&&(d.d(1),d=null),h&2&&v.value!==o[1].password&&W(v,o[1].password),o[4]?m?m.p(o,h):(m=we(o),m.c(),m.m(T,null)):m&&(m.d(1),m=null);const p={};h&1&&(p.data=o[0]),C.$set(p)},i(o){F||(ve(s.$$.fragment,o),ve(C.$$.fragment,o),F=!0)},o(o){_e(s.$$.fragment,o),_e(C.$$.fragment,o),F=!1},d(o){o&&g(e),be(s),d&&d.d(),m&&m.d(),be(C),ne=!1,Ee(me)}}}function $e(){}function Oe(n,e,s){let u,{data:i}=e,r={email:"",password:""};var k="",O="";let I=!1;function A(){if(r.email==""){s(2,k="Please enter email"),s(4,I=!0);return}if(r.password==""){s(3,O="Please enter password"),s(4,I=!0);return}else s(4,I=!1);if(!u){alert("Please fill all the fields");return}fetch("https://admin.souqpack.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(a=>a.json()).then(a=>{console.log("Success:",a),a.action=="success"?(localStorage.setItem("login_data",JSON.stringify(a.data)),He.set({isLoggedIn:!0,token:a.data.token,user:a.data}),R.set({show:!0,message:"Login Successfull",type:"success"}),localStorage.getItem("myKey")==="fromcheckout"?(localStorage.removeItem("myKey"),oe(`${Q}/checkout`)):oe(`${Q}/dashboard`)):R.set({show:!0,message:a.error,type:"error"})}).catch(a=>{console.error("Error:",a),R.set({show:!0,message:"network error",type:"error"})})}function w(){R.set({show:!0,message:"Under development",type:"info"})}Te(async()=>{await je()&&oe(`${Q}/dashboard`)});const y=()=>s(4,I=!1);function E(){r.email=this.value,s(1,r)}const U=()=>s(4,I=!1);function L(){r.password=this.value,s(1,r)}return n.$$set=a=>{"data"in a&&s(0,i=a.data)},n.$$.update=()=>{n.$$.dirty&2&&(u=r.email.length>3&&r.password.length>6)},[i,r,k,O,I,A,w,y,E,U,L]}class Ge extends Me{constructor(e){super(),Se(this,e,Oe,Ne,ke,{data:0})}}export{Ge as component};
