// react and next
import {useState, useEffect, useRef} from 'react';

// store and hooks
import {AppContext} from '../../store/store.js';

// style
import css from './RenderingCanvas.scss';

// rendering engine
import WebGLFrame from '../../engine/script.js';

/**
 * not ssr な canvas を持つコンポーネント
 * 基本的に EventEmitter に反応して engine の API を叩くだけの係の人
 */
export default function RenderingCanvas(props){
    let webgl;

    const canvasRef = useRef();

    useEffect(() => {
        console.log('🐟', props);
        webgl = new WebGLFrame(canvasRef.current);

        // TODO:
        // return webgl.dispose();
    }, []);

    props.emitter.on('changecolor', (arg) => {
        console.log('🍎', arg);
        if(webgl != null){
            webgl.render(arg);
        }
    });

    return (
        <div className={css.wrap}>
            <canvas ref={canvasRef} className={css.webglcanvas}></canvas>
        </div>
    );
}

