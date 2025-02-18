'use strict'

async function pesquisarFotos() {
    const url = `https://picsum.photos/v2/list?page=2&limit=100`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarImagem(link) {
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link

    galeria.appendChild(novaImg)
}

async function preencherFotos() {
    const fotos = await pesquisarFotos()
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(foto => criarImagem(foto.download_url))  
}

document.addEventListener('DOMContentLoaded', preencherFotos) 