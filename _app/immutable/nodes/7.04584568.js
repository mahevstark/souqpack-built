import{s as ve,o as we,n as xe}from"../chunks/scheduler.ce710c66.js";import{S as ke,i as $e,e as fe,a as F,t as ae,b as Se,d as re,f as _,p as Pe,g as p,r as ne,s as T,h as u,j as w,u as ie,c as I,y as Q,k as y,v as ce,x as s,B as Ee,w as de,z as Te,m as J,H as Ie,n as B,G as De,o as se,l as le}from"../chunks/index.d2955eda.js";import{g as pe,P as Le,e as ue,a as Ne}from"../chunks/page.dba676f2.js";import{a as je,t as Ae}from"../chunks/stores.fcb0cf66.js";import{c as Ce}from"../chunks/auth.6035c411.js";import{P as He}from"../chunks/page.123f46c5.js";const Ve=!1;async function Oe({}){try{const t=await(await fetch("https://admin.souqpack.com/api/get_important_data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),a={email:t.data.email,phone:t.data.phone,address:t.data.address,footer_about:t.data.footer_about,facebook:t.data.facebook,instagram:t.data.instagram,twitter:t.data.twitter,youtube:t.data.youtube,snapchat:t.data.snapchat,copy_right:t.data.copy_right,footers:t.data.footers},d=await(await fetch("https://admin.souqpack.com/api/get_categories",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json();var l={data:{}};const r=localStorage.getItem("login_data");if(console.log("dataLocal",r),r){const f=JSON.parse(r).token;l=await(await fetch("https://admin.souqpack.com/api/get_mydashboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1,token:f})})).json(),l={data:l.data}}else l={data:{}};return console.log("data mine",l),t.action=="success"&&d.action=="success"?{props:{browser:!1,langs:t.data.langs,regions:t.data.regions,cats:d.data.categories,home:{},footer:a,product:{},category:{},myData:l}}:{status:500,error:"Failed to fetch data from the API."}}catch(e){return console.error("Error fetching data:",e),{status:500,error:"Failed to fetch data from the API."}}}const Qe=Object.freeze(Object.defineProperty({__proto__:null,load:Oe,ssr:Ve},Symbol.toStringTag,{value:"Module"}));function _e(l,e,t){const a=l.slice();return a[3]=e[t],a[5]=t,a}function Me(l){var W,X,Y;let e,t,a,i,d,r,f,n,g='<a href="/dashboard" class="text-[#f9ca03] font-semibold text-sm">لوحه القياده</a>',$,L,D,G="الخروج",b,N,j,P,A,H='<span class="w-[10%] border-r border-r-gray-300 text-center py-2">معرف</span> <span class="w-[20%] border-r border-r-gray-300 text-center py-2">تاريخ</span> <span class="w-[10%] border-r border-r-gray-300 text-center py-2">حالة</span> <span class="w-[30%] border-r border-r-gray-300 text-center py-2">دفع</span> <span class="w-[10%] border-r border-r-gray-300 text-center py-2">مجموع</span> <span class="w-[20%] text-center py-2"></span>',O,M,C,U='<span class="w-[10%] border-r border-r-gray-300 text-center py-2">معرف</span> <span class="w-[20%] border-r border-r-gray-300 text-center py-2">تاريخ</span> <span class="w-[10%] border-r border-r-gray-300 text-center py-2">حالة</span> <span class="w-[30%] border-r border-r-gray-300 text-center py-2">دفع</span> <span class="w-[10%] border-r border-r-gray-300 text-center py-2">مجموع</span> <span class="w-[20%] text-center py-2"></span>',q,m,v,x,k;t=new Le({props:{data:l[0]}});let h=ue((Y=(X=(W=l[0])==null?void 0:W.props)==null?void 0:X.myData.data)==null?void 0:Y.orders),o=[];for(let c=0;c<h.length;c+=1)o[c]=be(_e(l,h,c));return m=new Ne({props:{data:l[0]}}),{c(){e=p("main"),ne(t.$$.fragment),a=T(),i=p("div"),d=p("div"),r=p("div"),f=p("div"),n=p("div"),n.innerHTML=g,$=T(),L=p("div"),D=p("button"),D.textContent=G,b=T(),N=p("div"),j=p("div"),P=p("div"),A=p("div"),A.innerHTML=H,O=T();for(let c=0;c<o.length;c+=1)o[c].c();M=T(),C=p("div"),C.innerHTML=U,q=T(),ne(m.$$.fragment),this.h()},l(c){e=u(c,"MAIN",{class:!0});var S=w(e);ie(t.$$.fragment,S),a=I(S),i=u(S,"DIV",{class:!0});var V=w(i);d=u(V,"DIV",{class:!0});var Z=w(d);r=u(Z,"DIV",{class:!0});var R=w(r);f=u(R,"DIV",{class:!0});var z=w(f);n=u(z,"DIV",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-whjvhy"&&(n.innerHTML=g),$=I(z),L=u(z,"DIV",{class:!0});var ee=w(L);D=u(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(D)!=="svelte-15faewy"&&(D.textContent=G),ee.forEach(_),z.forEach(_),b=I(R),N=u(R,"DIV",{class:!0});var E=w(N);j=u(E,"DIV",{class:!0});var te=w(j);P=u(te,"DIV",{class:!0});var K=w(P);A=u(K,"DIV",{class:!0,"data-svelte-h":!0}),Q(A)!=="svelte-1d7rfxl"&&(A.innerHTML=H),O=I(K);for(let oe=0;oe<o.length;oe+=1)o[oe].l(K);M=I(K),C=u(K,"DIV",{class:!0,"data-svelte-h":!0}),Q(C)!=="svelte-1d7rfxl"&&(C.innerHTML=U),K.forEach(_),te.forEach(_),E.forEach(_),R.forEach(_),Z.forEach(_),V.forEach(_),q=I(S),ie(m.$$.fragment,S),S.forEach(_),this.h()},h(){y(n,"class","flex flex-row items-center border-b border-b-gray-300 px-4 py-2 w-full"),y(D,"class","text-[#333] font-semibold text-sm"),y(L,"class","flex flex-row items-center px-4 py-2 w-full"),y(f,"class","flex flex-col bg-white rounded-md py-2 lg:w-1/5 w-full"),y(A,"class","flex flex-row w-full items-center font-bold border border-gray-300 px-2"),y(C,"class","flex flex-row w-full items-center font-bold border border-gray-300 px-2"),y(P,"class","flex flex-col w-full"),y(j,"class","flex flex-col bg-white rounded-md py-4 px-4 w-full"),y(N,"class","flex flex-col pl-4 w-4/5"),y(r,"class","flex flex-row justify-between px-4 py-4"),y(d,"class","flex flex-col max-w-[1280px] w-full"),y(i,"class","flex flex-row justify-center"),y(e,"class","bg-[#f5f5f5]")},m(c,S){F(c,e,S),ce(t,e,null),s(e,a),s(e,i),s(i,d),s(d,r),s(r,f),s(f,n),s(f,$),s(f,L),s(L,D),s(r,b),s(r,N),s(N,j),s(j,P),s(P,A),s(P,O);for(let V=0;V<o.length;V+=1)o[V]&&o[V].m(P,null);s(P,M),s(P,C),s(e,q),ce(m,e,null),v=!0,x||(k=Ee(D,"click",l[2]),x=!0)},p(c,S){var R,z,ee;const V={};if(S&1&&(V.data=c[0]),t.$set(V),S&1){h=ue((ee=(z=(R=c[0])==null?void 0:R.props)==null?void 0:z.myData.data)==null?void 0:ee.orders);let E;for(E=0;E<h.length;E+=1){const te=_e(c,h,E);o[E]?o[E].p(te,S):(o[E]=be(te),o[E].c(),o[E].m(P,M))}for(;E<o.length;E+=1)o[E].d(1);o.length=h.length}const Z={};S&1&&(Z.data=c[0]),m.$set(Z)},i(c){v||(re(t.$$.fragment,c),re(m.$$.fragment,c),v=!0)},o(c){ae(t.$$.fragment,c),ae(m.$$.fragment,c),v=!1},d(c){c&&_(e),de(t),Te(o,c),de(m),x=!1,k()}}}function qe(l){let e,t;return e=new He({}),{c(){ne(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,i){ce(e,a,i),t=!0},p:xe,i(a){t||(re(e.$$.fragment,a),t=!0)},o(a){ae(e.$$.fragment,a),t=!1},d(a){de(e,a)}}}function he(l){let e,t,a,i,d,r=l[3].payment_reason_rejct+"",f;return{c(){e=p("span"),t=J("خطأ في الدفع"),a=p("br"),i=T(),d=p("i"),f=J(r),this.h()},l(n){e=u(n,"SPAN",{});var g=w(e);t=B(g,"خطأ في الدفع"),a=u(g,"BR",{}),i=I(g),d=u(g,"I",{style:!0});var $=w(d);f=B($,r),$.forEach(_),g.forEach(_),this.h()},h(){le(d,"color","red")},m(n,g){F(n,e,g),s(e,t),s(e,a),s(e,i),s(e,d),s(d,f)},p(n,g){g&1&&r!==(r=n[3].payment_reason_rejct+"")&&se(f,r)},d(n){n&&_(e)}}}function me(l){let e,t="تم الدفع<br/>";return{c(){e=p("span"),e.innerHTML=t,this.h()},l(a){e=u(a,"SPAN",{style:!0,"data-svelte-h":!0}),Q(e)!=="svelte-b4o8bg"&&(e.innerHTML=t),this.h()},h(){le(e,"color","green")},m(a,i){F(a,e,i)},d(a){a&&_(e)}}}function ge(l){let e,t="المعلقه<br/>";return{c(){e=p("span"),e.innerHTML=t,this.h()},l(a){e=u(a,"SPAN",{style:!0,"data-svelte-h":!0}),Q(e)!=="svelte-qyzjyl"&&(e.innerHTML=t),this.h()},h(){le(e,"color","blueviolet")},m(a,i){F(a,e,i)},d(a){a&&_(e)}}}function ye(l){let e,t,a,i;return{c(){e=p("span"),t=p("a"),a=J("ادفع الآن"),this.h()},l(d){e=u(d,"SPAN",{});var r=w(e);t=u(r,"A",{href:!0,class:!0,style:!0});var f=w(t);a=B(f,"ادفع الآن"),f.forEach(_),r.forEach(_),this.h()},h(){y(t,"href",i="/pay/"+l[3].id),y(t,"class","bg-[#f9ca03] px-4 py-1 text-white rounded-md"),le(t,"font-size","11px")},m(d,r){F(d,e,r),s(e,t),s(t,a)},p(d,r){r&1&&i!==(i="/pay/"+d[3].id)&&y(t,"href",i)},d(d){d&&_(e)}}}function be(l){let e,t,a=l[3].id+"",i,d,r,f=l[3].at+"",n,g,$,L,D=l[3].status_text+"",G,b,N,j,P,A,H,O=l[3].total+"",M,C,U,q,m=l[3].payment_done==2&&he(l),v=l[3].payment_done==1&&me(),x=l[3].payment_done==0&&ge(),k=(l[3].payment_done==2||l[3].payment_done==0)&&ye(l);return{c(){e=p("div"),t=p("span"),i=J(a),d=T(),r=p("span"),n=J(f),g=T(),$=p("span"),L=new Ie(!1),G=T(),b=p("span"),m&&m.c(),N=T(),v&&v.c(),j=T(),x&&x.c(),P=T(),k&&k.c(),A=T(),H=p("span"),M=J(O),C=J(" ر.س"),U=T(),q=p("span"),this.h()},l(h){e=u(h,"DIV",{class:!0});var o=w(e);t=u(o,"SPAN",{class:!0});var W=w(t);i=B(W,a),W.forEach(_),d=I(o),r=u(o,"SPAN",{class:!0});var X=w(r);n=B(X,f),X.forEach(_),g=I(o),$=u(o,"SPAN",{class:!0});var Y=w($);L=De(Y,!1),Y.forEach(_),G=I(o),b=u(o,"SPAN",{class:!0});var c=w(b);m&&m.l(c),N=I(c),v&&v.l(c),j=I(c),x&&x.l(c),P=I(c),k&&k.l(c),c.forEach(_),A=I(o),H=u(o,"SPAN",{class:!0});var S=w(H);M=B(S,O),C=B(S," ر.س"),S.forEach(_),U=I(o),q=u(o,"SPAN",{class:!0}),w(q).forEach(_),o.forEach(_),this.h()},h(){y(t,"class","w-[10%] border-r border-r-gray-300 text-center py-2 h-full px-2"),y(r,"class","w-[20%] border-r border-r-gray-300 text-center py-2 h-full px-2"),L.a=null,y($,"class","w-[10%] border-r border-r-gray-300 text-center py-2 h-full px-2"),y(b,"class","w-[30%] border-r border-r-gray-300 text-center py-2 h-full px-2"),y(H,"class","w-[10%] border-r border-r-gray-300 text-center py-2 h-full px-2"),y(q,"class","w-[20%] text-center py-2 h-full px-2"),y(e,"class","flex flex-row w-full items-center border border-gray-300 px-2")},m(h,o){F(h,e,o),s(e,t),s(t,i),s(e,d),s(e,r),s(r,n),s(e,g),s(e,$),L.m(D,$),s(e,G),s(e,b),m&&m.m(b,null),s(b,N),v&&v.m(b,null),s(b,j),x&&x.m(b,null),s(b,P),k&&k.m(b,null),s(e,A),s(e,H),s(H,M),s(H,C),s(e,U),s(e,q)},p(h,o){o&1&&a!==(a=h[3].id+"")&&se(i,a),o&1&&f!==(f=h[3].at+"")&&se(n,f),o&1&&D!==(D=h[3].status_text+"")&&L.p(D),h[3].payment_done==2?m?m.p(h,o):(m=he(h),m.c(),m.m(b,N)):m&&(m.d(1),m=null),h[3].payment_done==1?v||(v=me(),v.c(),v.m(b,j)):v&&(v.d(1),v=null),h[3].payment_done==0?x||(x=ge(),x.c(),x.m(b,P)):x&&(x.d(1),x=null),h[3].payment_done==2||h[3].payment_done==0?k?k.p(h,o):(k=ye(h),k.c(),k.m(b,null)):k&&(k.d(1),k=null),o&1&&O!==(O=h[3].total+"")&&se(M,O)},d(h){h&&_(e),m&&m.d(),v&&v.d(),x&&x.d(),k&&k.d()}}}function Re(l){let e,t,a,i;const d=[qe,Me],r=[];function f(n,g){return n[1]?0:1}return e=f(l),t=r[e]=d[e](l),{c(){t.c(),a=fe()},l(n){t.l(n),a=fe()},m(n,g){r[e].m(n,g),F(n,a,g),i=!0},p(n,[g]){let $=e;e=f(n),e===$?r[e].p(n,g):(Pe(),ae(r[$],1,1,()=>{r[$]=null}),Se(),t=r[e],t?t.p(n,g):(t=r[e]=d[e](n),t.c()),re(t,1),t.m(a.parentNode,a))},i(n){i||(re(t),i=!0)},o(n){ae(t),i=!1},d(n){n&&_(a),r[e].d(n)}}}function ze(l,e,t){let{data:a}=e;console.log("data"),console.log(a);let i=!0;we(async()=>{await Ce()||pe("/login"),t(1,i=!1)});function d(){localStorage.removeItem("login_data"),je.set({isLoggedIn:!1,token:"",user:{}}),Ae.set({show:!0,message:"Logout Successfull",type:"success"}),pe("/login")}return l.$$set=r=>{"data"in r&&t(0,a=r.data)},[a,i,d]}class We extends ke{constructor(e){super(),$e(this,e,ze,Re,ve,{data:0})}}export{We as component,Qe as universal};
