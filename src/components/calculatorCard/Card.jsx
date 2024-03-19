import { useState } from 'react'
import OperationBtnOperators from '../calclatorOperationBtn/OperationBtnOperators'
import OperationInputs from '../calculatorInput/OperationInputs'
import OperationBtnEqual from '../calclatorOperationBtn/OperationBtnEqual'
import '../styles/Card.css'

function Card() {
    const [operator, updateOperator] = useState('')
   
    return (
        <div className='calculator-frame'>
            <div > 
                <OperationBtnOperators />
            </div>
            <div className='calculator-input'>
                <p className='calculator-input-operator'>0</p>
                <OperationInputs />
            </div>
            <div className='calculator-output'>
                <p className="calculator-output-result">0</p>
                <OperationBtnEqual />
            </div>
        </div>
    )
}

export default Card