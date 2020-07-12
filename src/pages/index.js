import {useState, useCallback, createContext} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import {APP_INITIAL_STATE, AppContext} from '../hooks/store.js';
import {useProviderValue, emitter} from '../hooks/useProviderValue.js';

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
    const [color, setColor] = useProviderValue('changecolor', useState(APP_INITIAL_STATE.color));
    const providerValue = {color, setColor};

    return (
        <div className={css.wrap}>
            <Head>
                <title>top page</title>
            </Head>
            <AppContext.Provider value={providerValue}>
                <DinamicRenderingCanvasNoSSR emitter={emitter} />
                <div className={css.interfacewrap}>
                    interfaces.
                    <UserMenu
                        height="100px"
                        enterHeight="200px"
                    />
                </div>
            </AppContext.Provider>
        </div>
    );
}

