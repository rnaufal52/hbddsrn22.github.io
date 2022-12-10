const c = document.querySelector(".col-lg-8");
const b = document.querySelector("#shifty");

function change() {
  const { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: bWidth, height: bHeight } = b.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - bWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - bHeight)) + 1;

  b.style.left = i + "px";
  b.style.top = j + "px";
}

b.addEventListener("click", change);
