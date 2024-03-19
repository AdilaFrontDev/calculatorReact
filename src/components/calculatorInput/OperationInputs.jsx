import '../styles/SrceenInputs.css'
function ScreenInputs() {
    const operationPart = ['fisrt', 'second']

    return(
        <div className="operation">
            {operationPart.map((part) => (
                    <textarea className="operation-part" key={part} ></textarea>
            ))}
        </div>
        
    )
}
export default ScreenInputs