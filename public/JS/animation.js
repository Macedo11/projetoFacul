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

/* sobre nós */
sr.reveal('.cabecalho-about h1', {duration: 500, rotate: {z: 0, x:0, y:300}})
sr.reveal('.about', {delay: 50})

/* Cuidados */
sr.reveal('.cabecalho-cuidado h1', {duration: 500, rotate: {z: 0, x:0, y:300}})
sr.reveal('.div-cuidado', {duration: 1000, rotate: {z: 0, x:0, y:80}});
sr.reveal('.img-cuidado', {delay: 350})

/* Fale conosco */
sr.reveal('header h1', {duration: 1000})
sr.reveal('.telefone', {duration: 1000, rotate: {z: 0, x:0, y:300} })
sr.reveal('#contato', {duration: 1000, delay: 150})

/*Criadores */
sr.reveal('.cabecalho-about h1 ', {duration: 1000})
sr.reveal('.conteudo', {duration: 1000, rotate: {z: 0, x:0, y:300} })
sr.reveal('.criadores1', {duration: 1000, rotate: {z: 0, x:0, y:300} })
sr.reveal('.criadores', {duration: 1000, rotate: {z: 0, x:0, y:-300} })