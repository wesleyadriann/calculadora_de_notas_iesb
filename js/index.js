
function changeThemeListener() {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    themeSwitch.addEventListener('change', (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });
}

function calculaNotas(event) {
    console.log(event.target.id, event.target.value);
}

function App() {
    changeThemeListener();
    
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => input.addEventListener('change', calculaNotas));
}


App();