import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation';
import Mdx from '@/components/Mdx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
async function getDocFromParams(post) {
    const doc = allDocs.find((doc) => doc.slugAsParams === post)
    if (!doc) notFound()
    return doc
}

const Page =  ({ params }) => {
    const router = useRouter();
    const [loading,setLoading] = useState(true);
    const [doc,setDoc] = useState(null);

    useEffect(()=>{
        (async()=>{
            try {
                const docD = await  getDocFromParams(router.query.post);
                setDoc(docD)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    },[])
    if (loading) {
        return <p>loading...</p>
    }
    return (
        <div>
            <Mdx code={doc?.body?.code} />
        </div>
    );
};

export default Page;
