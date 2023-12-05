let a = ""
function app (btn){
    let Value = btn.getAttribute("value")
    a+=Value
    let el = document.querySelector('content');
    document.getElementById('content').textContent = a;
}

function oper(op){
    let value = op.getAttribute('value');
    console.log(value)
}
