import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ContactList = () => {
    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Cargar contactos al montar el componente
    useEffect(() => {
        cargarContactos();
    }, []);

    const cargarContactos = async () => {
        setLoading(true);
        const contactosData = await obtenerContactos();
        setContactos(contactosData);
        setLoading(false);
    };

    const handleEliminar = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este contacto?")) {
            const eliminado = await eliminarContacto(id);
            if (eliminado) {
                // Recargar la lista
                cargarContactos();
            }
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Cargando contactos...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Lista de Contactos</h1>
                <Link to="/new-contact" className="btn btn-success">
                    Agregar Contacto
                </Link>
            </div>

            {contactos.length === 0 ? (
                <div className="text-center">
                    <p>No hay contactos disponibles.</p>
                    <Link to="/new-contact" className="btn btn-primary">
                        Crear tu primer contacto
                    </Link>
                </div>
            ) : (
                <div className="row">
                    {contactos.map((contacto) => (
                        <div key={contacto.id} className="col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{contacto.name}</h5>
                                    <p className="card-text">
                                        <strong>Email:</strong> {contacto.email}<br/>
                                        <strong>Teléfono:</strong> {contacto.phone}<br/>
                                        <strong>Dirección:</strong> {contacto.address}
                                    </p>
                                    <div className="btn-group" role="group">
                                        <Link 
                                            to={`/edit-contact/${contacto.id}`} 
                                            className="btn btn-warning btn-sm"
                                        >
                                            Editar
                                        </Link>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleEliminar(contacto.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
