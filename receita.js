// abobrinha, cebola, pimentão, berinjela, tomate
// receita de ratatouille / caponata
const delay = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {           
        resolve();        
    }, time);    
});

const cozinheiro = 'pineco';
const receita = 'caponata';
const despensa = [
    'abobrinha',
    'cebola',
    'pimentão',
    'berinjela',
    'tomate'
];

async function cortarIngrediente(ingrediente) {
    await delay(3000);
    console.log(`${ingrediente} cortado`);
    return `${ingrediente} cortado`;
}

async function cortar() {
    console.log(`Os ajudantes do ${cozinheiro} irão cortar os ingredientes`);
    const arrayIngredientes = await Promise.all(despensa.map(cortarIngrediente));    
    return arrayIngredientes;
}

function jogarNoForno(ingredientes) {    
    console.log('jogar no forno');
}

function temperar(ingredientes) {   
    console.log(`O ${cozinheiro} irá temperar os ingredientes`);    
    const ingredientesTemperados = ingredientes.map((ingrediente) => `${ingrediente} e temperado`);
    return ingredientesTemperados;
}

async function cozinhar() {  
    console.log(`O ${cozinheiro} irá preparar uma receita de ${receita}`);
    const ingredientesCortados = await cortar();
    const ingredientesTemperados = temperar(ingredientesCortados);
    jogarNoForno(ingredientesTemperados);
}

cozinhar();
