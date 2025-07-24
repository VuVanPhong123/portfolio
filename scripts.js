document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById("theme-toggle");
    
    // Get saved theme or default to Light
    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = "Light";
    }
    
    // Apply the current theme
    applyTheme(currentTheme);

    // Toggle theme when button is clicked
    themeButton.addEventListener("click", function() {
        if (currentTheme === "Light") {
            currentTheme = "Dark";
        } else {
            currentTheme = "Light";
        }
        applyTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    });

    function applyTheme(theme) {
        // Find all elements with classes
        const elements = document.querySelectorAll('[class]');
        
        elements.forEach(function(element) {
            // Check each class on the element
            element.classList.forEach(function(className) {
                if (theme === "Light") {
                    if (className.includes("Dark")) {
                        const newClassName = className.replace("Dark", "Light");
                        element.classList.replace(className, newClassName);
                    }
                } else {
                    if (className.includes("Light")) {
                        const newClassName = className.replace("Light", "Dark");
                        element.classList.replace(className, newClassName);
                    }
                }
            });
        });
        
        // Update button icon
        if (theme === "Light") {
            themeButton.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        } else {
            themeButton.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        }
    }
});
