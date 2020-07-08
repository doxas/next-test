import '../styles/app.scss';
import Base from '../components/Base/Base.js';

export default function App({Component, pageProps}){
    return (
        <div>
            <Base piyo='piyo' />
            <Component {...pageProps} />
        </div>
    );
}
