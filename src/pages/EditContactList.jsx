import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const EditContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [numero, setNumero] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarContacto();
    }, [id]);

    const cargarContacto = async () => {
        const contacto = await obtenerContactoPorId(id);
        if (contacto) {
            setNombre(contacto.name);
            setCorreo(contacto.email);
            setNumero(contacto.phone);
            setDireccion(contacto.address);
        }
        setLoading(false);
    };

    const handleActualizar = async (e) => {
        e.preventDefault();
        const datosActualizados = {
            name: nombre,
            email: correo,
            phone: numero,
            address: direccion
        };

        const actualizado = await actualizarContacto(id, datosActualizados);
        if (actualizado) {
            navigate("/");
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Cargando contacto...</div>;
    }

    return (
        <div>
            <div className="text-center mt-5">
                <h1>Editar Contacto</h1>
            </div>
            <div className="container col-5">
                <form onSubmit={handleActualizar}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            className="form-control" 
                            placeholder="Full Name"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter email"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input 
                            type="text" 
                            id="phone" 
                            className="form-control" 
                            placeholder="Enter phone"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            className="form-control" 
                            placeholder="Enter address"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success col-12">
                        Actualizar Contacto
                    </button>
                    <div className="mt-3 text-center">
                        <Link to={"/"}>
                            <p>o volver a contactos</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};