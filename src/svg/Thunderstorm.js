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

.hurricane-svg .line {
    stroke: #BAE2E0;
    opacity: 1;
    animation: fadeIn 0.8s ease-in alternate-reverse infinite;
  }
  .hurricane-svg .line:nth-child(1) {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
  }
  .hurricane-svg .line:nth-child(2) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }
  .hurricane-svg .line:nth-child(3) {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  .hurricane-svg .line:nth-child(4) {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }
  .hurricane-svg .line:nth-child(5) {
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  .hurricane-svg .line:nth-child(6) {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  .hurricane-svg .line:nth-child(7) {
    -webkit-animation-delay: 0.7s;
            animation-delay: 0.7s;
  }
  .hurricane-svg .line:nth-child(8) {
    -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
  }
  .hurricane-svg .line:nth-child(9) {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  .hurricane-svg .line:nth-child(10) {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  .hurricane-svg .line:nth-child(11) {
    -webkit-animation-delay: 1.1s;
            animation-delay: 1.1s;
  }
  .hurricane-svg .line:nth-child(12) {
    -webkit-animation-delay: 1.2s;
            animation-delay: 1.2s;
  }
  .hurricane-svg .lightening {
    -webkit-animation: flash 1s infinite;
            animation: flash 1s infinite;
    stroke: #E5D8BA;
  }
  .hurricane-svg .big-path,
  .hurricane-svg .little-path {
    stroke: #BAE2E0;
  }
  .hurricane-svg .big-path {
    stroke-width: 1;
  }
  .hurricane-svg .little-path {
    stroke-width: 0.5;
  }
  .hurricane-svg .cloud {
    -webkit-animation: colorChange 1s infinite;
            animation: colorChange 1s infinite;
  }

  @-webkit-keyframes colorChange {
    0%, 90% {
      fill: #646478;
    }
    60%, 100% {
      fill: rgba(200, 200, 200, 0.8);
    }
  }
  
  @keyframes colorChange {
    0%, 90% {
      fill: #646478;
    }
    60%, 100% {
      fill: rgba(200, 200, 200, 0.8);
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

export default function Thunderstorm(){
    return (
       <SvgContainer>
           <svg className="hurricane-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-437 254.4 85 52.6" space="preserve">
           <path className="cloud" d="M-361.9,280.5c1.4,0,2.6,0.7,3.4,1.7h1.1c0.4-8.2-5.9-10.8-5.9-10.8c-2.2-1.5-5.4-1-5.4-1
           c-0.1-4.1-2.9-7.4-2.9-7.4c-4.7-5.5-10.3-4.9-10.3-4.9c-7.4-0.2-11,5.9-11,5.9c-5.6-4-14.3-2.6-18.2,3.1c-0.7,1.1-1.3,2.2-1.8,3.4
           c0,0.1-0.3,1.2-0.4,1.2c3.5-0.6,6.6,1.6,6.6,1.6s1.1-1.1,1.2-1.3c2.4-2.4,5.6-3.6,9-3.2c4.4,0.5,8.5,3,9.9,7.4
           c0.1,0.2,0.8,2.4,0.6,2.4c5.3,0.1,7.3,3.6,7.3,3.6h13.4C-364.5,281.2-363.3,280.5-361.9,280.5z"/>
        <path className="cloud" d="M-386,279.6c-0.2,0-0.4,0-0.6,0.1c-0.1-0.8-0.2-1.7-0.4-2.4c-0.3-1-0.8-2-1.4-2.9c-2-2.9-5.3-4.8-9-4.8
    c-2.3,0-4.4,0.7-6.1,1.9c-0.6,0.4-1.1,0.8-1.6,1.3c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.5-0.6,0.8c-1.8-1.2-3.9-1.9-6.2-1.9
    c-5.5,0-10,4-10.8,9.3c-3.5,1-6.1,3.9-6.6,7.6h26.3h12.7h2.3l4.7-6.2c0.6-0.8,1.7-0.9,2.5-0.3s0.9,1.7,0.3,2.5l-3.1,4h0.5h5.6h0.7
    c0.1,0,0.2-0.4,0.2-1.1C-377.4,283.5-381.3,279.6-386,279.6z"/>
<polyline className="lightening" points="-382.8,284.2 -387.9,290.9 -380.6,291.2 -387.9,302 "/>
<path className="line" d="M-426.9,294.4l-5.1,7.3"/>
<path className="line" d="M-420.8,294.4l-5.1,7.3"/>
<path className="line" d="M-415.4,294.4l-5.1,7.3"/>
<path className="line" d="M-409.9,294.4l-5.1,7.3"/>
<path className="line" d="M-404.5,294.4l-5.1,7.3"/>
<path className="line" d="M-399.1,294.4l-5.1,7.3"/>
<path className="line" d="M-393.7,294.4l-5.1,7.3"/>
<path className="line" d="M-388.2,294.4l-5.1,7.3"/>
<g>
    <path className="little-path path-1" d="M-374.8,287.2h10.6"/>
    <path className="little-path path-2" d="M-373.8,289.3h10.9"/>
    <path className="big-path" d="M-376,288.3c0,0,14,0,14,0c1.7,0,3.1-1.4,3.3-3.1c0-0.5,0-1-0.3-1.4c-0.9-2.3-4.1-2.7-5.6-0.7
        c-0.4,0.6-0.7,1.3-0.7,1.9"/>
    <path className="little-path path-3" d="M-364.1,285c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2"/>
</g>
</svg>
       </SvgContainer>
    )
}