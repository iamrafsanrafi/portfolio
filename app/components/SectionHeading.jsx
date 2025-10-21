const SectionHeading = ({value}) => {
    return (
        <div className="flex justify-center mb-[64px]">
            <div className="relative inline-block uppercase text-[#ffffffd9] bg-[#1d293a] font-black py-[4px] px-[10px] rounded-[4px] text-lg select-none after:content-[''] after:absolute after:bg-white after:w-[100px] after:h-[2px] after:top-1/2 after:-translate-y-1/2 after:right-[-100px] before:content-[''] before:absolute before:bg-white before:w-[100px] before:h-[2px] before:top-1/2 before:-translate-y-1/2 before:left-[-100px]">
                <h4 className="cursor-text">{value}</h4>
            </div>
        </div>
    )
}

export default SectionHeading