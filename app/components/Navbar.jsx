import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-[27px]">
            {/* ----Website logo---- */}
            <Link href="/">
                <img className="w-[47.845px] h-[47.845px]" src="/assets/images/logo.png" alt="Logo of Rafsan Rafi | iamrafsanrafi" />
            </Link>

            {/* ----Nav options---- */}
            <ul className="uppercase flex text-base gap-x-[32px] text-[#ffffffd9] leading-[26px]">
                <li>
                    <Link href="#">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Skill
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/assets/resume/Resume_of_Rafsan_Rafi.pdf" target="_blank" className="border-2 border-[#00cf5d] px-[15px] py-[8.5px] rounded-[4px]">
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar