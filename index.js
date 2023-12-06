const heart = document.querySelector(".heart");


heart.addEventListener("click", () => {
  heart.classList.toggle("active");

  const parabens = document.querySelector(".parabens");

  const frasesRomanticas = [
    "Parabéns meu amor, você é a melhor coisa que aconteceu na minha vida!!",
    "Eu te amo muito",
    "Você é a pessoa mais importante da minha vida",
    "<3"
  ]

  parabens.innerHTML = frasesRomanticas[Math.floor(Math.random() * frasesRomanticas.length)];

  setTimeout(() => {
    heart.classList.toggle("active");
  }, 2000);

})
