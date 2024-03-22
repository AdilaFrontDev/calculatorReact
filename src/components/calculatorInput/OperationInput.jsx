import { useState } from 'react'
import '../styles/SrceenInput.css'

function ScreenInput({setFirstPart, setSecondPart}) {

    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    
    function handleInput(e) {
        if (!isNaN(Number(e.target.value))) {
            
            
            if(e.target.id === 'part1') {
                setInputValue1(e.target.value)
            } if (e.target.id === 'part2') {
                setInputValue2(e.target.value)
            }
        }
    }

    function handleBlur(e) {
        if(e.target.id === 'part1') {
            setFirstPart(e.target.value)
        } if (e.target.id === 'part2') {
            setSecondPart(e.target.value)
        }
    } 

    return(
        <div>
            <input 
            className="operation-part"
            rows="1"
            id ="part1"
            value={inputValue1}
            onChange={handleInput}
            onBlur={handleBlur}
        />
        <input 
            className="operation-part"
            rows="1"
            id ="part2"
            value={inputValue2}
            onChange={handleInput}
            onBlur={handleBlur}
        />
        </div>

        

    )
}
export default ScreenInput