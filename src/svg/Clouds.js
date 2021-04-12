import React from 'react'
import styled from 'styled-components'

const SvgContainer = styled.div`
max-width: 150px;
margin: 20px;
width: 100%;

.big-path,
.lightening,
.line,
.little-path {
stroke-miterlimit: 10;
stroke-width: 2;
stroke-linecap: round;
fill: none;
}

.cloud {
fill: #DAD9D9;
}

.little-path {
stroke-width: 1;
}

.overcast-clouds .cloud-still {
    fill: #DAD9D9;
    animation: bounce 4s ease-in-out alternate-reverse infinite;
  }
  .overcast-clouds .cloud-still:nth-child(1) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }

  @-webkit-keyframes bounce {
    0%, 50%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0.1deg);
    }
    30%, 80% {
      transform: translateY(3px) translateX(3px) rotate(0.1deg);
    }
  }
  @keyframes bounce {
    0%, 50%, 100% {
      transform: translateY(0px) translateX(0px) rotate(0.1deg);
    }
    30%, 80% {
      transform: translateY(3px) translateX(3px) rotate(0.1deg);
    }
  }

`

export default function Clouds(){
    return (
        <SvgContainer>
            <svg className="overcast-clouds" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 82.6 52.3" space="preserve">
<g id="Layer_1">
	<path className="cloud-still" d="M21.8,24.2c0.1,0,0.3-1.1,0.4-1.2c0.5-1.2,1.1-2.4,1.8-3.4c3.9-5.7,12.6-7.1,18.2-3.1c0,0,3.7-6,11-5.9
		c0,0,5.6-0.6,10.3,4.9c0,0,2.8,3.3,2.9,7.4c0,0,3.2-0.5,5.4,1c0,0,6.2,2.6,5.9,10.8H56.3c0,0-2-3.5-7.3-3.6c0.2,0-0.5-2.2-0.6-2.4
		c-1.4-4.4-5.5-6.9-9.9-7.4c-3.4-0.4-6.6,0.8-9,3.2c-0.1,0.1-1.2,1.3-1.2,1.3S25.3,23.6,21.8,24.2z"/>
	<path className="cloud-still" d="M57.6,40.7c0-4.8-3.9-8.6-8.6-8.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9
		c-2-2.9-5.3-4.8-9-4.8c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8
		c-1.8-1.2-3.9-1.9-6.2-1.9c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h12.9h0.7C57.6,41.8,57.6,41.4,57.6,40.7z"/>
</g>
<g id="Layer_2">
</g>
</svg>
        </SvgContainer>
    )
}