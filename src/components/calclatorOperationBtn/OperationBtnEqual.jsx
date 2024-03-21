import "../styles/OperatorBtnEqual.css"




function OperatorBtnEqual({updateOperationLaunch}) {

    return (
        <p className="operatorEqual" onClick={() => (updateOperationLaunch(true))}>=</p>
    )
}

export default OperatorBtnEqual