/* 
    AC = Apaga tudo
    C = apaga a ultima conta
    operadores 
        # +
        # -
        # *
        # /
        # %
        # =
    backspace
*/

let but = document.querySelector('.but')
let view = document.querySelector('div#view')
let viewText = document.querySelector(`span#viewText`)
let viewMemories = document.querySelector(`div#memories`)

function printNumber(n) {
    // Validar se o último valor do array é um resultado anterior se verdadeiro apagar a string toda e começar uma nova conta
    let arrayCalc = viewText.textContent.split(` `)
    if (arrayCalc.length >= 5 ) {
        viewMemories.innerHTML = `${arrayCalc[4]}`
        viewText.innerHTML = ``
        viewText.innerHTML += `${n}`
    } else {
        viewText.innerHTML += `${n}`
    }
}

function printOperator(n) {
    // Esse teste impede que seja digitado mais de um operador
    let arrayCalc = viewText.textContent.split(` `)
    let arrayMemory = viewMemories.textContent.split(` `)
    console.log(arrayMemory)
    if (arrayCalc.length >= 5 ) {
        viewMemories.innerHTML = `${arrayCalc[4]}` 
        viewText.innerHTML = `${arrayCalc[4]}`
    } else if(arrayCalc.length == 3 && arrayCalc[2] != '') {
        calc(`=`)
        arrayCalc = viewText.textContent.split(` `)
        viewMemories.innerHTML = `${arrayCalc[4]}`
        viewText.innerHTML = `${arrayCalc[4]}`
    } else if (arrayMemory[0] == "" && arrayCalc[0] == "") {
        viewText.innerHTML += 0
    } else if (arrayCalc[arrayCalc.length -1] == '') {
        arrayCalc.pop()
        arrayCalc.pop()
        viewText.innerHTML = `${arrayCalc.join(" ")}`
    }
    viewText.innerHTML += ` ${n} `
}


function calc(n) {
    // Aqui farei uma validação para ver se há mais do que 2 números e um operador
    let arrayCalc = viewText.textContent.split(" ")
    if (arrayCalc.length >= 5 ) {
        viewMemories.innerHTML = `${arrayCalc[4]}`
        viewText.innerHTML = ``
    } else {
        // Calcula os dois ultimos números com o último operador digitado
        if (n == "=") {
            let res = 0
            switch (arrayCalc[1]) {
                case "+":
                    res = Number(arrayCalc[0]) + Number(arrayCalc[2])
                    viewText.innerHTML += ` = `
                    viewText.innerHTML += `${res}`
                    break;
                case "-":
                    res = Number(arrayCalc[0]) - Number(arrayCalc[2])
                    viewText.innerHTML += ` = `
                    viewText.innerHTML += `${res}`
                    break;
                case "*":
                    res = Number(arrayCalc[0]) * Number(arrayCalc[2])
                    viewText.innerHTML += ` = `
                    viewText.innerHTML += `${res}`
                    break;
                case "/":
                    res = Number(arrayCalc[0]) / Number(arrayCalc[2])
                    viewText.innerHTML += ` = `
                    console.log(res)
                    if (String(res).length > 10) {
                        viewText.innerHTML += `${res.toFixed(5)}`
                    } else {
                    viewText.innerHTML += `${res}`
                    }
                    break;
                case "%":
                    res = (Number(arrayCalc[0])*Number(arrayCalc[2]))/100
                    viewText.innerHTML += ` = `
                    if (res.length > 10) {
                        viewText.innerHTML += `${res.toFixed(0)}`
                    } else {
                    viewText.innerHTML += `${res}`
                    }
                    break;
                default:
                    viewText.innerHTML = ``
                    break;
            }
        }
    }



}


function cleanLast() {
    viewText.innerHTML = ``
}

function cleanAll() {
    viewText.innerHTML = ``
    viewMemories.innerHTML = ``
}

function backSpace() {
    let replace = viewText.textContent
    let newText = replace.slice(0, -1)
    viewText.innerHTML = newText
}