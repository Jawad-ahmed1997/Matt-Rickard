import React from 'react'

const Home = () => {
    return (
        <div className=' text-[1rem]'>
            <h1 className=' text-xl mt-5 font-semibold'>Pseudonyms in American History</h1>
            <p className='mt-1 text-md' >Des 5, 2023</p>
            <p className='mt-5'>Debates around the ratification of the Constitution and the early formation of the United States happened through pseudonymous authors. They often used names borrowed from Greek or Roman History.
            </p>
            <p className='mt-5'>Why?</p>
            <ul className=' flex flex-col gap-5 mt-5'>
                <li>
                    Plausibly some protection against retaliation. However, most pseudonymous writing was quickly attributed to authors.
                </li>
                <li>
                    Power in names. The names weren't chosen at random. Often, they called back to famous Romans who took part in the formation of the Roman Republic. Or others who were known for their virtue or principles.
                </li>
            </ul>
            <p className='mt-5'>
                Alexander Hamilton might have written under the most pseudonyms (at least five). Benjamin Franklin used at least three. Here's a list of some of the more popular ones around the time of the American Revolution.

            </p>
            <p className=' mt-5'>
                <span className=' font-bold'>Phocion </span> (Alexander Hamilton) - Essays defending the Jay Treaty with Great Britain. Phocion was an Athenian statesman known for his integrity and opposition to demagoguery.

            </p>
            <p className='mt-5'>
                <span className=' font-bold'>Columbus </span> (Alexander Hamilton) - Defending the Continental Congress and criticizing British policies.
            </p>

            <p className='mt-5'>
                <span className=' font-bold'>Publius </span> Publius (Alexander Hamilton, James Madison, John Jay) - The authors of the Federalist Papers, which were a series of essays advocating for the ratification of the Constitution. Individual authorship wasn't released until Hamilton's death, and even then historians are still trying to match authors to text. It's hypothesized that Hamilton wrote 51 essays, Madison 29, and Jay 5. Publius Valerius Poplicola was a Roman consul known for his role in founding the Roman Republic.
            </p>
        </div>
    )
}

export default Home