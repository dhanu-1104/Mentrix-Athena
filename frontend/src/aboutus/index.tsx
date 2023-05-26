import React from "react";
import landingImage from '../../public/assets/pictures/about-us-landing.png';
import Arrow2 from '../../public/assets/pictures/Arrow2.png';
import Arrow1 from '../../public/assets/pictures/Arrow1.png';
import JoinUs from '../../public/assets/pictures/joinus.png';

import Typewriter from "@/type-writer";
import { Fade } from 'react-reveal';

import Image from "next/image";
import NewsLetter from "@/news-letter";

const AboutLanding = () => {
    return (
        <>
            <section className="timeline">
                {/* about */}
                <div>
                    <Typewriter />
                    <div className="flex flex-cols h-full container mx-auto px-4 pt-24 pb-32 md:px-8">
                        <div className="w-1/2 min-h-full hidden flex place-items-center my-auto md:block">
                            <div className="timeline-item">
                                <div className="timeline-img"></div>
                                <div className="timeline-content">
                                    <Fade left>
                                        <div>
                                            <Image
                                                src={landingImage}
                                                draggable={false}
                                                alt="landingPage-image"
                                                className="max-h-[70vh]"
                                            />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full items-center justify-center">
                            <div className="h-full flex flex-col items-start justify-center">
                                <div className="font-black md:text-9xl text-4xl">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade right>
                                                <h2>About us</h2>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-md tracking-wide md:text-lg font-light pt-10 md:w-10/12">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade right>
                                                <div>
                                                    We are Dhanush Kumar G and P A Abekaesh, two B.Tech students who
                                                    are passionate about revolutionizing the mentoring experience for
                                                    fellow students. Our goal is to provide a comprehensive and
                                                    user-friendly platform that addresses the difficulties we faced in
                                                    our own academic journey.
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </p>
                                <p className="text-md tracking-wide md:text-lg font-light md:pt-6 pt-3 md:w-10/12">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade left>
                                                <div>
                                                    We provide effective guidance and support, fostering collaboration
                                                    and personalized learning. Connect with experienced mentors to
                                                    navigate the educational system and reach your full potential.
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*vision*/}
                            <div className="flex flex-cols h-full container mx-auto px-4 md:py-0 py-6 md:px-8">
                            <div className="w-1/2 min-h-full  flex place-items-end my-auto md:block  md:pt-12">
                                <div className="font-black md:text-9xl text-4xl">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade left>
                                                <h2>Our vision</h2>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="flex flex-cols h-full container mx-auto px-4  md:px-8">
                                <div className="w-1/2 min-h-full hidden flex place-items-center my-auto md:block">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade left>
                                                <div>
                                                    <Image
                                                        src={Arrow1}
                                                        draggable={false}
                                                        alt="landingPage-image"
                                                        className="md:max-h-[70vh] my-auto ml-auto mr-auto"
                                                    />
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full items-center   justify-center">
                                    <div className="h-full flex flex-col items-start justify-center">
                                        <div className="py-0">
                                            <p className="font-extrabold text-md tracking-wide md:text-lg font-light md:pt-14 md:w-10/12"> <div className="timeline-item">
                                                <div className="timeline-img"></div>
                                                <div className="timeline-content">
                                                    <Fade left>
                                                        <div>
                                                            Our vision is to create a student-centric ecosystem where
                                                            mentorship is seamlessly accessible, empowering students to
                                                            achieve their highest aspirations.
                                                        </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                            </p>
                                            <p className="font-extrabold text-md tracking-wide md:text-lg font-light md:pt-6 pt-3 md:w-10/12">
                                                <div className="timeline-item">
                                                    <div className="timeline-img"></div>
                                                    <div className="timeline-content">
                                                        <Fade left>
                                                            <div>
                                                                We envision a future where every student has access to
                                                                personalized guidance and support, regardless of their
                                                                background or circumstances. Through our platform, we
                                                                aim to break down barriers and provide equal
                                                                pportunities for all learners.
                                                            </div>
                                                        </Fade>
                                                    </div>
                                                </div>
                                            </p>
                                            <p className="font-extrabold text-md tracking-wide md:text-lg font-light md:pt-6 pt-3 md:w-10/12">
                                                <div className="timeline-item">
                                                    <div className="timeline-img"></div>
                                                    <div className="timeline-content">
                                                        <Fade left>
                                                            <div>
                                                                Through our platform, we strive to shape the future of
                                                                education by embracing innovative technologies and
                                                                methodologies.
                                                            </div>
                                                        </Fade>
                                                    </div>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          {/*mission*/}
                           <div className="md:py-12 py-6">
                                <div className="w-1/2 min-h-full  flex place-items-end my-auto md:block md:ml-auto ml-4 pt-10">
                                    <div className="font-black md:text-9xl text-4xl">
                                        <div className="timeline-item">
                                            <div className="timeline-img"></div>
                                            <div className="timeline-content">
                                                <Fade right>
                                                    <h2>Our mission</h2>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-cols h-full container mx-auto px-4  md:px-8">
                                    <div className="md:w-1/2 w-full items-center   justify-center">
                                        <div className="h-full flex flex-col items-start justify-center">
                                            <div className="">
                                                <p className="font-extrabold text-md tracking-wide md:text-lg font-light pt-10 md:w-10/12">
                                                    <div className="timeline-item">
                                                        <div className="timeline-img"></div>
                                                        <div className="timeline-content">
                                                            <Fade left>
                                                                <div>
                                                                    Our mission is to revolutionize the way students
                                                                    receive mentoring and support during their academic
                                                                    journey. We are dedicated to bridging the gap
                                                                    between students and mentors, empowering every
                                                                    individual to thrive and succeed.
                                                                </div>
                                                            </Fade>
                                                        </div>
                                                    </div>
                                                </p>
                                                <p className="font-extrabold text-md tracking-wide md:text-lg font-light pt-6 md:w-10/12">
                                                    <div className="timeline-item">
                                                        <div className="timeline-img"></div>
                                                        <div className="timeline-content">
                                                            <Fade left>
                                                                <div>
                                                                    Through our platform, we strive to create an
                                                                    environment that fosters collaboration, growth, and
                                                                    personalized learning. We believe that every student
                                                                    is unique and deserves tailored guidance to unlock
                                                                    their full potential.
                                                                </div>
                                                            </Fade>
                                                        </div>
                                                    </div>

                                                </p>
                                                <p className="font-extrabold text-md tracking-wide md:text-lg font-light pt-6 md:w-10/12 ">
                                                    <div className="timeline-item">
                                                        <div className="timeline-img"></div>
                                                        <div className="timeline-content">
                                                            <Fade left>
                                                                <div>
                                                                    We aim to provide students with easy access to
                                                                    experienced mentors who will not only navigate them
                                                                    through the complexities of the educational system
                                                                </div>
                                                            </Fade>
                                                        </div>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className="w-1/2 min-h-full hidden flex place-items-center my-auto md:block ">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade left>
                                                <Image
                                                    src={Arrow2}
                                                    draggable={false}
                                                    alt="landingPage-image"
                                                    className="md:max-h-[70vh]"
                                                />
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                         {/*Join us*/}
                         <div className="md:py-12 py-6">
                            <div className="flex flex-cols h-full container mx-auto px-4 md:px-8">
                                <div className="md:w-1/2 w-full items-center md:py-8 justify-center">
                                    <div className="h-full flex flex-col items-start justify-center">
                                         <div className="font-black md:text-9xl text-4xl">
                                             <div className="timeline-item">
                                                 <div className="timeline-img"></div>
                                                 <div className="timeline-content">
                                                     <Fade left>
                                                         <h2>Join us!</h2>
                                                     </Fade>
                                                 </div>
                                             </div>
                                        </div>
                                        <p className="font-extrabold text-md tracking-wide md:text-lg font-light pt-10 md:w-10/12">
                                            <div className="timeline-item">
                                                <div className="timeline-img"></div>
                                                <div className="timeline-content">
                                                    <Fade left>
                                                        <div>
                                                            In a world full of possibilities, we invite you to embark
                                                            on a transformative journey with us. Join our platform and
                                                            discover a captivating blend of aesthetics and education,
                                                            where learning becomes an enchanting experience.
                                                        </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="font-extrabold text-md tracking-wide md:text-lg font-light pt-6 md:w-10/12">
                                            <div className="timeline-item">
                                                <div className="timeline-img"></div>
                                                <div className="timeline-content">
                                                    <Fade left>
                                                        <div>
                                                            Step into a realm where personalized guidance meets artistic
                                                            inspiration. Join us and unlock the hidden potential within
                                                            you, as we create a space that nurtures your unique
                                                            talents and fuels your creativity.
                                                        </div>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-1/2 min-h-full hidden flex place-items-center my-auto md:block">
                                    <div className="timeline-item">
                                        <div className="timeline-img"></div>
                                        <div className="timeline-content">
                                            <Fade right>
                                                <div>
                                                    <Image
                                                        src={JoinUs}
                                                        draggable={false}
                                                        alt="landingPage-image"
                                                        className="md:max-h-[70vh]"
                                                    />
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>

                                </div>
                            </div>
                         </div>
                </div>
            </section>
        </>



            );
        };

        export default AboutLanding;