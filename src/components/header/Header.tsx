import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/app/store";
import { removeToken } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { firstName } = useSelector((state: RootState) => state.auth);
	const logOut = () => {
		navigate("/");
		dispatch(removeToken());
	};
	return (
		<header className="flex h-12 fixed w-full items-center justify-around z-10  px-4  ">
			{firstName === "" ? (
				<span>Debes iniciar sesion</span>
			) : (
				<>
					<Link to="/tasks">Tareas</Link>
					<div className=" flex justify-center w-[30%] items-center gap-6">
						<div className="flex items-center gap-1 text-xl text-verde-500">
							<MdOutlineAccountCircle className="text-2xl" />
							<p>{firstName}</p>
						</div>
						<BiLogOut
							className="text-2xl text-verde-500 hover:text-verde-300 transition duration-300 hover:cursor-pointer"
							onClick={logOut}
						/>
					</div>
				</>
			)}
		</header>
	);
}

export default Header;
