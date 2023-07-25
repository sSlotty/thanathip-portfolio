import React from 'react'

type Props = {}

const ProjectComponent = (props: Props) => {
    return (
        <div className="mx-auto max-w-screen-lg px-3 py-6">
            <div className="mb-6 text-2xl font-bold">
                Recent{" "}
                <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                    Projects
                </span>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-4 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="/demo/astro-boilerplate">
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="assets/images/project-web-design.png"
                                alt="Project Web Design"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-y-2 p-4 md:flex-row">
                            <div className="flex-shrink-0">
                                <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                    <div className="text-xl font-semibold">No-helmet detection useing yolov5 </div>
                                </a>
                            </div>
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                    YOLOv5
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">
                                    ML
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
                                    Python
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    RestAPI
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                            hendrerit dui odio id enim.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="/demo/astro-boilerplate">
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="assets/images/project-fire.png"
                                alt="Project Fire"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">POS MON</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-violet-400 text-violet-900">
                                    PHP
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-emerald-400 text-emerald-900">
                                    JavaScript
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                                    HTML
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                                    CSS
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900">
                                    MySQL
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                            hendrerit dui odio id enim.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="/demo/astro-boilerplate">
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="assets/images/project-maps.png"
                                alt="Project Maps"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">Clinic Mangement</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                    React JS
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-indigo-400 text-indigo-900">
                                    Flask
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    Restful API
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                            hendrerit dui odio id enim.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="/demo/astro-boilerplate">
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="assets/images/project-maps.png"
                                alt="Project Maps"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">Hotel Mangement</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                                    Android Studio
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-indigo-400 text-indigo-900">
                                    Mobile
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    Flask Restful API
                                </div>
                                <div className="rounded-md text-center px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                            hendrerit dui odio id enim.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectComponent