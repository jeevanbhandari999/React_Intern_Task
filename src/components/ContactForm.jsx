import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        try {
            const response = await fetch('https://api.aakashlabs.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            const result = await response.json();
            if (result.success) {
                setStatus({ type: 'success', message: 'From Submitted Successfullt!' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: result.error || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        }
    };

    return (
        <section id="contact" className="py-[43px]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="max-w-lg mx-auto">
                    <form className="space-y-4" onSubmit={handleSubmit} method='POST'>
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
                            className="w-full cursor-pointer bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && (
                        <div
                            className={`mt-4 p-3 rounded text-center ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}
                        >
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactForm