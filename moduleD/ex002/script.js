function ageChecker() {
    var data = new Date()
    var curentyear = data.getFullYear()
    var gtext = document.querySelector('p#msg')
    var gyear = document.getElementById('iyear')
    var gimg = document.getElementById('main-img')
    if (gyear.value.length == 0 || Number(gyear.value) > curentyear) {
        window.alert ('[ERRO] Verify the data and try again!')
    } else {
        var ggender = document.getElementsByName('gender') // 0 ou 1
        var age = curentyear - Number(gyear.value)
        var gender = ''
        /* Como criar o element da img direto pelo JS
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        div.appendChild(img) */
        gimg.style.display = 'block'
        if (ggender[0].checked) {
            gender = 'Male'
            if (age <= 7) {
                gimg.src = 'imgs/man_4.png'
            } else if (age <= 25) {
                gimg.src = 'imgs/man_20.png'
            } else if (age <= 35) {
                gimg.src = 'imgs/man_30.png'
            } else if (age <= 55) {
                gimg.src = 'imgs/man_50.png'
            } else {
                gimg.src = 'imgs/man_60.png'
            }
        } else if (ggender[1].checked) {
            gender = 'Female'
            if (age <= 7) {
                gimg.src = 'imgs/woman_4.png'
            } else if (age <= 25) {
                gimg.src = 'imgs/woman_20.png'
            } else if (age <= 35) {
                gimg.src = 'imgs/woman_30.png'
            } else if (age <= 55) {
                gimg.src = 'imgs/woman_50.png'
            } else {
                gimg.src = 'imgs/woman_60.png'
            }
        }
        gtext.innerHTML = `We detected a ${gender} with ${age}.`
    }
}