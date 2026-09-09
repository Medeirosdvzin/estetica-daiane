const btn=document.getElementById("menuToggle");
const nav=document.getElementById("mainNav");
btn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();