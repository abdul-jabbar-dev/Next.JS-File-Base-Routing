import React from 'react';
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <ul>
                <Link href={'home'}><li>Home </li></Link>
                <Link href={'projects'}><li>Projects </li></Link>
                <li>Help </li>
                <li>date  </li>
            </ul>
            <style jsx>{`div{
                list-style: none;
                display: flex ;
                justify-content:center 
            }
            li:hover{
                background-color:blue;
                color:white;
                border-radius:12px;
                cursor:pointer;

            }
           ul li{
                display: inline;
                padding: 5px 20px;
            }`}</style>
        </div>
    );
};

export default Navbar;