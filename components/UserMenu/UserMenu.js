import React, {useState} from 'react';
import css from './UserMenu.scss';

export default function UserMenu(props){
    const [isEnter, onEnter] = useState(false);

    const pointerEnter = (evt) => {
        onEnter(true);
        console.log(evt.pageX);
    };
    const pointerLeave = (evt) => {
        onEnter(false);
        console.log(evt.pageX);
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
        >
            usermenu component
        </div>
    );
}
