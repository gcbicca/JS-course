function count() {
    var gstart = Number(document.querySelector('input#istart').value)
    var gend = Number(document.querySelector('input#iend').value)
    var gpace = Number(document.querySelector('input#ipace').value)
    var gtext = document.querySelector('p#msg')
    window.alert(`The start ${gstart}, the end ${gend} and the gpace ${gpace}`)
    gtext.innerHTML = ''
    if (gstart > gend) {
        for (var count = gstart;count >= gend; count -= gpace) {// COMEÇANDO NO INICIO, ENQUANTO COUNT FOR MAIOR QUE GEND, O CONTADOR VAI PERDER O PASSO.
            gtext.innerHTML += `${count} ` + '&rarr; '
        }
    } else {
        for (var count = gstart;count <= gend; count += gpace) { 
            gtext.innerHTML += `${count} ` + '&rarr; '
        }
    }
    gtext.innerHTML += '&#127937;'
}