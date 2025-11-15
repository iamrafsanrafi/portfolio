import { socialIcons } from "@/constants/data"

const BannerSidebar = () => {
    return (
        <div className="banner-sidebar hidden md:flex gap-[64px] items-center">
            {/* ----Sidebar tag---- */}
            <div className="relative inline-block uppercase text-[#ffffffd9] bg-[#1d293a] font-black py-[4px] px-[10px] rounded-[4px] text-lg select-none
  after:content-[''] after:absolute after:bg-[#ffffffd9] after:w-[50px] after:h-[2px] after:top-1/2 after:-translate-y-1/2 after:right-[-50px]">
                <span className="cursor-text">Follow Me</span>
            </div>

            {/* ----Icons---- */}
            <ul className="icons-wrapper text-[#ffffffd9] p-[5px] flex gap-[18px]">
                {socialIcons.map(icon => (
                    <li 
                        key={icon.id}
                        className="icon hover:text-[#00cf5d] transition duration-100"
                    >
                        <a href={icon.url} target="_blank">
                            <icon.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BannerSidebar