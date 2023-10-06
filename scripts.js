
const opmic = document.querySelector(".opMickey")
const result = document.querySelector(".result")
const result2 = document.querySelector(".result2")
const pontoHum = document.querySelector("#pontoH")
const pontoMic = document.querySelector("#pontoM")

let pontuacaoH = 0
let pontuacaoM = 0

const button = document.querySelector(".buttons")
button.addEventListener('click', function () {
    const audio = document.querySelector('audio')
    audio.play()
})

const jogadaHumano = (click) => {
    jogadaHM(click, jogadaMickey())
}

const jogadaMickey = () => {
    const opmic = ['PEDRA', 'PAPEL', 'TESOURA']
    const NumAleatorio = Math.floor(Math.random() * 3)
    return opmic[NumAleatorio]
}

const jogadaHM = (humano, mickey) => {
    console.log('Escolha do Humano: ' + humano + '  Escolha da Mickey: ' + mickey)
    document.querySelector('.opMickey').value = mickey;
    if (humano === mickey) {
        result.innerHTML = 'EMPATE!! JOGUE NOVAMENTE!!'
        result2.innerHTML = '<img src="mickeyEmpate.gif" height="150" width="150"/>'
    } else if (
        (humano === 'PEDRA' && mickey === 'TESOURA') || (humano === 'PAPEL' && mickey === 'PEDRA') || (humano === 'TESOURA' && mickey === 'PAPEL')) {
        pontuacaoH++
        pontoHum.innerHTML = pontuacaoH
        result.innerHTML = 'VOCÊ GANHOU! PARABÉNS!'
        result2.innerHTML = '<img src="mickeyPerdeu.gif" height="150" width="150"/>'
    }
    else {
        pontuacaoM++
        pontoMic.innerHTML = pontuacaoM
        result.innerHTML = 'VOCÊ PERDEU PARA O MICKEY!'
        result2.innerHTML = '<img src="mickeyAcertou.gif" height="150" width="150"/>'
    }

}
