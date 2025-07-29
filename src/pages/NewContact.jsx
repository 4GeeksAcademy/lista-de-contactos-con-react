import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
export const NewContact = () => {

    const { store, dispatch } = useGlobalReducer()

    const apiUrlContacts = "https://playground.4geeks.com/contact/agendas/Ramses/contacts"

    const [nombre, setNombre] = useState ("")
    const [correo, setCorreo] = useState ("")
    const [direccion, setDireccion] = useState ("")
    const [numero, setNumero] = useState ("")

    const crearContacto = async () =>{
        try{
            const resp = await fetch(apiUrlContacts,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name:nombre,
                    email:correo,
                    phone:numero,
                    address:direccion

                }),
            })
            if (resp.ok){
                console.log("creado")
            }
            else{
                console.error("error")
            }
        }catch(error){
            console.error("error de red ", error.message)
        }
    }


    return (
        <div>
            <div className="text-center mt-5 ">
                <h1>Add a new contact</h1>
            </div>
            <div className="container col-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" value={nombre} onChange={(e)=>setNombre (e.target.value)}>Full Name</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" value={correo} onChange={(e)=>setCorreo (e.target.value)}>Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" value={numero} onChange={(e)=>setNumero (e.target.value)}>Phone</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" value={direccion} onChange={(e)=>setDireccion (e.target.value)}>Address</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Enter address"/>
                    </div>
                    <button type="submit" className="btn btn-primary col-12" onClick={NewContact}>Save</button>
                    <div>
                        <i className="fa fa-heart text-danger" /> {" "}
                        <Link to={"/"}>
                        <p> or get back to contacts</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};