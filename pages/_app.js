import '../styles/app.scss';
import ButtonAppBar from '../components/ButtonAppBar.js';

export default function App({Component, pageProps}){
    return (
        <div>
            <ButtonAppBar />
            <Component {...pageProps} />
        </div>
    );
}
