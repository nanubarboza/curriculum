document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffffff";
            link.style.backgroundColor = "#54a88c";

        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#54a88c";
            link.style.backgroundColor = "transparent";
        });
    });
});
