import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQ.css'
import { Accordion,Card } from 'react-bootstrap';
import { useBeforeunload } from 'react-beforeunload';

export default function FAQ() {
    useEffect(()=>{
        AOS.init()
    })
    // useBeforeunload((event)=>{
    //     window.scrollTo(0,0)
    //   })
    

    return (
        <div style={{display:"block",margin:"auto",maxWidth:"1100px"}}>
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <div data-aos="fade-in" className="FAQ" id="FAQID">
            <div style={{color:"#f7c114",marginBottom:"30px"}}>
                <h1>FAQs :</h1>
            </div>
            <div className="FAQContents">
                <div className="FAQText">
                    <h3 style={{color:"#f7c114"}}>What is NFTFLIXPRO ?</h3>
                    <h5>NFTFLIXPRO is a platform to empower creators, at same time allows fans to earn passive Income by supporting their creators.</h5>
                </div>
                <div className="FAQText">
                    <h3 style={{color:"#f7c114"}}>What is use of NFTFLIXPRO Token? </h3>
                    <h5>Participate in Film Fundings, <br></br>Earn Royalties from Tickets & Licenses Sold.</h5>
                </div>
                <div className="FAQText">
                    <h3 style={{color:"#f7c114"}}>Why Should I Invest Into It?</h3>
                    <h5>As we onboard more creators,<br></br>NFTFLIXPRO is aiming to become Netflix of Decentralized World,<br></br>Where we value creators & audience over profits.</h5>
                </div>
                {/* <div style={{paddingBottom:"20px"}}>
                    <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div> */}
            </div>
            
            <div>
                <h4>
                That’s why we empower creators to create content , while their fans can benefit from creators work too.
                </h4>
            </div>
        </div>
        </div>
        </div>
    )
}
