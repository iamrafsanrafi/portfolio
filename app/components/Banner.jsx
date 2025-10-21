import Link from "next/link"
import BannerSidebar from "./BannerSidebar"
import BannerAnimatedText from "./BannerAnimatedText"
import Container from "./Container"


const Banner = () => {
  return (
    <Container>
      <section className="h-screen py-[100px] px-[25px] flex gap-x-[50px]">
        {/* ----Banner Sidebar---- */}
        <BannerSidebar value="Follow Me" />

        {/* ----Banner content---- */}
        <div className="pl-[100px] pt-[50px] absolute top-1/2 -translate-y-1/2">
          <p className="text-[22px] text-[#00cf5d] leading-[26px]">Hey, there! I’m —</p>

          <h1 className="text-[78px] font-bold mb-[25px] text-[#ffffffd9] leading-[86px] ">Rafsan Rafi</h1>

          {/* ----Animated text---- */}
          <BannerAnimatedText />

          <ul className="relative flex gap-[25px] text-[#ffffffd9] text-lg mb-[25px] leading-[26px]">
            <li className="relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#00cf5d] after:top-[55%] after:-translate-y-1/2 after:right-[-14px]">Frontend Engineer</li>
            <li>Programmer</li>
          </ul>

          <div className="flex gap-[15px]">
            <Link href="/assets/resume/Resume_of_Rafsan_Rafi.pdf" target="_blank" className="text-lg leading-[26px] text-[#ffffffd9] bg-[#00cf5d] border-2 border-[#00cf5d] py-[15px] px-[25px] rounded-[4px] inline-block">Get Resume</Link>

            <Link href="#about" className="text-lg leading-[26px] text-[#ffffffd9] border-2 border-[#00cf5d] py-[15px] px-[25px] rounded-[4px] inline-block hover:bg-[#00cf5d]/10">About Me</Link>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Banner