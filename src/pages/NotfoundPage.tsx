/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotfoundPage = (props: Props) => {
    return (
        <div className=" lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-50 font-bold text-2xl">
                                Looks like you've found the doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-50">
                                Sorry about that! Please visit our hompage to get where you need to
                                go.
                            </p>
                            <Link to={'/'}>
                                <button
                                    className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-gradient-to-br from-slate-500 to-sky-400 focus:ring-opacity-50">
                                    Take me there!
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>

    )
}

export default NotfoundPage