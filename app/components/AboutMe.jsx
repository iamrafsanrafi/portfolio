import Container from "./Container"
import SectionHeading from "./SectionHeading"

const skills = [
    ["HTML5", "CSS3", "JavaScript (ES6+)"],
    ["Tailwind CSS", "Bootstrap", "React"],
    ["TypeScript", "Redux", "Next.js"]
];

const AboutMe = () => {
    return (
        <Container>
            <section id="about" className="pt-[100px] pb-[150px] px-[25px] relative">
                {/* ---- Section Heading ---- */}
                <SectionHeading value="About Me" />

                {/* ---- Description & Image Wrapper ---- */}
                <div className="flex items-start justify-between">
                    <div className="max-w-[550px]">
                        {/* ---- Description ---- */}
                        <p className="text-lg leading-[36px] text-[#ffffffd9] text-justify mb-4">Hello again! As a Frontend Engineer, I love turning ideas into code. When my code works perfectly — I feel on top of the world, and I truly believe I was born to code.</p>

                        <p className="text-lg leading-[36px] text-[#ffffffd9] text-justify mb-4">I've completed a 4-year Diploma in Engineering in Computer Technology due to my passion. Always ready to take on new challenges and available for any opportunity that aligns with my interests.</p>

                        {/* ---- Skills ---- */}
                        <p className="text-lg leading-[36px] text-[#ffffffd9] mb-1">Here are a few technologies I've been working with recently:</p>

                        <ul className="flex justify-between">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col"
                                >
                                    {skill.map((s, i) => (
                                        <li
                                            key={i}
                                            className="text-base leading-[36px] text-[#ffffffd9] pl-5 relative before:absolute before:content-['▹'] before:top-[49.7%] before:left-0 before:-translate-y-1/2 before:text-base before:text-[#00cf5d]"
                                        >
                                            {s}
                                        </li>
                                    ))}
                                </div>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <a href="https://github.com/iamrafsanrafi" target="_blank">
                            <img className="w-[320px] rounded-[3px] grayscale transition-all duration-1000 hover:grayscale-0 absolute top-0 right-5" src="/assets/images/Rafsan Rafi.jpg" alt="Image of — Rafsan Rafi | iamrafsanrafi | hm.rafsanrafi" loading="lazy" />
                        </a>

                        <div className="w-[320px] h-[320px] rounded-[3px] border-2 border-[#00cf5d] mt-5"></div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default AboutMe