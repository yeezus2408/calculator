const OPERATIONS = {
    sum: '+',
    difference: '-',
    multiplication: '*',
    division: '/',
    pows: '**',
    percent: '%'
}

function calculator(a, b, operation) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a,b)
            break;

        case OPERATIONS.difference:
            result = difference(a,b);
            break
        case OPERATIONS.multiplication:
            result = multiplication(a,b)
        break

        case OPERATIONS.division:
            result = division(a,b)
        break

        case OPERATIONS.pows:
            result = pows(a,b)
        break

        case OPERATIONS.percent:
            result = percent(a,b)
        break
    
        default:
            break;
    }

    return result
}