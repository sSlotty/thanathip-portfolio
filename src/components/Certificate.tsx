import React, { useEffect } from 'react'
import { Carousel } from "flowbite";
import type { CarouselItem, CarouselOptions, CarouselInterface } from "flowbite";

type Props = {}



const CertificateComponent = (props: Props) => {

  console.log("Certificate Component")



  useEffect(() => {
    const items: CarouselItem[] = [
      {
        position: 0,
        el: document.getElementById('carousel-item-1') as HTMLElement
      },
      {
        position: 1,
        el: document.getElementById('carousel-item-2') as HTMLElement
      },
      {
        position: 2,
        el: document.getElementById('carousel-item-3') as HTMLElement
      },
      {
        position: 3,
        el: document.getElementById('carousel-item-4') as HTMLElement
      },
    ];

    const options: CarouselOptions = {
      defaultPosition: 1,
      interval: 3000,

      indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
          {
            position: 0,
            el: document.getElementById('carousel-indicator-1') as HTMLElement
          },
          {
            position: 1,
            el: document.getElementById('carousel-indicator-2') as HTMLElement
          },
          {
            position: 2,
            el: document.getElementById('carousel-indicator-3') as HTMLElement
          },
          {
            position: 3,
            el: document.getElementById('carousel-indicator-4') as HTMLElement
          },
        ]
      },

      // callback functions
      onNext: () => {
      },
      onPrev: () => {
      },
      onChange: () => {
      }
    };

    const carousel: CarouselInterface = new Carousel(items, options);

    carousel.cycle()

    const prevButton = document.getElementById('data-carousel-prev') as HTMLElement;
    const nextButton = document.getElementById('data-carousel-next') as HTMLElement;

    prevButton.addEventListener('click', () => {
      carousel.prev();
    });

    nextButton.addEventListener('click', () => {
      carousel.next();
    });


  }, [])




  return (
    <>



      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="mb-6 text-2xl font-bold">
          Certificate 
        </div>
        <div className="relative w-full">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            {/* Item 1 */}
            <div id="carousel-item-1" className="hidden duration-700 ease-in-out">
              <img
                src="https://source.unsplash.com/random/?city,night"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div id="carousel-item-2" className="hidden duration-700 ease-in-out">
              <img
                src="https://source.unsplash.com/random/?nature,day"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
              <p>Test</p>
            </div>
            {/* Item 3 */}
            <div id="carousel-item-3" className="hidden duration-700 ease-in-out">
              <img
                src="https://source.unsplash.com/random/?car,night"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div id="carousel-item-4" className="hidden duration-700 ease-in-out">
              <img
                src="https://source.unsplash.com/random/?people,night"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              id="carousel-indicator-1"
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              id="carousel-indicator-2"
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
            />
            <button
              id="carousel-indicator-3"
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
            />
            <button
              id="carousel-indicator-4"
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
            />
          </div>
          {/* Slider controls */}
          <button
            id="data-carousel-prev"
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            id="data-carousel-next"
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>


  )
}

export default CertificateComponent