import Head from 'next/head';
import Link from 'next/link';

import css from '../styles/index.scss';

function Index(){
    return (
        <div className={css.indexwrap}>
            <Head>
                <title>top</title>
                <script src="./vendor/script.js"></script>
            </Head>
            <div className={css.webglwrap}>
                <canvas className={css.webglcanvas}></canvas>
            </div>
            <div className={css.interfacewrap}>
                interfaces.
            </div>
        </div>
    );
}

export default Index;
