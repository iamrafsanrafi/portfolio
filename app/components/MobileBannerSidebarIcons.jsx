"use client";

import { socialIcons } from "@/constants/data"
import { useMediaQuery } from "react-responsive"

const MobileBannerSidebarIcons = () => {
    const isMobile = useMediaQuery({maxWidth: 639});
    
    return (
        <ul className="text-[#ffffffd9] p-[5px] flex gap-[30px]">
            {socialIcons.map(icon => (
                <li
                    key={icon.id}
                    className="hover:text-[#00cf5d] transition duration-100"
                >
                    <a href={icon.url} target="_blank">
                        {
                            isMobile ? <icon.icon width={16} height={16} /> : <icon.icon width={18} height={18} />
                        }
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MobileBannerSidebarIcons