document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffffff";
            link.style.backgroundColor = "#550000";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#d0d0d0";
            link.style.backgroundColor = "transparent";
        });
    });
});
