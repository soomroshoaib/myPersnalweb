import React from 'react'

import Web from "../src/image/img5.jpg";
import Common from "./Common";

export default function About() {
    return (
        <div>
            <Common 
            name="Welcome to About page"
            imgsrc={Web}
            visit="/Contact"
            btname="Contact now" />
        </div>
    )
}



