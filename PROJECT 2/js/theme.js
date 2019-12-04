THEME = "dark"

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        THEME = "dark";
        ToggleTheme();
    } else{
        THEME = "light";
        ToggleTheme();
    }
}

// document.querySelector("#theme-toggle").addEventListener("mouseover", ToggleTheme)
// document.querySelector("#theme-toggle").addEventListener("mouseleave", ToggleTheme)
document.querySelector(".theme-toggle").addEventListener("click", ToggleTheme);



function ToggleTheme(){
    if (THEME=="dark"){
        document.documentElement.setAttribute('data-theme', 'dark')
        THEME = "light"
    } 
    else{
        document.documentElement.setAttribute('data-theme', 'light')
        THEME = "dark"
    }
}
