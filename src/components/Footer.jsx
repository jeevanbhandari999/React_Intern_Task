import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-gray-800 right-0 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-2xl font-bold">Follow Us</h3>
                    <div className="flex gap-4">
                        <a className="text-2xl hover:scale-150 duration-300 transition-all" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a className="text-2xl hover:scale-150 duration-300 transition-all" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a className="text-2xl hover:scale-150 duration-300 transition-all" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                    <p>© 2025 MyBrand. React Internship Task.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer