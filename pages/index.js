import {useState} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import EventEmitter3 from 'eventemitter3';

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
    const emitter = new EventEmitter3();

    const onClick = () => {
        emitter.emit('click');
    };

    return (
        <div className={css.wrap}>
            <Head>
                <title>top page</title>
            </Head>
            <DinamicRenderingCanvasNoSSR emitter={emitter} />
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

