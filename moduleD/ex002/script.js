function ageChecker() {
    var data = new Date()
    var todayyear = data.getFullYear
    var gtext = document.querySelector('p#msg')
    var gyear = document.getElementById('iyear')
    var gimg = document.getElementById('main-img')
    gimg.style.display = 'block'

    if (gyear.value.length == 0 || Number(gyear.value) > todayyear) {
        window.alert ('[ERRO] Verify the data and try again!')
    } else {
        var ggender = document.getElementsByName('gender') // 0 ou 1
        var age = todayyear - Number(gyear.value)
        gtext.innerText = `years old.`
    }
    gtext.innerText = ` ${age} years old.`

    // if (femaleCheckbox.checked) {
    //     var ggender = 'Female'
    // } else {
    //     var ggender = 'Male'
    // }

    // gtext.innerHTML = `We detected a ${ggender} with ${age} years old.`
    
}
//     if (ggender == 'Male') {
//         if (age < 7) {
//             gimg.src = 'imgs/man_4.png'
//         }
//     } else {
//         if (age < 7) {
//             gimg.src = 'imgs/woman_4.png'
//         }
//     }
// }