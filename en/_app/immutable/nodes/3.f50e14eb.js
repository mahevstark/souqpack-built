import{s as qe,n as we,c as Se,o as Ve,f as xe,r as De}from"../chunks/scheduler.ce710c66.js";import{S as Ce,i as Ee,g as o,s as k,m as K,A as Ne,h as i,f as h,c as I,j as $,y as F,n as Q,k as r,l as ne,x as e,a as ue,B as ce,o as re,z as Re,r as fe,u as de,v as me,d as pe,t as he,w as _e}from"../chunks/index.d2955eda.js";import{e as $e,g as je,P as Ae,a as Pe}from"../chunks/page.0d0adb1e.js";/* empty css                     */import{c as ae,t as Te}from"../chunks/stores.d82b0f85.js";import{e as Me}from"../chunks/singletons.e33deb47.js";import{p as Be}from"../chunks/stores.a5b80820.js";function ke(l,t,n){const d=l.slice();return d[14]=t[n],d[16]=n,d}function Ie(l){let t,n,d,f,u,w,N,_,v,g,D=l[14].qty+"",q,C,m=l[14].title+"",p,T,s,a,b,S="-",U,M,z=l[14].qty+"",j,B,O,Y="+",H,E,Z,J=l[14].price*l[14].qty+"",W,L,x,c,A="X",y,G;function V(){return l[7](l[16])}function ee(){return l[8](l[16])}function le(){return l[9](l[16])}return{c(){t=o("div"),n=o("div"),d=o("div"),f=o("img"),N=k(),_=o("div"),v=o("span"),g=o("span"),q=K(D),C=K(" X "),p=K(m),T=k(),s=o("div"),a=o("div"),b=o("button"),b.textContent=S,U=k(),M=o("span"),j=K(z),B=k(),O=o("button"),O.textContent=Y,H=k(),E=o("span"),Z=K("Total: "),W=K(J),L=K(" SAR"),x=k(),c=o("button"),c.textContent=A,this.h()},l(P){t=i(P,"DIV",{class:!0});var R=$(t);n=i(R,"DIV",{class:!0});var X=$(n);d=i(X,"DIV",{class:!0});var ve=$(d);f=i(ve,"IMG",{src:!0,alt:!0,class:!0,title:!0}),ve.forEach(h),N=I(X),_=i(X,"DIV",{class:!0});var te=$(_);v=i(te,"SPAN",{style:!0});var oe=$(v);g=i(oe,"SPAN",{style:!0});var ge=$(g);q=Q(ge,D),ge.forEach(h),C=Q(oe," X "),p=Q(oe,m),oe.forEach(h),T=I(te),s=i(te,"DIV",{class:!0});var be=$(s);a=i(be,"DIV",{class:!0});var se=$(a);b=i(se,"BUTTON",{class:!0,"data-svelte-h":!0}),F(b)!=="svelte-1hk5kbp"&&(b.textContent=S),U=I(se),M=i(se,"SPAN",{class:!0});var ye=$(M);j=Q(ye,z),ye.forEach(h),B=I(se),O=i(se,"BUTTON",{class:!0,"data-svelte-h":!0}),F(O)!=="svelte-1tzwo8n"&&(O.textContent=Y),se.forEach(h),be.forEach(h),H=I(te),E=i(te,"SPAN",{});var ie=$(E);Z=Q(ie,"Total: "),W=Q(ie,J),L=Q(ie," SAR"),ie.forEach(h),te.forEach(h),x=I(X),c=i(X,"BUTTON",{name:!0,title:!0,class:!0,"data-svelte-h":!0}),F(c)!=="svelte-qr793o"&&(c.textContent=A),X.forEach(h),R.forEach(h),this.h()},h(){xe(f.src,u=`https://admin.souqpack.com/resources/uploads/products/webp/w245/${l[14].img.replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)||r(f,"src",u),r(f,"alt","cart item"),r(f,"class","w-20 h-20"),r(f,"title",w=l[14].title),r(d,"class",""),ne(g,"font-family","RobotoBold"),ne(v,"font-family","RobotoMedium"),r(b,"class","text-2xl font-semibold border-2 border-gray-200 p-1 hover:bg-gray-200 focus:outline-none rounded-full w-10 h-10"),r(M,"class","mx-2 border-2 border-gray-300 p-1 text-center px-8 focus:outline-none rounded-md"),r(O,"class","text-2xl font-semibold border-2 border-gray-200 p-1 hover:bg-gray-200 focus:outline-none rounded-full w-10 h-10"),r(a,"class","flex flex-row items-center"),r(s,"class","flex flex-row items-center my-2"),r(_,"class","flex flex-col justify-start items-start"),r(c,"name","Remove Item"),r(c,"title","Remove Item"),r(c,"class","absolute top-2 right-2"),r(n,"class","flex flex-row relative pr-5"),r(t,"class","flex flex-col w-full border-b border-b-gray-300 py-4")},m(P,R){ue(P,t,R),e(t,n),e(n,d),e(d,f),e(n,N),e(n,_),e(_,v),e(v,g),e(g,q),e(v,C),e(v,p),e(_,T),e(_,s),e(s,a),e(a,b),e(a,U),e(a,M),e(M,j),e(a,B),e(a,O),e(_,H),e(_,E),e(E,Z),e(E,W),e(E,L),e(n,x),e(n,c),y||(G=[ce(b,"click",V),ce(O,"click",ee),ce(c,"click",le)],y=!0)},p(P,R){l=P,R&1&&!xe(f.src,u=`https://admin.souqpack.com/resources/uploads/products/webp/w245/${l[14].img.replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)&&r(f,"src",u),R&1&&w!==(w=l[14].title)&&r(f,"title",w),R&1&&D!==(D=l[14].qty+"")&&re(q,D),R&1&&m!==(m=l[14].title+"")&&re(p,m),R&1&&z!==(z=l[14].qty+"")&&re(j,z),R&1&&J!==(J=l[14].price*l[14].qty+"")&&re(W,J)},d(P){P&&h(t),y=!1,De(G)}}}function Oe(l){let t,n,d,f,u,w,N,_,v,g,D="Total",q,C,m,p,T,s,a,b,S="Shipping fee is calculated at checkout",U,M,z,j,B,O='<button class="rounded-md border-2 border-black text-black px-4 py-1" style="font-family: RobotoMedium;">View Cart</button>',Y,H,E,Z="Checkout",J,W,L=$e(l[0]),x=[];for(let c=0;c<L.length;c+=1)x[c]=Ie(ke(l,L,c));return{c(){t=o("link"),n=k(),d=o("main"),f=o("div"),u=o("div");for(let c=0;c<x.length;c+=1)x[c].c();w=k(),N=o("hr"),_=k(),v=o("div"),g=o("span"),g.textContent=D,q=k(),C=o("span"),m=K(l[1]),p=K(" SAR"),T=k(),s=o("hr"),a=k(),b=o("div"),b.textContent=S,U=k(),M=o("hr"),z=k(),j=o("div"),B=o("div"),B.innerHTML=O,Y=k(),H=o("div"),E=o("button"),E.textContent=Z,this.h()},l(c){const A=Ne("svelte-w66d0i",document.head);t=i(A,"LINK",{rel:!0,href:!0}),A.forEach(h),n=I(c),d=i(c,"MAIN",{class:!0});var y=$(d);f=i(y,"DIV",{class:!0});var G=$(f);u=i(G,"DIV",{class:!0});var V=$(u);for(let X=0;X<x.length;X+=1)x[X].l(V);w=I(V),N=i(V,"HR",{class:!0}),_=I(V),v=i(V,"DIV",{class:!0});var ee=$(v);g=i(ee,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),F(g)!=="svelte-otc1e4"&&(g.textContent=D),q=I(ee),C=i(ee,"SPAN",{class:!0,style:!0});var le=$(C);m=Q(le,l[1]),p=Q(le," SAR"),le.forEach(h),ee.forEach(h),T=I(V),s=i(V,"HR",{class:!0}),a=I(V),b=i(V,"DIV",{class:!0,"data-svelte-h":!0}),F(b)!=="svelte-pqbtix"&&(b.textContent=S),U=I(V),M=i(V,"HR",{class:!0}),z=I(V),j=i(V,"DIV",{class:!0});var P=$(j);B=i(P,"DIV",{class:!0,"data-svelte-h":!0}),F(B)!=="svelte-omoxm5"&&(B.innerHTML=O),Y=I(P),H=i(P,"DIV",{class:!0});var R=$(H);E=i(R,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),F(E)!=="svelte-1ouxot3"&&(E.textContent=Z),R.forEach(h),P.forEach(h),V.forEach(h),G.forEach(h),y.forEach(h),this.h()},h(){r(t,"rel","canonical"),r(t,"href",l[6]),r(N,"class","w-full"),r(g,"class","text-xl"),ne(g,"font-family","RobotoBold"),r(C,"class","text-xl"),ne(C,"font-family","RobotoBold"),r(v,"class","flex flex-row justify-between items-center py-4 w-full"),r(s,"class","w-full"),r(b,"class","flex flex-row justify-center text-center italic items-center py-4 w-full"),r(M,"class","w-full"),r(B,"class","w-1/2 flex flex-row items-center justify-center"),r(E,"class","rounded-md border-2 border-[#f9ca03] bg-[#f9ca03] px-4 py-1 text-white"),ne(E,"font-family","RobotoMedium"),r(H,"class","w-1/2 flex flex-row items-center justify-center"),r(j,"class","flex flex-row justify-between items-center py-4 w-full"),r(u,"class","flex flex-col w-full justify-start items-start"),r(f,"class","w-full max-w-[1280px] bg-white px-4 py-4 flex self-center"),r(d,"class","flex flex-row justify-center")},m(c,A){e(document.head,t),ue(c,n,A),ue(c,d,A),e(d,f),e(f,u);for(let y=0;y<x.length;y+=1)x[y]&&x[y].m(u,null);e(u,w),e(u,N),e(u,_),e(u,v),e(v,g),e(v,q),e(v,C),e(C,m),e(C,p),e(u,T),e(u,s),e(u,a),e(u,b),e(u,U),e(u,M),e(u,z),e(u,j),e(j,B),e(j,Y),e(j,H),e(H,E),J||(W=ce(E,"click",l[10]),J=!0)},p(c,[A]){if(A&29){L=$e(c[0]);let y;for(y=0;y<L.length;y+=1){const G=ke(c,L,y);x[y]?x[y].p(G,A):(x[y]=Ie(G),x[y].c(),x[y].m(u,w))}for(;y<x.length;y+=1)x[y].d(1);x.length=L.length}A&2&&re(m,c[1])},i:we,o:we,d(c){c&&(h(n),h(d)),h(t),Re(x,c),J=!1,W()}}}function Ue(l,t,n){let d;Se(l,Be,s=>n(12,d=s));let f=[],u=0,w=!1;Ve(()=>{ae.subscribe(s=>{n(0,f=s.items),n(1,u=s.total),w&&(localStorage.setItem("cart_items",JSON.stringify(s.items)),w=!1)}),N()});function N(){const s=localStorage.getItem("cart_items");if(console.log("cartItems",s),s){var a=JSON.parse(s),b=a.reduce((S,U)=>S+U.price*U.qty,0);ae.set({items:a,total:b,totalItems:a.length})}}function _(s){w=!0,ae.update(a=>(a.items.splice(s,1),a.total=a.items.reduce((b,S)=>b+S.price*S.qty,0),a))}function v(s){w=!0,ae.update(a=>parseInt(a.items[s].qty_max)<a.items[s].qty+1?(Te({show:!0,message:"Sorry, We have only "+a.items[s].qty+" items in stock",type:"error"}),a):(a.items[s].qty=a.items[s].qty+1,a.total=a.items.reduce((b,S)=>b+S.price*S.qty,0),a))}function g(s){w=!0,ae.update(a=>(a.items[s].qty=a.items[s].qty-1,a.total=a.items.reduce((b,S)=>b+S.price*S.qty,0),a))}function D(){console.log("settt"),localStorage.setItem("myKey","fromcheckout"),console.log("sett"),je(`${Me}/login`)}const q=d.url;return[f,u,_,v,g,D,q,s=>{g(s)},s=>{v(s)},s=>{_(s)},()=>D()]}let He=class extends Ce{constructor(t){super(),Ee(this,t,Ue,Oe,qe,{})}};function Le(l){let t,n,d,f,u,w,N,_,v,g,D,q,C;return n=new Ae({props:{data:l[0]}}),_=new He({}),q=new Pe({props:{data:l[0]}}),{c(){t=o("main"),fe(n.$$.fragment),d=k(),f=o("div"),u=k(),w=o("div"),N=k(),fe(_.$$.fragment),v=k(),g=o("div"),D=k(),fe(q.$$.fragment),this.h()},l(m){t=i(m,"MAIN",{class:!0});var p=$(t);de(n.$$.fragment,p),d=I(p),f=i(p,"DIV",{class:!0}),$(f).forEach(h),u=I(p),w=i(p,"DIV",{class:!0}),$(w).forEach(h),N=I(p),de(_.$$.fragment,p),v=I(p),g=i(p,"DIV",{class:!0}),$(g).forEach(h),D=I(p),de(q.$$.fragment,p),p.forEach(h),this.h()},h(){r(f,"class","h-5 w-full"),r(w,"class","h-5 w-full"),r(g,"class","h-5 w-full"),r(t,"class","bg-[#f5f5f5]")},m(m,p){ue(m,t,p),me(n,t,null),e(t,d),e(t,f),e(t,u),e(t,w),e(t,N),me(_,t,null),e(t,v),e(t,g),e(t,D),me(q,t,null),C=!0},p(m,[p]){const T={};p&1&&(T.data=m[0]),n.$set(T);const s={};p&1&&(s.data=m[0]),q.$set(s)},i(m){C||(pe(n.$$.fragment,m),pe(_.$$.fragment,m),pe(q.$$.fragment,m),C=!0)},o(m){he(n.$$.fragment,m),he(_.$$.fragment,m),he(q.$$.fragment,m),C=!1},d(m){m&&h(t),_e(n),_e(_),_e(q)}}}function Xe(l,t,n){let{data:d}=t;return l.$$set=f=>{"data"in f&&n(0,d=f.data)},[d]}class Ze extends Ce{constructor(t){super(),Ee(this,t,Xe,Le,qe,{data:0})}}export{Ze as component};
