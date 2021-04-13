import React from 'react'
import styled from 'styled-components'

const SvgContainer = styled.div`
.cls-1, .cls-2 {
    fill: none;
    stroke-linecap: bevel;
    stroke-linejoin: round;
  }
  
  .cls-1 {
    stroke-width: 2px;
  }
  
  .cls-2 {
    fill: none;
    stroke: #fff;
    stroke-width: 4px;
  }
  
  .cls-3 {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 5px;
  }
  
  .cls-4 {
    font-size: 12px;
    font-family: Open Sans;
    font-weight: 700;
    font-style: italic;
  }
`

export default function Loader(){
    return (
        <SvgContainer>
        <svg viewBox="-25 -25 100 100" preserveAspectRatio="true">
	<defs>
		<linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
    	<stop stopColor="rgba(255,255,255,.2)" offset="10%"/>
    	<stop stopColor="rgba(255,255,255,.7)" offset="90%"/>
		</linearGradient>
	</defs>	
	<circle className="cls-1" cx="26" cy="27" r="26" stroke="url(#gr-simple)"/>
	<path className="cls-2" d="M25,0A24.92,24.92,0,0,1,42.68,7.32" transform="translate(1 2)">
		<animateTransform 
				 attributeName="transform" 
         type="rotate"
         dur="1s" 
         from="0 26 27"
         to="360 26 27" 
         repeatCount="indefinite"/>
		</path>
</svg>
</SvgContainer>
    )
}