var btn=document.querySelector(".btn--submit"),popup=document.querySelector(".modal-content"),close=document.querySelector(".btn--close");btn.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-content--show")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-content--show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-content--show")&&popup.classList.remove("modal-content--show")});