import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container mt-5">
			<div className="container col-10 d-flex justify-content-end ">
				<Link to={"/new"}>
					<button type="button" className="btn btn-success">Add new contact
					</button>
				</Link>
			</div>
			<div className="container col-10 bg-white shadow-md rounded p-4 ">
				<ul className="list-group space-y-4">
					{store.contacts && store.contacts.length === 0 ? (
						<li className="list-group-item text-center">No hay contactos guardados.</li>
					) : (
						store.contacts.map((contacto) => (
							<li className="list-group-item" key={contacto.id || contacto.email}>
								<div className="d-flex card-header">
									<div className="mt-15 rounded-full w-20px h-20px object-cover">
										<img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeKsrGmVb-CZ3HdXCabi7KJA_HQcwUTkLxM2v7fBp8yDt1qfR" alt="avatar" width={20} height={20} />
									</div>
									<div className="ms-2 me-auto">
										<div className="font-bold card-header ">{contacto.name}</div>
										<div className="bg-grey card-header" >
											<div className="font-serif "><i className="fa-solid fa-location-dot" ></i> {contacto.address}</div>
											<div className="font-serif "><i className="fa-solid fa-phone-flip"></i> {contacto.phone}</div>
											<div className="font-serif "><i className="fa-solid fa-envelope "></i> {contacto.email}</div>
										</div>
									</div>
									<div className=" d-flex card-header col-3 mb-3 me-4 mt-1 ">
										<Link to={"/edit/" + (contacto.id || "") }>
											<p><i className="fa-solid fa-pencil align-end"></i></p>
										</Link>
										<Link to={"/delete/" + (contacto.id || "") }>
											<i className="fa-solid fa-trash "></i>
										</Link>
										
									</div>
								</div>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};
