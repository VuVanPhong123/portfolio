document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById("theme-toggle");

    let currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
        currentTheme = "Light";
    }

    applyTheme(currentTheme);
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
        const elements = document.querySelectorAll('[class]');
        
        elements.forEach(function(element) {
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
    
        if (theme === "Light") {
            themeButton.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        } else {
            themeButton.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        }
    }
});
