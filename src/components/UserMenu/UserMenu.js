// react and next
import {useState, useContext} from 'react';

// store and hooks
import {AppContext} from '../../store/store.js';

// style
import css from './UserMenu.scss';

/**
 * マウスカーソルのホバーで下から浮き上がってくるメニュー
 */
export default function UserMenu(props){
    const {color, setColor} = useContext(AppContext);

    const [isEnter, onEnter] = useState(false);

    const pointerEnter = (evt) => {
        onEnter(true);
        console.log(evt.pageX);
    };
    const pointerLeave = (evt) => {
        onEnter(false);
        console.log(evt.pageX);
    };
    const click = () => {
        console.log(`[${color}] to blue`);
        setColor('blue');
    };

    return (
        <div
            className={css.wrap}
            style={{
                opacity: isEnter === true ? 1.0 : 0.0,
                minHeight: isEnter === true ? props.enterHeight : props.height,
            }}
            onPointerEnter={pointerEnter}
            onPointerLeave={pointerLeave}
            onClick={click}
        >
            usermenu component
        </div>
    );
}
