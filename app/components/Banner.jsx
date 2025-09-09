"use client";

import Link from "next/link"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react";

const Banner = () => {
  const animatedText = "turning ideas into code!";
  const [isWriting, setIsWriting] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      if(isWriting) {
        if(text.length < animatedText.length) {
          setText(animatedText.slice(0, text.length + 1));
        }
        else {
          setIsWriting(false);
        }
      }
      else {
        if(text.length > 0) {
          setText(animatedText.slice(0, text.length - 1));
        }
        else {
          setIsWriting(true);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, isWriting])

  return (
    <section className="h-screen  py-[100px] px-[25px]">
        {/* ----Banner Sidebar---- */}
        <Sidebar value="Follow Me" />

        {/* ----Banner content---- */}
        <div className="pl-[100px] pt-[50px]">
            <p className="text-[22px] text-[#00cf5d] leading-[26px]">Hey, there! I’m —</p>

            <h1 className="text-[78px] font-bold mb-[25px] text-[#ffffffd9] leading-[86px] ">Rafsan Rafi</h1>

            <h4 className="text-[#00cf5d] text-[25px] font-bold leading-[27px] relative after:content-[''] after:absolute after:w-[4px] after:h-[100%] after:bg-[#00cf5d] after:top-0">I love&nbsp;{text}</h4>
            
            <ul className="relative flex gap-[25px] text-[#ffffffd9] text-lg mb-[25px] leading-[26px]">
                <li className="relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#00cf5d] after:top-[55%] after:-translate-y-1/2 after:right-[-14px]">Frontend Developer</li>
                <li>Programmer</li>
            </ul>

            <div className="flex gap-[15px]">
                <Link href="/assets/resume/Resume_of_Rafsan_Rafi.pdf" target="_blank" className="text-lg leading-[26px] text-[#ffffffd9] bg-[#00cf5d] border-2 border-[#00cf5d] py-[15px] px-[25px] rounded-[4px] inline-block">Get Resume</Link>

                <Link href="#about" className="text-lg leading-[26px] text-[#ffffffd9] border-2 border-[#00cf5d] py-[15px] px-[25px] rounded-[4px] inline-block">About Me</Link>
            </div>
        </div>
    </section>
  )
}

export default Banner