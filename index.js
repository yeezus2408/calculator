let a = []
function app (btn){
    let Value = btn.getAttribute("value")
    a.push(Number(Value))
    var num = a.join('');
    num = Number(a);
    let el = document.querySelector('content');
    document.getElementById('content').textContent = num;
}

function oper(op){
    let value = op.getAttribute('value');
    console.log(value)
}
