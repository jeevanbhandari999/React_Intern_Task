import { Link } from "react-router-dom";
function AboutUs() {
    return (
        <section id="about-us" class="py-16 mb-[44px] px-4 max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">About Us</h2>
            <p class="text-gray-700 mb-6">
                Welcome to ABC – where passion, dedication, and innovation come together.
                Founded by industry veterans, we set out to create a company that values
                quality, trust, and genuine connections. Today, we’re proud to deliver
                exceptional products and services that resonate with our customers.
            </p>

            <div class="grid md:grid-cols-2 gap-8 text-left">
                <div>
                    <h3 class="text-xl font-semibold mb-2">Our Mission</h3>
                    <p class="text-gray-600">
                        To provide reliable, best-in-class solutions that positively impact
                        lives—and to do it with integrity, transparency, and unwavering care.
                    </p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-2">Our Vision</h3>
                    <p class="text-gray-600">
                        To become a trusted leader in our field, driven by innovation,
                        excellence, and meaningful relationships with our community.
                    </p>
                </div>
            </div>

            <p class="mt-8 text-gray-700">
                Curious about the minds behind ABC?
                <Link to="/team" class="text-blue-600 hover:underline font-medium">
                    Meet our team &rarr;
                </Link>
            </p>
        </section>

    )
}

export default AboutUs