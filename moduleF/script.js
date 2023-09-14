var numberArray = []
function add() {
    var gnumber = Number(document.getElementById('inumber').value)
    var gtxt = document.getElementById('itxt')
    if (gnumber <= 0 || gnumber > 100) {
        window.alert('Please enter a valid number')
    } else {
        gtxt.innerHTML += `Value ${gnumber} added.\n`
        numberArray.push(gnumber)
    }
    
}

function finish() {
    if (numberArray.length == 0) {
        window.alert('Please enter a valid number until you finish.')
    } else {
        var gchecker = document.querySelector('div.main-checker')
        var p = document.createElement("p")
        gchecker.appendChild(p)

        p.textContent = `At total we have ${numberArray.length} numbers.`
        p.innerHTML += `<br>The max value is ${Math.max(...numberArray)}.`
        p.innerHTML += `<br>The min value is ${Math.min(...numberArray)}.`
        var sum = 0
        for (let x in numberArray) {
            sum += numberArray[x]
        }
        p.innerHTML += `<br>The sum of the values is ${sum}.`
        p.innerHTML += `<br>The mean of the values is ${sum/numberArray.length}.`
        }
}
num = 8
window.alert(num **= 2) 
/* function checkNumber(number, values) {
    if (values.IndexOf(number) != -1) {
        return true
    } else {
        return false
    }
} 
if (!checkNumber(gnumber, numberArray)) { // Se não inLista

} else {
    window.alert("ERROR: Invalid number already provided")
}

*/