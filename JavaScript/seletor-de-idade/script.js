function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if ( fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        res.innerHTML = `Idade calculada é igual : ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero  = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto1.png')
            } else if (idade <= 30){
                //Jovem
                img.setAttribute('src','foto6.png')
            } else if (idade <= 50 ){
                //Adulto
                img.setAttribute('src','foto8.png')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','foto2.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto3.png')
            } else if (idade <= 30){
                //Jovem
                img.setAttribute('src','foto4.png')
            } else if (idade <=50  ){
                //Adulto
                img.setAttribute('src','foto7.png')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','foto5.png')
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `<br>Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
        }
    
}