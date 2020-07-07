import Link from 'next/link'

import Button from '@material-ui/core/Button';

function HomePage(){
    return (
        <div>
            <div>Welcome to <span>Next.js</span>!</div>
            <Link href="./about">
                <a>ABOUT</a>
            </Link>
            <Button variant="contained" color="primary">Hello World</Button>
            <style jsx>{`span {color: red;}`}</style>
        </div>
    );
}

export default HomePage;
