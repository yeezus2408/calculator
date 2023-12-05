let a = "";
let b = "";
let c = OPERATIONS;
function app (btn){
    let Value = btn.getAttribute("value")
    a+=Value
    let el = document.getElementById('content');
    el.textContent = a;
}

function cleardiv(btn){
    let Value = btn.getAttribute('value')
    a = ''
    let el = document.getElementById('content');
    el.textContent = a

}

function oper(op){
    let value = op.getAttribute('value');
    let el = document.getElementById('content')
    

}