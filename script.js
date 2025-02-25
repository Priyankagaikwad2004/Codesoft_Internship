document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.querySelector(".contact");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(animatedElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.querySelector(".about");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(animatedElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.querySelector(".skills");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(animatedElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.querySelector(".projects");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(animatedElement);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElement = document.querySelector(".resume");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class when visible
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    observer.observe(animatedElement);
});
