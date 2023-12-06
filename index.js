const heart = document.querySelector(".heart");


heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    setTimeout(() => {
        heart.classList.toggle("active");
    }, 2000);
    
})