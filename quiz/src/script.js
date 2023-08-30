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

        function Pergunta1(params) {
            if (params == 1) {
                playCorreto()
                correto++
                Primeira.style.display = 'none'
                Segunda.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">
                2. O que é taxonomia?</h2>`
            }else{
                playErrado()
                errado++
                Primeira.style.display = 'none'
                Segunda.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">
                2. O que é taxonomia?</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta2(params) {
            if (params == 1) {
                playCorreto()
                correto++
                Segunda.style.display = 'none'
                Tereceira.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">3. Na classificação científica de animais, qual termo é 
                utilizado para representar uma categoria imediatamente acima da ordem e agrupa várias ordens relacionadas?</h2>`

            }else{
                playErrado()
                errado++
                Segunda.style.display = 'none'
                Tereceira.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">3. Na classificação científica de animais, qual termo é utilizado para representar uma categoria imediatamente 
                acima da ordem e agrupa várias ordens relacionadas?</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta3(params) {
            if (params == 1) {
                playCorreto()
                correto++
                Tereceira.style.display = 'none'
                Quarto.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">4.  Qual classe de organismos foi a primeira a conquistar completamente o ambiente terrestre?</h2>`

            }else{
                playErrado()
                errado++
                Tereceira.style.display = 'none'
                Quarto.style.display = 'block'
                text.innerHTML = `<h2 style="font-weight: bolder;">4. Qual classe de organismos foi a primeira a conquistar completamente o ambiente terrestre?</h2>`
            }
            atualizarProgresso()
        }

        function Pergunta4(params) {
            if (params == 1) {
                playCorreto()
                correto++
                Quarto.style.display = 'none'
                res.style.display = 'block'
                rank.style.display = 'flex'
                res.innerHTML = `<h1 style="font-weight: bolder;">Sua Quantidade de Acertos é ${correto}/4</h1>`
                text.innerHTML = ''

            }else{
                playErrado()
                errado++
                res.innerHTML = `<h1 style="font-weight: bolder;">Sua Quantidade de Acertos é ${correto}/4</h1>`
                Quarto.style.display = 'none'
                res.style.display = 'block'
                rank.style.display = 'flex'
                text.innerHTML = ''
            }
            corpo.style.width = '60%'
            progresso.style.display = 'flex'

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