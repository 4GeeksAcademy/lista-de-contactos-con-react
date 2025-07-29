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
					<li className="list-group-item ">
						<div className="d-flex card-header">
							<div className="mt-15 rounded-full w-20px h-20px object-cover">
								<img className=" " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeKsrGmVb-CZ3HdXCabi7KJA_HQcwUTkLxM2v7fBp8yDt1qfR" alt="...width=20 height=20"></img>
							</div>
							<div className="ms-2 me-auto">
								<div className="font-bold card-header ">Howard Phillips Lovecraft</div>
								<div className="bg-grey card-header" >
									<div className="font-serif "><i className="fa-solid fa-location-dot" ></i>Providence, Rhode Island , EEUU</div>
									<div className="font-serif "><i className="fa-solid fa-phone-flip"></i>(+1) 288-4149</div>
									<div className="font-serif "><i className="fa-solid fa-envelope "></i>H.P_Lovecraft@example.com </div>
								</div>
							</div>
							<div className=" d-flex card-header col-3 mb-3 me-4 mt-1 ">
								<i className="fa-solid fa-pencil align-end"></i>
								<i className="fa-solid fa-trash " ></i>
							</div>
						</div>
					</li>
					<li className="list-group-item ">
						<div className="d-flex card-header">
							<div className="mt-15 rounded-full w-16 h-16 object-cover">
								<img
									className=""
									src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0UcvlCqhTdSMjnxtnwwBdC7HR6Lca55LiyKL-kOKNjNSd4HKZ"
									alt="..."
								/>
							</div>
							<div className="ms-2 me-auto">
								<div className="font-bold card-header ">Edgar Allan Poe</div>
								<div className="bg-grey card-header" >
									<div className="font-serif "><i className="fa-solid fa-location-dot" ></i>Boston , EEUU</div>
									<div className="font-serif "><i className="fa-solid fa-phone-flip"></i>    (+1) 288-4149</div>
									<div className="font-serif "><i className="fa-solid fa-envelope "></i>EdgarPoe_12@gmail.com </div>
								</div>
							</div>
							<div className=" d-flex card-header col-3 mb-3 me-4 mt-1 ">
								<i className="fa-solid fa-pencil aling-end ; ">   </i>
								<i className="fa-solid fa-trash " ></i>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};
