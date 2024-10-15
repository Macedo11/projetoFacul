//Formulário de login

const formLogin = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const password = document.querySelector('input[name=password]').value;
    const confPassword = document.querySelector('input[name=confPassword]').value;

    fetch('https://api.sheetmonkey.io/form/tTgLggYM5pwTeoDbnBybXH', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password, confPassword}),
    }).then(() => alert('Dados enviados')).then(() => window.location.href = 'index.html');
}

document.querySelector('form').addEventListener('submit', formLogin);