let contadorAlugueis = 0

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');

    //Verificando se o jogo está alugado ou não para alterar o status do jogo
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        //Jogos sendo devolvidos
        let confirmaDevolucao = confirm(`Devolver ${nome.textContent} ?`);
        if (confirmaDevolucao == true) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar'
        }
    } else {
        //Jogos sendo alugados
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver'
        contadorAlugueis++;
        console.log(`Número de jogos alugados: ${contadorAlugueis}`);
    }

}