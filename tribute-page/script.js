const container = document.querySelector(".petal-container");

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 3 + Math.random() * 2 + "s";
  container.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 5000);
}

setInterval(createPetal, 300);
