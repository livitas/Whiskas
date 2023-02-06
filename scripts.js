let imagem = document.querySelector(".modelo")
let circulo = document.querySelector(".circulo")
let atum = document.getElementById("texto")
let carne = document.getElementById("texto")
let cordeiro = document.getElementById("texto")
let frango = document.getElementById("texto")
let salmao = document.getElementById("texto")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaCor(cor) {
    circulo.style.background = cor
}

function trocatextoatum() {
    atum.innerHTML = "Carne mecanicamente separada de atum, carcaça de frango, miúdo de suíno, plasma suíno em pó, farinha de trigo, celulose em pó, água, amido de milho, taurina, vitaminas (D3, E, C, B1, B6, K3, cloreto de colina, niacina, ácido fólico), minerais (cloreto de sódio – sal comum, cloreto de potássio, sulfato de cobre, iodato de cálcio, óxido de zinco, óxido de manganês, óxido de magnésio), tripolifosfato de sódio, xilose, glicina, goma xantana.";
}

function trocatextocarne() {
    carne.innerHTML = "Miúdo de bovino, miúdo de suíno, carcaça de frango, hemoglobina em pó, plasma suíno em pó, farinha de trigo, celulose em pó, água, amido de milho, taurina, vitaminas (D3, E, C, B1, B6, K3, cloreto de colina, niacina, ácido fólico), minerais (cloreto de sódio – sal comum, cloreto de potássio, sulfato de cobre, iodato de cálcio, óxido de zinco, óxido de manganês, óxido de magnésio), tripolifosfato de sódio, xilose, glicina, corante natural caramelo, goma xantana.";
}

function trocatextocordeiro() {
    cordeiro.innerHTML = "Miúdo de cordeiro, miúdo de suíno, carcaça de frango, plasma suíno em pó, farinha de trigo, celulose em pó, água, amido de milho, taurina, vitaminas (D3, E, C, B1, B6, K3, cloreto de colina, niacina, ácido fólico), minerais (cloreto de sódio – sal comum, cloreto de potássio, sulfato de cobre, iodato de cálcio, óxido de zinco, óxido de manganês, óxido de magnésio), tripolifosfato de sódio, xilose, glicina, corante natural caramelo, goma xantana.";
}

function trocatextofrango() {
    frango.innerHTML = "Carcaça de frango, miúdo de suíno, plasma suíno em pó, farinha de trigo, celulose em pó, água, amido de milho, taurina, vitaminas (D3, E, C, B1, B6, K3, cloreto de colina, niacina, ácido fólico), minerais (cloreto de sódio – sal comum, cloreto de potássio, sulfato de cobre, iodato de cálcio, óxido de zinco, óxido de manganês, óxido de magnésio), tripolifosfato de sódio, xilose, glicina, corante natural caramelo, goma xantana.";
}

function trocatextosalmao() {
    salmao.innerHTML = "Carne mecanicamente separada de salmão, carcaça de frango, miúdo de suíno, plasma suíno em pó, farinha de trigo, celulose em pó, água, amido de milho, taurina, vitaminas (D3, E, C, B1, B6, K3, cloreto de colina, niacina, ácido fólico), minerais (cloreto de sódio – sal comum, cloreto de potássio, sulfato de cobre, iodato de cálcio, óxido de zinco, óxido de manganês, óxido de magnésio), tripolifosfato de sódio, xilose, glicina, corante natural urucum, goma xantana.";

}
