/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbar from '../Components/Navbar'
import Image from 'next/image'
import style from '../styles/home.module.css'
import Head from 'next/head';
const home = () => {
    return (
        <div>
            <Head><title>Home</title></Head>
            <Navbar></Navbar>
            <h1 className={style.hadding}>This is home</h1>
            <Image width={1200} height={1000} src='/tree.jpg'>
            </Image>
        </div>
    );
};

export default home;