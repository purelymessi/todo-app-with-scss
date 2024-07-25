import { useState } from "react";
import "./InputForm.scss";
import { FiPlusCircle } from "react-icons/fi";

function InputForm({ handleAddTodo }) {
    const [value, setValue] = useState("");

    const handleClick = () => {
        if (value.trim()) {
            handleAddTodo(value);
            setValue("");  
        }
    };

    return (
        <div className="input-form container">
            <input  
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Add your next task"
            />
            <button onClick={handleClick}>
                Create <FiPlusCircle size={18}/>
            </button>
        </div>
    );
}

export default InputForm;
