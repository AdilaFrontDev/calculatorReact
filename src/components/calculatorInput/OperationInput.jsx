import { useState } from 'react'
import '../styles/SrceenInput.css'
function ScreenInput({setFirstPart, setSecondPart}) {

    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        if (!isNaN(Number(e.target.value))) {
            setInputValue(e.target.value)
        }
    }

    function witchPart(e) {
        if (e.target.key) {
            console.log('one')
        } if (e.target.ket) {
            console.log('tow')
        }
    }

    return(
        <textarea 
            className="operation-part"
            rows="1"
            value={inputValue}
            onChange={handleInput}
            onBlur={witchPart}
        />
    )
}
export default ScreenInput