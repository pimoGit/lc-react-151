import { useState } from "react"

// setto l'array da usare come valore iniziale della var di stato dei dati
const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato'];

function TodoList() {

    // creiamo la var di stato per gestire la lista
    const [tasks, setTasks] = useState(initialTasks);
    //  altra var di stato che gestisce valore di input
    const [newTask, setNewTask] = useState('');

    return (
        <div className="container mt-5 w-50">
            <h1>Tasks</h1>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li className="list-group-item" key={index}>
                        {task}
                    </li>
                ))}
            </ul>

            {/* form per aggiungere nuovo task a lista precedente */}
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cosa devi fare?"
                        value={newTask}
                        onChange={e => { setNewTask(e.target.value) }}
                    />
                    <button className="btn btn-outline-secondary">Aggiungi</button>
                </div>
            </form>
        </div>
    )
}

export default TodoList
