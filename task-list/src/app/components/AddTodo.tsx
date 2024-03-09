import { useState } from "react";

interface AddtodoProps {
    addTodo: (text: string) => void;
}


function Addtodo ({addTodo}: AddtodoProps) {
    const [text, setText] = useState<string>("");
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === "") { 
            return;
        }
        addTodo(text);
        // console.log(text);
        setText("");
        // return; 
        
        // dispatch({ type: "ADD_TODO", payload: { id: Date.now(), text: text } }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button>Add Todo</button>
        </form>
    )
}

export default Addtodo;