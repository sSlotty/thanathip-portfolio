import React from 'react'

type Props = {}

const SkillComponent = (props: Props) => {
    return (
        <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="mb-6 text-2xl font-bold">
                Technical Skill
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <h1 className='text-2xl font-bold text-white w-32'>
                        Proficient
                    </h1>
                    <div className="flex flex-col text-center items-center gap-y-2 md:flex-row">
                        <div className="ml-3 flex gap-2">
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                Python
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                Java
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                Web design
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <h1 className='text-2xl font-bold text-white w-32'>
                        Intermediate
                    </h1>
                    <div className="flex flex-col text-center items-center gap-y-2 md:flex-row">
                        <div className="ml-3 flex gap-2 ">
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                Java Script
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                TypeScript
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                HTML
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                NodeJS
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                C#
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                API
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                SQL
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className='shrink-0 w-32'>
                        <h1 className='text-2xl font-bold text-white'>
                            Beginner
                        </h1>
                    </div>

                    <div>
                        <div className="flex flex-col text-center  items-center gap-y-2 md:flex-row">
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                    Android
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                    Go
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                    Docker
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-900 text-white text-center">
                                    K8s
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SkillComponent