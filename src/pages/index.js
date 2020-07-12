// react and next
import {useState, useCallback, createContext} from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// store and hooks
import {APP_INITIAL_STATE, AppContext} from '../store/store.js';
import {useProviderValue, emitter} from '../hooks/useProviderValue.js';

// components
import UserMenu from '../components/UserMenu/UserMenu.js';

// style
import css from '../styles/index.scss';

// dinamic import with not ssr
const DinamicRenderingCanvasNoSSR = dynamic(() => {
    return import('../components/RenderingCanvas/RenderingCanvas.js')
    .then((module) => {
        console.log('🐠: dynamic import with no ssr', module);
        return module.default;
    });
}, {ssr: false});

/**
 * index page functional component
 */
export default function Index(props){
    // カスタムフックを使ってイベント名付きでステートの初期化を行う
    // このとき、以下で言う setColor がステートを更新するための関数で、これはメモ化されたものが返される
    // 以下で言うと color と APP_INITIAL_STATE.color が同義であり、setColor が呼ばれた際に……
    // もしステートが変化する場合は changecolor が emit される、という意味になる
    // emit されたイベントは emitter を props 経由で受け取ってる側で検出できるので……
    // App のステートが更新されたときに WebGL 実装など別の実装の API を叩ける
    //
    // このような React の定石とはちょっと異なる実装になっているのは、Canvas のエレメントが
    // 常にリアクティブに動いてほしいのではなく、App のステートが変更になったことを検出し
    // それに応じてイベントを発火したいだけだからである
    const [color, setColor] = useProviderValue('changecolor', useState(APP_INITIAL_STATE.color));
    // 上記で生成されたステートと updator を Provider の value として Consumer に渡す
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

