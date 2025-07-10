import ProfilePic from '../assets/images/profile.webp';

function OurTeam() {
    const teamMembers = [
        {
            name: "Jeevan Bhandari",
            role: "Co-Founder",
            bio: "A founding leader, Jeevan shapes ABC’s vision and strategy, shares key decision-making, and helps build operations and fundraise—often bringing complementary business, finance, or marketing skills essential for startup success",
            image: ProfilePic
        },
        {
            name: "Bijaya Tamang",
            role: "CEO",
            bio: "As CEO, Bijaya oversees the company’s overall operations, sets long-term goals, leads the executive team, makes strategic decisions, and represents ABC to partners, investors, and the public",
            image: ProfilePic
        },
        {
            name: "Sharad Kalathoki",
            role: "CTO",
            bio: "Sharad leads ABC’s technology vision—managing tech teams, defining infrastructure and architecture, ensuring alignment between tech strategy and business goals, and driving innovation in products and services ",
            image: ProfilePic
        },
        {
            name: "Suman Katuwal",
            role: "Designer",
            bio: "Suman is responsible for ABC’s visual identity— crafting UI/UX, marketing materials, and brand design elements to ensure a cohesive, user-friendly look and feel. Often akin to a Chief Design Officer .",
            image: ProfilePic
        },
    ];
    return (
        <section id="team" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid place-items-center gap-4
           grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-red-300 w-[20rem] p-4 rounded-md">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl mt-4 text-center font-semibold">{member.name}</h3>
                            <p className="text-center text-gray-600 font-bold">{member.role}</p>
                            <p className="text-sm mt-2">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam