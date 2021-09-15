import React,{ useEffect } from 'react'
import { Navbar,Button,Nav,Form,FormControl,NavDropdown,NavItem } from 'react-bootstrap'
import Headroom from "headroom.js";
import './Navbar.css'
export default function CNavbar() {
    useEffect(() => {
        var myElement = document.getElementsByClassName("ProjectNav")[0];
        var headroom  = new Headroom(myElement);
        headroom.init();
        myElement = document.getElementsByClassName("ProjectNav")[1];
        headroom  = new Headroom(myElement);
        headroom.init();
    })
    const brand = {
        color: "white",
      };
    return (
    <>
        <Navbar id="MobileNav" className=" ProjectNav color-nav " expand="xxl" collapseOnSelect fixed="top" style={{justifyContent:"center"}}>
            <div style={{"paddingLeft":"15px"}}>
                <Navbar.Brand href="#">
                        NFTFLIXPRO
                </Navbar.Brand>
            </div>
            <div>
                <Navbar.Toggle/>
            </div>
                {/* <div> */}
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/#FeaturedInID" style={{marginTop:"7px",marginLeft:"10px"}}>Featured In</Nav.Link>
                        <Nav.Link href="/#BackedByID" style={{marginTop:"7px",marginLeft:"10px"}}>Backed By</Nav.Link>
                        <Nav.Link href="/#FeaturesID" style={{marginTop:"7px",marginLeft:"10px"}}>Features</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" style={{marginTop:"7px",marginLeft:"10px"}}>Tokenomics</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" style={{marginTop:"7px",marginLeft:"10px"}}>Problem</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" style={{marginTop:"7px",marginLeft:"10px"}}>Solution</Nav.Link>
                        <Nav.Link href="/#RoadmapID" style={{marginTop:"7px",marginLeft:"10px"}}>Roadmap</Nav.Link>
                        <Nav.Link href="/#TeamID" style={{marginTop:"7px",marginLeft:"10px"}}>Team</Nav.Link>
                        <Nav.Link href="/#FAQID" style={{marginTop:"7px",marginLeft:"10px"}}>FAQs</Nav.Link>
                        <Nav.Link href="*" style={{marginLeft:"10px"}}>
                        <Button variant="outline-dark">Download White Paper</Button>                           
                        </Nav.Link>
                        <Nav.Link href="/#CTAID" style={{marginLeft:"10px"}}>
                        <Button variant="dark">Fund Top Movies</Button>                           
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>

        <Navbar id="DesktopNav" className="ProjectNav color-nav" expand="lg" collapseOnSelect fixed="top" style={{flexDirection:"column",justifyContent:"center"}}>
            <div style={{display:"flex",minWidth:"1200", maxWidth:"1200"}}>
            <div style={{"paddingLeft":"15px","paddingTop":"12px",paddingRight:"2px"}}>
                <Navbar.Brand href="#">NFTFLIXPRO</Navbar.Brand>
            </div>
                    <Nav>
                        <Nav.Link href="/#FeaturedInID" className="NavContent">FeaturedIn</Nav.Link>
                        <Nav.Link href="/#BackedByID" className="NavContent">BackedBy</Nav.Link>
                        <Nav.Link href="/#FeaturesID" className="NavContent">Features</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" className="NavContent">Tokenomics</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" className="NavContent">Problem</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" className="NavContent">Solution</Nav.Link>
                        <Nav.Link href="/#RoadmapID" className="NavContent">Roadmap</Nav.Link>
                        <Nav.Link href="/#TeamID" className="NavContent">Team</Nav.Link>
                        <Nav.Link href="/#FAQID" className="NavContent">FAQs</Nav.Link>
                        <Nav.Link href="*" style={{marginLeft:"-5px"}}>
                        <Button variant="outline-dark">WhitePaper</Button>                           
                        </Nav.Link>
                        <Nav.Link href="/#CTAID" style={{marginLeft:"-12px"}}>
                        <Button variant="dark">Fund Top Movies</Button>                           
                        </Nav.Link>
                    </Nav>
                </div>
        </Navbar>
    </>
    )
}