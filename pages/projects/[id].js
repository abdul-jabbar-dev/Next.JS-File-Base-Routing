/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useRouter } from 'next/router'
const project = () => {
    const router = useRouter()
    const id = router.query.id || []
    router.
    return (
        <div>
            <h1>Post: {id}</h1>
        </div>
    );
};

export default project;