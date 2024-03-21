import '../styles/OperationBtnOperators.css'

function OperationBtnOperators({operatorChoice, updateOperatorChoice, operator}) {

    return (            
            <p className='listOperator-btn' operator={operatorChoice} onClick={() => (updateOperatorChoice(operator))}>{operator}</p>
    )
}

export default OperationBtnOperators