let order = [];
let clickedOrder = [];
let score = 0;

/*0 - verde
1 - vermelho
2 - amarelo
4 - azul*/

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//Criando ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//Checa se os botoes clicados sao os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)    
}

//Funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//Funcao para proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Funceo para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu!\n Clique em Ok para inicar novo jogo!`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao TipoGenius! Iniciando o jogo!')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//rodar a primeira vez
playGame();
