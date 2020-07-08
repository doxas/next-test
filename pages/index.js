import Head from 'next/head';
import Link from 'next/link';

function HomePage(){
    return (
        <div>
            <Head>
                <title>index</title>
            </Head>
            <div>Welcome to <span>Next.js</span>!</div>
            <Link href="./about">
                <a>ABOUT</a>
            </Link>
            <style jsx>{`span {color: red;}`}</style>
        </div>
    );
}

export default HomePage;
