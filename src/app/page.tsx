'use client';

import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import Link from 'next/link';

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
            <div className={`w-full h-[80vh] pm-md:h-[85vh] overflow-hidden ${videoEnded ? 'animate-shrink' : ''} md:h-[60vh] sm:h-[50vh]`}>
              <video
                src="/assets/videos/Animation.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={handleVideoEnd}
              />
            </div>
          )}
          {/* Rest of your content */}
          <div className="w-full h-[80vh] pm-sm:h-auto flex pm-sm:flex-col justify-center items-center px-[10vw] py-[10vh] bg-[#00000039] relative">
            <img className='absolute bottom-[2vh] right-0 w-[10vw] pm-md:w-[25vw] h-[18vh] pm-sm:w-[30vw]' src='/assets/images/art/Kallian1.png' />
            <main className="w-2/6 pm-sm:w-5/6 pm-md:w-4/6 h-[60vh] pm-sm:h-[50vh] flex shadow-2xl">
              {/* Main Image */}
              <img
                className="bg-green-500 w-full flex items-center justify-center rounded-2xl"
                src={`/assets/images/${mainImage.url}`}
                alt="Main Image"
              />
              {/* Side Images */}
              <div className="bg-pink-400 w-1/5 rounded-r-2xl flex flex-col hidden">
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
            <aside className='w-4/6 pm-sm:w-full h-full flex flex-col items-center pm-sm:text-center lm-sm:pl-[5vw]'>
              <h2 className='h-[15vh] flex justify-center items-center text-center font-bold text-purple-400 lm-sm:hidden text-[5vh]'>Volume 1</h2>
              <h2 className='h-[15vh] flex justify-center items-center text-center font-bold text-purple-400 pm-sm:hidden'>Volume 1 of Star-Bound</h2>
              <p className='text-[2.5vh] pm-sm:text-[2vh]'>
              A lone bounty hunter, hardened by years of dangerous missions, finds himself entangled in a series of 
              events that challenge his resolve and force him to question his purpose. Along the way, he encounters 
              powerful forces, both friend and foe, that alter the course of his journey. As he battles external enemies 
              and wrestles with internal demons, the hunter's path becomes one of survival, self-discovery, and 
              transformation. His once-clear objectives blur, leading him to confront the deeper meaning of his existence 
              in a universe filled with conflict and chaos.
              </p>
              <Link href='https://a.co/d/9Cn7nMX' target="_blank" rel="noopener noreferrer">
                <button 
                  className='w-[12vw] pm-sm:w-[35vw] h-[6vh] bg-gradient-to-b hover:from-purple-600 hover:to-indigo-600 from-cyan-300 to-blue-600 text-[3vh] text-black rounded-2xl mt-[4vh]'
                >
                  Buy Now!
                </button>
              </Link>
            </aside>
          </div>
        </div>
      )}
      {active === "News" && (
        <div className='w-full h-[80vh] pm-md:h-[85vh] bg-cover px-[10vw] py-[10vh]' style={{ backgroundImage: `url(${"/assets/images/Background1.jpeg"})` }}>
          <h1 className='w-full text-[6vh] text-center h-[15vh] pm-sm:text-[5vh]'>Recent Updates</h1>
          <ul className='list-disc pm-sm:text-[2.5vh] rounded-xl text-center border-black bg-gradient-to-t from-blue-500 from-0%  to-blue-600 to-40% pm-sm:px-[2vw] pm-sm:py-[1vh]'>
            <li>Volume 1 of Star-Bound is released go check it out on Amazon!  -  October 27</li>
          </ul>
        </div>
      )}
      {active === "Merch" && (
        <div className='w-full h-[80vh] pm-md:h-[85vh] flex justify-center items-center bg-cover text-black text-[6vh] pm-sm:text-[4vh]' style={{ backgroundImage: `url(${"/assets/images/Background2.jpeg"})` }}>
          COMING SOON ....
        </div>
      )}
      {active === "About" && (
        <div className='w-full px-[10vw] py-[5vh] bg-cover text-black' style={{ backgroundImage: `url(${"/assets/images/Background2.jpeg"})` }}>
          <div className='flex w-full justify-between'>
            <img 
              src="/assets/images/art/Kallian2.png" 
              alt=""
              className='w-[10vw] pm-sm:w-[30vw] pm-md:w-[25vw] h-[17vh]' 
            />
            <img 
              src="/assets/images/art/Kallian3.png" 
              alt=""
              className='w-[10vw] pm-sm:w-[30vw] pm-md:w-[25vw] h-[17vh] pm-sm:mt-[2vh]' 
            />
          </div>
          <div className='lm-md:text-[2.5vh] pm-sm:text-[2vh] lm-sm:text-[2.5vh] text-center lm-sm:px-[15vw] w-full pm-sm:mt-[3vh]'>
            <div className='flex flex-col gap-10'>
              <p>
                Star-Bound follows the thrilling journey of Kallion, an intergalactic bounty hunter 
                hardened by years of perilous missions and deadly confrontations. Known for his unbreakable 
                resolve and fierce independence, Kallion has built his reputation in the cutthroat world 
                of space bounty hunters. But his latest mission pulls him into an unexpected and life-altering 
                journey, forcing him to question the very foundation of his path.
              </p>
              <p>
                In Star-Bound, Kallion navigates mysterious alliances, dangerous enemies, and a haunting past 
                that refuses to stay buried. Facing monsters, warriors, and his own inner turmoil, he’s challenged 
                not only in skill but in spirit. Each new conflict raises the stakes, revealing secrets hidden 
                deep within ancient civilizations and testing his loyalties to those he meets along the way. As 
                he travels from one cosmic battle to another, Kallion begins to see a world beyond bounty contracts
                 and bloodshed—a galaxy where survival isn’t enough and honor and redemption may hold greater worth.
              </p>
              <p>
                As much a story of self-discovery as it is a high-stakes space adventure, Star-Bound is packed with 
                action, suspense, and profound themes of justice, loyalty, and the courage to confront one’s past. 
                Kallion’s path to redemption unfolds against the stunning backdrop of a universe on the brink, where 
                every decision can alter the balance of power among stars. Will Kallion remain the unyielding lone wolf, 
                or will he forge a new path in a galaxy teetering on the edge of chaos?
              </p>
            </div>
            <h2 className='text-[5vh] w-full text-center mt-[5vh]'>Enjoy the Story!</h2>
          </div>
        </div>
      )}
    </div>
  );
}