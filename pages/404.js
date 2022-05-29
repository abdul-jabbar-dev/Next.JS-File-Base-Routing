import React from 'react';
import  Link  from 'next/link';

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h3>Page not found</h3>
            <Link href= "/">Go to home</Link>
        </div>
    );
};

export default ErrorPage;