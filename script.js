document.getElementById("btnPesquisar").addEventListener("click", function(){
    var cep = document.getElementById("cep").value  //pega o valor do id cep   
    var url = "https://viacep.com.br/ws/"+ cep + "/json/"; //link da api
    var resultado = document.getElementById("resultado") //pega a div resultado

    //Função fetch é responsável por fazer uma busca
    fetch(url).then(response=> response.json()).then(dados => {
        if(dados.erro){
            resultado.innerHTML =  "CEP não encontrado" //verifica se da um erro e insere uma mensagem
        }else{
            resultado.innerHTML = "Rua:"+ dados.logradouro + "</br>Bairro:" + dados.bairro //insere os dados na div resultado
        }
    }).catch(error => console.error(error))//pega o erro na conexão
})
