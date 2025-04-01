// language.js
window.currentLang = "en";

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(input => {
        const key = input.getAttribute('data-translate-placeholder');
        if (translations[currentLang][key]) {
            input.placeholder = translations[currentLang][key];
        }
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === currentLang);
    });
}

document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', function() {
        currentLang = this.getAttribute('data-lang');
        updateLanguage();
    });
});