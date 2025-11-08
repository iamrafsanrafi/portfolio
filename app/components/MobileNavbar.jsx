"use client"
import Link from "next/link"
import Container from "./Container"
import { navOptions } from "@/constants/data";
import MenuIcon from "../icons/MenuIcon";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

// Nav option icons
import HomeIcon from "../icons/HomeIcon";
import AboutIcon from "../icons/AboutIcon";
import WorkIcon from "../icons/WorkIcon";
import BlogIcon from "../icons/BlogIcon";
import ContactIcon from "../icons/ContactIcon";
import ResumeIcon from "../icons/ResumeIcon";

const MobileNavbar = () => {
    // States
    const [showOptions, setShowOptions] = useState(false);

    // Extra hooks
    const navOptionsRef = useRef(null);

    const handleNavClick = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({top: sectionTop, behavior: "smooth"});
    }

    // useEffect to handle close nav options when clicking outside
    useEffect(() => {
        const handleCloseNavOptions = (e) => {
            if (navOptionsRef.current && !navOptionsRef.current.contains(e.target)) {
                setShowOptions(false);
            }
        }

        document.addEventListener("mousedown", handleCloseNavOptions);

        return () => document.removeEventListener("mousedown", handleCloseNavOptions);
    }, [])

    return (
        <div
            id="mobile-navbar"
            className="w-full bg-[#1d293a] fixed bottom-0 left-0 z-[100] md:hidden"
        >
            <Container>
                <nav className="px-[25px] py-[10px] relative">
                    {/* ---- Logo & Menu Button ---- */}
                    <div className="flex items-center justify-between">
                        <Link href="/" className="active:scale-95 transition-all duration-100">
                            <img
                                className="w-10 h-10 select-none"
                                src="/assets/images/logo.png"
                                alt="Logo of Rafsan Rafi | iamrafsanrafi"
                            />
                        </Link>

                        <button
                            onClick={() => setShowOptions(true)}
                            className="bg-[#00cf5d] p-2.5 rounded-[4px] text-[#111a28] active:scale-95 transition-all duration-100"
                        >
                            <MenuIcon />
                        </button>
                    </div>

                    {/* ---- Nav Options ---- */}
                    <div
                        ref={navOptionsRef}
                        className={`w-full absolute bottom-0 left-0 bg-[#1d293a] transform transition-all ease-linear duration-250 ${showOptions ? "translate-y-0" : "translate-y-full"}`}
                    >
                        <ul className="uppercase grid grid-cols-3 justify-items-center gap-y-6 text-[13px] text-[#ffffffd9] leading-[22px] border-b border-[#ffffff26] py-4">
                            <li
                                className="flex flex-col items-center gap-y-1 cursor-pointer transition-all duration-100 active:text-[#00cf5d]"
                                onClick={() => handleNavClick("home")}
                            >
                                <HomeIcon />
                                <span>Home</span>
                            </li>

                            {navOptions.map((option) => (
                                <li
                                    key={option.id}
                                    className="flex flex-col items-center gap-y-1 cursor-pointer transition-all duration-100 active:text-[#00cf5d]"
                                    onClick={() => handleNavClick(option.id)}
                                >
                                    {option.name === "About" ? (
                                        <AboutIcon width={26} height={26} />
                                    ) : option.name === "Work" ? (
                                        <WorkIcon width={25} height={25} />
                                    ) : option.name === "Blog" ? (
                                        <BlogIcon width={24} height={24} />
                                    ) : option.name === "Contact" ? (
                                        <ContactIcon width={24} height={24} />
                                    ) : (
                                        <></>
                                    )}
                                    <span>{option.name}</span>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="/assets/resume/Resume_of_Rafsan_Rafi.pdf"
                                    target="_blank"
                                    className="flex flex-col items-center gap-y-1 transition-all duration-100 active:text-[#00cf5d]"
                                >
                                    <ResumeIcon width={24} height={24} />
                                    <span>Resume</span>
                                </a>
                            </li>
                        </ul>

                        {/* ----Close Button---- */}
                        <div className="flex justify-end px-[25px] py-[10px]">
                            <button
                                onClick={() => setShowOptions(false)}
                                className="bg-[#00cf5d] p-2 flex items-center justify-center rounded-[4px] text-[#111a28] active:scale-95 transition-all duration-100"
                            >
                                <IoClose size={20} className="text-[#111a28]" />
                            </button>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default MobileNavbar