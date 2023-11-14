import{s as be,r as _e,o as ye}from"../chunks/scheduler.ce710c66.js";import{S as xe,i as we,g as r,r as de,s as b,m as Ie,h as o,j as _,u as fe,c as y,y as j,f as h,n as Te,k as s,a as Le,v as me,x as e,D as F,A as H,G as Ee,d as pe,t as ge,w as he}from"../chunks/index.f931a049.js";import{P as De,a as ke,g as ve}from"../chunks/page.661bd650.js";import{a as $e,t as G}from"../chunks/stores.0f01ffe6.js";import{c as Ce}from"../chunks/auth.6035c411.js";import{e as te}from"../chunks/singletons.7c48d7fc.js";function Ve(l){let u,i,E,x,n,c,O='<h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">Login</h2>',C,V,g,t,S,m,J,M,p,W,P,v,R,q,U,K,D,se="<span>or</span>",Q,w,I,ae="Facebook",X,T,ne="Google",Y,k,re=`<span class="text-sm">Don&#39;t Have an Account?</span> <a href="${`${te}/signup`}" class="font-medium text-[#f9ca03] hover:text-[#f9ca03]">Signup</a>`,Z,L,$,ee,oe;return i=new De({props:{data:l[0]}}),L=new ke({props:{data:l[0]}}),{c(){u=r("main"),de(i.$$.fragment),E=b(),x=r("div"),n=r("div"),c=r("div"),c.innerHTML=O,C=b(),V=b(),g=r("form"),t=r("div"),S=r("div"),m=r("input"),J=b(),M=r("div"),p=r("input"),W=b(),P=r("div"),v=r("button"),R=Ie("Login"),K=b(),D=r("div"),D.innerHTML=se,Q=b(),w=r("div"),I=r("button"),I.textContent=ae,X=b(),T=r("button"),T.textContent=ne,Y=b(),k=r("div"),k.innerHTML=re,Z=b(),de(L.$$.fragment),this.h()},l(a){u=o(a,"MAIN",{class:!0});var d=_(u);fe(i.$$.fragment,d),E=y(d),x=o(d,"DIV",{class:!0});var N=_(x);n=o(N,"DIV",{class:!0});var f=_(n);c=o(f,"DIV",{"data-svelte-h":!0}),j(c)!=="svelte-1d0zeqt"&&(c.innerHTML=O),C=y(f),V=y(f),g=o(f,"FORM",{class:!0});var z=_(g);t=o(z,"DIV",{class:!0});var A=_(t);S=o(A,"DIV",{});var le=_(S);m=o(le,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),le.forEach(h),J=y(A),M=o(A,"DIV",{});var ie=_(M);p=o(ie,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),ie.forEach(h),A.forEach(h),W=y(z),P=o(z,"DIV",{});var ue=_(P);v=o(ue,"BUTTON",{class:!0,type:!0});var ce=_(v);R=Te(ce,"Login"),ce.forEach(h),ue.forEach(h),z.forEach(h),K=y(f),D=o(f,"DIV",{class:!0,"data-svelte-h":!0}),j(D)!=="svelte-3054w9"&&(D.innerHTML=se),Q=y(f),w=o(f,"DIV",{class:!0});var B=_(w);I=o(B,"BUTTON",{class:!0,"data-svelte-h":!0}),j(I)!=="svelte-10wv44q"&&(I.textContent=ae),X=y(B),T=o(B,"BUTTON",{class:!0,"data-svelte-h":!0}),j(T)!=="svelte-khzrg9"&&(T.textContent=ne),B.forEach(h),Y=y(f),k=o(f,"DIV",{class:!0,"data-svelte-h":!0}),j(k)!=="svelte-53feed"&&(k.innerHTML=re),f.forEach(h),N.forEach(h),Z=y(d),fe(L.$$.fragment,d),d.forEach(h),this.h()},h(){s(m,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(m,"placeholder","Enter your Email Address"),s(m,"minlength","7"),s(m,"maxlength","255"),m.required=!0,s(m,"type","email"),s(p,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(p,"placeholder","Enter 6 Digit Long Password"),s(p,"minlength","6"),s(p,"maxlength","255"),s(p,"type","password"),p.required=!0,s(t,"class","rounded-md shadow-sm -space-y-px"),v.disabled=q=!l[3],s(v,"class",U="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(l[2]||!l[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")),s(v,"type","submit"),s(g,"class","mt-8 space-y-6"),s(D,"class","text-center"),s(I,"class","m-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"),s(T,"class","m-2 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),s(w,"class","flex items-center justify-center"),s(k,"class","text-center"),s(n,"class","max-w-md w-full space-y-4 bg-white my-4 px-4 py-4 rounded-md"),s(x,"class","min-h-screen flex items-center justify-center bg-gray-100"),s(u,"class","bg-[#fff]")},m(a,d){Le(a,u,d),me(i,u,null),e(u,E),e(u,x),e(x,n),e(n,c),e(n,C),e(n,V),e(n,g),e(g,t),e(t,S),e(S,m),F(m,l[1].email),e(t,J),e(t,M),e(M,p),F(p,l[1].password),e(g,W),e(g,P),e(P,v),e(v,R),e(n,K),e(n,D),e(n,Q),e(n,w),e(w,I),e(w,X),e(w,T),e(n,Y),e(n,k),e(u,Z),me(L,u,null),$=!0,ee||(oe=[H(m,"input",l[6]),H(p,"input",l[7]),H(g,"submit",Ee(l[4])),H(I,"click",l[5]),H(T,"click",Se)],ee=!0)},p(a,[d]){const N={};d&1&&(N.data=a[0]),i.$set(N),d&2&&m.value!==a[1].email&&F(m,a[1].email),d&2&&p.value!==a[1].password&&F(p,a[1].password),(!$||d&8&&q!==(q=!a[3]))&&(v.disabled=q),(!$||d&12&&U!==(U="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(a[2]||!a[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")))&&s(v,"class",U);const f={};d&1&&(f.data=a[0]),L.$set(f)},i(a){$||(pe(i.$$.fragment,a),pe(L.$$.fragment,a),$=!0)},o(a){ge(i.$$.fragment,a),ge(L.$$.fragment,a),$=!1},d(a){a&&h(u),he(i),he(L),ee=!1,_e(oe)}}}function Se(){}function Me(l,u,i){let E,{data:x}=u,n=!1,c={email:"",password:""};function O(){if(!E){alert("Please fill all the fields");return}i(2,n=!0),fetch("https://admin.souqpack.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(t=>t.json()).then(t=>{console.log("Success:",t),t.action=="success"?(localStorage.setItem("login_data",JSON.stringify(t.data)),$e.set({isLoggedIn:!0,token:t.data.token,user:t.data}),G.set({show:!0,message:"Login Successfull",type:"success"}),ve(`${te}/dashboard`)):(i(2,n=!1),G.set({show:!0,message:t.error,type:"error"}))}).catch(t=>{i(2,n=!1),console.error("Error:",t),G.set({show:!0,message:"network error",type:"error"})})}function C(){G.set({show:!0,message:"Under development",type:"info"})}ye(async()=>{await Ce()&&ve(`${te}/dashboard`)});function V(){c.email=this.value,i(1,c)}function g(){c.password=this.value,i(1,c)}return l.$$set=t=>{"data"in t&&i(0,x=t.data)},l.$$.update=()=>{l.$$.dirty&2&&i(3,E=c.email.length>3&&c.password.length>6)},[x,c,n,E,O,C,V,g]}class Ue extends xe{constructor(u){super(),we(this,u,Me,Ve,be,{data:0})}}export{Ue as component};
