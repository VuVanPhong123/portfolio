document.addEventListener('DOMContentLoaded', function() {
    const theme_toggle = document.getElementById("theme-toggle");
    
    // Initialize with saved theme or default to "Light"
    let currentTheme = localStorage.getItem("theme") || "Light";
    updateTheme(currentTheme);

    theme_toggle.addEventListener("click", () => {
        currentTheme = currentTheme === "Light" ? "Dark" : "Light";
        updateTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    });

    function updateTheme(theme) {
        // Update all elements with Light/Dark classes
        const elements = document.querySelectorAll('[class]');
        elements.forEach(element => {
            const classes = [...element.classList];
            classes.forEach(className => {
                if (className.includes(theme === "Light" ? "Dark" : "Light")) {
                    const newClassName = className.replace(
                        theme === "Light" ? "Dark" : "Light", 
                        theme === "Light" ? "Light" : "Dark"
                    );
                    element.classList.remove(className);
                    element.classList.add(newClassName);
                }
            });
        });
        theme_toggle.innerHTML = theme === "Light" 
            ? '<i class="fa-solid fa-toggle-off"></i>' 
            : '<i class="fa-solid fa-toggle-on"></i>';
    }
});