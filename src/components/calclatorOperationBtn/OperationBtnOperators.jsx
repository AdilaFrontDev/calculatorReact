import '../styles/OperationBtnOperators.css'

function OperationBtnOperators() {
    const operatorList = ['+', '-', 'x', '/']

    return (
        <div className='listOperator' >
            {operatorList.map((operator) => (
                    <p className='listOperator-btn' key={operator}>{operator}</p>
            ))}
        </div>
    )
}

export default OperationBtnOperators