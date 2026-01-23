import { useState, useEffect } from "react"

// setto l'array da usare come valore iniziale della var di stato dei dati
const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato']

function TodoList() {

    // creiamo la var di stato per gestire la lista
    const [tasks, setTasks] = useState(initialTasks);
    // creiamo var di stato per versione filtrata todolist
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    //  altra var di stato che gestisce valore di input nuovoTask
    const [newTask, setNewTask] = useState('');
    // altra var di stato che gestisce valore input search
    const [search, setSearch] = useState('');



    // funzione di gestione invio form
    const addTask = e => {
        e.preventDefault();
        // mi creo un nuovo array aggiornato con valori predeneti più nuovo da input
        const updatedTasks = [...tasks, newTask];
        // cambio il valore di var stato tasks con nuovo array appena creato
        setTasks(updatedTasks);
        // ripuliamo il value dell'input
        setNewTask("");
    }

    // funzione per rimuovere un task dall'array
    const removeTask = i => {
        const updatedTasks = tasks.filter((task, indice) => {
            return indice !== i
        });
        setTasks(updatedTasks);
    }

    // aggiungiamo useEffect per gestire il filtraggio da valore input search
    useEffect(() => {
        // creiamo nuovo array filtrato in base input search
        const newFilteredTasks = tasks.filter((task) => {
            return task.toLowerCase().includes(search.toLowerCase())
        });
        //  assegnamo nuovo array filtrato a var stato filteredTasks (tramite il suo setter)
        setFilteredTasks(newFilteredTasks);
    }, [search, tasks])

    return (
        <div className="container mt-5 w-50">
            <h1>Tasks</h1>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="cerca i tuoi tasks"
                    value={search}
                    onChange={e => { setSearch(e.target.value) }}
                />
            </div>

            <ul className="list-group">
                {filteredTasks.map((task, index) => (
                    <li className="list-group-item" key={index}>
                        {task} <br />
                        <button onClick={() => removeTask(index)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>

            {/* form per aggiungere nuovo task a lista precedente */}
            <form onSubmit={addTask}>
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
