import React from 'react';
import Navbar from '../../Components/Navbar';
const index = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1>
                This is a Projects
            </h1>
            <style jsx> {`
                h1{
                    text-align:center
                }
            `}</style>
        </>
    );
};

export default index;