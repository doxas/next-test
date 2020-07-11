import dynamic from 'next/dynamic'
import Head from 'next/head';
import Link from 'next/link';

import UserMenu from '../components/UserMenu/UserMenu.js';
import css from '../styles/index.scss';

export default function Index(props){
    const DinamicRenderingCanvasNoSSR = dynamic(() => {
        return import('../components/RenderingCanvas/RenderingCanvas.js')
        .then(() => {
            console.log('🐠: canvas loaded', props);
        });
    }, {
        ssr: false
    });

    return (
        <div className={css.wrap}>
            <Head>
                <title>top</title>
                <script src="./vendor/script.js"></script>
            </Head>
            <DinamicRenderingCanvasNoSSR />
            <div className={css.interfacewrap}>
                interfaces.
                <UserMenu
                    height="100px"
                    enterHeight="200px"
                />
            </div>
        </div>
    );
}

