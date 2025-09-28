import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { eliminarContacto } from "./NewContact.jsx";

const DeleteContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [estado, setEstado] = React.useState("pendiente");

    useEffect(() => {
        const eliminar = async () => {
            const exito = await eliminarContacto(id);
            setEstado(exito ? "exito" : "error");
            setTimeout(() => navigate("/contact-list"), 1500);
        };
        eliminar();
    }, [id, navigate]);

    return (
        <div className="container text-center mt-5">
            {estado === "pendiente" && <h2>Eliminando contacto...</h2>}
            {estado === "exito" && <h2>Contacto eliminado correctamente</h2>}
            {estado === "error" && <h2>Error al eliminar el contacto</h2>}
            <Link to="/contact-list" className="btn btn-primary mt-3">Volver a la lista</Link>
        </div>
    );
};

export { DeleteContact };
