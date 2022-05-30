import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/notfound.module.css'
const ErrorPage = () => {
    const router = useRouter()
    return (
        <div className={styles.notfoundContainer}>

            <h1>404</h1>
            <h3>Page not found</h3>
            <button onClick={() => router.push('/')}>Go to home</button>
        </div>
    );
};

export default ErrorPage;