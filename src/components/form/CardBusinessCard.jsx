function CardBusinessCard(props) {

    const formData = props.formData;

    return (
        <div className="card h-100">
            <div className="card-header">{formData.companyName}</div>
            <div className="card-body">
                <div className="row row-cols-2">
                    <div className="col">
                        <blockquote className="blockquote mb-0">
                            <p>
                                {formData.firstName} {formData.lastName}
                            </p>
                            <footer className="blockquote-footer">
                                <cite title={formData.role}>{formData.role}</cite>
                            </footer>
                        </blockquote>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-telephone-fill"></i> {formData.phone}</li>
                            <li><i className="bi bi-envelope-at"></i> {formData.email}</li>
                        </ul>
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid"
                            src={formData.companyPic}
                            alt={formData.companyName}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBusinessCard
