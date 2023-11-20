import{s as ge,r as ve,o as be}from"../chunks/scheduler.ce710c66.js";import{S as _e,i as ye,g as r,r as ce,s as b,m as xe,h as o,j as _,u as de,c as y,y as O,f as g,n as we,k as s,a as Ie,v as fe,x as e,D as A,A as P,G as Te,d as me,t as pe,w as he}from"../chunks/index.f931a049.js";import{P as Ce,a as De,g as Ee}from"../chunks/page.c8384baa.js";import{a as Ve,t as G}from"../chunks/stores.99df2591.js";import{c as Le}from"../chunks/auth.6035c411.js";function ke(l){let u,i,D,x,n,c,q='<h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">تسجيل الدخول</h2>',k,M,h,t,j,m,J,N,p,W,S,v,R,H,U,K,E,te="<span>or</span>",Q,w,I,se="فيسبوك",X,T,ae="جوجل",Y,V,ne='<span class="text-sm">ليس لديك حساب؟</span> <a href="/signup" class="font-medium text-[#f9ca03] hover:text-[#f9ca03]">اشتراك</a>',Z,C,L,ee,re;return i=new Ce({props:{data:l[0]}}),C=new De({props:{data:l[0]}}),{c(){u=r("main"),ce(i.$$.fragment),D=b(),x=r("div"),n=r("div"),c=r("div"),c.innerHTML=q,k=b(),M=b(),h=r("form"),t=r("div"),j=r("div"),m=r("input"),J=b(),N=r("div"),p=r("input"),W=b(),S=r("div"),v=r("button"),R=xe("تسجيل الدخول"),K=b(),E=r("div"),E.innerHTML=te,Q=b(),w=r("div"),I=r("button"),I.textContent=se,X=b(),T=r("button"),T.textContent=ae,Y=b(),V=r("div"),V.innerHTML=ne,Z=b(),ce(C.$$.fragment),this.h()},l(a){u=o(a,"MAIN",{class:!0});var d=_(u);de(i.$$.fragment,d),D=y(d),x=o(d,"DIV",{class:!0});var $=_(x);n=o($,"DIV",{class:!0});var f=_(n);c=o(f,"DIV",{"data-svelte-h":!0}),O(c)!=="svelte-3gjfqn"&&(c.innerHTML=q),k=y(f),M=y(f),h=o(f,"FORM",{class:!0});var B=_(h);t=o(B,"DIV",{class:!0});var F=_(t);j=o(F,"DIV",{});var oe=_(j);m=o(oe,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),oe.forEach(g),J=y(F),N=o(F,"DIV",{});var le=_(N);p=o(le,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),le.forEach(g),F.forEach(g),W=y(B),S=o(B,"DIV",{});var ie=_(S);v=o(ie,"BUTTON",{class:!0,type:!0});var ue=_(v);R=we(ue,"تسجيل الدخول"),ue.forEach(g),ie.forEach(g),B.forEach(g),K=y(f),E=o(f,"DIV",{class:!0,"data-svelte-h":!0}),O(E)!=="svelte-3054w9"&&(E.innerHTML=te),Q=y(f),w=o(f,"DIV",{class:!0});var z=_(w);I=o(z,"BUTTON",{class:!0,"data-svelte-h":!0}),O(I)!=="svelte-1h52t85"&&(I.textContent=se),X=y(z),T=o(z,"BUTTON",{class:!0,"data-svelte-h":!0}),O(T)!=="svelte-1xevmu6"&&(T.textContent=ae),z.forEach(g),Y=y(f),V=o(f,"DIV",{class:!0,"data-svelte-h":!0}),O(V)!=="svelte-57qm9i"&&(V.innerHTML=ne),f.forEach(g),$.forEach(g),Z=y(d),de(C.$$.fragment,d),d.forEach(g),this.h()},h(){s(m,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(m,"placeholder","أدخل عنوان بريدك الالكتروني"),s(m,"minlength","7"),s(m,"maxlength","255"),m.required=!0,s(m,"type","email"),s(p,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(p,"placeholder","أدخل كلمة مرور طويلة مكونة من 6 أرقام"),s(p,"minlength","6"),s(p,"maxlength","255"),s(p,"type","password"),p.required=!0,s(t,"class","rounded-md shadow-sm -space-y-px"),v.disabled=H=!l[3],s(v,"class",U="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(l[2]||!l[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")),s(v,"type","submit"),s(h,"class","mt-8 space-y-6"),s(E,"class","text-center"),s(I,"class","m-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"),s(T,"class","m-2 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),s(w,"class","flex items-center justify-center"),s(V,"class","text-center"),s(n,"class","max-w-md w-full space-y-4 bg-white my-4 px-4 py-4 rounded-md"),s(x,"class","min-h-screen flex items-center justify-center bg-gray-100"),s(u,"class","bg-[#fff]")},m(a,d){Ie(a,u,d),fe(i,u,null),e(u,D),e(u,x),e(x,n),e(n,c),e(n,k),e(n,M),e(n,h),e(h,t),e(t,j),e(j,m),A(m,l[1].email),e(t,J),e(t,N),e(N,p),A(p,l[1].password),e(h,W),e(h,S),e(S,v),e(v,R),e(n,K),e(n,E),e(n,Q),e(n,w),e(w,I),e(w,X),e(w,T),e(n,Y),e(n,V),e(u,Z),fe(C,u,null),L=!0,ee||(re=[P(m,"input",l[6]),P(p,"input",l[7]),P(h,"submit",Te(l[4])),P(I,"click",l[5]),P(T,"click",Me)],ee=!0)},p(a,[d]){const $={};d&1&&($.data=a[0]),i.$set($),d&2&&m.value!==a[1].email&&A(m,a[1].email),d&2&&p.value!==a[1].password&&A(p,a[1].password),(!L||d&8&&H!==(H=!a[3]))&&(v.disabled=H),(!L||d&12&&U!==(U="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(a[2]||!a[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")))&&s(v,"class",U);const f={};d&1&&(f.data=a[0]),C.$set(f)},i(a){L||(me(i.$$.fragment,a),me(C.$$.fragment,a),L=!0)},o(a){pe(i.$$.fragment,a),pe(C.$$.fragment,a),L=!1},d(a){a&&g(u),he(i),he(C),ee=!1,ve(re)}}}function Me(){}function je(l,u,i){let D,{data:x}=u,n=!1,c={email:"",password:""};function q(){if(!D){alert("الرجاء تعبئة جميع الحقول");return}i(2,n=!0),fetch("https://admin.souqpack.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(t=>t.json()).then(t=>{console.log("Success:",t),t.action=="success"?(localStorage.setItem("login_data",JSON.stringify(t.data)),Ve.set({isLoggedIn:!0,token:t.data.token,user:t.data}),G.set({show:!0,message:"تم تسجيل الدخول بنجاح",type:"success"}),window.location.href="/dashboard"):(i(2,n=!1),G.set({show:!0,message:t.error,type:"error"}))}).catch(t=>{i(2,n=!1),console.error("Error:",t),G.set({show:!0,message:"خطأ في الشبكة",type:"error"})})}function k(){G.set({show:!0,message:"تحت التطوير",type:"info"})}be(async()=>{await Le()&&Ee("/dashboard")});function M(){c.email=this.value,i(1,c)}function h(){c.password=this.value,i(1,c)}return l.$$set=t=>{"data"in t&&i(0,x=t.data)},l.$$.update=()=>{l.$$.dirty&2&&i(3,D=c.email.length>3&&c.password.length>6)},[x,c,n,D,q,k,M,h]}class qe extends _e{constructor(u){super(),ye(this,u,je,ke,ge,{data:0})}}export{qe as component};
