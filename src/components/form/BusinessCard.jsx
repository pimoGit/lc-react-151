import { useState } from "react"
import CardBusinessCard from "./CardBusinessCard";

function BusinessCard() {

    // variabili di stato dei vari input
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [companyName, setCompanyName] = useState("");
    // const [role, setRole] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [companyPic, setCompanyPic] = useState("");

    // var unica (oggetto) per le info dei vari input
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        role: "",
        email: "",
        phone: "",
        companyPic: ""
    });

    // funzione di gestione dei change dei vari input

    function handleFormData(e) {

        // destrutturazione dell'oggetto event (e)
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // variante per asincronicità
        //  setFormData((currentFormData) => ({...currentFormData, [name]: value}));


    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    {/* FORM */}
                    <form>
                        <div className="row g-3 row-cols-2">
                            <div className="col">
                                <input
                                    name="firstName"
                                    className="form-control"
                                    placeholder="Nome"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Cognome"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="companyName"
                                    className="form-control"
                                    placeholder="Azienda"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="role"
                                    className="form-control"
                                    placeholder="Ruolo"
                                    type="text"
                                    value={formData.role}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleFormData}
                                />
                            </div>
                            <div className="col">
                                <input
                                    name="phone"
                                    className="form-control"
                                    placeholder="Telefono"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleFormData}
                                />
                            </div>
                        </div>
                        <input
                            name="companyPic"
                            className="form-control mt-3"
                            placeholder="Logo Azienda"
                            type="url"
                            value={formData.companyPic}
                            onChange={handleFormData}
                        />
                    </form>
                </div>

                {/* COLONNA DESTRA */}
                <div className="col-md-4">

                    {/* BUSINESS CARD */}
                    <CardBusinessCard formData={formData} />
                </div>
            </div>
        </div>
    )
}

export default BusinessCard
