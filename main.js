const raitingPanel = document.querySelector(".raiting-panel"),
  submit = document.querySelector(".btn-submit"),
  cardState1 = document.querySelector(".card__state1"),
  cardState2 = document.querySelector(".card__state2"),
  state2Raiting = document.querySelector(".state2-raiting");

let raiting = 0;

raitingPanel.addEventListener("click", (event) => {
  let target = event.target;
  if (target.tagName != "LI") return;

  if ([...target.classList].includes("active")) return;

  [...raitingPanel.children].forEach((el) => {
    if ([...el.classList].includes("active")) {
      el.classList.remove("active");
    }
  });

  target.classList.add("active");
  raiting = target.textContent;
});

submit.addEventListener("click", () => {
  if (raiting == 0) return;
  state2Raiting.innerText = raiting;
  cardState1.style.display = "none";
  cardState2.style.display = "block";
});
