import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  function handleChangeType(e){
    setFilters({type: e.target.value})
    console.log(e.target.value)
  }

  function handleFindPetsClick(){
    fetch("http://localhost:3001/pets")
    .then(response => response.json())
    .then(data=> handleFilterPets(data))
  }

  function handleFilterPets(animals){
    const results= animals.filter((animal)=>{
      return (
      animal.type === filters.type )
    })
    setPets(results)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
