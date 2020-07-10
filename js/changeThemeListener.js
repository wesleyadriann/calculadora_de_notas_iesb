/**
 * Função para alternar entre o tema claro e escuro
 * @event changeThemeListener
 */
function changeThemeListener() {
    const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    themeSwitch.addEventListener('change', (e) => {
        const theme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    });
}

export default changeThemeListener;