//   https://www.codinglabweb.com/2022/08/create-sidebar-html-css-javascript.html

const navbar=document.querySelector("nav"),
    menubtns=document.querySelectorAll(".menu-icon"),
    overlay=document.querySelector(".overlay");
    menubtns.forEach((menubtns)=>{
        menubtns.addEventListener("click",()=>{
            navbar.classList.toggle("open");
        })
    })
    overlay.addEventListener("click",()=>{
        navbar.classList.remove("open");
    })