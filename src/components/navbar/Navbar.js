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
            <Navbar id="ProjectNav" className="color-nav" expand="lg" collapseOnSelect fixed="top">
                <Navbar.Brand href="#">
                    <div style={{"paddingLeft":"15px"}}>
                        NFTFLIXPRO
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="*" style={{marginLeft:"10px"}}>
                        <Button variant="outline-dark">Download White Paper</Button>                           
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        {/* </headroom> */}
        </div>
    </>
    )
}
