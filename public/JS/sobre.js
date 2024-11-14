//Formulário da página sobre

const formSobre = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=nameSobre]').value;
    const email = document.querySelector('input[name=emailSobre]').value;
    const msg = document.querySelector('textarea[name=msgSobre]').value;

    fetch('https://api.sheetmonkey.io/form/tTgLggYM5pwTeoDbnBybXH', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, msg}),
    }).then(() => alert('Obrigado pelo interesse, vamos entrar em contato em breve!'));
}

document.querySelector('#formSobre').addEventListener('submit', formSobre);