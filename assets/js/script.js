let cards = document.querySelectorAll(".card");

function expandCards() {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      removeActiveClasses();
      card.classList.add("active");
    });
  });
}

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

expandCards();
