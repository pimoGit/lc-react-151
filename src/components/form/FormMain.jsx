import { useState } from "react";

export default function FormMain() {
    const [firstName, setFirstName] = useState("");

    // funzione di CB del submit form
    const handleSubmit = event => {
        // preveniamo invio form con ricaricamento page
        event.preventDefault();
        //  e quindi eseguiamo nostra logica
        console.log('Il nome inviato è:' + firstName)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nomeUser">Inserisci il tuo nome</label>
            <input
                id="nomeUser"
                type="text"
                value={firstName}
                placeholder="inserisci il tuo nome"
                onChange={e => { setFirstName(e.target.value) }}
            />
            <p>{firstName}</p>
            <button>Invia</button>
        </form>
    )
}