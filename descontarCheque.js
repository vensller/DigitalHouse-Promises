// Vamos criar uma Promise, para simular a analogia de descontar cheque
const descontarCheque = (diaAtual, diaCheque) => new Promise((resolve, reject) => {
    if (diaAtual === diaCheque) {
        resolve(`Cheque descontado no dia ${diaCheque}`);
    }else {
        reject(`Hoje é dia ${diaAtual}. O cheque tem que ser descontado dia ${diaCheque}`);
    }
});

descontarCheque(1, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(2, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(3, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(4, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(5, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(6, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(7, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(8, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(9, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(10, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(11, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(12, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(13, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(14, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(15, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(16, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(17, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(18, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(19, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));

descontarCheque(20, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));
    
descontarCheque(21, 20)
    .then((mensagem) => console.log(mensagem))
    .catch((error) => console.log(error));