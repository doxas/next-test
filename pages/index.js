import {useState, useCallback, createContext} from 'react';
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

const INDEX_CONTEXT = {
    color: 'red',
    setColor: () => {},
};

export const IndexContext = createContext(INDEX_CONTEXT);

export default function Index(props){
    const emitter = new EventEmitter3();

    // color という名前のローカルステートを定義
    const [color, setColorState] = useState(INDEX_CONTEXT.color);
    // setColor というコールバックを定義
    const setColor = useCallback((colorValue) => {
        // コールバックに渡された色が既存のステートと異なる場合 emit
        if(color !== colorValue){
            emitter.emit('changecolor', colorValue);
        }
        // ステートを更新
        setColorState(colorValue);
    }, [emitter, color, setColorState]);
    const indexProviderValue = {color, setColor};

    return (
        <div className={css.wrap}>
            <Head>
                <title>top page</title>
            </Head>
            <IndexContext.Provider value={indexProviderValue}>
                <DinamicRenderingCanvasNoSSR emitter={emitter} />
                <div className={css.interfacewrap}>
                    interfaces.
                    <UserMenu
                        height="100px"
                        enterHeight="200px"
                    />
                </div>
            </IndexContext.Provider>
        </div>
    );
}

