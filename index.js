let a = ''
let b = ''
let operation = ''
let result = false

const digit = ['0','1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','X','/', '^', '%']

const screen = document.getElementById('content')

function clearAll() {   
    a = ''
    b = ''
    operation = ''
    result = false
    screen.textContent = 0;
}

function back() {
    if (operation === ''){
        a = a.slice(0,-1)
        console.log(a)
        screen.textContent = a
    }
    else {
        b = b.slice(0,-1)
        console.log(b)
        screen.textContent = b;
    }
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.back').onclick = back;

document.querySelector('.board').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
    if(event.target.classList.contains('back')) return;

    screen.textContent = ''

    const key = event.target.textContent;
    if (digit.includes(key)){
        if (b === '' && operation === ''){
            a+=key
            screen.textContent = a
        }
        else if(a !=='' && b !== '' && result){

        }
        else {
            b+=key
            screen.textContent = b
        }
        console.log(a, b, operation)
        return
    }

    if(action.includes(key)) {
        operation = key
        screen.textContent = operation
        console.log(a, b, operation)
        return
    }

    if (key==='=') {
        screen.textContent = calculator(a,b, operation)
    }
}