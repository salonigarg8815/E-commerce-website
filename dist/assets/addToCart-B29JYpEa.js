import{g as d,s as S,u as C,p as P}from"./showToast-C5e5yGPH.js";const q=(r,e)=>{let c=d().find(u=>u.id===r),n=1;return c&&(n=c.quantity,e=c.price),{quantity:n,price:e}},y=()=>{let r=document.querySelector(".productSubTotal"),e=document.querySelector(".productFinalTotal"),n=d().reduce((u,l)=>{let t=parseInt(l.price)||0;return u+t},0);r.textContent=`₹${n}`,e.textContent=`₹${n+50}`},f=(r,e,o,c)=>{const n=document.querySelector(`#card${e}`),u=n.querySelector(".productQuantity"),l=n.querySelector(".productPrice");let t=1,a=0,i=d(),m=i.find(s=>s.id===e);m?(t=m.quantity,a=m.price):(a=c,c=c),r.target.className=="cartIncrement"&&(t<o?t+=1:t===o&&(t=o,a=c*o)),r.target.className==="cartDecrement"&&t>1&&(t-=1),a=c*t,a=Number(a.toFixed(2));let p={id:e,quantity:t,price:a};p=i.map(s=>s.id===e?p:s),localStorage.setItem("cartProductLS",JSON.stringify(p)),u.innerText=t,l.innerText=a,y()},g=r=>{let e=d();e=e.filter(c=>c.id!==r),localStorage.setItem("cartProductLS",JSON.stringify(e));let o=document.getElementById(`card${r}`);o&&(o.remove(),S("delete",r)),C(e)};let x=d(),L=P.filter(r=>x.some(e=>e.id===r.id));const T=()=>{L.forEach(r=>{const{category:e,id:o,image:c,stock:n,price:u,name:l}=r;let t=document.importNode(N.content,!0);const a=q(o,u);t.querySelector("#cardValue").setAttribute("id",`card${o}`),t.querySelector(".category").textContent=e,t.querySelector(".productName").textContent=l,t.querySelector(".productImage").src=c,t.querySelector(".productPrice").textContent=a.price,t.querySelector(".productQuantity").textContent=a.quantity,t.querySelector(".stockElement").addEventListener("click",i=>{f(i,o,n,u)}),t.querySelector(".remove-to-cart-button").addEventListener("click",()=>g(o)),E.appendChild(t)})},E=document.querySelector("#productCartContainer"),N=document.querySelector("#ProductCartTemplate");T();y();