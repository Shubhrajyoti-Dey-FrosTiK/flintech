import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../featured-in/FeaturedIn.css'
import MovingText from 'react-moving-text'
import './BackedBy.css'

export default function BackedBy() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div className="BackedBy" id="BackedByID">
            <div style={{display:"block",margin:"auto",maxWidth:"1100px",paddingTop:"30px",paddingBottom:"30px"}}>
            <div>
                <h1 style={{"fontWeight":"600",marginBottom:"25px"}}>
                <MovingText
                    type="fadeIn"
                    duration="8000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Backed By
                    </MovingText>
                </h1>
            </div>
            
            <MovingText
                    type="fadeIn"
                    duration="7000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                <div className="BackedByList">
                    <div className="BackedByContent"><p>Launch Pad Name </p></div>
                    <div className="BackedByContent"><p>Investor Name</p></div>
                </div>
                <div className="BackedByList">
                    <div className="BackedByContent"><p>Sample Name </p></div>
                    <div className="BackedByContent"><p>Investor Name</p></div>
                </div>
            </MovingText>
            </div>
        </div>
    )
}
