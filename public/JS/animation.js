window.sr = ScrollReveal({reset: true});

/* cabeçalho */
sr.reveal('.texto', {duration: 500})
sr.reveal('#imagem-cabecalho', {delay: 250})

/* conteudo da home */
sr.reveal('.div-cuidados', {duration: 1000, rotate: {z: 0, x:0, y:300}});
sr.reveal('.p-cuidados', {delay: 250})
sr.reveal('.img-cuidados', {delay: 350})

/* cep */
sr.reveal('.div-cep', {duration: 800, rotate: {z: 0, x:0, y:300}})

/* antes de depois*/
sr.reveal('.img-1')
sr.reveal('.img-2', {delay: 250})
sr.reveal('.img-3', {delay: 350})

/* perguntas e respostas */
sr.reveal('.perguntas', {delay: 100})