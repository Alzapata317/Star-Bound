'use client';

import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";

type ImageType = {
  id: string;
  url: string;
};

export default function Home() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Home component must be used within an AppProvider");
  }

  const { active, videoEnded, setVideoEnded } = context;
  const [videoVisible, setVideoVisible] = useState<boolean>(!videoEnded);

  // Handle video end and hide video after animation
  const handleVideoEnd = () => {
    setVideoEnded(true); // Update context state
    // Duration should match the Tailwind animation duration (1s)
    setTimeout(() => {
      setVideoVisible(false);
    }, 1000); // 1000ms = 1s
  };

  // Reset videoVisible if videoEnded is false (e.g., on initial load)
  useEffect(() => {
    if (!videoEnded) {
      setVideoVisible(true);
    }
  }, [videoEnded]);

  // Initial Images Setup
  const initialImages: ImageType[] = [
    { id: 'main', url: 'BookImage1.heic' },
    { id: 'img1', url: 'BookCover.heic' },
    { id: 'img2', url: 'BookImage2.heic' },
    { id: 'img3', url: 'BookImage3.heic' },
  ];

  // Initialize main and side images from initialImages
  const [mainImage, setMainImage] = useState<ImageType>(initialImages[0]);
  const [sideImages, setSideImages] = useState<ImageType[]>(initialImages.slice(1));

  // Handle Side Image Click
  function handleImageClick(clickedImage: ImageType) {
    // Update main image to the clicked image
    setMainImage(clickedImage);

    // Move the previous main image to the bottom of sideImages
    setSideImages((prevSideImages) => {
      // Remove the clicked image from sideImages
      const newSideImages = prevSideImages.filter(image => image.id !== clickedImage.id);
      // Append the previous main image to the bottom
      return [...newSideImages, mainImage];
    });
  }

  return (
    <div className="text-white w-full h-auto text-[4vh] flex justify-center items-center">
      {active === "Home" && (
        <div className="w-full h-auto bg-cover" style={{ backgroundImage: `url(${"/assets/images/Background1.jpeg"})` }}>
          {/* Video Section */}
          {videoVisible && (
            <div className={`w-full h-[80vh] overflow-hidden ${videoEnded ? 'animate-shrink' : ''}`}>
              <video
                src="/assets/videos/Animation.mov"
                autoPlay
                muted
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
              />
            </div>
          )}
          {/* Rest of your content */}
          <div className="w-full h-[80vh] flex items-center px-[10vw] py-[10vh] bg-[#00000039]">
            <main className="w-2/6 h-[60vh] flex shadow-2xl">
              {/* Main Image */}
              <img
                className="bg-green-500 w-full flex items-center justify-center rounded-2xl"
                src={`/assets/images/${mainImage.url}`}
                alt="Main Image"
              />
              {/* Side Images */}
              <div className="bg-pink-400 w-1/5 rounded-r-2xl flex flex-col">
                {sideImages.map((image, index) => {
                  const isFirst = index === 0;
                  const isLast = index === sideImages.length - 1;
                  const roundedClass = isFirst
                    ? 'rounded-tr-2xl'
                    : isLast
                      ? 'rounded-br-2xl'
                      : '';

                  return (
                    <button
                      key={image.id}
                      onClick={() => handleImageClick(image)}
                      className="w-full h-1/3 flex justify-center items-center focus:outline-none"
                    >
                      <img
                        src={`/assets/images/${image.url}`}
                        className={`w-full h-full object-cover ${roundedClass}`}
                        alt={`Side Image ${image.id}`}
                      />
                    </button>
                  );
                })}
              </div>
            </main>
            <aside className='w-4/6 h-full flex flex-col items-center pl-[5vw]'>
              <h2 className='h-[15vh] flex justify-center items-center font-bold text-purple-400'>Volume 1 of Star-Bound</h2>
              <p className='text-[2.5vh]'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              </p>
              <button 
                className='w-[12vw] h-[6vh] bg-gradient-to-b hover:from-purple-600 hover:to-indigo-600 from-cyan-300 to-blue-600 text-[3vh] text-black rounded-2xl mt-[4vh]'
              >
                Buy Now!
              </button>
            </aside>
          </div>
        </div>
      )}
      {active === "Merch" && (
        <div className='w-full h-[80vh] flex justify-center items-center'>
          COMING SOON ....
        </div>
      )}
    </div>
  );
}