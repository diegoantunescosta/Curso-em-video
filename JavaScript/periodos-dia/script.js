function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // configuração do horário
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    // colocando cor de fundo na página de acordo com o horário
    if (hora >= 0 && hora < 12 ){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}