import{s as ql,n as Sl,f as dt,r as qs,c as Ns,o as Ps}from"../chunks/scheduler.ce710c66.js";import{S as Nl,i as Pl,g as p,h,j as _,f as d,k as i,a as J,x as o,z as Pt,s as y,m as C,c as x,n as A,l as j,o as G,r as zt,A as Ts,y as Ee,u as Gt,L as z,v as Qt,B as De,d as Wt,t as Yt,w as Ft,H as Cs,G as As}from"../chunks/index.d2955eda.js";import{e as Ve,h as Os,g as Vl,P as js,a as Rs}from"../chunks/page.901bc922.js";/* empty css                     */import{e as Xt}from"../chunks/singletons.980f5eb1.js";import{c as ss}from"../chunks/stores.df9b739c.js";import{p as Ms}from"../chunks/stores.0b5af109.js";function as(s,e,t){const a=s.slice();return a[1]=e[t],a[3]=t,a}function rs(s){let e,t,a,r,l,u,n,c,w=s[1].title+"",v,m,g,$=s[1].real_price_text+"",T,E,R;return{c(){e=p("a"),t=p("div"),a=p("div"),r=p("img"),u=y(),n=p("div"),c=p("span"),v=C(w),m=y(),g=p("span"),T=C($),E=y(),this.h()},l(I){e=h(I,"A",{href:!0,class:!0});var H=_(e);t=h(H,"DIV",{class:!0});var fe=_(t);a=h(fe,"DIV",{class:!0});var ke=_(a);r=h(ke,"IMG",{src:!0,class:!0,alt:!0}),ke.forEach(d),u=x(fe),n=h(fe,"DIV",{class:!0});var _e=_(n);c=h(_e,"SPAN",{style:!0,class:!0});var Q=_(c);v=A(Q,w),Q.forEach(d),m=x(_e),g=h(_e,"SPAN",{class:!0,style:!0});var Se=_(g);T=A(Se,$),Se.forEach(d),_e.forEach(d),fe.forEach(d),E=x(H),H.forEach(d),this.h()},h(){dt(r.src,l=`https://admin.souqpack.com/resources/uploads/products/webp/w245/${s[1].image.replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)||i(r,"src",l),i(r,"class","md:w-[245px] w-full h-full md:h-[200px]"),i(r,"alt","Product"),i(a,"class","flex flex-row justify-center items-center md:w-[245px] w-full md:h-[200px] h-full"),j(c,"font-family","'Roboto'"),j(c,"font-weight","500"),j(c,"white-space","nowrap"),j(c,"text-overflow","ellipsis"),j(c,"overflow","hidden"),j(c,"text-transform","capitalize"),j(c,"display","-webkit-box"),i(c,"class","text-[#222] lg:text-[18px] text-sm "),i(g,"class","text-[#222] lg:text-[18px] text-sm "),j(g,"font-family","'RobotoMedium'"),j(g,"font-weight","500"),i(n,"class","p-[15px] min-h-[80px]"),i(t,"class","cursor-pointer flex flex-col border border-[#f5f5f5] hover:border-[#f9ca03] "),i(e,"href",R=`${Xt}/product/${s[1].slug}`),i(e,"class","md:w-[247px] w-1/2 lg:pb-0 pb-2 h-auto "+(s[3]%2==0?" pr-1 lg:pr-0 ":"pl-1  lg:pr-0"))},m(I,H){J(I,e,H),o(e,t),o(t,a),o(a,r),o(t,u),o(t,n),o(n,c),o(c,v),o(n,m),o(n,g),o(g,T),o(e,E)},p(I,H){H&1&&!dt(r.src,l=`https://admin.souqpack.com/resources/uploads/products/webp/w245/${I[1].image.replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)&&i(r,"src",l),H&1&&w!==(w=I[1].title+"")&&G(v,w),H&1&&$!==($=I[1].real_price_text+"")&&G(T,$),H&1&&R!==(R=`${Xt}/product/${I[1].slug}`)&&i(e,"href",R)},d(I){I&&d(e)}}}function Bs(s){let e,t,a=Ve(s[0]),r=[];for(let l=0;l<a.length;l+=1)r[l]=rs(as(s,a,l));return{c(){e=p("main"),t=p("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=h(l,"MAIN",{});var u=_(e);t=h(u,"DIV",{class:!0});var n=_(t);for(let c=0;c<r.length;c+=1)r[c].l(n);n.forEach(d),u.forEach(d),this.h()},h(){i(t,"class","flex flex-row items-center flex-wrap lg:gap-3 w-full ")},m(l,u){J(l,e,u),o(e,t);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(t,null)},p(l,[u]){if(u&1){a=Ve(l[0]);let n;for(n=0;n<a.length;n+=1){const c=as(l,a,n);r[n]?r[n].p(c,u):(r[n]=rs(c),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i:Sl,o:Sl,d(l){l&&d(e),Pt(r,l)}}}function Ls(s,e,t){let{relateds:a}=e;return s.$$set=r=>{"relateds"in r&&t(0,a=r.relateds)},[a]}let $s=class extends Nl{constructor(e){super(),Pl(this,e,Ls,Bs,ql,{relateds:0})}};async function Hs(s){var e=localStorage.getItem("login_data");e=JSON.parse(e);var t=e.token;return s.token=t,s.lang_id=2,s.do_add=1,s.product_id=s.id,fetch("https://admin.souqpack.com/api/wish_me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})}function os(s,e,t){const a=s.slice();return a[58]=e[t],a[60]=t,a}function ns(s,e,t){const a=s.slice();return a[61]=e[t],a[63]=t,a}function is(s,e,t){const a=s.slice();return a[64]=e[t],a[66]=t,a}function cs(s,e,t){const a=s.slice();return a[67]=e[t],a[69]=t,a}function fs(s){let e,t,a,r,l,u,n,c;function w(){return s[22](s[67])}return{c(){e=p("button"),t=p("img"),u=y(),this.h()},l(v){e=h(v,"BUTTON",{class:!0});var m=_(e);t=h(m,"IMG",{src:!0,class:!0,alt:!0,title:!0}),u=x(m),m.forEach(d),this.h()},h(){var v,m;dt(t.src,a=`${s[67].replace("products/","products/webp/w126/").replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)||i(t,"src",a),i(t,"class","w-full h-full"),i(t,"alt",r=(v=s[1])==null?void 0:v.title),i(t,"title",l=(m=s[1])==null?void 0:m.title),i(e,"class","flex flex-row w-[128px] h-[128px] border border-gray-300 hover:border-[#f9ca03]")},m(v,m){J(v,e,m),o(e,t),o(e,u),n||(c=De(e,"click",w),n=!0)},p(v,m){var g,$;s=v,m[0]&2&&r!==(r=(g=s[1])==null?void 0:g.title)&&i(t,"alt",r),m[0]&2&&l!==(l=($=s[1])==null?void 0:$.title)&&i(t,"title",l)},d(v){v&&d(e),n=!1,c()}}}function us(s){var w;let e,t,a=((w=s[1])==null?void 0:w.discounted_text)+"",r,l,u,n=s[1].real_price_text!=0&&ds(s),c=s[1].discount_text!=0&&ps(s);return{c(){e=p("div"),t=p("span"),r=C(a),l=y(),n&&n.c(),u=y(),c&&c.c(),this.h()},l(v){e=h(v,"DIV",{class:!0});var m=_(e);t=h(m,"SPAN",{class:!0});var g=_(t);r=A(g,a),g.forEach(d),l=x(m),n&&n.l(m),u=x(m),c&&c.l(m),m.forEach(d),this.h()},h(){i(t,"class","price"),i(e,"class","text-2xl uppercase text-green-500")},m(v,m){J(v,e,m),o(e,t),o(t,r),o(e,l),n&&n.m(e,null),o(e,u),c&&c.m(e,null)},p(v,m){var g;m[0]&2&&a!==(a=((g=v[1])==null?void 0:g.discounted_text)+"")&&G(r,a),v[1].real_price_text!=0?n?n.p(v,m):(n=ds(v),n.c(),n.m(e,u)):n&&(n.d(1),n=null),v[1].discount_text!=0?c?c.p(v,m):(c=ps(v),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(v){v&&d(e),n&&n.d(),c&&c.d()}}}function ds(s){let e,t=s[1].real_price_text+"",a;return{c(){e=p("del"),a=C(t)},l(r){e=h(r,"DEL",{});var l=_(e);a=A(l,t),l.forEach(d)},m(r,l){J(r,e,l),o(e,a)},p(r,l){l[0]&2&&t!==(t=r[1].real_price_text+"")&&G(a,t)},d(r){r&&d(e)}}}function ps(s){let e,t,a=s[1].discount_text+"",r,l;return{c(){e=p("div"),t=p("span"),r=C(a),l=C(" Off"),this.h()},l(u){e=h(u,"DIV",{class:!0,style:!0});var n=_(e);t=h(n,"SPAN",{});var c=_(t);r=A(c,a),l=A(c," Off"),c.forEach(d),n.forEach(d),this.h()},h(){i(e,"class","on_sale"),j(e,"position","relative"),j(e,"margin-left","26px")},m(u,n){J(u,e,n),o(e,t),o(t,r),o(t,l)},p(u,n){n[0]&2&&a!==(a=u[1].discount_text+"")&&G(r,a)},d(u){u&&d(e)}}}function hs(s){let e,t,a=s[1].real_price_text+"",r;return{c(){e=p("div"),t=p("span"),r=C(a),this.h()},l(l){e=h(l,"DIV",{class:!0});var u=_(e);t=h(u,"SPAN",{class:!0,style:!0});var n=_(t);r=A(n,a),n.forEach(d),u.forEach(d),this.h()},h(){i(t,"class","price text-2xl uppercase text-green-500"),j(t,"font-family","RobotoMedium"),i(e,"class","product_price")},m(l,u){J(l,e,u),o(e,t),o(t,r)},p(l,u){u[0]&2&&a!==(a=l[1].real_price_text+"")&&G(r,a)},d(l){l&&d(e)}}}function _s(s){let e,t,a=s[1].lowest_price_text+"",r;return{c(){e=p("div"),t=p("span"),r=C(a),this.h()},l(l){e=h(l,"DIV",{class:!0});var u=_(e);t=h(u,"SPAN",{class:!0,style:!0});var n=_(t);r=A(n,a),n.forEach(d),u.forEach(d),this.h()},h(){i(t,"class","price text-2xl uppercase text-green-500"),j(t,"font-family","RobotoMedium"),i(e,"class","product_price")},m(l,u){J(l,e,u),o(e,t),o(t,r)},p(l,u){u[0]&2&&a!==(a=l[1].lowest_price_text+"")&&G(r,a)},d(l){l&&d(e)}}}function vs(s){let e,t,a=s[1].lowest_price_text+"",r,l,u,n=s[1].real_price_text!=0&&ms(s),c=s[1].discount_text!=0&&gs(s);return{c(){e=p("div"),t=p("span"),r=C(a),l=y(),n&&n.c(),u=y(),c&&c.c(),this.h()},l(w){e=h(w,"DIV",{class:!0});var v=_(e);t=h(v,"SPAN",{class:!0});var m=_(t);r=A(m,a),m.forEach(d),l=x(v),n&&n.l(v),u=x(v),c&&c.l(v),v.forEach(d),this.h()},h(){i(t,"class","price"),i(e,"class","product_price")},m(w,v){J(w,e,v),o(e,t),o(t,r),o(e,l),n&&n.m(e,null),o(e,u),c&&c.m(e,null)},p(w,v){v[0]&2&&a!==(a=w[1].lowest_price_text+"")&&G(r,a),w[1].real_price_text!=0?n?n.p(w,v):(n=ms(w),n.c(),n.m(e,u)):n&&(n.d(1),n=null),w[1].discount_text!=0?c?c.p(w,v):(c=gs(w),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},d(w){w&&d(e),n&&n.d(),c&&c.d()}}}function ms(s){let e,t=s[1].real_price_text+"",a;return{c(){e=p("del"),a=C(t)},l(r){e=h(r,"DEL",{});var l=_(e);a=A(l,t),l.forEach(d)},m(r,l){J(r,e,l),o(e,a)},p(r,l){l[0]&2&&t!==(t=r[1].real_price_text+"")&&G(a,t)},d(r){r&&d(e)}}}function gs(s){let e,t,a=s[1].lowest_discount_text+"",r,l;return{c(){e=p("div"),t=p("span"),r=C(a),l=C(" Off"),this.h()},l(u){e=h(u,"DIV",{class:!0,style:!0});var n=_(e);t=h(n,"SPAN",{});var c=_(t);r=A(c,a),l=A(c," Off"),c.forEach(d),n.forEach(d),this.h()},h(){i(e,"class","on_sale"),j(e,"position","relative"),j(e,"margin-left","26px")},m(u,n){J(u,e,n),o(e,t),o(t,r),o(t,l)},p(u,n){n[0]&2&&a!==(a=u[1].lowest_discount_text+"")&&G(r,a)},d(u){u&&d(e)}}}function bs(s){var w;let e,t=((w=s[64])==null?void 0:w.name)+"",a,r,l,u,n;function c(){return s[23](s[63],s[66])}return{c(){e=p("button"),a=C(t),r=y(),this.h()},l(v){e=h(v,"BUTTON",{class:!0});var m=_(e);a=A(m,t),r=x(m),m.forEach(d),this.h()},h(){var v;i(e,"class",l="px-5 py-2 border mr-2 mb-2 border-[#f9ca03] rounded-md  text-sm text-center "+((v=s[64])!=null&&v.selected?"bg-[#f9ca03] text-white":"  text-[#f9ca03] "))},m(v,m){J(v,e,m),o(e,a),o(e,r),u||(n=De(e,"click",c),u=!0)},p(v,m){var g,$;s=v,m[0]&2&&t!==(t=((g=s[64])==null?void 0:g.name)+"")&&G(a,t),m[0]&2&&l!==(l="px-5 py-2 border mr-2 mb-2 border-[#f9ca03] rounded-md  text-sm text-center "+(($=s[64])!=null&&$.selected?"bg-[#f9ca03] text-white":"  text-[#f9ca03] "))&&i(e,"class",l)},d(v){v&&d(e),u=!1,n()}}}function ws(s){var $;let e,t,a,r=(($=s[61])==null?void 0:$.name)+"",l,u,n,c,w,v,m=Ve(s[61].values),g=[];for(let T=0;T<m.length;T+=1)g[T]=bs(is(s,m,T));return{c(){e=p("div"),t=p("div"),a=p("div"),l=C(r),u=y(),n=p("div");for(let T=0;T<g.length;T+=1)g[T].c();c=y(),w=p("hr"),v=y(),this.h()},l(T){e=h(T,"DIV",{class:!0});var E=_(e);t=h(E,"DIV",{class:!0});var R=_(t);a=h(R,"DIV",{class:!0});var I=_(a);l=A(I,r),I.forEach(d),u=x(R),n=h(R,"DIV",{class:!0});var H=_(n);for(let fe=0;fe<g.length;fe+=1)g[fe].l(H);H.forEach(d),R.forEach(d),c=x(E),w=h(E,"HR",{class:!0}),v=x(E),E.forEach(d),this.h()},h(){i(a,"class","px-5 py-2 bg-[#f9ca03] rounded-md text-white text-sm text-center h-min"),i(n,"class","flex flex-row ml-4 flex-wrap"),i(t,"class","w-full flex flex-row"),i(w,"class","easy"),i(e,"class","w-full flex flex-col mb-4")},m(T,E){J(T,e,E),o(e,t),o(t,a),o(a,l),o(t,u),o(t,n);for(let R=0;R<g.length;R+=1)g[R]&&g[R].m(n,null);o(e,c),o(e,w),o(e,v)},p(T,E){var R;if(E[0]&2&&r!==(r=((R=T[61])==null?void 0:R.name)+"")&&G(l,r),E[0]&8194){m=Ve(T[61].values);let I;for(I=0;I<m.length;I+=1){const H=is(T,m,I);g[I]?g[I].p(H,E):(g[I]=bs(H),g[I].c(),g[I].m(n,null))}for(;I<g.length;I+=1)g[I].d(1);g.length=m.length}},d(T){T&&d(e),Pt(g,T)}}}function ks(s){let e,t,a="Customize",r,l;return{c(){e=p("div"),t=p("button"),t.textContent=a,this.h()},l(u){e=h(u,"DIV",{class:!0});var n=_(e);t=h(n,"BUTTON",{"aria-label":!0,class:!0,style:!0,"data-svelte-h":!0}),Ee(t)!=="svelte-118metb"&&(t.textContent=a),n.forEach(d),this.h()},h(){i(t,"aria-label","customize your order"),i(t,"class","btn btn-fill-out btn-addtocart bg-[#f9ca03] hover:bg-white text-white hover:text-[#f9ca03] border-2 border-[#f9ca03] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),j(t,"font-family","Roboto"),i(e,"class","flex flex-row items-center ml-4")},m(u,n){J(u,e,n),o(e,t),r||(l=De(t,"click",s[20]),r=!0)},p:Sl,d(u){u&&d(e),r=!1,l()}}}function ys(s){let e,t,a,r=s[1].delivery+"",l;return{c(){e=p("li"),t=C("Delivery: "),a=p("span"),l=C(r),this.h()},l(u){e=h(u,"LI",{class:!0,style:!0});var n=_(e);t=A(n,"Delivery: "),a=h(n,"SPAN",{style:!0,class:!0});var c=_(a);l=A(c,r),c.forEach(d),n.forEach(d),this.h()},h(){j(a,"font-family","Roboto"),i(a,"class","text-black hover:text-[#f9ca03]"),i(e,"class","text-bold text-[13px] text-[#687188]"),j(e,"font-family","RobotoBold")},m(u,n){J(u,e,n),o(e,t),o(e,a),o(a,l)},p(u,n){n[0]&2&&r!==(r=u[1].delivery+"")&&G(l,r)},d(u){u&&d(e)}}}function xs(s){let e,t,a,r=s[1].packaging_box+"",l;return{c(){e=p("li"),t=C("Packaging Box: "),a=p("span"),l=C(r),this.h()},l(u){e=h(u,"LI",{class:!0,style:!0});var n=_(e);t=A(n,"Packaging Box: "),a=h(n,"SPAN",{style:!0,class:!0});var c=_(a);l=A(c,r),c.forEach(d),n.forEach(d),this.h()},h(){j(a,"font-family","Roboto"),i(a,"class","text-black hover:text-[#f9ca03]"),i(e,"class","text-bold text-[13px] text-[#687188]"),j(e,"font-family","RobotoBold")},m(u,n){J(u,e,n),o(e,t),o(e,a),o(a,l)},p(u,n){n[0]&2&&r!==(r=u[1].packaging_box+"")&&G(l,r)},d(u){u&&d(e)}}}function Is(s){let e,t,a,r=s[5].packing_box_en+"",l;return{c(){e=p("li"),t=C("Packaging Box: "),a=p("span"),l=C(r),this.h()},l(u){e=h(u,"LI",{class:!0,style:!0});var n=_(e);t=A(n,"Packaging Box: "),a=h(n,"SPAN",{style:!0,class:!0});var c=_(a);l=A(c,r),c.forEach(d),n.forEach(d),this.h()},h(){j(a,"font-family","Roboto"),i(a,"class","text-black hover:text-[#f9ca03]"),i(e,"class","text-bold text-[13px] text-[#687188]"),j(e,"font-family","RobotoBold")},m(u,n){J(u,e,n),o(e,t),o(e,a),o(a,l)},p(u,n){n[0]&32&&r!==(r=u[5].packing_box_en+"")&&G(l,r)},d(u){u&&d(e)}}}function Es(s){let e,t=Qs(s[58].title,10)+"",a,r,l;function u(){return s[28](s[60])}return{c(){e=p("button"),a=C(t),this.h()},l(n){e=h(n,"BUTTON",{class:!0});var c=_(e);a=A(c,t),c.forEach(d),this.h()},h(){i(e,"class","uppercase flex flex-row border-b border-b-gray-300 hover: hover:text-[#f9ca03] text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),z(e,"borderbactive",s[2]==s[60])},m(n,c){J(n,e,c),o(e,a),r||(l=De(e,"click",u),r=!0)},p(n,c){s=n,c[0]&4&&z(e,"borderbactive",s[2]==s[60])},d(n){n&&d(e),r=!1,l()}}}function Us(s){let e,t=s[12][s[2]].desc+"",a;return{c(){e=p("span"),a=C(t)},l(r){e=h(r,"SPAN",{});var l=_(e);a=A(l,t),l.forEach(d)},m(r,l){J(r,e,l),o(e,a)},p(r,l){l[0]&4&&t!==(t=r[12][r[2]].desc+"")&&G(a,t)},d(r){r&&d(e)}}}function Ks(s){let e,t,a=s[1].description_web+"";return{c(){e=p("span"),t=new Cs(!1),this.h()},l(r){e=h(r,"SPAN",{class:!0});var l=_(e);t=As(l,!1),l.forEach(d),this.h()},h(){t.a=null,i(e,"class","py-4")},m(r,l){J(r,e,l),t.m(a,e)},p(r,l){l[0]&2&&a!==(a=r[1].description_web+"")&&t.p(a)},d(r){r&&d(e)}}}function Js(s){var Hl,Ul;let e,t,a,r,l,u,n,c,w,v,m,g,$,T,E,R,I,H,fe,ke,_e,Q,Se,tt,pt,ht,qe,Ne,xt,Oe,ue,je,lt=((Hl=s[1])==null?void 0:Hl.title)+"",_t,It,Y,Et=s[1].discount_text!=""&&s[14](),vt,mt=s[14]()&&s[1].discount_text=="",k,U=!s[14]()&&s[1].lowest_discount_text=="",O,M=s[1].lowest_discount_text!=""&&!s[14](),N,B,S,V,D,de,P,te,ye="-",ve,Pe,Re=s[8].qty+"",Me,st,Be,Tl="+",Zt,Le,xe,Cl='<i class="icon-basket-loaded"></i> Add to cart',el,$e,me,Al="Checkout",tl,He,Ue,Ol=`<img src="${Os}" alt="Wishlist" class="w-5 h-5 items-center" title="Add to Fav"/>`,ll,Tt,Ke,at,sl,Ct,al,Te,jl='<div class="easy"><span class="font-bold">Available stock: 0</span></div> <div class="cart_btn"><button class="bg-gray-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" disabled="">Out of Stock</button></div>',rl,Ce,Rl='<div class="easy"><span class="font-bold">Please select all variations</span></div>',ol,At,nl,W,Je,il,rt,Dt=s[1].sku+"",Ot,cl,jt,ze,fl,ot,Vt=s[1].cat.title+"",Rt,ul,Mt,Bt,Ge,dl,nt,pl,hl,Qe,Ae,Ie,Ml="Description",_l,vl,it,ml,Lt,gl,$t,bl,St,wl,gt,We,Ye,Bl="Related Products",kl,Fe,L,yl,Ll;document.title=t=s[0].props.product.product.meta_title;let bt=Ve(s[11]),X=[];for(let f=0;f<bt.length;f+=1)X[f]=fs(cs(s,bt,f));let le=Et&&us(s),se=mt&&hs(s),ae=U&&_s(s),re=M&&vs(s),wt=Ve((Ul=s[1])==null?void 0:Ul.combo_types),Z=[];for(let f=0;f<wt.length;f+=1)Z[f]=ws(ns(s,wt,f));let oe=s[9]&&ks(s),ne=s[1].delivery!=0&&s[1].delivery!=null&&ys(s),ie=s[1].packaging_box!=null&&s[5].packing_box_en==null&&xs(s),ce=s[1].packaging_box!=null&&s[5].packing_box_en!=null&&Is(s),kt=Ve(s[12]),ee=[];for(let f=0;f<kt.length;f+=1)ee[f]=Es(os(s,kt,f));function $l(f,b){return f[2]==-1?Ks:Us}let Ht=$l(s),ge=Ht(s);return Fe=new $s({props:{relateds:s[7]}}),{c(){e=p("link"),a=p("meta"),l=p("meta"),n=p("link"),c=p("link"),w=p("link"),v=y(),m=p("main"),g=p("div"),$=p("div"),T=p("div"),E=p("div"),R=p("div"),I=p("img"),_e=y(),Q=p("img"),ht=y(),qe=p("div"),Ne=p("div");for(let f=0;f<X.length;f+=1)X[f].c();xt=y(),Oe=p("div"),ue=p("div"),je=p("h1"),_t=C(lt),It=y(),Y=p("div"),le&&le.c(),vt=y(),se&&se.c(),k=y(),ae&&ae.c(),O=y(),re&&re.c(),N=y(),B=p("div");for(let f=0;f<Z.length;f+=1)Z[f].c();S=y(),V=p("div"),D=p("div"),de=p("div"),P=p("div"),te=p("button"),te.textContent=ye,ve=y(),Pe=p("span"),Me=C(Re),st=y(),Be=p("button"),Be.textContent=Tl,Zt=y(),Le=p("div"),xe=p("button"),xe.innerHTML=Cl,el=y(),$e=p("div"),me=p("button"),me.textContent=Al,tl=y(),He=p("div"),Ue=p("button"),Ue.innerHTML=Ol,ll=y(),oe&&oe.c(),Tt=y(),Ke=p("div"),at=p("span"),sl=C("Available stock: "),Ct=C(s[10]),al=y(),Te=p("div"),Te.innerHTML=jl,rl=y(),Ce=p("div"),Ce.innerHTML=Rl,ol=y(),At=p("hr"),nl=y(),W=p("ul"),Je=p("li"),il=C("SKU: "),rt=p("span"),Ot=C(Dt),cl=y(),ne&&ne.c(),jt=y(),ze=p("li"),fl=C("Category: "),ot=p("span"),Rt=C(Vt),ul=y(),ie&&ie.c(),Mt=y(),ce&&ce.c(),Bt=y(),Ge=p("li"),dl=C("Description: "),nt=p("span"),pl=C(Ds),hl=y(),Qe=p("div"),Ae=p("div"),Ie=p("button"),Ie.textContent=Ml,_l=y();for(let f=0;f<ee.length;f+=1)ee[f].c();vl=y(),it=p("div"),ge.c(),ml=y(),Lt=p("hr"),gl=y(),$t=p("hr"),bl=y(),St=p("div"),wl=y(),gt=p("div"),We=p("div"),Ye=p("span"),Ye.textContent=Bl,kl=y(),zt(Fe.$$.fragment),this.h()},l(f){const b=Ts("svelte-ek5djs",document.head);e=h(b,"LINK",{rel:!0,href:!0}),a=h(b,"META",{name:!0,content:!0}),l=h(b,"META",{name:!0,content:!0}),n=h(b,"LINK",{rel:!0,hreflang:!0,href:!0}),c=h(b,"LINK",{rel:!0,hreflang:!0,href:!0}),w=h(b,"LINK",{rel:!0,hreflang:!0,href:!0}),b.forEach(d),v=x(f),m=h(f,"MAIN",{class:!0,style:!0});var K=_(m);g=h(K,"DIV",{class:!0});var F=_(g);$=h(F,"DIV",{class:!0});var ct=_($);T=h(ct,"DIV",{class:!0});var qt=_(T);E=h(qt,"DIV",{class:!0});var ft=_(E);R=h(ft,"DIV",{class:!0});var ut=_(R);I=h(ut,"IMG",{src:!0,class:!0,alt:!0,title:!0}),_e=x(ut),Q=h(ut,"IMG",{src:!0,class:!0,alt:!0,title:!0}),ut.forEach(d),ht=x(ft),qe=h(ft,"DIV",{class:!0});var Nt=_(qe);Ne=h(Nt,"DIV",{class:!0});var q=_(Ne);for(let we=0;we<X.length;we+=1)X[we].l(q);q.forEach(d),Nt.forEach(d),ft.forEach(d),qt.forEach(d),xt=x(ct),Oe=h(ct,"DIV",{class:!0});var be=_(Oe);ue=h(be,"DIV",{class:!0});var Xe=_(ue);je=h(Xe,"H1",{class:!0});var Kl=_(je);_t=A(Kl,lt),Kl.forEach(d),It=x(Xe),Y=h(Xe,"DIV",{class:!0});var Ze=_(Y);le&&le.l(Ze),vt=x(Ze),se&&se.l(Ze),k=x(Ze),ae&&ae.l(Ze),O=x(Ze),re&&re.l(Ze),Ze.forEach(d),N=x(Xe),B=h(Xe,"DIV",{class:!0});var Jl=_(B);for(let we=0;we<Z.length;we+=1)Z[we].l(Jl);Jl.forEach(d),S=x(Xe),V=h(Xe,"DIV",{class:!0});var pe=_(V);D=h(pe,"DIV",{class:!0});var et=_(D);de=h(et,"DIV",{class:!0});var zl=_(de);P=h(zl,"DIV",{class:!0});var yt=_(P);te=h(yt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(te)!=="svelte-1vy4fj2"&&(te.textContent=ye),ve=x(yt),Pe=h(yt,"SPAN",{class:!0});var Gl=_(Pe);Me=A(Gl,Re),Gl.forEach(d),st=x(yt),Be=h(yt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(Be)!=="svelte-1x3ojq6"&&(Be.textContent=Tl),yt.forEach(d),zl.forEach(d),Zt=x(et),Le=h(et,"DIV",{class:!0});var Ql=_(Le);xe=h(Ql,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(xe)!=="svelte-1crcb9"&&(xe.innerHTML=Cl),Ql.forEach(d),el=x(et),$e=h(et,"DIV",{class:!0});var Wl=_($e);me=h(Wl,"BUTTON",{title:!0,"aria-label":!0,class:!0,style:!0,"data-svelte-h":!0}),Ee(me)!=="svelte-lhmkel"&&(me.textContent=Al),Wl.forEach(d),tl=x(et),He=h(et,"DIV",{class:!0});var Yl=_(He);Ue=h(Yl,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(Ue)!=="svelte-eryjpg"&&(Ue.innerHTML=Ol),Yl.forEach(d),et.forEach(d),ll=x(pe),oe&&oe.l(pe),Tt=x(pe),Ke=h(pe,"DIV",{class:!0});var Fl=_(Ke);at=h(Fl,"SPAN",{class:!0});var xl=_(at);sl=A(xl,"Available stock: "),Ct=A(xl,s[10]),xl.forEach(d),Fl.forEach(d),al=x(pe),Te=h(pe,"DIV",{class:!0,"data-svelte-h":!0}),Ee(Te)!=="svelte-1ngvi6h"&&(Te.innerHTML=jl),rl=x(pe),Ce=h(pe,"DIV",{class:!0,"data-svelte-h":!0}),Ee(Ce)!=="svelte-1isa4w2"&&(Ce.innerHTML=Rl),ol=x(pe),At=h(pe,"HR",{class:!0}),nl=x(pe),W=h(pe,"UL",{class:!0});var he=_(W);Je=h(he,"LI",{class:!0,style:!0});var Il=_(Je);il=A(Il,"SKU: "),rt=h(Il,"SPAN",{style:!0,class:!0});var Xl=_(rt);Ot=A(Xl,Dt),Xl.forEach(d),Il.forEach(d),cl=x(he),ne&&ne.l(he),jt=x(he),ze=h(he,"LI",{class:!0,style:!0});var El=_(ze);fl=A(El,"Category: "),ot=h(El,"SPAN",{style:!0,class:!0});var Zl=_(ot);Rt=A(Zl,Vt),Zl.forEach(d),El.forEach(d),ul=x(he),ie&&ie.l(he),Mt=x(he),ce&&ce.l(he),Bt=x(he),Ge=h(he,"LI",{class:!0,style:!0});var Dl=_(Ge);dl=A(Dl,"Description: "),nt=h(Dl,"SPAN",{style:!0,class:!0});var es=_(nt);pl=A(es,Ds),es.forEach(d),Dl.forEach(d),he.forEach(d),pe.forEach(d),Xe.forEach(d),be.forEach(d),ct.forEach(d),hl=x(F),Qe=h(F,"DIV",{class:!0});var Ut=_(Qe);Ae=h(Ut,"DIV",{class:!0});var Kt=_(Ae);Ie=h(Kt,"BUTTON",{class:!0,"data-svelte-h":!0}),Ee(Ie)!=="svelte-1ida8ox"&&(Ie.textContent=Ml),_l=x(Kt);for(let we=0;we<ee.length;we+=1)ee[we].l(Kt);Kt.forEach(d),vl=x(Ut),it=h(Ut,"DIV",{class:!0});var ts=_(it);ge.l(ts),ts.forEach(d),Ut.forEach(d),ml=x(F),Lt=h(F,"HR",{class:!0}),gl=x(F),$t=h(F,"HR",{class:!0}),bl=x(F),St=h(F,"DIV",{class:!0}),_(St).forEach(d),wl=x(F),gt=h(F,"DIV",{class:!0});var ls=_(gt);We=h(ls,"DIV",{class:!0});var Jt=_(We);Ye=h(Jt,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),Ee(Ye)!=="svelte-1ysbf00"&&(Ye.textContent=Bl),kl=x(Jt),Gt(Fe.$$.fragment,Jt),Jt.forEach(d),ls.forEach(d),F.forEach(d),K.forEach(d),this.h()},h(){var f,b,K,F;i(e,"rel","canonical"),i(e,"href",s[21]),i(a,"name","description"),i(a,"content",r=s[0].props.product.product.meta_description),i(l,"name","keywords"),i(l,"content",u=s[0].props.product.product.meta_keywords),i(n,"rel","alternate"),i(n,"hreflang","en"),i(n,"href","https://souqpack.com/en/"),i(c,"rel","alternate"),i(c,"hreflang","ar"),i(c,"href","https://souqpack.com/"),i(w,"rel","alternate"),i(w,"hreflang","x-default"),i(w,"href","https://souqpack.com/"),dt(I.src,H=`${s[3].replace("products/","products/webp/w382/").replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)||i(I,"src",H),i(I,"class","w-full border lg:hidden flex border-gray-300"),i(I,"alt",fe=(f=s[1])==null?void 0:f.title),i(I,"title",ke=(b=s[1])==null?void 0:b.title),dt(Q.src,Se=`${s[3].replace("products/","products/webp/w522/").replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`)||i(Q,"src",Se),i(Q,"class","w-full border lg:flex hidden border-gray-300"),i(Q,"alt",tt=(K=s[1])==null?void 0:K.title),i(Q,"title",pt=(F=s[1])==null?void 0:F.title),i(R,"class","flex flex-row"),i(Ne,"class","flex flex-row w-full flex-wrap gap-1"),i(qe,"class","flex flex-row w-full overflow-x-scroll mt-2"),i(E,"class","flex flex-col items-end lg:max-w-[522px] w-full self-end"),i(T,"class","flex flex-row lg:w-1/2 w-full lg:justify-end justify-center lg:px-0 px-4"),i(je,"class","text-2xl uppercase"),i(Y,"class","mt-4 flex flex-row"),i(B,"class","flex flex-col mb-4 w-full mt-4 pb-4"),i(te,"class","text-2xl font-semibold border-2 border-gray-200 p-1 hover:bg-gray-200 focus:outline-none rounded-full w-10 h-10"),i(Pe,"class","mx-2 border-2 border-gray-300 p-1 text-center px-8 focus:outline-none rounded-md"),i(Be,"class","text-2xl font-semibold border-2 border-gray-200 p-1 hover:bg-gray-200 focus:outline-none rounded-full w-10 h-10"),i(P,"class","flex flex-row items-center"),z(P,"hidden",s[10]<=0),i(de,"class","flex flex-row items-center"),i(xe,"class","btn btn-fill-out btn-addtocart bg-[#f9ca03] hover:bg-white text-white hover:text-[#f9ca03] border-2 border-[#f9ca03] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),z(xe,"disabled",s[10]<=0),i(Le,"class","flex flex-row items-center ml-4"),z(Le,"hidden",s[10]<=0),i(me,"title","Checkout"),i(me,"aria-label","Checkout"),i(me,"class","btn btn-fill-out btn-addtocart bg-[#f9ca03] hover:bg-white text-white hover:text-[#f9ca03] border-2 border-[#f9ca03] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),j(me,"font-family","RobotoMedium"),i($e,"class","flex flex-row items-center ml-4"),z($e,"hidden",s[10]<=0),i(Ue,"class","text-2xl flex items-center justify-center font-semibold border-2 border-gray-200 p-1 hover:bg-gray-200 focus:outline-none rounded-full w-10 h-10 "),i(He,"class","flex flex-row items-center ml-4"),z(He,"hidden",s[10]<=0),i(D,"class","w-full flex flex-row items-center"),z(D,"hidden",s[4]===-1),i(at,"class","font-bold"),i(Ke,"class","flex flex-row w-full mt-4 mb-4"),z(Ke,"hidden",s[10]<=0),i(Te,"class","cart_extra easy"),z(Te,"hidden",!(s[4]===-1&&s[6]>0&&s[10]<1)),i(Ce,"class","flex flex-row w-full"),z(Ce,"hidden",!(s[4]===-1&&s[6]<s[1].combo_types.length)),i(At,"class","easy mt-2"),j(rt,"font-family","Roboto"),i(rt,"class","text-black hover:text-[#f9ca03]"),i(Je,"class","text-bold text-[13px] text-[#687188]"),j(Je,"font-family","RobotoBold"),j(ot,"font-family","Roboto"),i(ot,"class","text-black hover:text-[#f9ca03]"),i(ze,"class","text-bold text-[13px] text-[#687188]"),j(ze,"font-family","RobotoBold"),j(nt,"font-family","Roboto"),i(nt,"class","text-black hover:text-[#f9ca03]"),i(Ge,"class","text-bold text-[13px] text-[#687188]"),j(Ge,"font-family","RobotoBold"),i(W,"class","product-meta space-y-2 mt-4"),i(V,"class","flex flex-col w-full"),i(ue,"class","flex flex-col"),i(Oe,"class","flex flex-row lg:w-1/2 w-full pl-4 lg:mt-0 mt-4"),i($,"class","max-w-[1140px] w-full flex lg:flex-row flex-col justify-center self-center"),i(Ie,"class","uppercase flex flex-row border-b border-b-gray-300 hover: hover:text-[#f9ca03] text-base font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),z(Ie,"borderbactive",s[2]==-1),i(Ae,"class","flex flex-row items-center self-center w-full"),i(it,"class","flex flex-row items-center self-center w-full"),i(Qe,"class","flex flex-col self-center mt-10 justify-center items-center max-w-[1140px] w-full lg:px-0 px-4"),i(Lt,"class","easy"),i($t,"class","easy"),i(St,"class","h-4"),i(Ye,"class","text-xl mb-2 mt-2 uppercase"),j(Ye,"font-family","RobotoMedium"),i(We,"class","flex flex-col w-full self-center"),i(gt,"class","flex flex-col self-center mt-10 justify-center items-center max-w-[1140px] w-full lg:pl-0 pl-4"),i(g,"class","flex flex-col w-full justify-center"),i(m,"class","mt-10 mb-10"),j(m,"font-family","Roboto")},m(f,b){o(document.head,e),o(document.head,a),o(document.head,l),o(document.head,n),o(document.head,c),o(document.head,w),J(f,v,b),J(f,m,b),o(m,g),o(g,$),o($,T),o(T,E),o(E,R),o(R,I),o(R,_e),o(R,Q),o(E,ht),o(E,qe),o(qe,Ne);for(let K=0;K<X.length;K+=1)X[K]&&X[K].m(Ne,null);o($,xt),o($,Oe),o(Oe,ue),o(ue,je),o(je,_t),o(ue,It),o(ue,Y),le&&le.m(Y,null),o(Y,vt),se&&se.m(Y,null),o(Y,k),ae&&ae.m(Y,null),o(Y,O),re&&re.m(Y,null),o(ue,N),o(ue,B);for(let K=0;K<Z.length;K+=1)Z[K]&&Z[K].m(B,null);o(ue,S),o(ue,V),o(V,D),o(D,de),o(de,P),o(P,te),o(P,ve),o(P,Pe),o(Pe,Me),o(P,st),o(P,Be),o(D,Zt),o(D,Le),o(Le,xe),o(D,el),o(D,$e),o($e,me),o(D,tl),o(D,He),o(He,Ue),o(V,ll),oe&&oe.m(V,null),o(V,Tt),o(V,Ke),o(Ke,at),o(at,sl),o(at,Ct),o(V,al),o(V,Te),o(V,rl),o(V,Ce),o(V,ol),o(V,At),o(V,nl),o(V,W),o(W,Je),o(Je,il),o(Je,rt),o(rt,Ot),o(W,cl),ne&&ne.m(W,null),o(W,jt),o(W,ze),o(ze,fl),o(ze,ot),o(ot,Rt),o(W,ul),ie&&ie.m(W,null),o(W,Mt),ce&&ce.m(W,null),o(W,Bt),o(W,Ge),o(Ge,dl),o(Ge,nt),o(nt,pl),o(g,hl),o(g,Qe),o(Qe,Ae),o(Ae,Ie),o(Ae,_l);for(let K=0;K<ee.length;K+=1)ee[K]&&ee[K].m(Ae,null);o(Qe,vl),o(Qe,it),ge.m(it,null),o(g,ml),o(g,Lt),o(g,gl),o(g,$t),o(g,bl),o(g,St),o(g,wl),o(g,gt),o(gt,We),o(We,Ye),o(We,kl),Qt(Fe,We,null),L=!0,yl||(Ll=[De(te,"click",s[19]),De(Be,"click",s[18]),De(xe,"click",s[24]),De(me,"click",s[25]),De(Ue,"click",s[26]),De(Ie,"click",s[27])],yl=!0)},p(f,b){var F,ct,qt,ft,ut,Nt;if((!L||b[0]&1)&&t!==(t=f[0].props.product.product.meta_title)&&(document.title=t),(!L||b[0]&1&&r!==(r=f[0].props.product.product.meta_description))&&i(a,"content",r),(!L||b[0]&1&&u!==(u=f[0].props.product.product.meta_keywords))&&i(l,"content",u),(!L||b[0]&8&&!dt(I.src,H=`${f[3].replace("products/","products/webp/w382/").replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`))&&i(I,"src",H),(!L||b[0]&2&&fe!==(fe=(F=f[1])==null?void 0:F.title))&&i(I,"alt",fe),(!L||b[0]&2&&ke!==(ke=(ct=f[1])==null?void 0:ct.title))&&i(I,"title",ke),(!L||b[0]&8&&!dt(Q.src,Se=`${f[3].replace("products/","products/webp/w522/").replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp")}`))&&i(Q,"src",Se),(!L||b[0]&2&&tt!==(tt=(qt=f[1])==null?void 0:qt.title))&&i(Q,"alt",tt),(!L||b[0]&2&&pt!==(pt=(ft=f[1])==null?void 0:ft.title))&&i(Q,"title",pt),b[0]&2058){bt=Ve(f[11]);let q;for(q=0;q<bt.length;q+=1){const be=cs(f,bt,q);X[q]?X[q].p(be,b):(X[q]=fs(be),X[q].c(),X[q].m(Ne,null))}for(;q<X.length;q+=1)X[q].d(1);X.length=bt.length}if((!L||b[0]&2)&&lt!==(lt=((ut=f[1])==null?void 0:ut.title)+"")&&G(_t,lt),b[0]&2&&(Et=f[1].discount_text!=""&&f[14]()),Et?le?le.p(f,b):(le=us(f),le.c(),le.m(Y,vt)):le&&(le.d(1),le=null),b[0]&2&&(mt=f[14]()&&f[1].discount_text==""),mt?se?se.p(f,b):(se=hs(f),se.c(),se.m(Y,k)):se&&(se.d(1),se=null),b[0]&2&&(U=!f[14]()&&f[1].lowest_discount_text==""),U?ae?ae.p(f,b):(ae=_s(f),ae.c(),ae.m(Y,O)):ae&&(ae.d(1),ae=null),b[0]&2&&(M=f[1].lowest_discount_text!=""&&!f[14]()),M?re?re.p(f,b):(re=vs(f),re.c(),re.m(Y,null)):re&&(re.d(1),re=null),b[0]&8194){wt=Ve((Nt=f[1])==null?void 0:Nt.combo_types);let q;for(q=0;q<wt.length;q+=1){const be=ns(f,wt,q);Z[q]?Z[q].p(be,b):(Z[q]=ws(be),Z[q].c(),Z[q].m(B,null))}for(;q<Z.length;q+=1)Z[q].d(1);Z.length=wt.length}if((!L||b[0]&256)&&Re!==(Re=f[8].qty+"")&&G(Me,Re),(!L||b[0]&1024)&&z(P,"hidden",f[10]<=0),(!L||b[0]&1024)&&z(xe,"disabled",f[10]<=0),(!L||b[0]&1024)&&z(Le,"hidden",f[10]<=0),(!L||b[0]&1024)&&z($e,"hidden",f[10]<=0),(!L||b[0]&1024)&&z(He,"hidden",f[10]<=0),(!L||b[0]&16)&&z(D,"hidden",f[4]===-1),f[9]?oe?oe.p(f,b):(oe=ks(f),oe.c(),oe.m(V,Tt)):oe&&(oe.d(1),oe=null),(!L||b[0]&1024)&&G(Ct,f[10]),(!L||b[0]&1024)&&z(Ke,"hidden",f[10]<=0),(!L||b[0]&1104)&&z(Te,"hidden",!(f[4]===-1&&f[6]>0&&f[10]<1)),(!L||b[0]&82)&&z(Ce,"hidden",!(f[4]===-1&&f[6]<f[1].combo_types.length)),(!L||b[0]&2)&&Dt!==(Dt=f[1].sku+"")&&G(Ot,Dt),f[1].delivery!=0&&f[1].delivery!=null?ne?ne.p(f,b):(ne=ys(f),ne.c(),ne.m(W,jt)):ne&&(ne.d(1),ne=null),(!L||b[0]&2)&&Vt!==(Vt=f[1].cat.title+"")&&G(Rt,Vt),f[1].packaging_box!=null&&f[5].packing_box_en==null?ie?ie.p(f,b):(ie=xs(f),ie.c(),ie.m(W,Mt)):ie&&(ie.d(1),ie=null),f[1].packaging_box!=null&&f[5].packing_box_en!=null?ce?ce.p(f,b):(ce=Is(f),ce.c(),ce.m(W,Bt)):ce&&(ce.d(1),ce=null),(!L||b[0]&4)&&z(Ie,"borderbactive",f[2]==-1),b[0]&4100){kt=Ve(f[12]);let q;for(q=0;q<kt.length;q+=1){const be=os(f,kt,q);ee[q]?ee[q].p(be,b):(ee[q]=Es(be),ee[q].c(),ee[q].m(Ae,null))}for(;q<ee.length;q+=1)ee[q].d(1);ee.length=kt.length}Ht===(Ht=$l(f))&&ge?ge.p(f,b):(ge.d(1),ge=Ht(f),ge&&(ge.c(),ge.m(it,null)));const K={};b[0]&128&&(K.relateds=f[7]),Fe.$set(K)},i(f){L||(Wt(Fe.$$.fragment,f),L=!0)},o(f){Yt(Fe.$$.fragment,f),L=!1},d(f){f&&(d(v),d(m)),d(e),d(a),d(l),d(n),d(c),d(w),Pt(X,f),le&&le.d(),se&&se.d(),ae&&ae.d(),re&&re.d(),Pt(Z,f),oe&&oe.d(),ne&&ne.d(),ie&&ie.d(),ce&&ce.d(),Pt(ee,f),ge.d(),Ft(Fe),yl=!1,qs(Ll)}}}let Ds="";function zs(s,e){return e.length===0?!1:e.every(function(t){return s.indexOf(t)>=0})}function Gs(s){return s.replace(/[^\d-]/g,"")}function Vs(s){return new Promise((e,t)=>{try{const a=localStorage.getItem(s);e(a)}catch(a){t(a)}})}function Ss(s,e){return new Promise((t,a)=>{try{localStorage.setItem(s,e),t(!0)}catch(r){a(r)}})}function Qs(s,e){return s.length>e&&(s=s.substr(0,e)+"..."),s}function Ws(s,e,t){var mt;let a;Ns(s,Ms,k=>t(38,a=k));let{data:r}=e;console.log("pdetails",r);let l=(mt=r.props)==null?void 0:mt.product.product;const u=(l==null?void 0:l.slider_images)??[],n=l==null?void 0:l.more_descp;let c=-1,w=`https://admin.souqpack.com/resources/uploads/products/${l==null?void 0:l.image}`,v=-1,m={},g=0,$=0,T=[];l==null||l.slug;let E={qty:1},R=!1,I=!1,H=0;function fe(k=!1){var O,M;console.log("here"),t(9,R=((O=l==null?void 0:l.cat)==null?void 0:O.cust)=="1"),ke();var U=l==null?void 0:l.description_sweb;U=U.replace(/<[^>]+>/g,""),Gs(l.delivery),t(8,E.qty=1,E),t(7,T=(M=r.props)==null?void 0:M.product.related)}function ke(){let k=0;for(let S=0;S<l.combos.length;S++)k=k+parseInt(l.combos[S].stock);let U=!1,O=[];if(l!=null&&l.combo_types)for(var M=0;l.combo_types.length>M;M++)for(var N=0;l.combo_types[M].values.length>N;N++)l.combo_types[M].values[N].selected&&(U=!0,O.push(l.combo_types[M].values[N].name));if(U){k=0;for(let S=0;S<l.combos.length;S++){var B=[];for(let V=0;V<l.combos[S].types.length;V++)B.push(l.combos[S].types[V].value_name);zs(B,O)&&(k=k+parseInt(l.combos[S].stock))}}t(10,H=k),console.log("totalStock",k)}function _e(k,U){for(var O=l.combo_types,M=O[k].values,N=0;N<=M.length-1;N++)M[N].selected;for(var N=0;N<=M.length-1;N++)M[N].selected=!1;if(M[U].selected=!0,t(1,l.combo_types[k].values=M,l),Q()){for(var B=l.combos,S=-1,V=l.combo_types,D=[],N=0;N<B.length;N++){for(var de=B[N].types,P=0,te=0;te<de.length;te++)for(var ye=de[te],ve=0;ve<V.length;ve++){var Pe=V[ve];if(Pe.id==ye.id)for(var Re=Pe.values,Me=0;Me<Re.length;Me++){var st=Re[Me];if(st.selected&&ye.value_id==st.id){P++,D.push(""+ye.name+": "+st.name);break}}}if(P==de.length){S=N,console.log("found a combo here"),console.log(B[N]);break}}S==-1?(I=!1,t(4,v=-1)):(I=!0,t(1,l.discounted_text=B[S].discounted_text,l),t(1,l.real_price_text=B[S].real_price_text,l),t(1,l.discount_text=B[S].discount_text,l),t(4,v=S),t(5,m=B[S]),g=B[S].id,t(1,l.combo_index=v,l),t(1,l.combo_string=D,l),t(1,l.combo_id=B[S].id,l))}ke()}function Q(){let k=0;for(var U=!0,O=l.combo_types,M=0;M<O.length;M++){for(var N=!1,B=0;B<O[M].values.length;B++)O[M].values[B].selected&&(N=!0,k++);if(!N){U=!1;break}}return t(6,$=k),U}function Se(){return Q()&&I}function tt(k){if(!Q()){alert("You need to select all variations to process with your order.");return}I||alert("Item with these variations is not available"),v==-1&&alert("Item with these variations is not available");let O=m.stock;parseInt(E.qty)>O&&alert("Out of stock");var M=0;Vs("cart_items").then(N=>{var B=!1,S=[];if(N!=null&&N!="null"&&typeof N<"u"&&N!=""&&N.length>0){for(var V=JSON.parse(N),D=0;D<=V.length-1;D++)if(V[D].id==k.id&&V[D].combo_id==g){var de=parseInt(V[D].qty)+parseInt(E.qty);de>O&&alert("Out of stock"),V[D].qty=parseInt(V[D].qty)+parseInt(E.qty),B=!0}S=V}if(!B){var P=l.combos[l.combo_index],te=P.discounted_price>0?P.discounted_price:P.real_price,ye=P.discounted_price>0?P.discounted_text:P.real_price_text,ve={id:k.id,qty:parseInt(E.qty),title:k.title,img:k.image,price:te,price_text:ye,combo_string:l.combo_string,combo:P,combo_id:P.id,qty_max:P.stock,slug:k.slug};S.push(ve)}Ss("cart_items",JSON.stringify(S));for(var D=0;D<S.length;D++)M+=S[D].price*S[D].qty;ss.set({total:M,items:S,totalItems:S.length}),alert("Item added to cart")})}function pt(k){if(!Q()){alert("You need to select all variations to process with your order.");return}I||alert("Item with these variations is not available"),v==-1&&alert("Item with these variations is not available");let O=m.stock;parseInt(E.qty)>O&&alert("Out of stock");var M=0;Vs("cart_items").then(N=>{var B=!1,S=[];if(N!=null&&N!="null"&&typeof N<"u"&&N!=""&&N.length>0){for(var V=JSON.parse(N),D=0;D<=V.length-1;D++)if(V[D].id==k.id&&V[D].combo_id==g){var de=parseInt(V[D].qty)+parseInt(E.qty);de>O&&alert("Out of stock"),V[D].qty=parseInt(V[D].qty)+parseInt(E.qty),B=!0}S=V}if(!B){var P=l.combos[l.combo_index],te=P.discounted_price>0?P.discounted_price:P.real_price,ye=P.discounted_price>0?P.discounted_text:P.real_price_text,ve={id:k.id,qty:parseInt(E.qty),title:k.title,img:k.image,price:te,price_text:ye,combo_string:l.combo_string,combo:P,combo_id:P.id,qty_max:P.stock,slug:k.slug};S.push(ve)}Ss("cart_items",JSON.stringify(S));for(var D=0;D<S.length;D++)M+=S[D].price*S[D].qty;ss.set({total:M,items:S,totalItems:S.length})})}function ht(k){pt(k),localStorage.setItem("myKey","fromcheckout");var U=localStorage.getItem("login_data");if(U){Vl(`${Xt}/checkout`);return}Vl(`${Xt}/login`)}function qe(k){console.log("addtowishlist",k);const U={id:k.id};console.log(U),Hs(U).then(O=>O.json()).then(O=>{console.log("Result"),console.log(O),O.action=="success"?alert("Product added to wishlist"):alert(O.error)}).catch(O=>{console.log("Result"),console.log(O),alert("Something went wrong with this request, please try again later.",O)})}function Ne(){let k=parseInt(E.qty)+1;(m==null?void 0:m.stock)<k&&alert("Out of stock"),t(8,E.qty=k,E)}function xt(){E.qty<2&&alert("Minimum required quantity is: "+l.min_qty),t(8,E.qty=E.qty-1,E)}Ps(()=>{fe()});function Oe(){if(R){localStorage.setItem("cat_title",l.cat_title);const k="/customize/"+l.cat.slug+"-"+l.cat.id;Vl(k)}}const ue=a.url,je=k=>{t(3,w=k)},lt=(k,U)=>{_e(k,U)},_t=()=>tt(l),It=()=>ht(l),Y=()=>qe(l),Et=()=>{t(2,c=-1)},vt=k=>{t(2,c=k)};return s.$$set=k=>{"data"in k&&t(0,r=k.data)},[r,l,c,w,v,m,$,T,E,R,H,u,n,_e,Se,tt,ht,qe,Ne,xt,Oe,ue,je,lt,_t,It,Y,Et,vt]}let Ys=class extends Nl{constructor(e){super(),Pl(this,e,Ws,Js,ql,{data:0},null,[-1,-1,-1])}};function Fs(s){let e,t,a,r,l,u,n;return t=new js({props:{data:s[0]}}),r=new Ys({props:{data:s[0]}}),u=new Rs({props:{data:s[0]}}),{c(){e=p("main"),zt(t.$$.fragment),a=y(),zt(r.$$.fragment),l=y(),zt(u.$$.fragment),this.h()},l(c){e=h(c,"MAIN",{class:!0});var w=_(e);Gt(t.$$.fragment,w),a=x(w),Gt(r.$$.fragment,w),l=x(w),Gt(u.$$.fragment,w),w.forEach(d),this.h()},h(){i(e,"class","bg-[#fff]")},m(c,w){J(c,e,w),Qt(t,e,null),o(e,a),Qt(r,e,null),o(e,l),Qt(u,e,null),n=!0},p(c,[w]){const v={};w&1&&(v.data=c[0]),t.$set(v);const m={};w&1&&(m.data=c[0]),r.$set(m);const g={};w&1&&(g.data=c[0]),u.$set(g)},i(c){n||(Wt(t.$$.fragment,c),Wt(r.$$.fragment,c),Wt(u.$$.fragment,c),n=!0)},o(c){Yt(t.$$.fragment,c),Yt(r.$$.fragment,c),Yt(u.$$.fragment,c),n=!1},d(c){c&&d(e),Ft(t),Ft(r),Ft(u)}}}function Xs(s,e,t){let{data:a}=e;return s.$$set=r=>{"data"in r&&t(0,a=r.data)},[a]}class ia extends Nl{constructor(e){super(),Pl(this,e,Xs,Fs,ql,{data:0})}}export{ia as component};
