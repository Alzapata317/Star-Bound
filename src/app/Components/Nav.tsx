"use client"
import React, { useState, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGofundme } from "react-icons/si";
import { Divide } from 'hamburger-react';
import { AppContext } from '../../../context/AppContext';

export default function Nav() {
    const [showTabs, setShowTabs] = useState(false);
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Nav component must be used within an AppProvider");
    }

    const { active, setActive } = context;

  return (
    <div className='bg-black h-[20vh] flex relative'>
        <ul className='w-1/5 p-8 flex gap-5 pm-sm:hidden pm-md:flex'>
            <Link className='w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/starboundmanga/?igsh=Zm9vaXIxZWRna2U1&utm_source=qr"><FaInstagram className=' w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg'/></Link>
            <Link className='w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@star.bound.manga?_t=8lFccmQzg5O&_r=1"><FaTiktok className=' w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg'/></Link>
            <Link className='w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://x.com/starboundmanga?s=21&t=6l6Ll6G8x9_37zykGoqYyg"><RiTwitterXLine className=' w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg'/></Link>
            <Link className='w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/manga-project-starbound?utm_campaign=p_lico+share-sheet&utm_content=share_ai_control&utm_medium=copy_link&utm_source=customer"><SiGofundme className=' w-[2vw] pm-md:w-[3vw] h-[3.5vh] rounded-lg'/></Link>
        </ul>
        <div className='w-1/5 h-full pm-md:hidden lm-sm:hidden flex items-center justify-center'>
                <Divide toggled={showTabs} toggle={setShowTabs} color='white'/>
        </div>
        <div className='w-3/5 flex flex-col justify-center items-center'>
            <div className='w-full h-4/5 flex items-center justify-center'>
            <Link href="/" className='w-1/2 pm-md:w-2/3 h-4/5 flex items-center justify-center pm-sm:hidden pm-md:flex'><Image src="/assets/images/DesktopLogo2.png" alt='Star-Bound Logo' width={1700} height={2400}/></Link>
            <Link href="/" className='pm-sm:w-[20vw] pm-md:hidden h-3/5 flex items-center justify-center lm-sm:hidden'><Image src="/assets/images/MobileLogo1.png" alt='Star-Bound Logo' width={1700} height={2400}/></Link>
            </div>
            <ul className='w-full h-1/5 flex items-center justify-center gap-[10vw] text-white text-[2vh] pm-sm:hidden pm-md:flex'>
                <a className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "Home" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("Home"))}>Home</a>
                <a className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "About" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("About"))}>About</a>
                <a className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "Merch" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("Merch"))}>Merch</a>
                <a className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "News" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("News"))}>News</a>
            </ul>
        </div>
        <div className='w-1/5'></div>
        {showTabs == true && (
            <div className='absolute top-[20vh] bg-black h-[80vh] w-full lm-sm:hidden pm-md:hidden'>
                <ul className='flex flex-col px-[15vw] py-[5vh] text-[2.5vh] gap-7'>
                    <a className='hover:text-purple-400' href="">Home</a>
                    <a className='hover:text-purple-400' href="">About</a>
                    <a className='hover:text-purple-400' href="">Merch</a>
                    <a className='hover:text-purple-400' href="">News</a>
                </ul>
            </div>
        )}
    </div>
  )
}
