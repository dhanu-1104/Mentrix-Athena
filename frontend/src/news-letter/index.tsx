import React from "react";

const NewsLetter = () => {
    return(
        <div className=" h-full bg-black py-12 text-white  ">
            <div className="container mx-auto  px-4 md:px-7 flex md:flex-row flex-col space-x-24">
            <div className="flex flex-col  w-[3/4] ">
                <div className="text-2xl md:text-7xl w-1/2">Stay Connected</div>
                <div className="text-xl md:text-xl pt-2 text-gray-400 md:px-1">Reach out and let's shape your success story together!</div>
            </div>
            <div className="flex items-center justify-center md:w-full">
                <div className="flex md:flex-row flex-col md:w-full space-x-2">
                    <input id="text-input" type="text"
                           className="relative inline-flex items-center md:w-full px-2 py-3 overflow-hidden text-lg font-medium
                    text-gray-600 rounded-md  group hover:bg-gray-50" placeholder="someone@something.com"/>
                    <a href="#_"
                       className="relative inline-flex items-center w-1/4 place-content-center hover:place-content-start
                        hover:pl-7 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600
                        rounded-md hover:text-white group ">
                    <span
                        className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100
                         group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease">
                    </span>
                        <span
                            className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform
                        translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3">
                                </path>
                            </svg>
                    </span>
                        <span className="relative">
                        Connect
                    </span>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}
export default NewsLetter;