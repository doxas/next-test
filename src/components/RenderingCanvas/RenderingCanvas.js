import React, {useState, useEffect} from 'react';

import css from './RenderingCanvas.scss';
import WebGLFrame from '../../../public/vendor/script.js';

export default function RenderingCanvas(props){
    let webgl;

    useEffect(() => {
        console.log('🐟', props);
        webgl = webgl || new WebGLFrame();
        webgl.init();

        // TODO:
        // return webgl.dispose();
    }, []);

    props.emitter.on('changecolor', (arg) => {
        console.log('🍎', arg);
        webgl.render(arg);
    });

    return (
        <div className={css.wrap}>
            <canvas className={css.webglcanvas}></canvas>
        </div>
    );
}

