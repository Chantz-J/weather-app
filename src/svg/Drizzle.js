import React from 'react'
import styled from 'styled-components'

const SvgContainer = styled.div`
max-width: 200px;
margin: 0 auto;
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

.fog-svg .fog-line:nth-child(2) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }
  .fog-svg .fog-line:nth-child(3) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  .fog-svg .fog-line:nth-child(4) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
  }
  .fog-svg .fog-line:nth-child(5) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  .fog-svg .fog-line:nth-child(6) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
  }
  .fog-svg .fog-line:nth-child(7) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 1.4s;
            animation-delay: 1.4s;
  }
  .fog-svg .fog-line:nth-child(8) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 1.6s;
            animation-delay: 1.6s;
  }
  .fog-svg .fog-line:nth-child(9) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 1.8s;
            animation-delay: 1.8s;
  }
  .fog-svg .fog-line:nth-child(10) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 2s;
            animation-delay: 2s;
  }
  .fog-svg .fog-line:nth-child(11) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 2.2s;
            animation-delay: 2.2s;
  }
  .fog-svg .fog-line:nth-child(12) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 2.4s;
            animation-delay: 2.4s;
  }
  .fog-svg .fog-line:nth-child(13) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 2.6s;
            animation-delay: 2.6s;
  }
  .fog-svg .fog-line:nth-child(14) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 2.8s;
            animation-delay: 2.8s;
  }
  .fog-svg .fog-line:nth-child(15) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 3s;
            animation-delay: 3s;
  }
  .fog-svg .fog-line:nth-child(16) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 3.2s;
            animation-delay: 3.2s;
  }
  .fog-svg .fog-line:nth-child(17) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 3.4s;
            animation-delay: 3.4s;
  }
  .fog-svg .fog-line:nth-child(18) {
    stroke: #BAE2E0;
    animation: pan 10s ease-in-out forwards infinite, fadeIn 4s alternate-reverse infinite;
    -webkit-animation-delay: 3.6s;
            animation-delay: 3.6s;
  }

  @-webkit-keyframes pan {
    0%, 100% {
      transform: translateX(-2px) rotate(0.01deg);
    }
    50% {
      transform: translateX(2px) rotate(0.01deg);
    }
  }
  @keyframes pan {
    0%, 100% {
      transform: translateX(-2px) rotate(0.01deg);
    }
    50% {
      transform: translateX(2px) rotate(0.01deg);
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`
export default function Drizzle(){
    return (
        <SvgContainer>
        <svg className="fog-svg" version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 68 52.6" space="preserve">
<g id="Layer_1">
	<g>
		<path className="cloud st3" d="M62.8,29.3c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
        C48.6,11,44.9,9,40.8,9c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
        c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9h14.1h0.8C62.7,30.6,62.8,30.1,62.8,29.3z"
        />
    <path className="fog-line big-path" d="M7.3,28.8h12.4"/>
    <path className="fog-line big-path" d="M23.5,28.8h38.4"/>
    <path className="fog-line big-path" d="M57.3,32.6h5.2"/>
    <path className="fog-line big-path" d="M31.2,32.6h22.1"/>
    <path className="fog-line big-path" d="M6.2,32.6h21.1"/>
    <path className="fog-line big-path" d="M11.4,43.6H6.2"/>
    <path classname="fog-line big-path" d="M37.5,43.6H15.4"/>
    <path className="fog-line big-path" d="M62.5,43.6H41.4"/>
    <path className="fog-line big-path" d="M6.2,36.4h2.1"/>
    <path className="fog-line big-path" d="M11.9,36.4h6"/>
    <path className="fog-line big-path" d="M21.8,36.4h20.4"/>
    <path className="fog-line big-path" d="M46.3,36.4h16.1"/>
    <path className="fog-line big-path" d="M55.2,40.2h7.3"/>
    <path className="fog-line big-path" d="M48.3,40.2h2.8"/>
    <path className="fog-line big-path" d="M37.3,40.2H44"/>
    <path className="fog-line big-path" d="M18.3,40.2h15.3"/>
    <path classNmae="fog-line big-path" d="M6.2,40.2h8"/>
	</g>
</g>

</svg>
</SvgContainer>
    )
}