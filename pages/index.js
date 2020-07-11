import Head from 'next/head';
import Link from 'next/link';

import css from '../styles/index.scss';

function Index(){
    let isEnter = false;

    const pointerEnter = (evt) => {
        isEnter = true;
        console.log(evt.pageX);
    };
    const pointerLeave = (evt) => {
        isEnter = false;
        console.log(evt.pageX);
    };

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
                <div
                    className={css.interfacefooter}
                    onPointerEnter={pointerEnter}
                    onPointerLeave={pointerLeave}
                >
                </div>
            </div>
        </div>
    );
}

export default Index;
