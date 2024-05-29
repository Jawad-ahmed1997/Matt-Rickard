
import Head from 'next/head';
import Link from 'next/link'
import React from 'react'

const About = () => {
    const socialLinks = [
        { title: "Twitter (@mattlovestech)", url: "#" },
        { title: "GitHub (mattlovestech)", url: "#" },
    ];
    const apiLinks = [
        {
            title: "baño.nyc",
            url: "#",
            dec: "API that gives developers access to public restroom data in New York City."
        },
        {
            title: "hbcucolor",
            url: "#",
            dec: "API with all of the  RGB, HEX, and CYMK color codes for  107 HBCUs"
        }

    ];
    const mobAppLink = [
        {
            title: "PushupParty",
            url: "#",
            dec: "Counts push-ups automatically and allows users to compete."
        },
        {
            title: "pocketLBO",
            url: "#",
            dec: "Leveraged buyout calculator that exports to .xlsx"
        },
    ]
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="title" content={"About"} />
                <meta name="description" content="This is my diary where I think things “out loud” and experiment. I mostly write code for my own enjoyment and I hope everyone benefits from my projects as much as I do." />
            </Head>
            <div>
                <h1 className=' text-sm md:text-xl mt-5 font-semibold'>About</h1>
                <p className='mt-5'>New York City 🗽</p>
                <p className='mt-5'>This is my diary where I think things “out loud” and experiment. I mostly write code for my own enjoyment and I hope everyone benefits from my projects as much as I do. </p>
                <ul className=' text-[#62009F] space-y-2 mt-5 ml-3 '>
                    {socialLinks?.map((item, ind) => (
                        <li className=' flex gap-5' key={ind}>
                            <Link href={item?.url} className=' underline text-[#62009F]'> {item?.title}</Link>
                        </li>
                    ))}
                </ul>
                <h1 className=' text-xl mt-5 font-semibold'>Software</h1>
                <p className=' mt-10'>API</p>
                <ul className='space-y-1 mt-2 ml-3 list-disc'>
                    {apiLinks.map((item, ind) => (
                        <li className=' flex gap-1' key={ind}>
                            <div>
                                <span className=' font-extrabold text-xl mr-3 text-[#62009F]'>.</span>
                            </div>
                            <p>
                            <Link href={item?.url} className='underline text-[#62009F]'> {item?.title}</Link>
                                <span className='pl-2'>- </span>
                                {item?.dec}
                            </p>
                        </li>
                    ))}
                </ul>

                <p className='mt-10'>Mobile Apps (iOS + Android)</p>
                <ul className='space-y-1 mt-2 ml-3 list-disc'>

                    {mobAppLink.map((item, ind) => (
                        <li className=' flex gap-1' key={ind}>
                        <div>
                            <span className=' font-extrabold text-xl mr-3 text-[#62009F]'>.</span>
                        </div>
                        <p>
                        <Link href={item?.url} className='underline text-[#62009F]'> {item?.title}</Link>
                            <span className='pl-2'>- </span>
                            {item?.dec}
                        </p>
                    </li>
                    ))}


                </ul>
            </div>
        </>

    )
}

export default About