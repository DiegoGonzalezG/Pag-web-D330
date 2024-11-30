import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase   text-[#fff]  transition duration-300 ease-linear hover:text-[rgb(255,161,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[#fff] transition duration-300 ease-linear hover:text-[rgb(255,161,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <a href="/category/pantalones">Alimentos</a>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[#fff] transition duration-300 ease-linear hover:text-[rgb(255,161,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about">Información</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[#fff] transition duration-300 ease-linear hover:text-[rgb(255,161,21)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact">Contactanos</Link>
                </li>
            </ul>
        </nav>
    );
}