(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let c,l,a,s,i,u;const d=e=>e<=9?"0"+e:e,m=()=>{let e=(()=>{let e=new Date("7 july 2022").getTime(),t=(new Date).getTime();return l=(e-t)/1e3,a=Math.floor(l/60/60/24),s=Math.floor(l/60/60%24),i=Math.floor(l/60%60),u=Math.floor(l%60),{timeRemaining:l,days:a,hours:s,minutes:i,seconds:u}})();t.textContent=d(e.days),n.textContent=d(e.hours),o.textContent=d(e.minutes),r.textContent=d(e.seconds)};m(),c=setInterval(m,1e3),l<=0&&(t.textContent="00",n.textContent="00",o.textContent="00",r.textContent="00",clearInterval(c))})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("main"),n=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(e=>{e.target.closest(".menu")||!e.target.closest("menu")?n():e.target.closest('a[href="#service-block"]')&&(e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"start"}))})),e.addEventListener("click",(e=>{if(e.target.closest(".close-btn"))n();else if(e.target.closest("ul>li>a")){n(),e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let n=0;const o=()=>{const t=requestAnimationFrame(o);n++,n<30?e.style.opacity=n/30:cancelAnimationFrame(t)};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",o()}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",e.style.opacity="",n=0)}))})(),(()=>{const e=document.querySelectorAll("input.calc-item"),t=document.querySelectorAll("input[type=tel]"),n=document.querySelectorAll("input[type=email]");document.querySelectorAll("#form2-name, .mess, .form-name").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я- ]/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^-)(\d]/,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^ @ - _ .!~*'\w]/,"")}))})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();