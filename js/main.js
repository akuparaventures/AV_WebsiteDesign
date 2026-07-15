const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const lines = menuBtn.querySelectorAll(".hamburger-line");

let open = false;

menuBtn.addEventListener("click", () => {

    open = !open;

    if (open) {

        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";

        lines[0].classList.add("translate-y-2", "rotate-45");
        lines[1].classList.add("opacity-0");
        lines[2].classList.add("-translate-y-2", "-rotate-45");

    } else {

        mobileMenu.style.maxHeight = "0";

        lines[0].classList.remove("translate-y-2", "rotate-45");
        lines[1].classList.remove("opacity-0");
        lines[2].classList.remove("-translate-y-2", "-rotate-45");

    }

});

// Close menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.style.maxHeight = "0";

        open = false;

        lines[0].classList.remove("translate-y-2", "rotate-45");
        lines[1].classList.remove("opacity-0");
        lines[2].classList.remove("-translate-y-2", "-rotate-45");

    });

});