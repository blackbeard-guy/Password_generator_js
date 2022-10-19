const passInput = document.querySelector('.password')
const copyBtn = document.querySelector('#copy')
const generate8Btn = document.querySelector('#generate8')
const generate12Btn = document.querySelector('#generate12')
const checkboxNumb = document.querySelector('#numbers')
const checkboxLetters = document.querySelector('#letters')
const checkboxSymb = document.querySelector('#symbols')

passInput.addEventListener('keypress', (e) => {
    e.preventDefault()
})

function generatePass(passwordLength) {

    allChars = makeAllChars()
    let randomString = ''
    if(allChars == '0'){
        randomString = 'Select type of symbols'
    } else {
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * allChars.length)
            randomString += allChars[randomNumber]
        }
    }
    return randomString
}

generate8Btn.addEventListener('click', () => {
    let password = generatePass(8)
    passInput.value = password
})

generate12Btn.addEventListener('click', () => {
    let password = generatePass(12)
    passInput.value = password
})

copyBtn.addEventListener('click', () => {
    passInput.select()
    navigator.clipboard.writeText(passInput.value)
})

function makeAllChars() {
    const numberChars = '0123456789'
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    const symbolChars = '!@#$%^&*()_+'

    let allChars = '0'
    
    if(checkboxNumb.checked){
        allChars = numberChars
    }
   
    if(checkboxLetters.checked){
        allChars += upperChars + lowerChars
    }

    if(checkboxSymb.checked){
        allChars += symbolChars
    }

    return allChars
}

makeAllChars()
