(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let l,s,r,i,a,d;const u=e=>e<=9?"0"+e:e,m=()=>{let e=(()=>{let e=new Date("3 july 2022").getTime(),t=(new Date).getTime();return s=(e-t)/1e3,r=Math.floor(s/60/60/24),i=Math.floor(s/60/60%24),a=Math.floor(s/60%60),d=Math.floor(s%60),{timeRemaining:s,days:r,hours:i,minutes:a,seconds:d}})();t.textContent=u(e.days),n.textContent=u(e.hours),o.textContent=u(e.minutes),c.textContent=u(e.seconds)};m(),l=setInterval(m,1e3),s<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",c.textContent="00",clearInterval(l))})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let o=0;const c=()=>{const t=requestAnimationFrame(c);o++,o<30?e.style.opacity=o/30:cancelAnimationFrame(t)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",c()}))})),n.addEventListener("click",(()=>{e.style.display="none",e.style.opacity="",o=0})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")||(e.style.display="none",e.style.opacity="",o=0)}))})()})();