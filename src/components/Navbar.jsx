import { Link, NavLink } from "react-router-dom"
function Navbar() {
    return (
        <header className="sticky top-0 bg-gray-800 text-stone-200 flex justify-between shadow-2xl py-4 px-8">
            <NavLink to='/' className="text-3xl cursor-pointer">Logo</NavLink>
            <nav className="flex gap-4">
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? "py-2 px-4 rounded-full text-xl bg-blue-600 hover:bg-blue-800 hover:text-stone-200 transition-all" : "py-2 px-4 rounded-full text-xl hover:bg-blue-800 hover:text-stone-200 transition-all"
                }>Home</NavLink>
                <NavLink to='/about' className={({ isActive }) =>
                    isActive ? "py-2 px-4 rounded-full text-xl bg-blue-600 hover:bg-blue-800 hover:text-stone-200 transition-all" : "py-2 px-4 rounded-full text-xl hover:bg-blue-800 hover:text-stone-200 transition-all"
                }>About Us</NavLink>
                <NavLink to='/team' className={({ isActive }) =>
                    isActive ? "py-2 px-4 rounded-full text-xl bg-blue-600 hover:bg-blue-800 hover:text-stone-200 transition-all" : "py-2 px-4 rounded-full text-xl hover:bg-blue-800 hover:text-stone-200 transition-all"
                }>Our Team</NavLink>
                <NavLink to='/contact' className={({ isActive }) =>
                    isActive ? "py-2 px-4 rounded-full text-xl bg-blue-600 hover:bg-blue-800 hover:text-stone-200 transition-all" : "py-2 px-4 rounded-full text-xl hover:bg-blue-800 hover:text-stone-200 transition-all"
                }>Contact Us</NavLink>
                <NavLink to='/apisearch' className={({ isActive }) =>
                    isActive ? "py-2 px-4 rounded-full text-xl bg-blue-600 hover:bg-blue-800 hover:text-stone-200 transition-all" : "py-2 px-4 rounded-full text-xl hover:bg-blue-800 hover:text-stone-200 transition-all"
                }>From API</NavLink>
            </nav>

        </header>
    )
}

export default Navbar