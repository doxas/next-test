import {useState} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import css from '../styles/index.scss';
import UserMenu from '../components/UserMenu/UserMenu.js';

const DinamicRenderingCanvasNoSSR = dynamic(() => {
    return import('../components/RenderingCanvas/RenderingCanvas.js')
    .then((module) => {
        console.log('🐠: dynamic import with no ssr', module);
        return module.default;
    });
}, {
    ssr: false
});

export default function Index(props){
    const [color, setColor] = useState('red');
    const onClick = () => {
        console.log(color, setColor);
        setColor('blue');
    };

    return (
        <div className={css.wrap}>
            <Head>
                <title>top page</title>
            </Head>
            <DinamicRenderingCanvasNoSSR color={color} />
            <div className={css.interfacewrap}>
                interfaces.
                <UserMenu
                    height="100px"
                    enterHeight="200px"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

