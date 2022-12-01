import React from 'react';

import globe from "../icons/globe.png"


export default function Header() {
    return (
        <nav className='container header--container header--flex'>
            <img src={globe} alt="" />
            <span className='main--heading'>my travel journal.</span>
        </nav>
    )
}