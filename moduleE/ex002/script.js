function generateTable() {
    window.alert('Hello world!')
    var gnumber = Number(document.querySelector('input#inumber').value)
    var gtxt = document.querySelector('textarea#itxt')
    var c = 1
    var result = 0
    while (c <= 10) {
        result = gnumber * c
        gtxt.innerHTML += `${c} x ${gnumber} = ${result}\n` 
        c++
    }
}