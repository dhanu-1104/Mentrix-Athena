import { useEffect, useState } from "react";


const Typewriter = () => {
    const [text, setText] = useState("");
    const [showContent, setShowContent] = useState(false);
    const words = ["and fostering growth :)"];
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)
    const initialDelay = 1000; // Delay before typing starts (in milliseconds)
    const contentAppearDelay = 1000; // Delay before the second div appears (in milliseconds)

    useEffect(() => {
        let currentIndex = 0;
        let currentWord = words[currentIndex];
        let currentLetterIndex = 0;
        let timeout: any = null;

        const typeNextLetter = () => {
            const currentLetter = currentWord[currentLetterIndex];
            setText((prevText) => prevText + currentLetter);

            currentLetterIndex++;

            if (currentLetterIndex === currentWord.length) {
                currentIndex++;
                if (currentIndex >= words.length) {
                    setTimeout(() => {
                        setShowContent(true);
                    }, contentAppearDelay);
                    return;
                }
                currentWord = words[currentIndex];
                currentLetterIndex = 0;
                clearTimeout(timeout);
                timeout = setTimeout(typeNextLetter, 1000); // Delay before typing next word
                return;
            }

            timeout = setTimeout(typeNextLetter, typingSpeed);
        };

        timeout = setTimeout(typeNextLetter, initialDelay); // Delay before typing starts

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
        <div className="flex bg-black text-white justify-center items-center h-screen">
            <div className="flex flex-col items-center h-64">
                <h1 className="md:text-4xl text-lg ml-4 md:ml-0 font-bold pt-14">
                    Nurturing excellence , shaping futures {text}
                </h1>
                {showContent && (
                    <div
                        className="md:text-2xl text-sm font-semibold text-gray-400 mt-4"
                        style={{ animation: "fade-in 1s ease-in" }}
                    >a
                        paving the way for limitless possibilities together
                    </div>
                )}
            </div>
            <style>
                {`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        `}
            </style>
        </div>
        </>
    );
};

export default Typewriter;
