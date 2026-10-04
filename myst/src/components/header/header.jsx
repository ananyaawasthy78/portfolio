import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-pink-200 border-purple-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/ananya.png"
                            className="mr-3 h-12 scale-150"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-purple-800 hover:bg-rose-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-purple-800 bg-pink-500 hover:bg-rose-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-pink-700":"text-purple-800"} border-b border-gray-100 hover:bg-rose-400  rounded-lg px-4 lg:px-5  lg:py-2.5 lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/About'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-pink-700":"text-purple-800"} border-b border-gray-100 hover:bg-rose-400  rounded-lg px-4 lg:px-5  lg:py-2.5 lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-pink-700":"text-purple-800"} border-b border-gray-100 hover:bg-rose-400  rounded-lg px-4 lg:px-5  lg:py-2.5 lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    contact us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-pink-700":"text-purple-800"} border-b border-gray-100 hover:bg-rose-400  rounded-lg px-4 lg:px-5  lg:py-2.5 lg:border-0 hover:text-purple-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

