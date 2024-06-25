let word = ''
let underline = []
let arrayStart = []
const a = ['a', 'á', 'â', 'à', 'ã']
const e = ['e', 'é', 'ê']
const i = ['i', 'í']
const o = ['o', 'ó', 'ô', 'õ']
const u = ['u', 'ú', 'ü']
const c = ['c', 'ç']

// Representação da Forca na tela
const gameOver = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / \\</div>
<div>&nbsp; |</div>
<div>----</div>`

const oneLife = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /</div>
<div>&nbsp; |</div>
<div>----</div>`

const twoLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|\\</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const threeLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; /|</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fourLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fiveLives = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; O</div> 
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

const fullLife = `<div>&nbsp; &nbsp;_______</div> 
<div>&nbsp; | /&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |</div>
<div>&nbsp; |</div> 
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>&nbsp; |</div>
<div>----</div>`

class Start {
  constructor (word, underline) {
    this.word = word
    this.underline = underline
  }

  // métodos das categorias e suas listas de palavras
  reptileCategory () {
    const list = ['Serpente', 'Lagarto', 'Tartaruga', 'Crocodilo', 'Jacaré', 'Iguana', 'Cobra', 'Camaleão', 'Dragão de Komodo', 'Jiboia', 'Anfisbena', 'Tuatara']
    const category = 'Répteis'
  
    this.start (list, category)
  }
  
  reptileHabitatCategory () {
    const list = ['Deserto', 'Floresta Tropical', 'Savana', 'Pântano', 'Manguezal', 'Tundra', 'Sertão', 'Cerrado', 'Floresta de Coníferas', 'Savana', 'Pântano', 'Manguezal']
    const category = 'Habitat de Répteis'
  
    this.start (list, category)
  }

  start (list, category) {
    // gera uma palavra aleatória dentro da categoria escolhida
    const random = Math.floor(Math.random() * list.length)
    const word = list[random]
    
    document.getElementById('categories').innerHTML = `<p id="category">Categoria: <b>${category}</b></p>`
  
    const lengthOfLetter = word.length
    const underline = '_ '.repeat(lengthOfLetter).split(' ')
    underline.splice(-1, 1)
    // cria lista de botões com as letras
    document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
    <p>Escolha uma letra:</p>`
    document.getElementById('buttons').innerHTML = `<button id="a" onclick="chosenL ('a')">A</button>
      <button id="b" onclick="chosenL ('b')">B</button>
      <button id="c" onclick="chosenL ('c')">C</button>
      <button id="d" onclick="chosenL ('d')">D</button>
      <button id="e" onclick="chosenL ('e')">E</button>
      <button id="f" onclick="chosenL ('f')">F</button>
      <button id="g" onclick="chosenL ('g')">G</button>
      <button id="h" onclick="chosenL ('h')">H</button>
      <button id="i" onclick="chosenL ('i')">I</button>
      <button id="j" onclick="chosenL ('j')">J</button>
      <button id="k" onclick="chosenL ('k')">K</button>
      <button id="l" onclick="chosenL ('l')">L</button>
      <button id="m" onclick="chosenL ('m')">M</button>
      <button id="n" onclick="chosenL ('n')">N</button>
      <button id="o" onclick="chosenL ('o')">O</button>
      <button id="p" onclick="chosenL ('p')">P</button>
      <button id="q" onclick="chosenL ('q')">Q</button>
      <button id="r" onclick="chosenL ('r')">R</button>
      <button id="s" onclick="chosenL ('s')">S</button>
      <button id="t" onclick="chosenL ('t')">T</button>
      <button id="u" onclick="chosenL ('u')">U</button>
      <button id="v" onclick="chosenL ('v')">V</button>
      <button id="w" onclick="chosenL ('w')">W</button>
      <button id="x" onclick="chosenL ('x')">X</button>
      <button id="y" onclick="chosenL ('y')">Y</button>
      <button id="z" onclick="chosenL ('z')">Z</button>`

    document.getElementById('gallows').innerHTML = fullLife

    const data = new Start (word, underline)
    arrayStart.push(data)
  }
}

// função para validar os caracteres especiais
function chosenL (id) {
  switch (id) {
    case 'a':
      chosenLetter = a
      break;
    case 'e':
      chosenLetter = e
      break;
    case 'i':
      chosenLetter = i
      break;
    case 'o':
      chosenLetter = o
      break;
    case 'u':
      chosenLetter = u
      break;
    case 'c':
      chosenLetter = c
      break;
    default:
      chosenLetter = `${id}`
      break;
  }

  document.getElementById(`${id}`).setAttribute('disabled', 'disabled')
  answer (chosenLetter)
}

// função para checar se a letra escolhida está na palavra
function answer (chosenLetter) {
  word = arrayStart[0].word
  underline = arrayStart[0].underline
  
  if (chosenLetter == a || chosenLetter == e || chosenLetter == i  || chosenLetter == o || chosenLetter == u || chosenLetter == c){
    for (let type of chosenLetter){
      for (let l in word) {
        if (type == word[l] || type.toUpperCase() == word[l]) {
          underline.splice(l, 1, word[l])
        }
        document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
        <p>Escolha uma letra:</p>`
      }
    }
  } else {
    for (let l in word) {
      if (chosenLetter == word[l] || chosenLetter.toUpperCase() == word[l]) {
        underline.splice(l, 1, word[l])
      }
  }
    document.getElementById('letter').innerHTML = `<p id="underline">${underline.join(' ')}</p>
    <p>Escolha uma letra:</p>`
  }

  // função para tirar uma "vida" do jogador caso ele erre a letra
  function lessLife() {
    if (!word.includes(chosenLetter)) {
      if (document.getElementById('gallows').innerHTML == fullLife) {
        document.getElementById('gallows').innerHTML = fiveLives
      } else if (document.getElementById('gallows').innerHTML == fiveLives) {
        document.getElementById('gallows').innerHTML = fourLives
      } else if (document.getElementById('gallows').innerHTML == fourLives) {
        document.getElementById('gallows').innerHTML = threeLives
      } else if (document.getElementById('gallows').innerHTML == threeLives) {
        document.getElementById('gallows').innerHTML = twoLives
      } else if (document.getElementById('gallows').innerHTML == twoLives) {
        document.getElementById('gallows').innerHTML = oneLife
      } else if (document.getElementById('gallows').innerHTML == oneLife) {
        document.getElementById('gallows').innerHTML = gameOver
      }
    }
  }

  let count = 0

  if (chosenLetter == a || chosenLetter == e || chosenLetter == i || chosenLetter == o || chosenLetter == u || chosenLetter == c){
    while (true) {
      for (let types of chosenLetter){
        if (word.includes(types.toUpperCase())){
          count = 1
          break
        } else if (word.includes(types)){
          count = 1
          break
        }
      }
      break
    }
    if (count == 0) {
      lessLife ()
    }
  } else if (!word.includes(chosenLetter.toUpperCase())){
      lessLife ()
  }

  if (!underline.includes('_')) {
    document.getElementById('buttons').innerHTML = ''
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`
    document.getElementById('result').innerHTML = `<p style="color:green">Parabéns, você venceu!!!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`
  }

  if (document.getElementById('gallows').innerHTML == gameOver){
    document.getElementById('buttons').innerHTML = ''
    document.getElementById('letter').innerHTML = `<p>A palavra era <b>${word}</b>!</p>`
    document.getElementById('result').innerHTML = `<p style="color:red">Você perdeu. Game Over!</p>
    <div><button onclick="document.location.reload(true)">Novo Jogo</button></div>`
  }
}