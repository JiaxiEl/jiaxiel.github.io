document.addEventListener("DOMContentLoaded",(function(){function e(){var e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))}var t=["img/Image1.jpg","img/Image2.jpg","img/Image3.jpg"];function a(){var e,a=document.querySelector(".image-container");if(a){var o=(e=Math.floor(Math.random()*t.length),t[e]);a.style.backgroundImage="url('".concat(o,"')")}}fetch("header.html").then((function(e){return e.text()})).then((function(e){var t,a,o=document.getElementById("header-placeholder");o&&(o.innerHTML=e,t=document.getElementById("theme-toggle"),a=document.getElementById("theme-icon"),t&&a&&("dark"===(localStorage.getItem("theme")||"light")?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),a.classList.remove("fa-lightbulb"),a.classList.add("fa-lightbulb-on")):(document.body.classList.add("light-theme"),document.body.classList.remove("dark-theme"),a.classList.remove("fa-lightbulb-on"),a.classList.add("fa-lightbulb")),t.addEventListener("click",(function(){document.body.classList.contains("dark-theme")?(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),a.classList.remove("fa-lightbulb-on"),a.classList.add("fa-lightbulb"),localStorage.setItem("theme","light")):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),a.classList.remove("fa-lightbulb"),a.classList.add("fa-lightbulb-on"),localStorage.setItem("theme","dark"))}))))})).catch((function(e){})),a(),e(),document.addEventListener("scroll",e),setInterval(a,5e3)}));