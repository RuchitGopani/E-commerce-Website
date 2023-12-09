import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

function Circularprogressbar(props) {
    const {score} = props;
  return (
    <CircularProgressbar
    value={score}
    text={`${score}%`}
    circleRatio={0.7}
    styles={{
        trail:{
            strokeLinecap: "butt",
            transform: 'rotate(-126deg)',
            transformOrigin: 'center center'
        },
        path:{
            strokeLinecap: "butt",
            transform: 'rotate(-126deg)',
            transformOrigin: 'center center',
            stroke: 'rgb(45, 62, 186)'
        },
        text:{
            fill: 'rgb(45, 62, 186)',
            fontSize: '1rem',
            transform: 'translateY(1.8rem)'
        }
    }}
     strokeWidth={10}
    />
  )
}

export default Circularprogressbar