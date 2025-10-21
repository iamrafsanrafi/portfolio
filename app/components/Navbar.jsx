"use client";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Container from "./Container";

const Navbar = () => {
    // States
    const [isNavSticky, setIsNavSticky] = useState(false);
    const [hideStickyNav, setHideStickyNav] = useState(false);

    // Extra hooks
    const prevScrollValue = useRef(null);

    const handleNavClick = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const navbar = document.getElementById("navbar");
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const navbarHeight = navbar.offsetHeight;

        const position = sectionTop - navbarHeight;
        const scrollingDown = position > window.scrollY;

        if(scrollingDown) {
            window.scrollTo({top: position + 100, behavior: "smooth"});
        }
        else {
            window.scrollTo({top: position, behavior: "smooth"});
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const previousScroll = prevScrollValue.current;

            // Determine if scrolling down or up
            const scrollingDown = currentScroll > previousScroll;
            const scrollingUp = currentScroll < previousScroll;

            // If user scrolled a small amount then make the navbar sticky
            if (currentScroll > 0) {
                setIsNavSticky(true);

                // Hide or show the navbar based on scrolling down or up
                if (scrollingDown) {
                    setHideStickyNav(true);
                }
                else if (scrollingUp) {
                    setHideStickyNav(false);
                }
            }
            else {
                setIsNavSticky(false);
                setHideStickyNav(false);
            }

            // Update previous scroll value
            prevScrollValue.current = currentScroll;
        }

        if(window.scrollY > 0) {
            setIsNavSticky(true);
        }

        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div id="navbar" className={`transition-all duration-400 ease fixed top-0 left-0 z-100 w-full ${(isNavSticky && !hideStickyNav) ? "bg-[#1d293a] mt-0" : "mt-[5px]"} ${hideStickyNav && "-translate-y-[100%]"} `}>
            <Container>
                <nav className={`flex items-center justify-between px-[25px] py-5 `}>
                    {/* ----Website logo---- */}
                    <Link href="/">
                        <img className="w-[47.845px] h-[47.845px]" src="/assets/images/logo.png" alt="Logo of Rafsan Rafi | iamrafsanrafi" />
                    </Link>

                    {/* ----Nav options---- */}
                    <ul className="uppercase flex text-base gap-x-[32px] text-[#ffffffd9] leading-[26px]">
                        <li className="cursor-pointer hover:text-[#00cf5d] transition duration-100" onClick={() => handleNavClick("about")}>
                            About
                        </li>
                        <li className="cursor-pointer hover:text-[#00cf5d] transition duration-100" onClick={() => handleNavClick("portfolio")}>
                            Portfolio
                        </li>
                        <li className="cursor-pointer hover:text-[#00cf5d] transition duration-100" onClick={() => handleNavClick("blog")}>
                            Blog
                        </li>
                        <li className="cursor-pointer hover:text-[#00cf5d] transition duration-100" onClick={() => handleNavClick("contact")}>
                            Contact
                        </li>
                        <li>
                            <a href="/assets/resume/Resume_of_Rafsan_Rafi.pdf" target="_blank" className="border-2 border-[#00cf5d] px-[15px] py-[8.5px] rounded-[4px] hover:bg-[#00cf5d]/10">
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    )
}

export default Navbar