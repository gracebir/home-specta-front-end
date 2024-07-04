/** @format */

import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { navItems } from "../../utils/constants";
import profile from "../../assets/profile.png";
import circle from "../../assets/squircle.svg";
import { CiBellOn } from "react-icons/ci";

function Header({ isHome = false }: { isHome: boolean }) {
    return (
        <header className='w-full flex justify-between py-8 items-center'>
            <Link className='flex gap-5' to={"/"}>
                <img className='h-8 w-8' src={logo} alt='logo' />
                <h1 className='text-3xl font-[900] uppercase tracking-[12px] leading-8'>
                    Spectra
                </h1>
            </Link>
            <div className='flex items-center  space-x-32'>
                <nav className='space-x-6 hidden lg:block'>
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
                {!isHome && (
                    <div className='px-4 flex justify-end'>
                        <div className='flex items-center gap-4'>
                            <a href='#'>
                                <img src={circle} alt='circle' />
                            </a>
                            <a className='relative' href='#'>
                                <div className='w-1 h-1 absolute right-2 top-2 bg-active'></div>
                                <CiBellOn size={32} />
                            </a>
                            <a href='#'>
                                <img src={profile} alt='profile' />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
