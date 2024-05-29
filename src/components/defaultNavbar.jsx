import Link from 'next/link';
import React from 'react'


const DefaultNavbar = () => {
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
                </ul>
               
            </div>

        </nav>
        </>
    )
}

export default DefaultNavbar;