import React from 'react'

type Props = {}

const ProjectComponent = (props: Props) => {

    const bageClass = 'rounded-md text-center px-2 py-1 text-xs font-semibold bg-sky-700 text-white'
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
                        <a href="https://github.com/camera-detects-helmet" target='blank'>
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="https://cdn-icons-png.flaticon.com/512/5234/5234748.png"
                                alt="Project Web Design"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 gap-y-2 md:flex-row">
                            <div className="flex-shrink-0">
                                <a className="hover:text-cyan-400" href="https://github.com/camera-detects-helmet" target='blank'>
                                    <div className="text-xl font-semibold">No-helmet detection useing yolov5 </div>
                                </a>
                            </div>
                            <div className="ml-3 flex gap-2">
                                <div className={bageClass}>
                                    YOLOv5
                                </div>
                                <div className={bageClass}>
                                    ML
                                </div>
                                <div className={bageClass}>
                                    Python
                                </div>
                                <div className={bageClass}>
                                    RestAPI
                                </div>
                                <div className={bageClass}>
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            Senior project
                            ระบบตรวจจับผู้ขับข่ี่รถจักรยานยนต์ที่ไม่สวมหมวนริภัย โดยใช้ ​YOLOv5 ในการตรวจจับและใช้ Go gin ในการสร้าง API สำหรับการติดต่อกับฐานข้อมูล MongoDB

                        </p>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="https://github.com/sSlotty/POS-MON" target='blank'>
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="https://se-update.com/wp-content/uploads/2017/02/shop-icon.png"
                                alt="Project Fire"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="https://github.com/sSlotty/POS-MON" target='blank'>
                                <div className="text-xl font-semibold">POS MON</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className={bageClass}>
                                    PHP
                                </div>
                                <div className={bageClass}>
                                    JavaScript
                                </div>
                                <div className={bageClass}>
                                    HTML
                                </div>
                                <div className={bageClass}>
                                    CSS
                                </div>
                                <div className={bageClass}>
                                    MySQL
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            ระบบการจัดการร้านค้าโดยใช้ PHP ในการเขียนระบบหลังบ้านสำหรับการเชื่อมต่อกับฐานข้อมูล MySQL และใช้ JavaScript, HTML, CSS ในการเขียนหน้าเว็บ
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="https://github.com/sSlotty/clinic-api" target='blank'>
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="https://cdn-icons-png.flaticon.com/512/3209/3209074.png"
                                alt="Project Maps"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="https://github.com/sSlotty/clinic-api" target='blank'>
                                <div className="text-xl font-semibold">Clinic Mangement</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className={bageClass}>
                                    React JS
                                </div>
                                <div className={bageClass}>
                                    Flask
                                </div>
                                <div className={bageClass}>
                                    Restful API
                                </div>
                                <div className={bageClass}>
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            ระบบการจัดการคลินิก โดยใช้ React JS ในการเขียนหน้าเว็บและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row overflow-x-auto overflow-y-auto">
                    <div className="shrink-0">
                        <a href="https://github.com/sSlotty/ResortManagement" target='blank'>
                            <img
                                className="h-36 w-36 hover:translate-y-1"
                                src="https://cdn-icons-png.flaticon.com/512/3837/3837802.png"
                                alt="Project Maps"
                                loading="lazy"
                            />
                        </a>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 gap-y-2 md:flex-row">
                            <a className="hover:text-cyan-400" href="https://github.com/sSlotty/ResortManagement" target='blank'>
                                <div className="text-xl font-semibold">Hotel Mangement</div>
                            </a>
                            <div className="ml-3 flex gap-2">
                                <div className={bageClass}>
                                    Android Studio
                                </div>
                                <div className={bageClass}>
                                    Mobile
                                </div>
                                <div className={bageClass}>
                                    Flask Restful API
                                </div>
                                <div className={bageClass}>
                                    MongoDB
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-gray-400">
                            ระบบการจัดโรงแรม โดยใช้ Android Studio ในการเขียนแอพพลิเคชั่นและใช้ Flask Restful API ในการเชื่อมต่อกับฐานข้อมูล MongoDB
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectComponent