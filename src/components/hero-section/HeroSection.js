import React , { useEffect } from 'react' 
import MovingText from 'react-moving-text'
import './HeroSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div data-aos="fade-in" style={{"backgroundColor":"black","color":"white","height":"80%","borderBottomLeftRadius":"20px","borderBottomRightRadius":"20px"}} id="HeroID">
            <div data-aos="fade-in" className="Hero">
                <h1 id="HeroHeading">
                    <MovingText
                    type="fadeIn"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    World's first decentralized funding platform for film creators
                    </MovingText>
                </h1>
                <h4 id="HeroSubHeading">
                    <MovingText
                    type="fadeIn"
                    duration="4000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                        Invest in your favorite creators, get unique NFTs & earn passive royalty from their movie. Who will win? centralized media companies OR thousands of individual creators?
                    </MovingText>
                </h4>
            </div>
        </div>
    )
}
