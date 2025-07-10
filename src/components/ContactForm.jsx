import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };
    return (
        <section id="contact" className="py-[43px]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="max-w-lg mx-auto">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-3 border rounded"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full p-3 border rounded h-32"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm