import Link from "next/link"
import GitHubIcon from "../icons/GithubIcon"
import CodePenIcon from "../icons/CodepenIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import MediumIcon from "../icons/MediumIcon"
import FacebookIcon from "../icons/FacebookIcon"

const Sidebar = ({ value }) => {
    return (
        <aside className="flex gap-[64px] items-center -rotate-90 absolute top-[373px] left-[-78px]">
            {/* ----Sidebar tag---- */}
            <div className="relative inline-block uppercase text-[#ffffffd9] bg-[#1d293a] font-black py-[4px] px-[10px] rounded-[4px] text-lg select-none
  after:content-[''] after:absolute after:bg-white after:w-[50px] after:h-[2px] after:top-1/2 after:-translate-y-1/2 after:right-[-50px]">
                <span className="cursor-text">{value}</span>
            </div>

            {/* ----Icons---- */}
            <ul className="text-[#ffffffd9] p-[5px] flex flex-row-reverse gap-[18px]">
                <li className="rotate-90">
                    <Link href="https://github.com/iamrafsanrafi" target="_blank">
                        <GitHubIcon />
                    </Link>
                </li>
                <li className="rotate-90">
                    <Link href="#" target="_blank">
                        <CodePenIcon />
                    </Link>
                </li>
                <li className="rotate-90">
                    <Link href="#" target="_blank">
                        <LinkedInIcon />
                    </Link>
                </li>
                <li className="rotate-90">
                    <Link href="#" target="_blank">
                        <MediumIcon />
                    </Link>
                </li>
                <li className="rotate-90">
                    <Link href="https://www.facebook.com/iamrafsanrafi" target="_blank">
                        <FacebookIcon />
                    </Link>
                </li>
            </ul>


        </aside>
    )
}

export default Sidebar