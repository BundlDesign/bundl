document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".phase-services-link");
    const phases = document.querySelectorAll(".phases-service-item");

    links.forEach((link, i) => {
        link.addEventListener("click", () => {
            const coordinates = phases[i].getBoundingClientRect();

            window.scrollTo({
                top: coordinates.top + window.scrollY,
                behavior: "smooth",
            });
        });
    });
});