let produtos = require("./mockup.produtos");//Importei o outro arquivo

const cadastrar = (marca, modelo, fabricacao, preco) => {
    let produto = {
        marca,
        modelo,
        fabricacao,
        preco//na última informação não precisa de vírgula
    };

    produtos.push(produto);

};

const listar = () => {
    produtos.forEach( (produto,indice) => {
        console.log(produto);
    } );
};

//listar();

const buscar = (busca) => {
    produtos.forEach((produto) => {
        let temp = JSON.stringify(produto).toLocaleLowerCase();

        if(temp.includes(busca.toLowerCase())) {
            console.log(produto);
        }
    });
};

//buscar("gt");

const buscarPorMarca = (busca) => {
    produtos.forEach( (produto) => {
        let marca = produto.marca.toLowerCase();

       if(marca == busca.toLowerCase()) {
        console.log(produto);
       } 
    });
};

//buscarPorMarca("mustang");

const excluir = (indice) => {
    produtos.splice(indice, 1);
};

//excluir(1);

//listar();

const excluirPorModelo = (modelo) => {
    produtos.forEach((produto, indice) => {
        let modeloTemp = produto.modelo.toLowerCase();

        if(modeloTemp == modelo.toLowerCase()) {
            produtos.splice(indice, 1);
        }
    });
}

cadastrar("Marca Exemplo", "Modelo Teste", "2026", 15000);

excluirPorModelo("m10");

listar();


