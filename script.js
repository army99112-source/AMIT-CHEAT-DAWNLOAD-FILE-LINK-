// ===== Background Floating Particles =====

const particles = document.getElementById("particles");

for (let i = 0; i < 60; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.width = (Math.random() * 4 + 2) + "px";
    star.style.height = star.style.width;

    star.style.animationDuration = (Math.random() * 4 + 3) + "s";
    star.style.animationDelay = (Math.random() * 5) + "s";

    particles.appendChild(star);

}

// ===== Feedback Button =====

const feedbackBtn = document.querySelector(".feedback");

feedbackBtn.addEventListener("click", function () {

    <!--alert("Feedback feature coming soon!");

});-->

// ===== Button Hover Animation =====

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});
