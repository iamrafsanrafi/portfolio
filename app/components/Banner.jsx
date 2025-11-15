import Link from "next/link"
import BannerSidebar from "./BannerSidebar"
import BannerAnimatedText from "./BannerAnimatedText"
import Container from "./Container"
import MobileBannerSidebar from "./MobileBannerSidebar"

const Banner = () => {
  return (
    <section className="h-screen flex items-center">
      <Container>
        {/* ---- Banner content ---- */}
        <div className="pb-[50px] md:py-20 md:px-[15px] lg:py-[100px] lg:px-[25px] w-full">
          <div className="py-10 px-[15px] sm:py-15 md:py-0 md:px-0 md:pl-[100px] md:pt-[50px] flex flex-col items-center justify-center md:items-start md:justify-start w-full lg:w-auto">
            <p className="text-lg text-[#00cf5d] leading-[26px] sm:text-xl md:text-[22px]">Hey, there! I’m —</p>

            <h1 className="text-[36px] text-white font-bold leading-10 sm:text-[52px] sm:leading-[57px] md:text-[62px] md:leading-[68px] lg:text-[78px] lg:leading-[86px] mb-[25px]">Rafsan Rafi</h1>

            {/* ----Animated text---- */}
            <BannerAnimatedText />

            <ul className="relative flex gap-[25px] text-sm text-[#ffffffd9] leading-[26px] sm:text-base md:text-lg mb-[25px]">
              <li className="relative after:content-[''] after:absolute after:w-[2px] after:h-[15.5px] sm:after:h-[17.5px] lg:after:h-5 after:bg-[#00cf5d] after:top-[50%] after:-translate-y-1/2 after:right-[-14px]">Frontend Engineer</li>

              <li>Programmer</li>
            </ul>

            <div className="flex gap-[15px]">
              <Link
                href="/assets/resume/Resume_of_Rafsan_Rafi.pdf"
                target="_blank"
                className="text-base text-[#ffffffd9] leading-[22px] sm:text-lg sm:leading-[26px] bg-[#00cf5d] border-2 border-[#00cf5d] py-[10px] px-5 md:py-[15px] md:px-[25px] rounded-[4px] inline-block"
              >
                Get Resume
              </Link>

              <Link
                href="#about"
                className="text-base text-[#ffffffd9] leading-[22px] sm:text-lg sm:leading-[26px] border-2 border-[#00cf5d] py-[10px] px-5 md:py-[15px] md:px-[25px] rounded-[4px] inline-block hover:bg-[#00cf5d]/10"
              >
                About Me
              </Link>
            </div>
          </div>

          {/* ---- Banner Sidebar ---- */}
          <div className="pl-[100px]">
            <BannerSidebar />
          </div>

          <div className="pb-[25px] sm:pb-[50px] md:pb-0">
            <MobileBannerSidebar />
          </div>
        </div>


      </Container>
    </section>
  )
}

export default Banner