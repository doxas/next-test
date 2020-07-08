import css from './Base.scss';

export default function Base(props) {
    return (
        <div className={css.base}>
            base component {props.piyo}
        </div>
    );
}
