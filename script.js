function toggleMode() { // função para alterar o tema e a imagem
    const html = document.documentElement // acessando a tag html através do document.Element

    if (html.classList.contains("light")) { // se na lista de classe contém light
        html.classList.remove("light") // remova light
    } else {
        html.classList.add("light") // adiciona light
    }

    const img = document.querySelector("#profile img") // pegar a tag da imagem
    
    if (html.classList.contains("light")) { // se a lista de classe contiver light
        img.setAttribute("src", "./assets/avatar-light.png") // altere o atributo src da imagem para light
    } else {
        img.setAttribute("src", "./assets/avatar.png") // altere a src da tag img para imagem normal
    }
}