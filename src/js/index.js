import '../css/style.css'

function App() {
    import('./changeThemeListener')
        .then((module) => module.default())
    import('./calculaNotas')
        .then((module) => module.default())
}

App();