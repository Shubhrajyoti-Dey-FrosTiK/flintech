import React,{ useEffect } from 'react'
import { Navbar,Button,Nav,Form,FormControl,NavDropdown,NavItem } from 'react-bootstrap'
import Headroom from "headroom.js";
import './Navbar.css'

export default function CNavbar() {
    useEffect(() => {
        var myElement = document.getElementById("ProjectNav");
        var headroom  = new Headroom(myElement);
        headroom.init();
    })
    const brand = {
        color: "white",
      };
    return (
    <>
        <div>
        {/* <headroom id="header" className="header header--fixed hide-from-print" role="banner"> */}
            <Navbar id="ProjectNav" className="color-nav" expand="lg" collapseOnSelect fixed="top"  style={{paddingLeft:"10%",paddingRight:"10%"}}>
                <Navbar.Brand href="#">
                    <div style={{"paddingLeft":"15px"}}>
                        NFTFLIXPRO
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/#FeaturedInID" style={{marginTop:"7px",marginLeft:"10px"}}>Featured In</Nav.Link>
                        <Nav.Link href="/#BackedByID" style={{marginTop:"7px",marginLeft:"10px"}}>Backed By</Nav.Link>
                        <Nav.Link href="/#FeaturesID" style={{marginTop:"7px",marginLeft:"10px"}}>Features</Nav.Link>
                        <Nav.Link href="/#TokenomicsID" style={{marginTop:"7px",marginLeft:"10px"}}>Tokenomics</Nav.Link>
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
        {/* </headroom> */}
        </div>
    </>
    )
}
