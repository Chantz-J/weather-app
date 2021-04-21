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

.snow-svg .snowflake {
    transform-origin: 50% 50%;
    transform: translateY(-10px);
    opacity: 0;
  }
  .snow-svg .snowflake:nth-child(1) {
    -webkit-animation: fall-counterclockwise 2392ms ease-in forwards infinite;
            animation: fall-counterclockwise 2392ms ease-in forwards infinite;
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
  }
  .snow-svg .snowflake:nth-child(2) {
    -webkit-animation: fall-clockwise 3613ms ease-in forwards infinite;
            animation: fall-clockwise 3613ms ease-in forwards infinite;
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }
  .snow-svg .snowflake:nth-child(3) {
    -webkit-animation: fall-counterclockwise 3298ms ease-in forwards infinite;
            animation: fall-counterclockwise 3298ms ease-in forwards infinite;
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
  }
  .snow-svg .snowflake:nth-child(4) {
    -webkit-animation: fall-clockwise 3706ms ease-in forwards infinite;
            animation: fall-clockwise 3706ms ease-in forwards infinite;
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
  }
  .snow-svg .snowflake:nth-child(5) {
    -webkit-animation: fall-counterclockwise 3432ms ease-in forwards infinite;
            animation: fall-counterclockwise 3432ms ease-in forwards infinite;
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  .snow-svg .snowflake:nth-child(6) {
    -webkit-animation: fall-clockwise 3881ms ease-in forwards infinite;
            animation: fall-clockwise 3881ms ease-in forwards infinite;
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
  }
  .snow-svg .snowflake:nth-child(7) {
    -webkit-animation: fall-counterclockwise 3826ms ease-in forwards infinite;
            animation: fall-counterclockwise 3826ms ease-in forwards infinite;
    -webkit-animation-delay: 1.4s;
            animation-delay: 1.4s;
  }
  .snow-svg .snowflake:nth-child(8) {
    -webkit-animation: fall-clockwise 2132ms ease-in forwards infinite;
            animation: fall-clockwise 2132ms ease-in forwards infinite;
    -webkit-animation-delay: 2.4s;
            animation-delay: 2.4s;
  }
  .snow-svg .snowflake:nth-child(9) {
    -webkit-animation: fall-counterclockwise 3865ms ease-in forwards infinite;
            animation: fall-counterclockwise 3865ms ease-in forwards infinite;
    -webkit-animation-delay: 2.7s;
            animation-delay: 2.7s;
  }
  .snow-svg .snowflake:nth-child(10) {
    -webkit-animation: fall-clockwise 2313ms ease-in forwards infinite;
            animation: fall-clockwise 2313ms ease-in forwards infinite;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
  .snow-svg .snowflake-path {
    stroke: #BAE2E0;
    stroke-width: 1;
  }


  @-webkit-keyframes fall-clockwise {
    0% {
      transform: translateY(-7px) rotate(0) scale(0.5);
      opacity: 0;
    }
    10% {
      transform: translateY(-4px) translateX(4px) rotate(-30deg) scale(0.7);
      opacity: 1;
    }
    45% {
      transform: translateY(5px) translateX(0px) rotate(30deg) scale(0.6);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(10px) translateX(3px) scale(0.5);
    }
  }
  @keyframes fall-clockwise {
    0% {
      transform: translateY(-7px) rotate(0) scale(0.5);
      opacity: 0;
    }
    10% {
      transform: translateY(-4px) translateX(4px) rotate(-30deg) scale(0.7);
      opacity: 1;
    }
    45% {
      transform: translateY(5px) translateX(0px) rotate(30deg) scale(0.6);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(10px) translateX(3px) scale(0.5);
    }
  }
  @-webkit-keyframes fall-counterclockwise {
    0% {
      transform: translateY(-9px) rotate(0) scale(0.6);
      opacity: 0;
    }
    10% {
      transform: translateY(-4px) translateX(-4px) rotate(30deg) scale(0.7);
      opacity: 1;
    }
    40% {
      transform: translateY(8px) translateX(4px) rotate(-30deg) scale(0.8);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(14px) translateX(-3px) scale(0.7);
    }
  }
  @keyframes fall-counterclockwise {
    0% {
      transform: translateY(-9px) rotate(0) scale(0.6);
      opacity: 0;
    }
    10% {
      transform: translateY(-4px) translateX(-4px) rotate(30deg) scale(0.7);
      opacity: 1;
    }
    40% {
      transform: translateY(8px) translateX(4px) rotate(-30deg) scale(0.8);
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(14px) translateX(-3px) scale(0.7);
    }
  }

`

export default function Snow(){
    return (
        <SvgContainer>
            <svg version="1.1" className="snow-svg" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 70.3 52.6" space="preserve">
<g id="Layer_1">
	<path className="cloud" d="M63.9,30.9c0-5.2-4.2-9.4-9.4-9.4c-0.2,0-0.4,0.1-0.7,0.1c-0.1-0.9-0.2-1.8-0.5-2.7c-0.3-1.1-0.9-2.2-1.5-3.1
		c-2.1-3.2-5.8-5.3-9.9-5.3c-2.5,0-4.8,0.7-6.7,2c-0.6,0.4-1.2,0.9-1.8,1.5c-0.3,0.3-0.5,0.6-0.8,0.8c-0.2,0.3-0.5,0.6-0.7,0.9
		c-1.9-1.3-4.2-2.1-6.7-2.1c-6,0-10.9,4.4-11.8,10.1c-3.8,1.1-6.7,4.3-7.2,8.3h28.7h13.9H63h0.8C63.9,32.1,63.9,31.7,63.9,30.9z"/>
	<g className="snowflake">
		<line className="snowflake-path big-path" x1="10.3" y1="37" x2="10.3" y2="43.5"/>
		<line className="snowflake-path big-path" x1="13.5" y1="40.3" x2="7" y2="40.3"/>
		<g>
			<line className="snowflake-path big-path" x1="12.6" y1="38" x2="8" y2="42.6"/>
			<line className="snowflake-path big-path" x1="12.6" y1="42.6" x2="8" y2="38"/>
		</g>
	</g>
	<g className="snowflake">
		<line className="snowflake-path big-path" x1="22.7" y1="37" x2="22.7" y2="43.5"/>
		<line className="snowflake-path big-path" x1="25.9" y1="40.3" x2="19.4" y2="40.3"/>
		<g>
			<line className="snowflake-path big-path" x1="25" y1="38" x2="20.4" y2="42.6"/>
			<line className="snowflake-path big-path" x1="25" y1="42.6" x2="20.4" y2="38"/>
		</g>
	</g>
	<g className="snowflake">
		<line className="snowflake-path big-path" x1="35.2" y1="37" x2="35.2" y2="43.5"/>
		<line className="snowflake-path big-path" x1="38.4" y1="40.3" x2="31.9" y2="40.3"/>
		<g>
			<line className="snowflake-path big-path" x1="37.5" y1="38" x2="32.9" y2="42.6"/>
			<line className="snowflake-path big-path" x1="37.5" y1="42.6" x2="32.9" y2="38"/>
		</g>
	</g>
	<g className="snowflake">
		<line className="snowflake-path big-path" x1="48.3" y1="37" x2="48.3" y2="43.5"/>
		<line className="snowflake-path big-path" x1="51.6" y1="40.3" x2="45" y2="40.3"/>
		<g>
			<line className="snowflake-path big-path" x1="50.6" y1="38" x2="46" y2="42.6"/>
			<line className="snowflake-path big-path" x1="50.6" y1="42.6" x2="46" y2="38"/>
		</g>
	</g>
	<g class="snowflake">
		<line className="snowflake-path big-path" x1="60.5" y1="37" x2="60.5" y2="43.5"/>
		<line className="snowflake-path big-path" x1="63.7" y1="40.3" x2="57.2" y2="40.3"/>
		<g>
			<line className="snowflake-path big-path" x1="62.8" y1="38" x2="58.2" y2="42.6"/>
			<line className="snowflake-path big-path" x1="62.8" y1="42.6" x2="58.2" y2="38"/>
		</g>
	</g>
    <g class="snowflake">
        <line className="snowflake-path big-path" x1="10.3" y1="37" x2="10.3" y2="43.5"/>
        <line className="snowflake-path big-path" x1="13.5" y1="40.3" x2="7" y2="40.3"/>
        <g>
            <line className="snowflake-path big-path" x1="12.6" y1="38" x2="8" y2="42.6"/>
            <line className="snowflake-path big-path" x1="12.6" y1="42.6" x2="8" y2="38"/>
        </g>
    </g>
    <g className="snowflake">
        <line className="snowflake-path big-path" x1="22.7" y1="37" x2="22.7" y2="43.5"/>
        <line className="snowflake-path big-path" x1="25.9" y1="40.3" x2="19.4" y2="40.3"/>
        <g>
            <line className="snowflake-path big-path" x1="25" y1="38" x2="20.4" y2="42.6"/>
            <line className="snowflake-path big-path" x1="25" y1="42.6" x2="20.4" y2="38"/>
        </g>
    </g>
    <g className="snowflake">
        <line className="snowflake-path big-path" x1="35.2" y1="37" x2="35.2" y2="43.5"/>
        <line className="snowflake-path big-path" x1="38.4" y1="40.3" x2="31.9" y2="40.3"/>
        <g>
            <line className="snowflake-path big-path" x1="37.5" y1="38" x2="32.9" y2="42.6"/>
            <line className="snowflake-path big-path" x1="37.5" y1="42.6" x2="32.9" y2="38"/>
        </g>
    </g>
    <g className="snowflake">
        <line className="snowflake-path big-path" x1="48.3" y1="37" x2="48.3" y2="43.5"/>
        <line className="snowflake-path big-path" x1="51.6" y1="40.3" x2="45" y2="40.3"/>
        <g>
            <line className="snowflake-path big-path" x1="50.6" y1="38" x2="46" y2="42.6"/>
            <line className="snowflake-path big-path" x1="50.6" y1="42.6" x2="46" y2="38"/>
        </g>
    </g>
    <g className="snowflake">
        <line className="snowflake-path big-path" x1="60.5" y1="37" x2="60.5" y2="43.5"/>
        <line className="snowflake-path big-path" x1="63.7" y1="40.3" x2="57.2" y2="40.3"/>
        <g>
            <line className="snowflake-path big-path" x1="62.8" y1="38" x2="58.2" y2="42.6"/>
            <line className="snowflake-path big-path" x1="62.8" y1="42.6" x2="58.2" y2="38"/>
        </g>
    </g>
</g>
</svg>
        </SvgContainer>
    )
}