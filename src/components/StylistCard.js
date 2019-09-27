import React, {useState} from "react";
import {StylistStyle, StyledFlip} from './Styles';
import ReactCardFlip from 'react-card-flip';


export default function StylistCard({person}) {
  const [isFlipped, setFlipped] = useState(false)

  function onHover(e){
    setFlipped(true)
  }

  function onHoverEnd(e){
    setFlipped(false)
  }
  return (
    <StyledFlip isFlipped={isFlipped} flipDirection="horizontal" onMouseEnter={onHover}>
      <StylistStyle onMouseEnter={onHover} key="front">
        <img onClick={onHover} src= {person.avatar} alt="" />
      </StylistStyle>
      <StylistStyle  onMouseLeave={onHoverEnd} key="back">
        <h2 onClick={onHoverEnd} >{`${person.first_name} ${person.last_name}`}</h2>
        <p>Email: {person.email}</p>
        <button>View Profile</button>
      </StylistStyle>
    </StyledFlip>
    );  
}
