function escolher(escolha){
    var vetorCont = document.querySelectorAll(".conteudo")

    for (var i = 0; i < vetorCont.length; i++){
        vetorCont[i].style.display = 'none'
    }

    var div = document.querySelector("#cont" + escolha); 
    console.log("#cont" + escolha)
    div.style.display = 'flex'

}