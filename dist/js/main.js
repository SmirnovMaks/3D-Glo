(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let l,r,s,i,a,u;const d=e=>e<=9?"0"+e:e,m=()=>{let e=(()=>{let e=new Date("3 july 2022").getTime(),t=(new Date).getTime();return r=(e-t)/1e3,s=Math.floor(r/60/60/24),i=Math.floor(r/60/60%24),a=Math.floor(r/60%60),u=Math.floor(r%60),{timeRemaining:r,days:s,hours:i,minutes:a,seconds:u}})();t.textContent=d(e.days),n.textContent=d(e.hours),o.textContent=d(e.minutes),c.textContent=d(e.seconds)};m(),l=setInterval(m,1e3),r<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",c.textContent="00",clearInterval(l))})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a");document.querySelector('a[href="#service-block"]').addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"start"})}));const c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",(t=>{c(),t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close");let o=0;const c=()=>{const t=requestAnimationFrame(c);o++,o<30?e.style.opacity=o/30:cancelAnimationFrame(t)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",c()}))})),n.addEventListener("click",(()=>{e.style.display="none",e.style.opacity="",o=0})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")||(e.style.display="none",e.style.opacity="",o=0)}))})()})();