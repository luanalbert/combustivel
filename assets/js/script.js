function calcular(){
    let kmRodados = document.querySelector('#kmRodados').value
    let kmPorLitro = document.querySelector('#kmPorLitro').value
    let gasolPrice = document.querySelector('#gasolPrice').value
    let pilot = document.querySelector('#motorista').value

    switch (pilot){
        case 'leandro':
            kmPorLitro = 14;
            document.querySelector('#kmPorLitro').value = "Doblô "+ kmPorLitro + " km/litro"
            var calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
            //com R$
            var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            document.querySelector(".result").innerHTML = reaisCom
            break;
        case 'jair':
            kmPorLitro = 10;
            document.querySelector('#kmPorLitro').value = "Sprint " + kmPorLitro + " Km/litro"
            var calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
            //com R$
            var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            document.querySelector(".result").innerHTML = reaisCom
            break;
        case 'joclecio':
            kmPorLitro = 7;
            document.querySelector('#kmPorLitro').value = "Carro " + kmPorLitro + " Km/litro"
            var calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
            //com R$
            var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            document.querySelector(".result").innerHTML = reaisCom
            break; 
        case 'miller':
            kmPorLitro = 8;
            document.querySelector('#kmPorLitro').value = "Carro " + kmPorLitro + " Km/litro"
            var calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
            //com R$
            var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            document.querySelector(".result").innerHTML = reaisCom
            break;   
        case 'irinaldo':
            kmPorLitro = 9;
            document.querySelector('#kmPorLitro').value = "Carro " + kmPorLitro + " Km/litro"
            var calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
            //com R$
            var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            document.querySelector(".result").innerHTML = reaisCom
            break;
    }


    
    //let calculo = eval((kmRodados/kmPorLitro)*gasolPrice)
    //com R$
    //var reaisCom = calculo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    //sem R$
    //var reaisSem = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});     
    //document.querySelector(".result").innerHTML = reaisCom
    
} 

calcular()


