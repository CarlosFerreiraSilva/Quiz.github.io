var correto = 0
var errado = 0
var tela = document.getElementById('tela')
        var Primeira = document.getElementById('Primeira')
        var Segunda = document.getElementById('Segunda')
        var Tereceira = document.getElementById('Tereceira')
        var Quarto = document.getElementById('Quarto')
        var res = document.getElementById('res')
        var text = document.getElementById('text')
        var progresso = document.getElementById('progresso')
        var corpo = document.getElementById('corpo')
        var audioErrado = document.getElementById('erradoAudio')
        var audioCorreto = document.getElementById('corretoAudio')
        var rank = document.getElementById('rank')
        var img = document.getElementById('img')
        var buttons = document.getElementById('buttons')
        var buttonss = document.getElementById("buttonss")
        var buttonsss = document.getElementById('buttonsss')
        var buttonssss = document.getElementById("buttonssss")
        var certo = document.getElementById('certo')
        var certoo = document.getElementById('certoo')
        var certooo = document.getElementById("certooo")
        var certoooo = document.getElementById('certoooo')
        var errado = document.querySelector('div.escolhass')

        function playErrado(){
            audioErrado.currentTime = 0.6;
            audioErrado.play();
        }

        function playCorreto(){
            audioCorreto.currentTime = 0.2;
            audioCorreto.play();
        }
        function clickPic(){
            tela.style.display = 'none'
            Primeira.style.display = 'flex'
            corpo.style.display = 'block'
        }

        function Pergunta1(element, params) {

            var escolhas = document.querySelectorAll('.escolhas');

            for (var i = 0; i < escolhas.length; i++) {

                escolhas[i].style.pointerEvents = 'none';

            }

            if (params == 1) {
                playCorreto();
                correto++;
                buttons.style.display = 'block';
                certo.style.background = 'green';
            } else {
                playErrado();
                errado++;
                buttons.style.display = 'block';
                
                certo.style.background = 'green';
                
                element.style.background = 'red';
            }
            atualizarProgresso();
        }

        function ButtonProx(){


            Primeira.style.display = 'none'

            Segunda.style.display = 'block'

            buttons.style.display = 'none'

            text.innerHTML = `<h2 style="font-weight: bolder;">
            2. O que é taxonomia?</h2>`

            var escolhas = document.querySelectorAll('.escolhas');

        for (var i = 0; i < escolhas.length; i++) {
            escolhas[i].style.pointerEvents = 'auto';
            
        }


        }

        function ButtonProxx(){


               Segunda.style.display = 'none'
                 Tereceira.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;" class='textoh3'>3. Na classificação científica de animais, qual termo é 
                 utilizado para representar uma categoria imediatamente acima da ordem e agrupa várias ordens relacionadas?</h2>`

                 buttonss.style.display = 'none'

            var escolhas = document.querySelectorAll('.escolhas');

        for (var i = 0; i < escolhas.length; i++) {
            escolhas[i].style.pointerEvents = 'auto';
            
        }


        }

        function ButtonProxxx(){


            Tereceira.style.display = 'none'
            Quarto.style.display = 'block'
            text.innerHTML = `<h2 style="font-weight: bolder;" class="textoh3">4.  Qual classe de organismos foi a primeira a conquistar completamente o ambiente terrestre?</h2>`

            buttonsss.style.display = 'none'

         var escolhas = document.querySelectorAll('.escolhas');

     for (var i = 0; i < escolhas.length; i++) {
         escolhas[i].style.pointerEvents = 'auto';
         
     }


     }


     function ButtonProxxxx(){

        Quarto.style.display = 'none'
        res.style.display = 'block'
        rank.style.display = 'flex'
        res.innerHTML = `<h1 style="font-weight: bolder;">Sua Quantidade de Acertos é ${correto}/4</h1>`
        text.innerHTML = ''
        buttonssss.style.display = 'none'
        progresso.style.display = 'flex'
     var escolhas = document.querySelectorAll('.escolhas');

 for (var i = 0; i < escolhas.length; i++) {
     escolhas[i].style.pointerEvents = 'auto';
     
 }


 }



        function Pergunta2(element, params) {
            
            var escolhas = document.querySelectorAll('.escolhas');

            for (var i = 0; i < escolhas.length; i++) {
                
                escolhas[i].style.pointerEvents = 'none';

            }


            if (params == 1) {
                playCorreto()
                correto++
                buttonss.style.display = 'block';
                certoo.style.background = 'green'

              

            }else{
                playErrado()
                errado++
                element.style.background = 'red'
                certoo.style.background = 'green'
                buttonss.style.display = 'block';
            }
            atualizarProgresso()
        }



        function Pergunta3(element, params) {

            var escolhas = document.querySelectorAll('.escolhas');

            for (var i = 0; i < escolhas.length; i++) {
                
                escolhas[i].style.pointerEvents = 'none';

            }

            if (params == 1) {

                playCorreto()
                correto++
                certooo.style.background = 'green'
                buttonsss.style.display = 'block';
            }else{

                playErrado()
                errado++
                element.style.background = 'red'
                certooo.style.background = 'green'
                buttonsss.style.display = 'block';
            }
            atualizarProgresso()
        }

        function Pergunta4(element, params) {
            if (params == 1) {
                playCorreto()
                correto++
                certoooo.style.background = 'green'
                buttonssss.style.display = 'block';

            }else{
                playErrado()
                errado++
                element.style.background = 'red'
                certoooo.style.background = 'green'
                buttonssss.style.display = 'block';
            }
            
            

            if(correto < 1){
                img.setAttribute('src', '/images/rank1.png');
        } else if (correto == 1){
            img.setAttribute('src', '/images/rank2.jpg');
        } else if (correto == 2){
            img.setAttribute('src', '/images/rank3.jpg');
        } else if (correto == 3){
            img.setAttribute('src', '/images/rank4.jpg');
        }else{
            img.setAttribute('src', '/images/rank5.jpg');
        }
            atualizarProgresso()
        }



        function atualizarProgresso() {

            var progressSegmentOne = document.getElementById("correto");
            var progressSegmentTwo = document.getElementById("errado");
    
            var widthIncrementCorreto = 25 * correto;
            var widthIncrementErrado = 25 * errado;
    
            progressSegmentOne.style.width = widthIncrementCorreto + "%";
            progressSegmentOne.setAttribute("aria-valuenow", widthIncrementCorreto);
    
            progressSegmentTwo.style.width = widthIncrementErrado + "%";
            progressSegmentTwo.setAttribute("aria-valuenow", widthIncrementErrado);

        }