import React from 'react'

type Props = {}

const SkillComponent = (props: Props) => {
    return (
        <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="mb-6 text-2xl font-bold">
                Technical Skill
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                    <h1 className='text-2xl font-bold text-white'>
                        Proficient
                    </h1>
                    <div className="flex flex-col items-center gap-y-2 md:flex-row">
                        <div className="ml-3 flex gap-2">
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                Astro.js
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                                Web design
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                                Tailwind.css
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                TypeScript
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                    <h1 className='text-2xl font-bold text-white'>
                        Intermediate
                    </h1>
                    <div className="flex flex-col items-center gap-y-2 md:flex-row">
                        <div className="ml-3 flex gap-2">
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                Astro.js
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                                Web design
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                                Tailwind.css
                            </div>
                            <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                TypeScript
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
                    <div className='shrink-0'>
                        <h1 className='text-2xl font-bold text-white'>
                            Beginner
                        </h1>
                    </div>

                    <div>
                        <div className="flex flex-col items-center gap-y-2 md:flex-row">
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                    Astro.js
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                                    Web design
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                                    Tailwind.css
                                </div>
                                <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    TypeScript
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