var dataAtual = new Date()
var ano = dataAtual.getFullYear()
var mes = dataAtual.getMonth() + 1
var dia = dataAtual.getDate()
var input = document.querySelector("#input-data")
var resultado = document.querySelector("#result")
var imagem = document.querySelector("#imagem")

if(mes < 10) {
    mes = '0' + mes
}


function defineDataMaxima() {
    document.querySelector("#input-data").max = `${ano}-${mes}-${dia}`
}

function calcular() {

    //Aqui o valor retornado pelo input de data tem o formato "aaaa-mm-dd"

    var anoNasc = document.querySelector("#input-data").value.split('-')[0]
    var mesNasc = document.querySelector("#input-data").value.split('-')[1]
    var diaNasc = document.querySelector("#input-data").value.split('-')[2]
    var idadeAnos, idadeMeses

    //Calcula anos e meses de vida

    if(ano == anoNasc) {
        idadeAnos = 0
        if(mes == mesNasc && dia == diaNasc){
            idadeMeses = 0
        }
        else if(mes > mesNasc) {
            if(dia >= diaNasc) {
                idadeMeses = mes - mesNasc
            }
            else if(dia < diaNasc) {
                idadeMeses = mes - mesNasc -1
            }
        }
    }
    if(mes > mesNasc){      
        idadeAnos = ano - anoNasc 
        if(dia >= diaNasc){
            idadeMeses = mes - mesNasc
        }
        else if(dia < diaNasc) {
            idadeMeses = mes - mesNasc -1 
        }
    }
    else if(mes == mesNasc) {
        idadeMeses = 0
        if(dia >= diaNasc) {
            idadeAnos = ano - anoNasc
        }
        else {
            idadeAnos = ((anoNasc == ano)? 0 : ano - anoNasc -1)
        }
    }
    else if(mes < mesNasc){
        idadeAnos = ((anoNasc == ano)?  0 : ano - anoNasc -1)
        if(dia >= diaNasc) {
            idadeMeses = 12 - (mesNasc - mes)
        }
        else if(dia < diaNasc) {
            idadeMeses = 12 - (mesNasc - mes) -1
        }
    }

    //Mostra o resultado na tela ou executa um alert com um erro

    if (!document.querySelector("#sexoM").checked && !document.querySelector("#sexoF").checked && !input.value) {
        alert("[ERRO] Nenhum campo foi preenchido, preencha os campos e tente novamente!")
    }
    else if(!document.querySelector("#sexoM").checked && !document.querySelector("#sexoF").checked){
        alert("[ERRO] O sexo não foi selecionado, selecione e tente novamente!")
    }
    else if(!input.value) {
        alert("[ERRO] O campo de data de nascimento está vazio ou a data é inválida, preencha-o e tente novamente!")
    }
    else if(anoNasc > ano) {
        alert("[ERRO] Data inválida, verifique os dados e tente novamente!")
        if(anoNasc == ano) {
            if(mesNasc > mes){
                alert("[ERRO] Data inválida, verifique os dados e tente novamente!")
            }
            else if(mesNasc == mes && diaNasc > dia) {
                alert("[ERRO] Data inválida, verifique os dados e tente novamente!")
            }
        }
    }
    else {
        resultado.innerHTML = ((document.querySelector("#sexoM").checked) ? "Homem" : "Mulher") +` com `
        if(idadeAnos == 0) {
            resultado.innerHTML = document.querySelector("#result").innerHTML + `0 ano ` + (idadeMeses == 0 ? "de idade." : (idadeMeses > 1)? `e ${idadeMeses} meses de idade.` : `e 1 mês de idade.`)
        }
        else {
            resultado.innerHTML += ((idadeAnos > 1)? `${idadeAnos} anos ` : `1 ano `) + (idadeMeses == 0 ? "de idade." : (idadeMeses > 1)? `e ${idadeMeses} meses de idade.` : `e 1 mês de idade.`)
        }
        
    }

    //Altera a imagem de acordo com a idade
    
    if(idadeAnos <= 3) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/bebeM.jpg' : 'img/bebeF.jpg'
    }
    else if(idadeAnos > 3 && idadeAnos <=7) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/criancaM.jpg' : 'img/criancaF.jpg'
    }
    else if(idadeAnos > 7 && idadeAnos <= 13) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/crianca2M.jpg' : 'img/crianca2F.jpg'
    }
    else if(idadeAnos > 13 && idadeAnos <= 17) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/adolM.jpg' : 'img/adolF.jpg'
    }
    else if(idadeAnos > 17 && idadeAnos <= 29) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/jovemM.jpg' : 'img/jovemF.jpg'
    }
    else if(idadeAnos > 29 && idadeAnos <= 39) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/adultoM.jpg' : 'img/adultoF.jpg'
    }
    else if(idadeAnos > 39 && idadeAnos <= 49) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/adulto2M.jpg' : 'img/adulto2F.jpg'
    }
    else if(idadeAnos > 49 && idadeAnos <= 65) {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/adulto3M.png' : 'img/adulto3F.jpg'
    }
    else {
        imagem.src = (document.querySelector("#sexoM").checked)? 'img/idosoM.jpg' : 'img/idosoF.jpg'
    }
}

