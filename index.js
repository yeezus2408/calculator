let a = ''
let b = ''
let operation = ''
let result = false

const digit = ['0','1','2','3','4','5','6','7','8','9',]
const action = ['-','+','X','/',]

const screen = document.getElementById('content')

function clearAll() {   
    a = ''
    b = ''
    operation = ''
    result = false
    screen.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.board').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    screen.textContent = ''

    const key = event.target.textContent;
    if (digit.includes(key)){
        a+=key
        console.log(a, b, operation)
        screen.textContent = a
    }

    if(action.includes(key)) {
        operation = key
        screen.textContent = operation
        console.log(a, b, operation)
        return
    }
}