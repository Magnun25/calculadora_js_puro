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
const keyBoard = document.querySelector('#keyboard')


keyBoard.addEventListener('click', function (event) {
    switch (event.target.classList[0]) {
        case "numbers":
            let arrayCalc = viewText.textContent.split(` `)
            if (arrayCalc.length >= 5 ) {
                viewMemories.innerHTML = `${arrayCalc[4]}`
                viewText.innerHTML = ``
                viewText.innerHTML += `${event.target.value}`
            } else {
                viewText.innerHTML += `${event.target.value}`
            }
            break;
        case "operator":
            let arrayCalc2 = viewText.textContent.split(` `)
            let arrayMemory = viewMemories.textContent.split(` `)
            if (arrayCalc2.length >= 5 ) {
                viewMemories.innerHTML = `${arrayCalc2[4]}` 
                viewText.innerHTML = `${arrayCalc2[4]}`
            } else if(arrayCalc2.length == 3 && arrayCalc2[2] != '') {
                calc(`=`)
                arrayCalc2 = viewText.textContent.split(` `)
                viewMemories.innerHTML = `${arrayCalc2[4]}`
                viewText.innerHTML = `${arrayCalc2[4]}`
            } else if (arrayMemory[0] == "" && arrayCalc2[0] == "") {
                viewText.innerHTML += 0
            } else if (arrayCalc2[arrayCalc2.length -1] == '') {
                arrayCalc2.pop()
                arrayCalc2.pop()
                viewText.innerHTML = `${arrayCalc2.join(" ")}`
            }
            viewText.innerHTML += ` ${event.target.value} `
            break;
        case "calculate":
            let arrayCalc3 = viewText.textContent.split(" ")
            if (arrayCalc3.length >= 5 ) {
                viewMemories.innerHTML = `${arrayCalc3[4]}`
                viewText.innerHTML = ``
            } else {
                if (event.target.value == "=") {
                    let res = 0
                    switch (arrayCalc3[1]) {
                        case "+":
                            res = Number(arrayCalc3[0]) + Number(arrayCalc3[2])
                            viewText.innerHTML += ` = `
                            viewText.innerHTML += `${res}`
                            break;
                        case "-":
                            res = Number(arrayCalc3[0]) - Number(arrayCalc3[2])
                            viewText.innerHTML += ` = `
                            viewText.innerHTML += `${res}`
                            break;
                        case "*":
                            res = Number(arrayCalc3[0]) * Number(arrayCalc3[2])
                            viewText.innerHTML += ` = `
                            viewText.innerHTML += `${res}`
                            break;
                        case "/":
                            res = Number(arrayCalc3[0]) / Number(arrayCalc3[2])
                            viewText.innerHTML += ` = `
                            console.log(res)
                            if (String(res).length > 10) {
                                viewText.innerHTML += `${res.toFixed(5)}`
                            } else {
                            viewText.innerHTML += `${res}`
                            }
                            break;
                        case "%":
                            res = (Number(arrayCalc3[0])*Number(arrayCalc3[2]))/100
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
            break;
        case "controls":
            if (event.target.id == "cleanAll") {
                viewText.innerHTML = ``
                viewMemories.innerHTML = ``
            } else if (event.target.id == "cleanLast") {
                viewText.innerHTML = ``
            } else {
                let replace = viewText.textContent
                let newText = replace.slice(0, -1)
                viewText.innerHTML = newText
            }
            break;
        default:
            viewText.innerHTML += ``
            break;
    }
})