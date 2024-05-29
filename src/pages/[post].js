import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation';
import Mdx from '@/components/Mdx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
async function getDocFromParams(post) {
    console.log("allDocs",allDocs)
    const doc = allDocs.find((doc) => doc.slugAsParams === post);
    console.log("doc",doc)
    if (!doc) notFound()
    return doc
}

const Page = ({ params }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [doc, setDoc] = useState(null);
    console.log(router.query.post)
    useEffect(() => {
        (async () => {
            try {
                const docD = await getDocFromParams(router.query.post);
                setDoc(docD)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [router.query.post]);

    if (loading) {
        return <p>loading...</p>
    };
    console.log(doc)
    return (
        <>
            <Head>
                <title>{doc?.title}</title>
                <meta name="title" content={doc?.title} />
                <meta name="description" content={doc?.description} />
            </Head>
            <div>
            {doc?.body?.code && (
                <Mdx code={doc?.body?.code} />
            )}
            </div>
        </>

    );
};

export default Page;
