"use client"
import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { TbBrandPatreon } from "react-icons/tb";
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

    useEffect(() => {
        if (showTabs) {
            // Prevent scrolling
            document.body.classList.add('overflow-hidden');
        } else {
            // Re-enable scrolling
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup when component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showTabs]);
// need comment to update website
  return (
    <div className='bg-black h-[20vh] flex relative pm-md:h-[15vh]'>
        <div className='w-1/5 p-8 flex flex-col pm-sm:hidden pm-md:flex gap-4'>
            <ul className='w-full gap-5 flex'>
                <Link className='w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/starboundmanga/?igsh=Zm9vaXIxZWRna2U1&utm_source=qr">
                    <FaInstagram className=' w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg'/>
                </Link>
                <Link className='w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@star.bound.manga?_t=8lFccmQzg5O&_r=1">
                    <FaTiktok className=' w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg'/>
                </Link>
                <Link className='w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://x.com/starboundmanga?s=21&t=6l6Ll6G8x9_37zykGoqYyg">
                    <RiTwitterXLine className=' w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg'/>
                </Link>
                <Link className='w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://www.gofundme.com/f/manga-project-starbound?utm_campaign=p_lico+share-sheet&utm_content=share_ai_control&utm_medium=copy_link&utm_source=customer">
                    <SiGofundme className=' w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg'/>
                </Link>
                <Link className='w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg' target="_blank" rel="noopener noreferrer" href="https://patreon.com/Star_Bound_Series?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">
                    <TbBrandPatreon className=' w-[2vw] pm-md:w-[2vw] h-[3.5vh] rounded-lg'/>
                </Link>
            </ul>
            <a href="mailto:Star.bound.series.inc@gmail.com" className='w-full text-white hover:text-purple-400 pm-md:text-[1vh]'>Star.bound.series.inc@gmail.com</a>
        </div>
        <div className='w-1/5 h-full pm-md:hidden lm-sm:hidden flex items-center justify-center'>
                <Divide toggled={showTabs} toggle={setShowTabs} color='white'/>
        </div>
        <div className='w-3/5 flex flex-col justify-center items-center'>
            <div className='w-full h-4/5 flex items-center justify-center'>
            <Link href="/" className='w-1/2 pm-md:w-2/3 h-4/5 flex items-center justify-center pm-sm:hidden pm-md:flex'><Image src="/assets/images/DesktopLogo2.png" alt='Star-Bound Logo' width={1700} height={2400}/></Link>
            <Link href="/" className='pm-sm:w-[20vw] pm-md:hidden h-3/5 flex items-center justify-center lm-sm:hidden'><Image src="/assets/images/MobileLogo3.png" alt='Star-Bound Logo' width={1700} height={2400}/></Link>
            </div>
            <ul className='w-full h-1/5 flex items-center justify-center gap-[10vw] text-white text-[2vh] pm-sm:hidden pm-md:flex'>
                <button className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "Home" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("Home"), setShowTabs(false))}>Home</button>
                <button className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "News" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("News"), setShowTabs(false))}>News</button>
                <button className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "Merch" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("Merch"), setShowTabs(false))}>Merch</button>
                <button className={`hover:border-b-2 hover:border-b-white hover:text-purple-400 ${active == "About" ? 'text-purple-400 border-b-white border-b-2' : ''}`} onClick={() => (setActive("About"), setShowTabs(false))}>About</button>
            </ul>
        </div>
        <div className='w-1/5'></div>
        {showTabs == true && (
            <div className='absolute top-[20vh] bg-gray-950 h-[85vh] w-full lm-sm:hidden pm-md:hidden z-10'>
                <ul className='flex flex-col  text-[2.5vh]  items-start divide-y divide-white w-full'>
                    <button className='hover:text-purple-400 w-full h-[10vh] flex justify-center items-center' onClick={() => (setActive("Home"), setShowTabs(false))}>Home</button>
                    <button className='hover:text-purple-400 w-full h-[10vh] flex justify-center items-center' onClick={() => (setActive("News"), setShowTabs(false))}>News</button>
                    <button className='hover:text-purple-400 w-full h-[10vh] flex justify-center items-center' onClick={() => (setActive("Merch"), setShowTabs(false))}>Merch</button>
                    <button className='hover:text-purple-400 w-full h-[10vh] flex justify-center items-center' onClick={() => (setActive("About"), setShowTabs(false))}>About</button>
                    <button className=' w-full h-[10vh] pl-[10vw]'></button>
                </ul>
            </div>
        )}
    </div>
  )
}

