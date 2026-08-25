let vendedores = require("./mockup.vendedores");

const cadastrar = (matricula, nome, salario, comissao) => {
    let vendedor = {
        matricula,
        nome,
        salario,
        comissao
    };

    vendedores.push(vendedor);

};

const listar = () => {
    vendedores.forEach( (vendedor,indice) => {
        console.log(vendedor);
    } );
};

listar();

const buscar = (busca) => {
    vendedores.forEach((vendedor) => {
        let temp = JSON.stringify(vendedor).toLocaleLowerCase();

        if(temp.includes(busca.toLowerCase())) {
            console.log(vendedor);
        }
    });
};

buscar("Hei");

const buscarPorMatricula = (busca) => {
    vendedores.forEach( (vendedor) => {
        let matricula = vendedor.matricula.toLowerCase();

       if(matricula == busca.toLowerCase()) {
        console.log(vendedor);
       } 
    });
};

buscarPorMatricula("04");

const buscarPorNome = (busca) => {
    vendedores.forEach( (vendedor) => {
        let nome = vendedor.nome.toLowerCase();

       if(nome == busca.toLowerCase()) {
        console.log(vendedor);
       } 
    });
};

buscarPorNome("Melissa");

 const excluirPorMatricula = (matricula) => {
     vendedores.forEach((vendedor, indice) => {
         let matriculaTemp = vendedor.matricula.toLowerCase();

         if(matriculaTemp == matricula.toLowerCase()) {
             vendedores.splice(indice, 1);
         }
     });
 }

 excluirPorMatricula("01");

 listar();