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

.clear-sky-svg {
    animation: expand 0.8s alternate-reverse infinite;
  }
  .clear-sky-svg .sun {
    fill: #E5D8BA;
  }
  .clear-sky-svg .line {
    stroke: #E5D8BA;
    stroke-dasharray: 7;
    animation: dash 0.8s alternate-reverse infinite, fadeIn 1s forwards;
  }
  .clear-sky-svg .line-1,
  .clear-sky-svg .line-3,
  .clear-sky-svg .line-5,
  .clear-sky-svg .line-7,
  .clear-sky-svg .line-4 {
    stroke-dashoffset: 5;
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }
  .clear-sky-svg .line-2,
  .clear-sky-svg .line-6,
  .clear-sky-svg .line-8 {
    stroke-dashoffset: -5;
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


  @-webkit-keyframes expand {
    to {
      transform: scale(1.1);
    }
  }
  @keyframes expand {
    to {
      transform: scale(1.1);
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

export default function Clear(){
    return (
        <SvgContainer>
            <svg version="1.1" class="clear-sky-svg" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 72.3 52.6" space="preserve">
	<g>
		<path className="sun" d="M50.8,25.7c0,7.9-6.4,14.4-14.4,14.4s-14.4-6.4-14.4-14.4s6.4-14.4,14.4-14.4S50.8,17.8,50.8,25.7z"/>
	<path  className="line big-path line-1" d="M54.5,25.8h6"/>
	<path className="line big-path line-2" d="M12.4,25.8h6"/>
	<path className="line big-path line-3" d="M36.5,44.3v6"/>
	<path className="line big-path line-4" d="M36.5,8.2v-6"/>
	<path className="line big-path line-5" d="M23,38.8l-4.8,4.8"/>
	<path className="line big-path line-6" d="M54.9,8.9L50,13.8"/>
	<path className="line big-path line-7" d="M50,38.8l4.4,4.4"/>
	<path className="line big-path line-8" d="M18.8,9.6l4.2,4.2"/>
	</g>
    </svg>
        </SvgContainer>
    )
}