import React from 'react'
//import { NavLink } from 'react-router-dom';
import Web from "../src/image/img4.jpg";
import Common from "./Common";

function Home() {
    return ( 
   
<>
    <Common name="Grow your business with" 
    imgsrc={Web}
    visit="/Service"
    btname="Get started"


    />

</>




    )
}

export default Home