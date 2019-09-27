import React, { useEffect, useState } from "react";
import axios from 'axios';
import StylistCard from './StylistCard';
import SearchPage from './SearchPage';
import {ParentStyle, StyledPage } from './Styles';

const stylistApi = `https://reqres.in/api/users?page=2`;

export default function StylistList() {
 
  const [stylistData, setStylistData] = useState([]);
  const [url, setUrl] = useState(stylistApi);

  function search(formValues, actions){
    const name = formValues.name.toLowerCase();
    
    const newCharacters = stylistData.filter(character => `${character.first_name} ${character.last_name}`.toLowerCase().includes(name))
    setStylistData(newCharacters)
  }

  useEffect(() => {
    axios.get(url)
      .then(res => {
        //console.log(res.data);
        setStylistData(res.data.data);
      })
      .catch(err => {
        //console.log(err);
      })
  }, [url]);

  return (
    <StyledPage>
      <SearchPage onSubmit={search} />
        <ParentStyle>
          {
            stylistData.map(character => <StylistCard key={character.id} person={character} /> )
          }
        </ParentStyle>
    </StyledPage>
  );
}