/** @format */

import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { navItems } from "../../utils/constants";

function Header() {
    return (
        <header className='w-full flex justify-between py-8 items-center'>
            <Link className='flex gap-5' to={"/"}>
                <img className='h-8 w-8' src={logo} alt='logo' />
                <h1 className='text-3xl font-[900] uppercase tracking-[12px] leading-8'>
                    Spectra
                </h1>
            </Link>
            <nav className='space-x-6'>
                <Link
                    className='pb-4 text-2xl font-semibold duration-300 border-primary border-b-4 hover:text-active hover:border-active'
                    to={""}
                >
                    Movies
                </Link>
                {navItems.map((item) => (
                    <NavLink
                        className={({ isActive }) =>
                            `pb-4 text-2xl font-semibold duration-300 border-primary border-b-4 hover:text-active hover:border-active ${
                                isActive && `text-active border-active`
                            }`
                        }
                        // className=''
                        key={item.id}
                        to={item.href}
                    >
                        {item.text}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;
