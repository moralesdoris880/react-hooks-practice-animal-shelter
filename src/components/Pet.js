import React,{useState} from "react";

function Pet({pet}) {
  const[isAdopted,setIsAdopted]= useState(false)
  const[classname,setClassName]= useState("ui primary button")
  function handleAdopt(){
    setIsAdopted(true)
    setClassName("ui disabled button")
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={classname} onClick={handleAdopt}>{isAdopted? "Already adopted": "Adopt pet"}</button>
      </div>
    </div>
  );
}

export default Pet;
