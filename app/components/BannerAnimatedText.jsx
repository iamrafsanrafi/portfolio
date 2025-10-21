"use client";

import { useEffect, useState } from "react";

const BannerAnimatedText = () => {
    const animatedText = "turning ideas into code!";
    const [isWriting, setIsWriting] = useState(true);
    const [text, setText] = useState("");

    useEffect(() => {
        let interval = setInterval(() => {
            if (isWriting) {
                if (text.length < animatedText.length) {
                    setText(animatedText.slice(0, text.length + 1));
                }
                else {
                    setIsWriting(false);
                }
            }
            else {
                if (text.length > 0) {
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
        <h4 className="text-[#00cf5d] text-[25px] font-bold leading-[27px] relative after:content-[''] after:absolute after:w-[4px] after:h-[100%] after:bg-[#00cf5d] after:top-0">I love&nbsp;{text}</h4>
    )
}

export default BannerAnimatedText