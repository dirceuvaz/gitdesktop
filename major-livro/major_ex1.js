major = {
  
    nome: "Major",
    idade: 79,
    altura: 1.80,

    anda: function() {
        console.log("Major anda");
    },

    escreverLivro: function(titulo){
        console.log(" Major escreve livro: " + titulo)
    }
};


console.log('o nome do Autor é: '+ major.nome)
console.log('Idade: ' + major.idade)
console.log(major.anda)
console.log(major.escreverLivro("Javascript para iniciantes - Dirceu"))

//alert('Nome: ' + major.nome + '\n ' + 'Idade: ' + major.idade)

var texto = prompt ('Informe o texto: ')

document.write(texto)

