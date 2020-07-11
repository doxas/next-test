import Head from 'next/head';
import Link from 'next/link';

import UserMenu from '../components/UserMenu/UserMenu.js';
import css from '../styles/index.scss';

export default function Index(){
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
                <UserMenu
                    height="100px"
                    enterHeight="200px"
                />
            </div>
        </div>
    );
}

