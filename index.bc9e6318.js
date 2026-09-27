document.querySelectorAll(".tree li").forEach(function(e){var t=e.firstChild.textContent.trim(),n=document.createElement("span");n.append(t),e.firstChild.replaceWith(n),n.addEventListener("click",function(){var t=e.querySelector("ul");null!==t&&(t.hidden=!t.hidden)})});
//# sourceMappingURL=index.bc9e6318.js.map
