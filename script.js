const starsContainer = document.getElementById("stars");
const numStars = 200;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 5 + 5) + "s";
    starsContainer.appendChild(star);
}
