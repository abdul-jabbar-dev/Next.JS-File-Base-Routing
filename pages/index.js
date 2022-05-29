import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Navbar from './navbar';

export default function Home() {

  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
