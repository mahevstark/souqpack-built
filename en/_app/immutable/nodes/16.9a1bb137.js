import{s as j,n as p,c as I}from"../chunks/scheduler.ce710c66.js";import{S as O,i as v,g as T,h as N,k as b,a as C,f as w,r as u,s as P,j as q,u as m,c as S,v as h,x as k,d as _,t as $,w as y}from"../chunks/index.d2955eda.js";import{P as J,a as A}from"../chunks/page.f7652e99.js";import"../chunks/singletons.71573f31.js";import{p as D}from"../chunks/stores.3d78ae94.js";const E=!0;async function F({params:r}){try{const o=r.slug,c=await(await fetch("https://admin.souqpack.com/api/get_category_svelte",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),a=c.data.get_important_data,d={email:a.data.email,phone:a.data.phone,address:a.data.address,footer_about:a.data.footer_about,facebook:a.data.facebook,instagram:a.data.instagram,twitter:a.data.twitter,youtube:a.data.youtube,snapchat:a.data.snapchat,copy_right:a.data.copy_right,footers:a.data.footers},s=c.data.get_categories;var t=localStorage.getItem("login_data");if(t){t=JSON.parse(t);var e=t.token}const g=await(await fetch("https://admin.souqpack.com/api/get_wishlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:o,lang_id:2,region_id:1,order_by:"",order:"",is_guest:0,guest_id:null,token:e})})).json(),l=await(await fetch(`https://admin.souqpack.com/api/get_cat_data/${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:o,lang_id:2,region_id:1,order_by:"",order:"",is_guest:0,guest_id:null,token:"6928fdb2ee9a04088b0036a27d611aef"})})).json();return a.action=="success"&&s.action=="success"&&l.action=="success"?{props:{browser:!1,langs:a.data.langs,regions:a.data.regions,cats:s.data.categories,home:{},footer:d,product:{},category:l.data,cat_imp:c,wishlist:g.data}}:{status:500,error:"Failed to fetch data from the API."}}catch(o){return console.error("Error fetching data:",o),{status:500,error:"Failed to fetch data from the API."}}}const R=Object.freeze(Object.defineProperty({__proto__:null,load:F,prerender:E},Symbol.toStringTag,{value:"Module"}));function M(r){let t;return{c(){t=T("link"),this.h()},l(e){t=N(e,"LINK",{rel:!0,href:!0}),this.h()},h(){b(t,"rel","canonical"),b(t,"href",r[0])},m(e,o){C(e,t,o)},p,i:p,o:p,d(e){e&&w(t)}}}function z(r,t,e){let o;I(r,D,a=>e(2,o=a));let{data:n}=t;console.log("dataa",n),console.log("dataa",n.props);const c=o.url;return r.$$set=a=>{"data"in a&&e(1,n=a.data)},[c,n]}let K=class extends O{constructor(t){super(),v(this,t,z,M,j,{data:1})}};function L(r){let t,e,o,n,c,a,d;return e=new J({props:{data:r[0]}}),n=new K({props:{data:r[0]}}),a=new A({props:{data:r[0]}}),{c(){t=T("main"),u(e.$$.fragment),o=P(),u(n.$$.fragment),c=P(),u(a.$$.fragment),this.h()},l(s){t=N(s,"MAIN",{class:!0});var i=q(t);m(e.$$.fragment,i),o=S(i),m(n.$$.fragment,i),c=S(i),m(a.$$.fragment,i),i.forEach(w),this.h()},h(){b(t,"class","bg-[#fff]")},m(s,i){C(s,t,i),h(e,t,null),k(t,o),h(n,t,null),k(t,c),h(a,t,null),d=!0},p(s,[i]){const g={};i&1&&(g.data=s[0]),e.$set(g);const f={};i&1&&(f.data=s[0]),n.$set(f);const l={};i&1&&(l.data=s[0]),a.$set(l)},i(s){d||(_(e.$$.fragment,s),_(n.$$.fragment,s),_(a.$$.fragment,s),d=!0)},o(s){$(e.$$.fragment,s),$(n.$$.fragment,s),$(a.$$.fragment,s),d=!1},d(s){s&&w(t),y(e),y(n),y(a)}}}function U(r,t,e){var n;let{data:o}=t;return(n=o.props)==null||n.category.category.subs,r.$$set=c=>{"data"in c&&e(0,o=c.data)},[o]}class W extends O{constructor(t){super(),v(this,t,U,L,j,{data:0})}}export{W as component,R as universal};
