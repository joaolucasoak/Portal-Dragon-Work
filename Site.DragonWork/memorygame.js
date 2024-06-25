document.addEventListener('DOMContentLoaded', () => {
  // Opções de cartas
  const cards = [
    { name: 'android', img: 'images/android.png' },
    { name: 'chrome', img: 'images/chrome.png' },
    { name: 'git', img: 'images/git.png' },
    { name: 'stackoverflow', img: 'images/stackoverflow.png' },
    { name: 'linux', img: 'images/linux.png' },
    { name: 'github', img: 'images/github.png' },
    { name: 'android', img: 'images/android.png' },
    { name: 'chrome', img: 'images/chrome.png' },
    { name: 'git', img: 'images/git.png' },
    { name: 'stackoverflow', img: 'images/stackoverflow.png' },
    { name: 'linux', img: 'images/linux.png' },
    { name: 'github', img: 'images/github.png' }
  ];

  // Embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random());

  // Recuperar elementos
  const board = document.querySelector('.board');
  const resultView = document.querySelector('#result');
  let cardsChosen = []; // Cartas escolhidas
  let cardsChosenId = []; // IDs das cartas escolhidas para caso de clique na mesma imagem
  let cardsWon = []; // Cartas combinadas

  // Criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/board.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }
  }

  // Checagem de combinações
  function checkForMatch() {
    const [optionOneId, optionTwoId] = cardsChosenId;

    if (cardsChosen[0] === cardsChosen[1]) {
      // Combinação encontrada
      const cardOne = document.querySelector(`[data-id="${optionOneId}"]`);
      const cardTwo = document.querySelector(`[data-id="${optionTwoId}"]`);
      cardOne.setAttribute('src', 'images/check.png');
      cardTwo.setAttribute('src', 'images/check.png');
      cardOne.removeEventListener('click', flipCard);
      cardTwo.removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      // Não houve combinação
      const cardOne = document.querySelector(`[data-id="${optionOneId}"]`);
      const cardTwo = document.querySelector(`[data-id="${optionTwoId}"]`);
      setTimeout(() => {
        cardOne.setAttribute('src', 'images/board.png');
        cardTwo.setAttribute('src', 'images/board.png');
      }, 1000); // Tempo de espera antes de virar as cartas de volta
    }

    // Limpar as cartas escolhidas
    cardsChosen = [];
    cardsChosenId = [];

    // Mostrar o placar
    resultView.textContent = 'Pares Encontrados: ' + cardsWon.length;
    if (cardsWon.length === cards.length / 2) {
      resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas';
    }
  }

  // Virar as cartas
  function flipCard() {
    const cardId = this.getAttribute('data-id');

    // Verificar se a carta já foi virada ou se já foram escolhidas duas cartas
    if (cardsChosenId.includes(cardId) || cardsChosen.length === 2) {
      return;
    }

    // Virar a carta
    this.setAttribute('src', cards[cardId].img);

    // Adicionar a carta às escolhidas
    cardsChosen.push(cards[cardId].name);
    cardsChosenId.push(cardId);

    // Se duas cartas foram escolhidas, verificar a combinação
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // Iniciar o jogo
  createBoard();
});
