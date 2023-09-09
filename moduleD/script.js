function carregar(){
    var data = new Date()
    var hour = data.getHours()
    var gtitle = document.querySelector('p.main-text')
    var gimg = document.getElementById('main-image')
    var gbody = document.querySelector('body')
    gtitle.innerHTML = `It's ${hour} hour(s).`

    if (hour > 6 && hour <= 12) {
        gimg.src = 'imgs/morning.png'
        gbody.style.backgroundColor = `rgb(255, 183, 94)`;
    } else if (hour > 12 && hour <= 19) {
        gimg.src = 'imgs/afternon.png'
        gbody.style.backgroundColor = `rgb(135, 206, 250)`;
    } else {
        gimg.src = 'imgs/evening.png'
        gbody.style.backgroundColor = `rgb(34, 49, 63)`;
        
    }
}