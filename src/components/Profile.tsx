/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const ProfileComponent = (props: Props) => {

    const calculateAge = (birthday: Date) => {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


    return (
        <>
            <div className="mx-auto max-w-screen-lg px-3 py-6 text-white">
                <div className="flex flex-col items-center lg:flex-row md:justify-between md:gap-x-24">
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">
                            Hi there, I'm{" "}
                            <span
                                className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                                Thanathip
                            </span>{" "}
                            👋 🎉
                        </h1>

                        <p className="mt-6 text-xl leading-9">
                            I'm Thanathip Chansri from Bangkok/Thailand, I was born on 14 Nov 2000 , Now I'm {calculateAge(new Date('2000-11-14'))} years old.

                        </p>
                        <p className="text-xl leading-9">
                            I'm granduated Bechelor degree from <Link
                                className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                                to={{ pathname: "https://www.swu.ac.th/" }}
                                target='blank'>Srinakharinwirot University</Link> in Computer Science.
                        </p>
                        <div className="mt-3 flex gap-1">
                            <Link to={{pathname:"#"}} target='blank'>
                                <img
                                    className="h-12 w-12 hover:translate-y-1"
                                    src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/twitter-icon.png"
                                    alt="Twitter icon"
                                    loading="lazy"
                                />
                            </Link>
                            <Link to={{ pathname: "#" }} target='blank'>
                                <img
                                    className="h-12 w-12 hover:translate-y-1"
                                    src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/facebook-icon.png"
                                    alt="Facebook icon"
                                    loading="lazy"
                                />
                            </Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/thanathip-chanasri-008b3a226/" }} target='blank' >
                                <img
                                    className="h-12 w-12 hover:translate-y-1"
                                    src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/linkedin-icon.png"
                                    alt="Linkedin icon"
                                    loading="lazy"
                                />
                            </Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UCgeunsrWLOcqj5kfPuyUeOQ" }} target='blank' >
                                <img
                                    className="h-12 w-12 hover:translate-y-1"
                                    src="https://creativedesignsguru.com/demo/astro-boilerplate/assets/images/youtube-icon.png"
                                    alt="Youtube icon"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <img
                            className=" rounded-full object-cover h-80 w-84"
                            src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/341331137_558053799859745_6456396565562366243_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHftIN83Sk02l7SGDgcR-jt9nv0MwPuxzP2e_QzA-7HM_hKHWnyGPUBuZFlA_q5-Ieb_MIfysx1qODXJJigT4m3&_nc_ohc=Omgjx7Iibs8AX_Z6Z88&_nc_oc=AQkv35FO0OZ1AEijP7Bvq9ed9yaqmJdGlR6cgK5mXIEj7WhjK5IXGqX2P9H9WKaEu04&_nc_ht=scontent.fbkk22-6.fna&oh=00_AfDnVJFdwAOf8FbHULwcJbkqIoED5woEQVhDfbo7IyqfTA&oe=64C39CE4"
                            alt="Avatar image"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProfileComponent