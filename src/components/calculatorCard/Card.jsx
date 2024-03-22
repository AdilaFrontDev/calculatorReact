import { useState } from 'react'
import OperationBtnOperators from '../calclatorOperationBtn/OperationBtnOperators'
import OperationInput from '../calculatorInput/OperationInput'
import OperationBtnEqual from '../calclatorOperationBtn/OperationBtnEqual'
import OperationOutput from '../calculatorOutput/OperationOutput'
import '../styles/Card.css'



function Card() {
    const [operatorChoice, updateOperatorChoice] = useState('')
    const [operationLaunch, updateOperationLaunch] = useState(false)
    const [firtsPart, setFirstPart] = useState(0)
    const [secondPart, setSecondPart] = useState(0)
    const operatorList = ['+', '-', 'x', '/']
    const operationPart = ["partOne", "partTow"]

    return (
        <div className='calculator-frame'>
            <div className='listOperator'> 

            {operatorList.map((operator) => (
                <OperationBtnOperators
                    key={operator}
                    operator={operator}
                    operatorChoice={operatorChoice}
                    updateOperatorChoice={updateOperatorChoice}
                ></OperationBtnOperators> 
            ))}
            
            </div>
            <div className='calculator-input'>
                <p className='calculator-input-operator'>{operatorChoice}</p>
                <div className='calculator-input-membre'>
                    
                    <OperationInput
                        setFirstPart={setFirstPart}
                        setSecondPart={setSecondPart}  
                    />
              
    
                </div>
                
            </div>
            <div className='calculator-output'>
                <OperationOutput 
                operationLaunch={operationLaunch}
                operatorChoice={operatorChoice}
                firtsPart={firtsPart}
                secondPart={secondPart}
                />
                <OperationBtnEqual 
                    updateOperationLaunch={updateOperationLaunch}
                />
            </div>
        </div>
    )
}

export default Card