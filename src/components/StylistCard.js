import React from "react";
import {StylistStyle} from './Styles';

export default function StylistCard({person}) {
  return (
      <StylistStyle>
        <h2>{`${person.first_name} ${person.last_name}`}</h2>
        <img src= {person.avatar} alt="" />
        <p>Email: {person.email}</p>
      </StylistStyle>
    );  
}
