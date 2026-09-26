const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
function order(item){const msg=`Hello Von Store, I want to order: ${item}.`;window.open("https://wa.me/250798357121?text="+encodeURIComponent(msg),"_blank")}
function play(el){document.querySelectorAll(".play").forEach(x=>{if(x!==el)x.textContent="▶"});el.textContent=el.textContent==="▶"?"❚❚":"▶"}
