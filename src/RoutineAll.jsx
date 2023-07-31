import React, { useState } from "react";
import "./RoutineAll.css"

function RoutineAll () {

    const [List, SetList] =useState([])
    const [NewItem, SetNewItem] = useState([""])
    
    function AddItem(form) {
        form.preventDefault();
        if (!NewItem) {
            return;
        }

        SetList([...List, {text: NewItem, IsCompleted: false}])
        SetNewItem("")
        document.getElementById("Entrada").focus()
    }

    function clicou(index) {
        const listAux = [...List];
        listAux[index].IsCompleted = !listAux[index].IsCompleted
        SetList(listAux)
    }

    function deletar(index) {
        const listAux = [...List];
        listAux.splice(index, 1)
        SetList(listAux)
    }

    function deleteAll () {
        SetList([])
    }

    return (
        <div className="">
            <h1> MINHA ROTINA</h1>  
            <form action="" onSubmit={AddItem}>
                <input
                id="Entrada" 
                type="text" 
                className="input" 
                placeholder="Adicione uma tarefa"
                value={NewItem}
                onChange={(e)=> {SetNewItem(e.target.value)}}

                />
                <button 
                className="btn" 
                type="submit"
                >
                ADD</button>
            </form>

            <div className="tasks">
                {
                    List.length < 1
                    ?
                    <img src="https://cdn-icons-png.flaticon.com/512/9123/9123834.png" width={300} alt="" />
                    :
                    List.map((item, index)=>(
                        <div
                        key={index} 
                        className={item.IsCompleted ? "task-item completo" : "task-item"}
                        >
                            <span onClick={() => {clicou(index)}}>{item.text}</span>
                            <button 
                            className="btn-remove"
                            onClick={() => {deletar(index)}}
                            >Deletar</button>
                        </div>
                    ))   
                    }
                    {
                        List.length > 0 &&
                        <button onClick={() => deleteAll()} className="delete-all">
                        Deletar todas
                    </button>
                    }
                    
            </div>
        </div>
    )
}

export default RoutineAll