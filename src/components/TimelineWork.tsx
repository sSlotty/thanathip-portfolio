/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


type Props = {

}
function formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}


const TimelineWorkComponent = (props: Props) => {
    const time = new Date();



    return (
        <>
            <div className="mx-auto max-w-screen-lg px-3 py-6">
                <p className='text-white text-2xl pb-10'>Work Experience</p>
                <ol className="items-center sm:flex">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <img
                                    src='https://upload.wikimedia.org/wikipedia/commons/1/1c/True_Corporation_%28Thailand%29.svg' />

                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold dark:text-white">
                                True Crop.
                            </h3>
                            <div className="block mb-2 text-sm  leading-none text-gray-400 dark:text-gray-500">
                                Backend developer (Internship)
                            </div>
                            <time className="block mb-2 text-sm  leading-none text-gray-400 dark:text-gray-500">
                                1 Jun 2022 - 31 Sep 2022
                            </time>
                            <p className="block text-base  text-gray-500 dark:text-gray-400">
                                Learning about ELK Stack, Docker, and Golang.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <img
                                    src='https://giftcard.scb.co.th/assets/images/scb-logo.png' />
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold dark:text-white">
                                SCB
                            </h3>
                            <div className="block mb-2 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                                Software Engineer Associate
                            </div>
                            <time className="block mb-2 text-sm font-medium leading-none text-gray-400 dark:text-gray-500">
                                2 Aug 2023 - Now ({formatDate(time)})
                            </time>
                            <p className="block text-base font-medium text-gray-500 dark:text-gray-400">Learning about ELK Stack, Docker, and Golang.

                            </p>
                        </div>
                    </li>


                </ol>

            </div>
        </>
    )
}

export default TimelineWorkComponent