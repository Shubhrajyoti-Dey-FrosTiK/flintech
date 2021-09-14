import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQ.css'

export default function FAQ() {
    useEffect(()=>{
        AOS.init()
    })

    return (
        <div data-aos="fade-in" className="FAQ">
            <div style={{color:"#f7c114",marginBottom:"30px"}}>
                <h1>FAQs :</h1>
            </div>
            <div className="FAQContents">
                <div style={{paddingBottom:"20px"}}>
                    <h3 style={{color:"#f7c114"}}>What is NFTFLIXPRO ?</h3>
                    <h5>NFTFLIXPRO is a platform to empower creators, at same time allows fans to earn passive Income by supporting their creators.</h5>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <h3 style={{color:"#f7c114"}}>What is use of NFTFLIXPRO Token? </h3>
                    <h5>Participate in Film Fundings, <br></br>Earn Royalties from Tickets & Licenses Sold.</h5>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <h3 style={{color:"#f7c114"}}>Why Should I Invest Into It?</h3>
                    <h5>As we onboard more creators,<br></br>NFTFLIXPRO is aiming to become Netflix of Decentralized World,<br></br>Where we value creators & audience over profits.</h5>
                </div>
            </div>
            <div>
                <h4>
                That’s why we empower creators to create content , while their fans can benefit from creators work too.
                </h4>
            </div>
        </div>
    )
}
