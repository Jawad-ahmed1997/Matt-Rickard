
import React from 'react'
import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'
import Head from 'next/head';


const Archive = () => {

  return (
    <>
      <Head>
        <title>Archive</title>
        <meta name="title" content={"Archive"} />
        <meta name="description" content="All Posts - Matt Richard" />
      </Head>
      <div>
        <h1 className=' text-xl mt-5 font-semibold'>Archive</h1>
        <ul className=' mt-5'>
          {allDocs?.map((item) => (
            <li className=' flex  gap-8'>
              <span>{item?.date}</span>
              <Link href={`/${item?.slugAsParams}`} className=' text-[#62009F] underline'>{item?.slugAsParams}</Link>
            </li>

          ))}
        </ul>
      </div>
    </>
  )
}
export default Archive;