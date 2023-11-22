import{s as be,r as ye,o as _e}from"../chunks/scheduler.ce710c66.js";import{S as xe,i as we,g as r,r as fe,s as b,m as Ie,h as n,j as y,u as me,c as _,y as N,f as h,n as Te,k as s,a as ke,v as ge,x as e,E as A,B as H,I as Ee,d as pe,t as he,w as ve}from"../chunks/index.d2955eda.js";import{P as Le,a as $e,g as se}from"../chunks/page.0d0adb1e.js";import{a as De,t as G}from"../chunks/stores.d82b0f85.js";import{c as Se}from"../chunks/auth.6035c411.js";import{e as J}from"../chunks/singletons.e33deb47.js";function Ce(l){let u,i,E,x,o,c,O='<h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">Login</h2>',C,V,p,t,D,m,K,M,g,W,P,v,R,U,q,Q,L,ae="<span>or</span>",X,w,I,oe="Facebook",Y,T,re="Google",Z,$,ne=`<span class="text-sm">Don&#39;t Have an Account?</span> <a href="${`${J}/signup`}" class="font-medium text-[#f9ca03] hover:text-[#f9ca03]">Signup</a>`,ee,k,S,te,le;return i=new Le({props:{data:l[0]}}),k=new $e({props:{data:l[0]}}),{c(){u=r("main"),fe(i.$$.fragment),E=b(),x=r("div"),o=r("div"),c=r("div"),c.innerHTML=O,C=b(),V=b(),p=r("form"),t=r("div"),D=r("div"),m=r("input"),K=b(),M=r("div"),g=r("input"),W=b(),P=r("div"),v=r("button"),R=Ie("Login"),Q=b(),L=r("div"),L.innerHTML=ae,X=b(),w=r("div"),I=r("button"),I.textContent=oe,Y=b(),T=r("button"),T.textContent=re,Z=b(),$=r("div"),$.innerHTML=ne,ee=b(),fe(k.$$.fragment),this.h()},l(a){u=n(a,"MAIN",{class:!0});var d=y(u);me(i.$$.fragment,d),E=_(d),x=n(d,"DIV",{class:!0});var j=y(x);o=n(j,"DIV",{class:!0});var f=y(o);c=n(f,"DIV",{"data-svelte-h":!0}),N(c)!=="svelte-1d0zeqt"&&(c.innerHTML=O),C=_(f),V=_(f),p=n(f,"FORM",{class:!0});var B=y(p);t=n(B,"DIV",{class:!0});var z=y(t);D=n(z,"DIV",{});var ie=y(D);m=n(ie,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),ie.forEach(h),K=_(z),M=n(z,"DIV",{});var ue=y(M);g=n(ue,"INPUT",{class:!0,placeholder:!0,minlength:!0,maxlength:!0,type:!0}),ue.forEach(h),z.forEach(h),W=_(B),P=n(B,"DIV",{});var ce=y(P);v=n(ce,"BUTTON",{class:!0,type:!0});var de=y(v);R=Te(de,"Login"),de.forEach(h),ce.forEach(h),B.forEach(h),Q=_(f),L=n(f,"DIV",{class:!0,"data-svelte-h":!0}),N(L)!=="svelte-3054w9"&&(L.innerHTML=ae),X=_(f),w=n(f,"DIV",{class:!0});var F=y(w);I=n(F,"BUTTON",{class:!0,"data-svelte-h":!0}),N(I)!=="svelte-1m9y8zm"&&(I.textContent=oe),Y=_(F),T=n(F,"BUTTON",{class:!0,"data-svelte-h":!0}),N(T)!=="svelte-8icvab"&&(T.textContent=re),F.forEach(h),Z=_(f),$=n(f,"DIV",{class:!0,"data-svelte-h":!0}),N($)!=="svelte-xarj6g"&&($.innerHTML=ne),f.forEach(h),j.forEach(h),ee=_(d),me(k.$$.fragment,d),d.forEach(h),this.h()},h(){s(m,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(m,"placeholder","Enter your Email Address"),s(m,"minlength","7"),s(m,"maxlength","255"),m.required=!0,s(m,"type","email"),s(g,"class","appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f9ca03] focus:border-[#f9ca03] focus:z-10 sm:text-sm"),s(g,"placeholder","Enter 6 Digit Long Password"),s(g,"minlength","6"),s(g,"maxlength","255"),s(g,"type","password"),g.required=!0,s(t,"class","rounded-md shadow-sm -space-y-px"),v.disabled=U=!l[3],s(v,"class",q="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(l[2]||!l[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")),s(v,"type","submit"),s(p,"class","mt-8 space-y-6"),s(L,"class","text-center"),s(I,"class","m-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"),s(T,"class","m-2 px-3 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"),s(w,"class","flex items-center justify-center"),s($,"class","text-center"),s(o,"class","max-w-md w-full space-y-4 bg-white my-4 px-4 py-4 rounded-md"),s(x,"class","min-h-screen flex items-center justify-center bg-gray-100"),s(u,"class","bg-[#fff]")},m(a,d){ke(a,u,d),ge(i,u,null),e(u,E),e(u,x),e(x,o),e(o,c),e(o,C),e(o,V),e(o,p),e(p,t),e(t,D),e(D,m),A(m,l[1].email),e(t,K),e(t,M),e(M,g),A(g,l[1].password),e(p,W),e(p,P),e(P,v),e(v,R),e(o,Q),e(o,L),e(o,X),e(o,w),e(w,I),e(w,Y),e(w,T),e(o,Z),e(o,$),e(u,ee),ge(k,u,null),S=!0,te||(le=[H(m,"input",l[6]),H(g,"input",l[7]),H(p,"submit",Ee(l[4])),H(I,"click",l[5]),H(T,"click",Ve)],te=!0)},p(a,[d]){const j={};d&1&&(j.data=a[0]),i.$set(j),d&2&&m.value!==a[1].email&&A(m,a[1].email),d&2&&g.value!==a[1].password&&A(g,a[1].password),(!S||d&8&&U!==(U=!a[3]))&&(v.disabled=U),(!S||d&12&&q!==(q="group cursor-pointer relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white bg-[#f9ca03] border-2 border-[#f9ca03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f9ca03] "+(a[2]||!a[3]?"opacity-50  cursor-not-allowed ":" cursor-pointer   hover:bg-white hover:text-[#f9ca03]")))&&s(v,"class",q);const f={};d&1&&(f.data=a[0]),k.$set(f)},i(a){S||(pe(i.$$.fragment,a),pe(k.$$.fragment,a),S=!0)},o(a){he(i.$$.fragment,a),he(k.$$.fragment,a),S=!1},d(a){a&&h(u),ve(i),ve(k),te=!1,ye(le)}}}function Ve(){}function Me(l,u,i){let E,{data:x}=u,o=!1,c={email:"",password:""};function O(){if(!E){alert("Please fill all the fields");return}i(2,o=!0),fetch("https://admin.souqpack.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(t=>t.json()).then(t=>{console.log("Success:",t),t.action=="success"?(localStorage.setItem("login_data",JSON.stringify(t.data)),De.set({isLoggedIn:!0,token:t.data.token,user:t.data}),G.set({show:!0,message:"Login Successfull",type:"success"}),localStorage.getItem("myKey")==="fromcheckout"?(localStorage.removeItem("myKey"),se(`${J}/checkout`)):se(`${J}/dashboard`)):(i(2,o=!1),G.set({show:!0,message:t.error,type:"error"}))}).catch(t=>{i(2,o=!1),console.error("Error:",t),G.set({show:!0,message:"network error",type:"error"})})}function C(){G.set({show:!0,message:"Under development",type:"info"})}_e(async()=>{await Se()&&se(`${J}/dashboard`)});function V(){c.email=this.value,i(1,c)}function p(){c.password=this.value,i(1,c)}return l.$$set=t=>{"data"in t&&i(0,x=t.data)},l.$$.update=()=>{l.$$.dirty&2&&i(3,E=c.email.length>3&&c.password.length>6)},[x,c,o,E,O,C,V,p]}class qe extends xe{constructor(u){super(),we(this,u,Me,Ce,be,{data:0})}}export{qe as component};
