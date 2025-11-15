import MobileBannerSidebarIcons from "./MobileBannerSidebarIcons"

const MobileBannerSidebar = () => {
    return (
        <div className="md:hidden flex flex-col gap-y-[15px] items-center">
            {/* ---- Text ---- */}
            <div className="relative inline-block uppercase text-[#ffffffd9] bg-[#1d293a] font-black py-[4px] px-[10px] rounded-[4px] text-base leading-[22px] sm:text-lg sm:leading-[26px] select-none
  after:content-[''] after:absolute after:bg-[#ffffffd9] after:w-[200px] sm:after:w-[280px] after:h-[2px] after:top-1/2 after:-translate-y-1/2 after:right-1/2 after:translate-x-1/2 after:z-[-1]">
                <span>Follow Me</span>
            </div>

            {/* ---- Icons ---- */}
            <MobileBannerSidebarIcons />
        </div>
    )
}

export default MobileBannerSidebar