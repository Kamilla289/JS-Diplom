(()=>{"use strict";const e=({timing:e,draw:t,duration:l})=>{let a=performance.now();requestAnimationFrame((function o(c){let n=(c-a)/l;n>1&&(n=1);let r=e(n);t(r),n<1&&requestAnimationFrame(o)}))};(()=>{const t=document.querySelectorAll(".callback-btn, .button-services, .img-wrapper"),l=document.querySelectorAll(".img-wrapper-btn"),a=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay");a.style.opacity=0;const c=()=>{e({duration:300,timing:e=>e,draw(e){a.style.display="block",o.style.display="block",a.style.opacity=e}})};l.forEach((e=>{e.addEventListener("click",(()=>{c()}))})),t.forEach((e=>{e.addEventListener("click",(()=>{c()}))})),document.addEventListener("click",(t=>{(t.target.classList.contains("modal-overlay")||t.target.closest(".modal-close"))&&e({duration:300,timing:e=>e,draw(e){a.style.display="none",o.style.display="none",a.style.opacity=e}})}))})()})();