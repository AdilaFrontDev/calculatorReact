

function OperationOutput({firtsPart, secondPart, operatorChoice, operationLaunch}) {
    
    function OperationMaker(firtsPart, secondPart, operator) {
        const numberFistPart = Number(firtsPart)
        const numberSecondPart = Number(secondPart)
        const result = 0
        if (isNaN(numberFistPart) && isNaN(numberSecondPart) && operationLaunch ) {
            switch(operatorChoice) {
                case '+':
                    result = numberFistPart + numberSecondPart;
                    break;
                case '-':
                    result =umberFistPart - numberSecondPart;
                    break;
                case 'x':
                    result = umberFistPart * numberSecondPart;
                    break;
                case '/':
                    result =umberFistPart / numberSecondPart;
                    break;
                default:
                    console.log(`l'opérateur choisi n'est pas adapté`)
            }
        } else {
            console.log(`Au moin l'un des parties de l'opération n'est pas un nombre`)
        }
        return result
    }

    return (
        <p className="calculator-output-result">{OperationMaker(firtsPart, secondPart, operatorChoice)}</p>
    )
}

export default OperationOutput