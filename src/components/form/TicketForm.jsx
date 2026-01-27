import { useState } from "react";
import axios from "axios";

const TicketForm = () => {

    //   const [alert, setAlert] = useState({ show: false, status: '', text: '' })

    const initialFormData = {
        name: "",
        language: "HTML",
        urgency: "medium",
        updates: false,
        description: "",
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/tickets", formData)
            .then(response => {
                console.log("Dati inviati con successo:", response.data);
                setFormData(initialFormData);
                setAlert({ show: true, status: 'success', text: 'Richiesta inviata con successo!' });
            })
            .catch(error => {
                console.error("Errore nell'invio dei dati:", error);
                setAlert({ show: true, status: 'danger', text: 'Errore invio della richiesta!' });
            });
    };

    return (
        <div className="container mt-4">
            <h2>Richiesta apertura Ticket</h2>
            {/* {alert.show &&
        <div className={`alert alert-${alert.status}`} role="alert">
          {alert.text}
        </div>
      } */}

            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                {/* Nome */}
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Selezione linguaggio */}
                <div className="mb-3">
                    <label className="form-label">Linguaggio di programmazione</label>
                    <select
                        name="language"
                        className="form-select"
                        value={formData.language}
                        onChange={handleChange}
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="JS">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Express">Express</option>
                        <option value="SQL">SQL</option>
                    </select>
                </div>

                {/* Radio Urgenza */}
                <div className="mb-3">
                    <label className="form-label">Livello di urgenza</label>
                    <div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="low"
                                id="urgencyLow"
                                className="form-check-input"
                                checked={formData.urgency === "low"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyLow">Bassa</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="medium"
                                id="urgencyMedium"
                                className="form-check-input"
                                checked={formData.urgency === "medium"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyMedium">Media</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                name="urgency"
                                value="high"
                                id="urgencyHigh"
                                className="form-check-input"
                                checked={formData.urgency === "high"}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="urgencyHigh">Alta</label>
                        </div>
                    </div>
                </div>

                {/* Checkbox aggiornamenti */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        name="updates"
                        id="updates"
                        className="form-check-input"
                        checked={formData.updates}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="updates">Ricevi aggiornamenti sulla richiesta</label>
                </div>

                {/* Descrizione problema */}
                <div className="mb-3">
                    <label className="form-label">Descrizione del problema</label>
                    <textarea
                        name="description"
                        className="form-control"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Pulsante di invio */}
                <button type="submit" className="btn btn-primary">Invia richiesta</button>
            </form>
        </div>
    );
};

export default TicketForm;