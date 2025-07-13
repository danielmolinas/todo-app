import { useState } from "react"

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)

    const handleSubmit = () => {
        if(!inputValue) { return }
        handleAddTodo(inputValue)
        setInputValue("")
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <div className="input-container">
            <input 
                value={inputValue} 
                onChange={(e) => {setInputValue(e.target.value)}} 
                onKeyDown={handleKeyDown}
                placeholder="Add a new task..." 
            />
            <button onClick={handleSubmit}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}