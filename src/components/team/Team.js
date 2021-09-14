import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Team.css'

export default function Team() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div data-aos="fadeIn" className="Team" id="TeamID">
        <div style={{marginBottom:"30px"}}>
            <h1><b>Team</b></h1>
        </div>
        <div className="TeamMembers">
            <div className="TeamDetails">
                <h2>Rakesh Yadav</h2>
                <h4>Senior Developer</h4>
                <p>7+ Years Node JS Experience</p>
            </div>
            <div className="TeamDetails">
                <h2>Mukesh Parikh</h2>
                <h4>CMO</h4>
                <p>Strong Industry Network</p>
            </div>
            <div className="TeamDetails">
                <h2>Parag Shah</h2>
                <h4>CEO</h4>
                <p>In Blockchain Since 2014</p>
            </div>
        </div>
    </div>
    )
}
