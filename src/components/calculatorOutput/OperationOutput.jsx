

function OperationOutput({firtsPart, secondPart, operatorChoice, operationLaunch}) {
    
    function OperationMaker(firtsPart, secondPart, operatorChoice) {
        let result = 0
        const partUn = Number(firtsPart)
        const partDeux = Number(secondPart)
        console.log(partUn)
        console.log(partDeux)
        console.log(typeof partUn)
        console.log(typeof partDeux)
        if (operationLaunch) {
            switch(operatorChoice) {
                case '+':
                    result = partUn + partDeux;
                    break;
                case '-':
                    result = partUn - partDeux;
                    break;
                case 'x':
                    result = partUn * partDeux;
                    break;
                case '/':
                    result = partUn / partDeux;
                    break;
                default:
                    console.log(`Il faut choisir un opérateur`)
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