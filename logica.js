let nome="";
let email="";
let mensagem="";
//Acima temos declaração de variáveis

const emailval = /^\S+@\S+\.\S+$/ //a forma mais simples de checar estrutura de emails que me deparei com.

//Função que é chamada por contato.html
function validacao(){
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    mensagem = document.getElementById("mensagem").value;
    //Acima pegamos as três entradas. 
    
    if (nome == ""){ //Checa se nome está vazio
        alert("Nome vazio")
    }else if (email==""){ //Checa se email está vazio
        alert("E-mail vazio") 
    }else if(!emailval.test(email)){ //Checagem simples se o email é valido. string@string.string
        alert("E-mail inválido")
    }else if(mensagem==""){ //Checa se mensagem está vazia
        alert("Mensagem vazia")
    }else{ //caso tenha passado em todos testes
        alert("Mensagem enviada com sucesso! \nO que foi enviado: \n" + nome + "\n" + email + "\n" + mensagem);
    }
    
    //Reseta todos os campos.
    document.getElementById("nome").value ="";
    document.getElementById("email").value ="";
    document.getElementById("mensagem").value ="";
}

//Função responsável por ativar o modo escuro. Pode ser invocada por qualquer um dos arquivos html.
//Funciona trocando a classe dos elementos. 
// As classes novas possuem características escuras definidas no CSS
function darkness(){
    document.getElementById("body1").className = "blackBody";
    document.getElementById("word0").className = "palavrasDark";
    document.getElementById("word1").className = "palavrasDark";
    document.getElementById("word2").className = "palavrasDark";
    document.getElementById("word3").className = "palavrasDark";
}

//Faz o contrário da função acima.
//Reverte as classes para o que eram originalmente.
//O site começa com o modo claro. 
function light(){
    document.getElementById("body1").className = "whiteBody";
    document.getElementById("word0").className = "palavras";
    document.getElementById("word1").className = "palavras";
    document.getElementById("word2").className = "palavras";
    document.getElementById("word3").className = "palavras";
}


