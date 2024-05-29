import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn, FaFacebookF,  } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const RootNavbar = () => {
    return (
        <>
        <nav className='text-[#0000FF]  font-sans  py-[10px] md:flex justify-between border-b'>
            <div className="logo ">
                <h1 className=' text-[18px] font-bold'>Matt Rickard</h1>
            </div>
            <div className='list md:flex items-center gap-8 text-[1rem]  '>
                <ul className='flex gap-6'>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/archive">Posts</Link></li>
                    <li><a href="#">Subscribe</a></li>
                </ul>
                <div className=" space-x-10 flex text-lg me-7 ">
                    <FaLinkedinIn />
                    <IoLogoTwitter />
                    <MdOutlineAlternateEmail />
                </div>
            </div>

        </nav>
        </>
    )
}

export default RootNavbar