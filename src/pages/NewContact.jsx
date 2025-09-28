import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate } from "react-router-dom";

export const NewContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const apiUrlContacts = "https://playground.4geeks.com/contact/agendas/Ramses/contacts";

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [numero, setNumero] = useState("");

    const crearContacto = async (e) => {
        e.preventDefault(); // Prevenir el envío del formulario
        try {
            const resp = await fetch(apiUrlContacts, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nombre,
                    email: correo,
                    phone: numero,
                    address: direccion
                }),
            });
            
            if (resp.ok) {
                const newContact = await resp.json();
                console.log("Contacto creado:", newContact);
                // Guardar en el estado global
                dispatch({ type: "ADD_CONTACT", payload: newContact });
                // Limpiar formulario
                setNombre("");
                setCorreo("");
                setNumero("");
                setDireccion("");
                // Navegar de vuelta a la lista
                navigate("/");
            } else {
                console.error("Error al crear contacto");
            }
        } catch (error) {
            console.error("Error de red:", error.message);
        }
    };

    return (
        <div>
            <div className="text-center mt-5">
                <h1>Add a new contact</h1>
            </div>
            <div className="container col-5">
                <form onSubmit={crearContacto}>
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
                    <button type="submit" className="btn btn-primary col-12">Save</button>
                    <div className="mt-3 text-center">
                        <Link to={"/"}>
                            <p>or get back to contacts</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

// ===== FUNCIONES PARA GET, PUT, DELETE =====

// 1. GET - Obtener todos los contactos
export const obtenerContactos = async () => {
    try {
        const resp = await fetch("https://playground.4geeks.com/contact/agendas/Ramses/contacts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        if (resp.ok) {
            const data = await resp.json();
            console.log("Contactos obtenidos:", data);
            return data.contacts; // La API devuelve { contacts: [...] }
        } else {
            console.error("Error al obtener contactos");
            return [];
        }
    } catch (error) {
        console.error("Error de red:", error.message);
        return [];
    }
};

// 2. GET - Obtener un contacto específico
export const obtenerContactoPorId = async (id) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Ramses/contacts/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        if (resp.ok) {
            const contacto = await resp.json();
            console.log("Contacto obtenido:", contacto);
            return contacto;
        } else {
            console.error("Error al obtener el contacto");
            return null;
        }
    } catch (error) {
        console.error("Error de red:", error.message);
        return null;
    }
};

// 3. PUT - Actualizar contacto
export const actualizarContacto = async (id, datosContacto) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Ramses/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: datosContacto.name,
                email: datosContacto.email,
                phone: datosContacto.phone,
                address: datosContacto.address
            })
        });
        
        if (resp.ok) {
            const contactoActualizado = await resp.json();
            console.log("Contacto actualizado:", contactoActualizado);
            return contactoActualizado;
        } else {
            console.error("Error al actualizar contacto");
            return null;
        }
    } catch (error) {
        console.error("Error de red:", error.message);
        return null;
    }
};

// 4. DELETE - Eliminar contacto
export const eliminarContacto = async (id) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Ramses/contacts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        
        if (resp.ok) {
            console.log("Contacto eliminado exitosamente");
            return true;
        } else {
            console.error("Error al eliminar contacto");
            return false;
        }
    } catch (error) {
        console.error("Error de red:", error.message);
        return false;
    }
};