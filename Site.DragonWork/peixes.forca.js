let word = '';
let underline = [];
let arrayStart = [];

// Representação da Forca na tela
const stages = [
  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / \\</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|</div>
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|</div>
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>----</div>`,

  `<div>&nbsp; &nbsp;_______</div> 
  <div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
  <div>&nbsp; |</div> 
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>&nbsp; |</div>
  <div>----</div>`
];

class Start {
  constructor(word, underline) {
    this.word = word;
    this.underline = underline;
  }

  // métodos das categorias e suas listas de palavras
  fishCategory() {
    const list = ['Salmão', 'Tilápia', 'Atum', 'Bacalhau', 'Piranha', 'Dourado', 'Tubarão', 'Baiacu', 'Pintado', 'Sardinha', 'Robalo', 'Bagre'];
    const category = 'Peixes';
    this.start(list, category);
  }

  fishHabitatCategory() {
    const list = ['Oceano Atlântico', 'Rio Amazonas', 'Lago Baikal', 'Lago Titicaca', 'Mar Mediterrâneo', 'Rio Nilo', 'Lago Victoria', 'Mar Cáspio', 'Mar Vermelho', 'Rio Paraná', 'Rio Mississipi', 'Lago Michigan'];
    const category = 'Habitat de Peixes';
    this.start(list, category);
  }

  start(list, category) {
    // gera uma palavra aleatória dentro da categoria escolhida
    const random = Math.floor(Math.random() * list.length);
    const word = list[random];
    
    document.getElementById('categories').innerHTML = `<p id="category">Categoria: <b>${category}</b></p>`;
  
    const lengthOfLetter = word.length;
    const underline = '_ '.repeat(lengthOfLetter).split(' ');
    underline.splice(-1, 1);
    // cria lista de botões com as letras
    document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
    <p>Escolha uma letra:</p>`;
    document.getElementById('buttons').innerHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
      `<button id="${letter}" onclick="chosenL('${letter}')">${letter.toUpperCase()}</button>`).join(' ');

    document.getElementById('gallows').innerHTML = stages[6];

    const data = new Start(word, underline);
    arrayStart = [data];  // Reset arrayStart to ensure only one game instance at a time
  }
}

// função para validar os caracteres especiais
function chosenL(id) {
  let chosenLetter;
  switch (id) {
    case 'a':
      chosenLetter = 'aáâàã';
      break;
    case 'e':
      chosenLetter = 'eéê';
      break;
    case 'i':
      chosenLetter = 'ií';
      break;
    case 'o':
      chosenLetter = 'oóôõ';
      break;
    case 'u':
      chosenLetter = 'uúü';
      break;
    case 'c':
      chosenLetter = 'cç';
      break;
    default:
      chosenLetter = `${id}`;
      break;
  }

  document.getElementById(id).setAttribute('disabled', 'disabled');
  answer(chosenLetter);
}

// função para checar se a letra escolhida está na palavra
function answer(chosenLetter) {
  word = arrayStart[0].word;
  underline = arrayStart[0].underline;

  for (let l in word) {
    if (chosenLetter.includes(word[l])) {
      underline.splice(l, 1, word[l]);
    }
  }
  
  document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
  <p>Escolha uma letra:</p>`;

  // função para tirar uma "vida" do jogador caso ele erre a letra
  function lessLife() {
    const gallows = document.getElementById('gallows');
    const currentStage = stages.indexOf(gallows.innerHTML);
    if (!word.includes(chosenLetter)) {
      if (currentStage > 0) {
        gallows.innerHTML = stages[currentStage - 1];
      }
    }
  }

  if (!word.split('').some(letter => chosenLetter.includes(letter))) {
    lessLife();
  }

  if (!underline.includes('_')) {
    document.getElementById('buttons').innerHTML = '';
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`;
    document.getElementById('result').innerHTML = `<p style="color:green">Parabéns, você venceu!!!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`;
  }

  if (document.getElementById('gallows').innerHTML === stages[0]) {
    document.getElementById('buttons').innerHTML = '';
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`;
    document.getElementById('result').innerHTML = `<p style="color:red">Você perdeu. Game Over!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`;
  }
}
