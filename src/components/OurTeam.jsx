import { teamMembers } from '../data/data';
function OurTeam() {
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