document.addEventListener("DOMContentLoaded",(function(){fetch("footer.html").then((function(t){return t.text()})).then((function(t){var e=document.getElementById("footer-placeholder");e&&(e.innerHTML=t)})).catch((function(t){}))}));