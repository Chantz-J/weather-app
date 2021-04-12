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

.windy-svg .little-path,
.windy-svg .big-path {
  animation: dash 1s ease-in alternate-reverse infinite, fadeIn 1s alternate-reverse infinite;
}
.windy-svg path {
  stroke: #BAE2E0;
}
.windy-svg .path-1 {
  stroke-dasharray: 7;
  stroke-dashoffset: 7;
}
.windy-svg .path-2 {
  stroke-dasharray: 25;
  stroke-dashoffset: -25;
}
.windy-svg .path-3 {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
}
.windy-svg .path-4 {
  stroke-dasharray: 8;
  stroke-dashoffset: 8;
}
.windy-svg .path-5 {
  stroke-dasharray: 22;
  stroke-dashoffset: -22;
}
.windy-svg .big-path-1 {
  stroke-dasharray: 57;
  stroke-dashoffset: 57;
}
.windy-svg .big-path-2 {
  stroke-dasharray: 76;
  stroke-dashoffset: 76;
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

  @-webkit-keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }


`

export default function Windy(){
    return (
        <SvgContainer>
        <svg version="1.1" className="windy-svg" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="-447 254.4 64 52.6" space="preserve">
        <g id="Layer_1_1_">
            <g>
                <path className="st0 little-path path-1" d="M-429.2,276.8h6.3"/>
                <path className="big-path big-path-1" d="M-438.1,279.3c0,0,20.5,0,20.6,0c4.1,0,7.4-3.4,7.7-7.4c0.1-1.1-0.1-2.3-0.6-3.3c-2.2-5.4-9.8-6.3-13.3-1.7
                    c-1,1.3-1.6,3-1.7,4.6"/>
                <path className="little-path path-2" d="M-422.6,271.7c0-2.8,2.3-5.1,5.1-5.1s5.1,2.3,5.1,5.1c0,2.8-2.3,5.1-5.1,5.1"/>
            </g>
            <g>
                <path className="little-path path-3" d="M-434.1,284.9h30.4"/>
                <path className="little-path path-4" d="M-410.6,280h8.7"/>
                <path className="big-path big-path-2" d="M-442.9,282.7h44c3.6,0,6.6,3,6.8,6.5c0.1,1-0.1,2-0.5,3c-2,4.8-8.7,5.5-11.8,1.5c-0.9-1.2-1.4-2.6-1.5-4.1"
                    />
                <path className="little-path path-5" d="M-403.4,289.4c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5s-2-4.5-4.5-4.5"/>
            </g>
        </g>
        </svg>
        </SvgContainer>
    )
}