import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQ.css'
import { Accordion } from 'react-bootstrap';

export default function FAQ() {
    useEffect(()=>{
        AOS.init()
        var clickFAQ=document.getElementsByClassName("accordion-button");
        for(var i=0;i<clickFAQ.length;i++){
            clickFAQ[i].click()
        }
    })

    return (
        <div style={{display:"block",margin:"auto",maxWidth:"1100px"}}>
        <div style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <div data-aos="fade-in" className="FAQ" id="FAQID">
            <div className="FAQQuestions">
                <h1>FAQs :</h1>
            </div>
            <div className="FAQContents">
                {/* <div className="FAQText">
                    <h3 className="FAQQuestions">What is NFTFLIXPRO ?</h3>
                    <h5>NFTFLIXPRO is a platform to empower creators, at same time allows fans to earn passive Income by supporting their creators.</h5>
                </div>
                <div className="FAQText">
                    <h3 className="FAQQuestions">What is use of NFTFLIXPRO Token? </h3>
                    <h5>Participate in Film Fundings, <br></br>Earn Royalties from Tickets & Licenses Sold.</h5>
                </div>
                <div className="FAQText">
                    <h3 className="FAQQuestions">Why Should I Invest Into It?</h3>
                    <h5>As we onboard more creators,<br></br>NFTFLIXPRO is aiming to become Netflix of Decentralized World,<br></br>Where we value creators & audience over profits.</h5>
                </div> */}
                <div  className="faqs" style={{paddingBottom:"20px"}}>
                    <Accordion className="faqs" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="faqs">What is NFTFLIXPRO ?</Accordion.Header>
                        <Accordion.Body>
                        NFTFLIXPRO is a platform to empower creators, at same time allows fans to earn passive Income by supporting their creators.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <Accordion className="faqs" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is use of NFTFLIXPRO Token?</Accordion.Header>
                        <Accordion.Body>
                        Participate in Film Fundings, <br></br>Earn Royalties from Tickets & Licenses Sold.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
                <div style={{paddingBottom:"20px"}}>
                    <Accordion className="faqs" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why Should I Invest Into It?</Accordion.Header>
                        <Accordion.Body>
                        As we onboard more creators,<br></br>NFTFLIXPRO is aiming to become Netflix of Decentralized World,<br></br>Where we value creators & audience over profits.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
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
